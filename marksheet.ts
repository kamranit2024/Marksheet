// create a marksheet this code calculate percentages of 05 dubject

/*let Total_Marks : number = 500
let Student_Name : string = "Muhammad Kamran"
let Roll_No : number = 351066;
let clas : string = "10th";
let math : number = 80
let urdu : number = 75
let physics : number = 65
let English : number = 76
let chemistry : number =85
let obtained_Marks = (math+urdu+physics+English+chemistry) / Total_Marks * 100 ;
let finalStatment = Student_Name +" "+ Roll_No +" " + "obtained This percentage:" + obtained_Marks +"%";
console.log(finalStatment)*/


// create a marksheet this code calculate obtained marks and percentages of 05 dubject

let Total_Marks : number = 500
let Student_Name : string = "Muhammad Kamran"
let Roll_No : number = 351066;
let clas : string = "10th";
let math : number = 59
let urdu : number = 65
let physics : number = 60
let English : number = 75
let chemistry : number =79
let obtained_Marks = math+urdu+physics+English+chemistry
let percentage = obtained_Marks/Total_Marks*100
let finalStatment = Student_Name +" "+ Roll_No +" " + "obtained This Marks :"
console.log(finalStatment, obtained_Marks , "And Percentage is :" + " " + percentage + " " +`%` )
if (percentage >= 80 && percentage <= 100 )
{
    console.log(`your Grade is "A 1"`);
}
 else if (percentage >= 70 && percentage < 80 )
  {
     console.log(`your Grade is "A"`);
 }
 if (percentage >= 60 && percentage < 70)
{
    console.log(`your Grade is "B"`);
}
 else if (percentage >= 50 && percentage < 60 )
  {
     console.log(`your Grade is "C"`);
 }
 if (percentage >= 40 && percentage < 50 )
{
    console.log(`your Grade is "D"`);
}
 else if (percentage >= 33 && percentage < 40)
 {
     console.log(`your Grade is "E"`);
 }
   else if  (percentage >= 32 && percentage < 32 )
 {
     console.log(`your Grade is "F"`);
 }
  
 
  


