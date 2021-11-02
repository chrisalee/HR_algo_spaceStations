// Complete the flatlandSpaceStations function below.
// n = number of cities
// c, an array of where space station located
const flatlandSpaceStations = (n, c) => {
  c.sort((a, b) => a - b);
  console.log(c)
  let maxDistance = c[0];
  
  for(let i = 0; i < c.length; i++) {
    let distance = Math.floor((c[i] - c[i - 1]) / 2);
    if(distance > maxDistance) {
      maxDistance = distance;
    }
  }
  
  const lastStationDistance = (n - 1) - (c[c.length - 1]);
  if(lastStationDistance > maxDistance) {
    maxDistance = lastStationDistance;
  }
  
  console.log(maxDistance);
  return maxDistance;
}


////////////////////////////////////////////////////////////
function flatlandSpaceStations(n, c) {
    //find distances inbetween spaceStations
    let distances = []
    c.sort((a,b)=>a-b)
    for (let i = 0; i < c.length-1; i++) {
        const dist = Math.floor(Math.abs(c[i + 1] - c[i]) / 2)
        distances.push(dist)
    }
    //find max distances before and after
    const before = Math.abs(c[0] - 0)
    const after = Math.abs(n - c[c.length - 1])-1
    return Math.max(...distances,before,after)
}
