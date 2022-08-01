/* <p>Create a class named 'Shape' with a method to print "This is shape". Then create two other classes named 'Rectangle', 'Circle' inheriting the Shape class, both having a method to print "This is rectangular shape" and "This is circular shape" respectively. Create a child class 'Square' of 'rectangle' having a method to print "Square is a rectangle". Now call the method of 'Shape' and 'Rectangle' class by the object of 'Square' class.</p> */
class Shape
{
    constructor(arg1)
    {
        this.arg1="this is a shape";
    }
    print1()
    {
        console.log(this.arg1);

    }
}
class Rectangle extends Shape
{
    constructor(arg1,arg2)
    {
        super(arg1);
        this.arg2="this is a rectangular shape"
    }
    print2()
    {
        console.log(this.arg2);

    }
}
class Circle extends Shape
{
    constructor(arg1,arg2,arg3)
    {
        super(arg1,arg2);
        this.arg3="this is a circular shape"
    }
    print3()
    {
        console.log(this.arg3);

    }
}
class Square extends Rectangle
{
    constructor(arg1,arg2,arg3,arg4)
    {
        super(arg1,arg2,arg3);
        this.arg4="Square is a rectangle"
    }
    print4()
    {
        
        super.print1();
        super.print2();
        // super.print3();
        console.log(this.arg4);
    }
}
let obj=new Square();
obj.print4();