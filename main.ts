//Write a function called describe_city() that accepts the name of a city and its country. 

function describe_city(city: string,country: string = "pakistan"){
console.log(`${city} is in ${country}`);
}

describe_city("karachi")
describe_city("lahore")
describe_city("tokyo" , "japan")