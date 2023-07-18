let a=['Radha',22,'M'];
var employee={
    Name:'',age:null,gender:''
}
var i=0;
for(key in employee)
    {
        employee[key]=a[i];
        i++;
    }
console.log(employee)