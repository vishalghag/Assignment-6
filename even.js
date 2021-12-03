// Q1. Write a program that prints even numbers from 1 to 100 in descending order the output should show: 100 98 96 . . . 2 

let a = 1;
for(let i = 100; i>=a; i--)
{
    if(i%2==0)
    {
        console.log("The Even number in Ascending Order are %d", i);
    }
}


    