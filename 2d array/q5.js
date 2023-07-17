const a=['assignment','problem','media','upload'];
var b=[];
for(let i=0;i<a.length;i++)
    {
    var j=a[i].length-1;
    if(a[i][0]=='a' || a[i][j]=='a')
        b.push(a[i]);
    }
console.log(b);