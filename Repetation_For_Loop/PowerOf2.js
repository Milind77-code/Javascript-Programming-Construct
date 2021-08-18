var readlineSync = require('readline-sync');
var num = readlineSync.question('Enter Number ? \n');
var temp=1;
for(var i=2;i<num;i++)
{
    temp=temp*num;
}
console.log("2's Power of Number "+num+" is "+temp);