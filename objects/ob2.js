var a='edstem';
var b={};
var count=0;
for(let i=0;i<a.length;i++)
    {
    count=0;
    for(let j=0;j<a.length;j++)
        { 
        if(a[i]==a[j]) 
            count++;
        }
    b[a[i]]=count;
    }
console.log(b);