// Write a function to accept a number as parameter and return false or true based on weather the number is prime or not. A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.**

function test(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

console.log(test(37));
