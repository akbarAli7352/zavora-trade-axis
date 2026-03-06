const fs=require('fs');
const d3=require('d3-geo');
const geojson=JSON.parse(fs.readFileSync('world.geojson'));
const projection=d3.geoEquirectangular().scale(153).translate([480,250]);
const path=d3.geoPath().projection(projection);
let svg = '<svg viewBox="0 0 960 500" xmlns="http://www.w3.org/2000/svg">\n';
geojson.features.forEach(f=>{
 svg += `<path id="${f.id || f.properties.iso_a3 || f.properties.name}" d="${path(f)}"/>\n`;
});
svg += '</svg>';
fs.writeFileSync('world.svg', svg);
console.log('world.svg generated');
