"use client";
import { useEffect, useState } from 'react';

// ISO A3 codes for African countries (based on geojson list + manual filtering)
const AFRICA_ISO = new Set([
  'AGO','BDI','BEN','BFA','BWA','CAF','CIV','CMR','COD','COG','DJI','DZA','EGY','ERI','ESH',
  'ETH','GAB','GHA','GIN','GMB','GNB','GNQ','KEN','LBR','LBY','LSO','MAR','MDG','MLI','MOZ',
  'MRT','MWI','NAM','NER','NGA','RWA','SEN','SLE','SOM','SWZ','TCD','TGO','TUN','TZA','UGA',
  'ZAF','ZMB','ZWE',
]);

interface MarketMapSectionProps {
  // additional target markets may be highlighted using ISO codes
  highlight?: string[];
}

export default function MarketMapSection({ highlight = [] }: MarketMapSectionProps) {
  const [svgContent, setSvgContent] = useState<string>('');

  useEffect(() => {
    fetch('/world.svg')
      .then((res) => res.text())
      .then((raw) => {
        // parse and color the svg
        const parser = new DOMParser();
        const doc = parser.parseFromString(raw, 'image/svg+xml');
        // make responsive
        const svgEl = doc.documentElement;
        svgEl.setAttribute('width', '100%');
        svgEl.removeAttribute('height');
        svgEl.setAttribute('preserveAspectRatio', 'xMidYMid meet');

        const paths = doc.querySelectorAll('path');
        paths.forEach((path) => {
          const id = path.getAttribute('id');
          if (!id) return;
          if (AFRICA_ISO.has(id)) {
            path.setAttribute('fill', '#D4AF37'); // gold for Africa
          } else if (highlight.includes(id)) {
            path.setAttribute('fill', '#0052cc'); // blue for other highlights
          } else {
            path.setAttribute('fill', '#ccc');
          }
          // make sure stroke is subtle
          path.setAttribute('stroke', '#999');
        });
        setSvgContent(doc.documentElement.outerHTML);
      });
  }, [highlight]);

  return (
    <section className="py-24 px-4 bg-[#0A0F1B] text-white">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:items-center lg:space-x-12">
        {/* text panel */}
        <div className="lg:w-1/2">
          <p className="text-sm font-semibold uppercase text-yellow-500 mb-2">
            Global Reach
          </p>
          <h2 className="text-4xl font-bold mb-6">
            Target Export Markets
          </h2>
          <p className="text-lg leading-relaxed">
            Our active export corridors span four strategic regions, supported by
            established trade relationships and logistics networks.
          </p>
          <ul className="mt-8 space-y-6">
            <li>
              <h3 className="font-semibold">Taiwan</h3>
              <p className="text-sm text-gray-300">
                Technology &amp; precision markets
              </p>
            </li>
            <li>
              <h3 className="font-semibold">Central Asia</h3>
              <p className="text-sm text-gray-300">
                Kazakhstan, Uzbekistan, Kyrgyzstan, Tajikistan, Turkmenistan
              </p>
            </li>
            <li>
              <h3 className="font-semibold">Africa</h3>
              <p className="text-sm text-gray-300">54‑nation high‑growth market</p>
            </li>
            <li>
              <h3 className="font-semibold">Middle East</h3>
              <p className="text-sm text-gray-300">GCC &amp; wider MENA region</p>
            </li>
          </ul>
        </div>

        {/* map panel */}
        <div className="mt-12 lg:mt-0 lg:w-1/2">
          {svgContent ? (
            <div
              className="w-full h-auto"
              dangerouslySetInnerHTML={{ __html: svgContent }}
            />
          ) : (
            <div className="text-center">Loading map…</div>
          )}
        </div>
      </div>

      {/* legend */}
      <div className="mt-12 flex justify-center space-x-12 text-sm">
        <div className="flex items-center">
          <span className="w-3 h-3" style={{backgroundColor: '#0052cc'}}></span>
          <span className="ml-2">India (Source)</span>
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3" style={{backgroundColor: '#D4AF37'}}></span>
          <span className="ml-2">Target Export Markets</span>
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 bg-gray-400 mr-2 inline-block"></span>
          Other Regions
        </div>
      </div>
    </section>
  );
}
