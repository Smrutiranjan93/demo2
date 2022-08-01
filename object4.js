/* <p>Write a program that would print the information (name, year of joining, address) of three employees by creating a class named 'Employee' and inside the class there is a function print_details printing all the details of the employee .The output should be as follows (Note that you don't have to print it in the same way)
Name        Year of joining        Address
Robert            1994                64C- WallsStreat
Sam                2000                68D- WallsStreat
John                1999                26B- WallsStreat</p> */
class Employee
{
    constructor(name,yoj,address)
    {
        this.name=name;
        this.yoj=yoj;
        this.address=address;
    }
    print_details()
    {
        console.log(this.name);
        console.log(this.yoj);
        console.log(this.address);

    }
}
var obj1=new Employee("Robert",1994,"64C-wallsStreat");
obj1.print_details();
var obj2=new Employee("Sam",2000,"68D- WallsStreat");
obj2.print_details();
var obj3=new Employee("John",1999,"26B- WallsStreat");
obj3.print_details();
