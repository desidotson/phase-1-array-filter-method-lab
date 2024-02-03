function findMatching(drivers, string) {
   const results = drivers.filter((driver) => driver.toLowerCase() === string.toLowerCase())
   return results;
}
//console.log(findMatching(drivers, 'Susan'));

function fuzzyMatch(drivers, string) {
    return drivers.filter((driver) => driver.startsWith(string));
}

const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function matchName(drivers, string) {
     return drivers.filter((drivers) => drivers.name === string);
}
console.log(matchName(drivers, 'Annette'));