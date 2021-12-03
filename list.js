// Q2: Write a function which accepts list of country names as parameter and returns the longest country name as output.

// let arr = ["India", "France", "United States of America"];

// arr.length

function Longest_Country_Name(country_name)
  {
  return country_name.reduce(function(lname, country) 
  {
    return lname.length > country.length ? lname : country;
  }, 
"");
}
console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]));