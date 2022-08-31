/* 
1
var max:number;
var num1:string | null=prompt("Enter your number1");
var num:number=Number(num1);
var num2:string | null=prompt("Enter your number2");
var nu:number=Number(num2);

if (num<nu){
    max=nu;
}
else if (num>nu){
    max=num;
}
else{
    max==num;
}
console.log("The maximum number is:",max);
var numq:string | null=prompt("whts your first value :");
var numa:number=Number(numq);
var numw:string | null=prompt("whts your first value :");
var numb:number=Number(numw);
var nume:string | null=prompt("whts your first value :");
var numc:number=Number(nume);
....................................................*/
/*
2
var num1a:string | null=prompt("Enter your number1");
var numa:number=Number(num1a);
var num2b:string | null=prompt("Enter your number2");
var numb:number=Number(num2b);
var num3c:string | null=prompt("Enter your number1");
var numc:number=Number(num3c);

if (numa>numb && numa>numc){
    console.log("THE greater is",numa);
}
else if(numb>numa && numb>numc){
    console.log("the greater is",numb);
}
else{
    console.log("The greater is ",numc);
}
.................................*/
/*
3
var check:string | null=prompt("Enter your number : ");
var check1:number=Number(check);
if (check1>0){
    console.log("THe number is positive");
}
else if (check1<0){
    console.log("The number is negative");
}
else{
    console.log("The number is zero");
}
............................................*/
/*4
var clear:string | null=prompt("Enter your number");
var clear1:number=Number(clear);
if (clear1%5==0 && clear1%11==0){
    console.log("It is divisible by 5 and 11");
}
else{
    console.log("It is not divisible by 5 and 11");
}*/
/*5

var evenodd:string | null=prompt("ENTER your number :");
var see:number=Number(evenodd);
if (see%2==0){
    console.log("The number you have enter is even");
}
else {
    console.log("The number you have enter is odd");
}
*/
/*6
var leap:string | null | number=prompt("Enter the year");
var leapyear:number=Number(leap);
if (leapyear%4==0){
    console.log("leap year");
}
else{
    console.log("Not leap year");
}*/
// 7
var chara:string | null=prompt("ENTER something");
var cha:string=String(chara);

if (cha>="a"|| cha>="z"){
    console.log("The character is alphabet");
}
else{
    // var num:number=parseInt(cha);
    console.log(chara,"not alphabet");
}

/*
var kuch:string |null =prompt("ENter your something");
var kuch1:string=String(kuch);
var kuch2:number=Number(kuch);

if(kuch1>='a'|| kuch1>='z'){
    console.log("character");
}
else if(kuch2>=0||kuch2>=100){
    console.log("alphabet");
}
else{
    console.log("special char");
    
}
*/

/*8
var alp:string | null=prompt("Enter your alphabet");
if (alp=="a"||alp=="i"||alp=="o"||alp=="u"||alp=="s"){
    console.log("vowels numbr");
}
else{
    console.log("consonent");
}*/
/*9
var upperlower:string | null=prompt("enter your alphabet");
if(upperlower>="a" || upperlower>="z"){
    console.log("LOwer case");
}
else{
    console.log("upper case");
}*/
/*11
var weeknumbr:string | null=prompt("Enter your weeknumber");
if (weeknumbr==1){
    console.log("moday");
}
else if (weeknumbr==2){
    console.log("tuesday");
}
else if (weeknumbr==3){
    console.log("wednesday");
}
else if (weeknumbr==4){
    console.log("thursday");
}
else if (weeknumbr==5){
    console.log("friday");
}
else if (weeknumbr==6){
    console.log("saturday");
}
else{
    console.log("sunday");
}*/
/*12
var mon:string | null=prompt("Enter your month numbr");
var month:number=Number(mon)
if (month==1 || month==3 || month==5 || month==7 || month==10 || month==12){
    console.log("the total number are 31");
}
else if (month==2){
    console.log("total numbr are 28");
    
}
else{
    console.log("total numbr are 30");
    
}*/
/*19
var sub1:string | null=prompt("Enter your physics numbr");
var phy:number=Number(sub1);
var sub2:string | null=prompt("Enter your chemistry numbr");
var chem:number=Number(sub2);
var sub3:string | null=prompt("Enter your biology numbr");
var bio:number=Number(sub3);
var sub4:string | null=prompt("Enter your math numbr");
var math:number=Number(sub4);
var sub5:string | null=prompt("Enter your computer numbr");
var comp:number=Number(sub5);
var sum:number=phy+chem+bio+math+comp;
var percentage:number=sum/500*100;
if (percentage>=90){
    console.log("Grade A");
}
else if (percentage>=80){
    console.log("Grade A");
}
 else if (percentage>=90){
    console.log("Grade B");
}
else if (percentage>=70){
    console.log("Grade C");
}
else if (percentage>=60){
    console.log("Grade D");
}
else if (percentage>=40){
    console.log("Grade E");
}
else{
    console.log("Grade F");
}
*/
/*
var basi:string| null=prompt("entr yur bsc salary");
var basic:number=Number(basi);
var gross:number;
if(basic<=20000 && basic>=10000){
    gross=basic+(25/100*basic)+(90/100*basic);
}
else if(basic<=10000){
    gross=basic+(20/100*basic)+(80/100*basic);
}
else{
    gross=basic+(30/100*basic)+(95/100*basic);
}
console.log(gross);*/

var bill:string | null=prompt("How much you use your electricity units");
var bil:number=Number(bill);
if (bil<=50){
    bil=bil*0.50;
}
else if(bil<=150 && bil>50){
    bil=bil*0.75;
}
else if(bil<=250 && bil>150){
    bil=bil*1.20;
}
else{
    bil=bil*1.50;
}
bil=20/100*bil;
console.log(bil);

