const fs=require('fs');
const geo=JSON.parse(fs.readFileSync('world.geojson'));
const afr=geo.features.filter(f=>f.properties.CONTINENT==='Africa').map(f=>f.properties.ISO_A3).sort();
console.log(JSON.stringify(afr));
