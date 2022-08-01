/* <p>Create a class "PARENT" with a method that prints "This is parent class" and its Child class "CHILD" with a method that prints "This is child class". Now, create an object for each of the class and call
1 - method of parent class by object of parent class
2 - method of child class by object of child class
3 - method of parent class by object of child class</p> */
class PARENT
{
    constructor(parent)
    {
        this.parent="this is a parent class";
    }
    print1()
    {
        console.log(this.parent);
    }
}
class CHILD extends PARENT
{
    constructor(parent,child)
    {
        super(parent);
        this.child="this is a child class";

    }
    print2()
    {
        console.log(this.child);
    }

}
let obj1=new PARENT();
obj1.print1();
let obj2=new CHILD();
obj2.print2();
obj2.print1();
