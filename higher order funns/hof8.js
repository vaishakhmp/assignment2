const a=["edstem","tech"];
var b=a.reduce(function(ac,e)
{
   return ac+'_'+e
})
console.log(b)