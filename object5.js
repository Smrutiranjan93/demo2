/* <p>Write a program by creating an 'Employee' class having the following methods and print the final salary.
1 - 'getInfo()' which takes the salary, number of hours of work per day of employee as parameter
2 - 'AddSal()' which adds 10 to salary of the employee if it is less than 500.
3 - 'AddWork()' which adds 5 to salary of employee if the number of hours of work per day is more than 6 hours.
</p> */
class Employee
{
    getInfo(salary,hours,)
    {
       var salary1=this.AddSal(salary);
    //    console.log(salary1);
       var salary2=this.AddWork(salary,hours)
       console.log(salary2);
    }
    AddSal(salary)
    {
        if(salary<500)
        return salary+10;
    }
    AddWork(salary,hours)
    {
        if(hours>6)
        {
            return salary+5;
        }
        else {
            return salary+10;  
        }
    }
}
var obj=new Employee();
obj.getInfo(600,2);