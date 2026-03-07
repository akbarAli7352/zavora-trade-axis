"use client";
import { useEffect, useState, useRef } from 'react';

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
  const mapRef = useRef<HTMLDivElement | null>(null);

  // fetch & colour SVG (no listeners yet)
  useEffect(() => {
    fetch('/world.svg')
      .then((res) => res.text())
      .then((raw) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(raw, 'image/svg+xml');
        const svgEl = doc.documentElement;
        svgEl.setAttribute('width', '100%');
        svgEl.removeAttribute('height');
        svgEl.setAttribute('preserveAspectRatio', 'xMidYMid meet');

        const paths = doc.querySelectorAll('path');
        paths.forEach((path) => {
          const id = path.getAttribute('id');
          if (!id) return;

          if (AFRICA_ISO.has(id)) {
            path.setAttribute('fill', 'rgb(212 175 55)');
          } else if (highlight.includes(id)) {
            path.setAttribute('fill', 'rgb(27 45 107)');
          } else {
            path.setAttribute('fill', '#ccc');
          }
          path.setAttribute('stroke', '#999');
          path.setAttribute('style', 'cursor:pointer;');
        });
        setSvgContent(doc.documentElement.outerHTML);
      });
  }, [highlight]);

  // attach interactivity after svgContent rendered
  useEffect(() => {
    if (!mapRef.current) return;
    const container = mapRef.current;

    // place marker for source India
    const svgEl = container.querySelector('svg');
    if (svgEl) {
      const india = svgEl.querySelector('path#IND');
      if (india) {
        try {
          const bbox = (india as SVGPathElement).getBBox();
          const circle = document.createElementNS('http://www.w3.org/2000/svg','circle');
          circle.setAttribute('cx', (bbox.x + bbox.width/3).toString());
          circle.setAttribute('cy', (bbox.y + bbox.height/2).toString());
          circle.setAttribute('r', '5');
          circle.setAttribute('fill', '#FFD700');
          circle.setAttribute('stroke', '#000');
          circle.setAttribute('stroke-width', '0.5');
          svgEl.appendChild(circle);
        } catch {
          // getBBox may fail if SVG not rendered; ignore
        }
      }
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as SVGPathElement;
      if (target && target.tagName === 'path') {
        target.setAttribute('opacity', '0.7');
      }
    };
    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as SVGPathElement;
      if (target && target.tagName === 'path') {
        target.setAttribute('opacity', '1');
      }
    };
    const handleClick = (e: MouseEvent) => {
      const target = e.target as SVGPathElement;
      if (target && target.tagName === 'path') {
        const id = target.getAttribute('id');
        if (id) alert(`Region clicked: ${id}`);
      }
    };

    container.addEventListener('mouseover', handleMouseOver);
    container.addEventListener('mouseout', handleMouseOut);
    container.addEventListener('click', handleClick);

    return () => {
      container.removeEventListener('mouseover', handleMouseOver);
      container.removeEventListener('mouseout', handleMouseOut);
      container.removeEventListener('click', handleClick);
    };
  }, [svgContent]);

  return (
    <section className="py-24 px-4 md:px-20 bg-[#0B1120] text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:space-x-16">
        {/* text panel */}
        <div className="lg:w-2/5">
          <p className="text-sm font-semibold uppercase text-yellow-500 mb-2">
            Global Reach
          </p>
          <h2 className="text-4xl font-bold mb-6">
            Target Export Markets
          </h2>
          <p className="text-white/60 text-sm font-body leading-relaxed mb-8">
            Our active export corridors span four strategic regions, supported by
            established trade relationships and logistics networks.
          </p>
          <ul className="mt-8 space-y-6">
            <li className='border-l-2 pl-2.5 border-secondary'>
              <h3 className="font-semibold">Taiwan</h3>
              <p className="text-white/50 text-xs font-body">
                Technology &amp; precision markets
              </p>
            </li>
            <li className='border-l-2 pl-2.5 border-secondary'>
              <h3 className="font-semibold">Central Asia</h3>
              <p className="text-white/50 text-xs font-body">
                Kazakhstan, Uzbekistan, Kyrgyzstan, Tajikistan, Turkmenistan
              </p>
            </li>
            <li className='border-l-2 pl-2.5 border-secondary'>
              <h3 className="font-semibold">Africa</h3>
              <p className="text-white/50 text-xs font-body">54‑nation high‑growth market</p>
            </li>
            <li className='border-l-2 pl-2.5 border-secondary'>
              <h3 className="font-semibold">Middle East</h3>
              <p className="text-white/50 text-xs font-body">GCC &amp; wider MENA region</p>
            </li>
          </ul>
        </div>

        {/* map panel */}
        <div className="mt-12 lg:mt-0 lg:w-4/5">
          {svgContent ? (
            <div
              ref={mapRef}
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
        <div className="flex items-center text-gray-400">
          <span className="w-4 h-4 rounded" style={{backgroundColor: 'rgb(27 45 107)'}}></span>
          <span className="ml-2">India (Source)</span>
        </div>
        <div className="flex items-center text-gray-400">
          <span className="w-4 h-4 rounded" style={{backgroundColor: 'rgb(212 175 55)'}}></span>
          <span className="ml-2">Target Export Markets</span>
        </div>
        <div className="flex items-center text-gray-400">
          <span className="w-4 h-4 rounded bg-gray-400 mr-2 inline-block"></span>
          Other Regions
        </div>
      </div>
    </section>
  );
}
