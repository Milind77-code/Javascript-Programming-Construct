function SumIsZero(inputArray, size)
{
    var found = false;
 
    for (var i = 0; i < size - 1; i++)
    { 
        var s = new Set();
        for (var j = i+1; j <size; j++)
        {
            var x = -(inputArray[i] + inputArray[j]);
            if (s.has(x))
            {
                console.log( x + " " + inputArray[i] + " " + inputArray[j] + "\n");
                found = true;
            }
            else
                s.add(inputArray[j]);
        }
    }
 
    if (found == false)
        console.log(" No 3 elements sum is zero" );
}
console.log("-> Sum Of 3 Integer adds to Zero :- " );
var InputArray = [0, -1, 2, -3, 1];
console.log( );
var size = InputArray.length;
SumIsZero(InputArray,size);