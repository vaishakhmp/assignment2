const a='Coding is Easy.';
var c=0;
for(let i=0;i<a.length;i++)
    {
    if(a[i]==' '||a[i]=='.')
        c++;    
    }
console.log('Total words:',c);