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

// function findMatching(drivers,name){
//     return drivers.filter(function(theDriver){
//         return theDriver.toLowerCase() === name.toLowerCase()
//     })
// }

//const findMatching = (drivers,name) => {return drivers.filter (function(theDriver){return theDriver.toLowerCase() === name.toLowerCase()})}
const findMatching = (drivers,name) => {return drivers.filter(theDriver => theDriver.toLowerCase() === name.toLowerCase())}

// function fuzzyMatch(drivers,name){
//     return drivers.filter(function(theDriver){
//         return theDriver[0].toLowerCase().indexOf(name[0].toLowerCase()) !== -1
//     })
// }

// const fuzzyMatch = (drivers,name) => {return drivers.filter(function(theDriver){return theDriver[0].toLowerCase().indexOf(name[0].toLowerCase())}

//const fuzzyMatch = (drivers,name) => {return drivers.filter(function (theDriver){return theDriver[0].toLowerCase() === name[0].toLowerCase()})}
const fuzzyMatch = (drivers,name) => {return drivers.filter(theDriver => theDriver[0].toLowerCase() === name[0].toLowerCase())}

// function matchName(drivers,name){
//     return drivers.filter(function(theDriver){
//         return theDriver.name === name;
//     })
// }

//const matchName = (drivers, name) => {return drivers.filter(function(theDriver){return theDriver.name === name})}
const matchName = (drivers,name) => { return drivers.filter(theDriver => theDriver.name === name)}