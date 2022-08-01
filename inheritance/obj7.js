/* <p>Create a class named 'Member' having the following members:
Data Attributes of Member Class
1 - Name
2 - Age
3 - Phone number
4 - Address
5 - Salary
It also has a method named 'printSalary' which prints the salary of the members.
Two classes 'Employee' and 'Manager' inherits the 'Member' class. The 'Employee' and 'Manager' classes have attributes 'specialization' and 'department' respectively. Now, assign name, age, phone number, address and salary to an employee and a manager by making an object of both of these classes and print the same</p> */
class Member
{
    constructor(name,age,phno,address,salary,specialization,department)
    {
        this.name=name;
        this.age=age;
        this.phno=phno;
        this.address=address;
        this.salary=salary;
        this.specialization=this.specialization;
        this.department=this.department;

    }   
        printSalary()
        {
            console.log(this.name);
            console.log(this.age);
            console.log(this.phno);
            console.log(this.address);
            console.log(this.salary);
            console.log(this.specialization);
            console.log(this.department);

        }
    
}
class Employee extends Member
{
    constructor(name,age,phno,address,salary,specialization)
    {
        super(name,age,phno,address,salary);
        this.specialization=specialization;
    }
}
class Manager extends Member
{
    constructor(name,age,phno,address,salary,department)
    {
        super(name,age,phno,address,salary);
        this.department=department;
    }
}
let obj1=new Employee("employee",22,8917288085,"address",200000,"math")
obj1.printSalary();
let obj2=new Manager("manager",23,9658812877,"address",300000,"physics")
obj2.printSalary();