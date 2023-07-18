const e='den';
const f='end';
var a=e.split("").sort().join("");
var b=f.split("").sort().join("");
var c={};
var d={};
var count=0;
for(let i=0;i<a.length;i++)
    {
    count=0;
    for(let j=0;j<a.length;j++)
        { 
        if(a[i]==a[j]) 
            count++;
        }
    c[a[i]]=count;
    }
console.log(c)
for(let i=0;i<b.length;i++)
    {
    count=0;
    for(let j=0;j<b.length;j++)
        { 
        if(b[i]==b[j]) 
            count++;
        }
    d[b[i]]=count;
    }
console.log(d);
console.log(JSON.stringify(c) === JSON.stringify(d));