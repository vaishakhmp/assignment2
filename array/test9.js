const a=['react','array','edstm'];
const str='edstem';
f=true;
for(let i=0;i<a.length;i++)
    {
    if(a[i].length==str.length)
        {
        for(let j=0;j<str.length;j++)
            if(a[i][j]!=str[j])
                f=false;
            else
                f=true;
        }
    else
        f=false;
    }
console.log(f)