// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(drivers,name){
    return drivers.filter(x => x.toUpperCase().includes(name.toUpperCase()))
  }   

findMatching(drivers,'Bobby');
findMatching(drivers,'Sally');

function fuzzyMatch(drivers, name){
    return drivers.filter(x => x.startsWith(name))
}

fuzzyMatch(drivers, "Sa");

const driver = [
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

  function matchName(driver, name){
    return driver.filter(x => x.name.toUpperCase().includes(name.toUpperCase()))
}

matchName(driver, 'Bobby');