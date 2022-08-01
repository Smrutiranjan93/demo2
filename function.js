/* <p>Write a program to print the area and perimeter of a triangle object having sides of 3, 4 and 5 units by creating a class named 'Triangle' and having two functions calculate_area and calculate_perimeter and  constructors(default- all sides as 0 and parameterized constructor where you assign (3,4,5)) .</p> */
class Triangle
{
    constructor(l=0,b=0,h=0)
    {
        this.length=l;
        this.breadth=b;
        this.height=h;

    }
    calculate_area()
    {
        this.area=0.5*this.length*this.breadth*this.height;
        console.log(this.area);

    }
    calculate_perimeter()
    {
       this.peri=this.length+this.breadth+this.height ;
       console.log(this.peri);

    }
    // print_details()
    // {
    //     console.log(this.area);
    //     console.log(this.peri);

    // }

}
let obj=new Triangle(3,4,5);
obj. calculate_area();
obj.calculate_perimeter();