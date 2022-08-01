/* <p>Write a program to create a class count_objects and calculate the number of objects that has been created in realtime.</p> */
class count_objects
{
    static counter=0;
    constructor()
    {
        count_objects.counter=count_objects.counter+1;

    }
}
var obj1=new count_objects();
var obj2=new count_objects();
var obj3=new count_objects();
var obj4=new count_objects();
console.log(count_objects.counter)