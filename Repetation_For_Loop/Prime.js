const isPrime=num=>{
    for(let i=2;i<num;i++)
    if(num%i===0) return false;
    return num>1;
}
var checkPrime =isPrime(101);
if(checkPrime)
{
    console.log("-> Number is Prime Number");
}
else
{
    console.log("-> Number is not Prime Number");
}