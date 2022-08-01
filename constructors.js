{/* <p>Create a class named 'Student' with String variable 'name' and integer variable 'roll_no'. Use Constructors to Assign the value of roll_no as '2' and that of name as "John" by creating an object of the class Student.</p> */}
class Student
{
    constructor(name,roll_no)
    {
        console.log(this.name=name);
        console.log(this.roll_no=roll_no);
    }
    
}
let obj=new Student("john",2);