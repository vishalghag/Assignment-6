// Write a function which accept a number and reverse a number as output. For Example n = 83343; Output : 34338
function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(Number(reverse_a_number(32243)));

