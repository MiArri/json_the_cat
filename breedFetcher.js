const request = require('request');

const inputFrom =  process.argv.slice(2);
let searchBreed = inputFrom[0];
searchBreed = searchBreed.slice(0, 3);
console.log(searchBreed);

request(`https://api.thecatapi.com/v1/breeds/search?q=${searchBreed}`, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred

  const data = JSON.parse(body);
  // console.log("data", data);
  // console.log(typeof body);

  console.log("first breed:", data[0].description);
});