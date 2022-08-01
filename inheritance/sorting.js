/* <p>Write a Program to create a Class Employee
It contains two attributes Name, Salary
Create 5 objects and initialize any random values for Name and Salary to it.
Store all these objects in an Array and print the names of the employees sorted in Descending Order of Salary using any of the sorting mechanism.
(bubble Sort, Insertion Sort or selection Sort). </p> */
class Employee
{
    constructor(name,salary)
    {
        this.name=name;
        this.salary=salary;
    }
   
}
let obj1=new Employee("smruti",20);
let obj2=new Employee("ranjan",30);
let obj3=new Employee("rout",25);
let obj4=new Employee("monu",26);
let obj5=new Employee("munu",15);
var obj=[obj1,obj2,obj3,obj4,obj5];
// console.log(obj);
for(var i=0;i<obj.length-1;i++)
{
    var counter=0;
    for(var j=0;j<obj.length-1-i;j++)
    {
        if(obj[j+1].salary>obj[j].salary)
        {
            var temp=obj[j];
            obj[j]=obj[j+1];
            obj[j+1]=temp;
            counter=counter+1;
        }

    }
}
console.log(obj[0].name);
console.log(obj[1].name);
console.log(obj[2].name);
console.log(obj[3].name);
console.log(obj[4].name);