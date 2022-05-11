/*
//chapter 35-38
//question 1
function dateandtime(){
	var a = new Date()
	alert(a)
}
dateandtime()
//question 2
var a = prompt("Enter your First Name")
var b = prompt("Enter your last Name")
Name(a,b)
 function Name(a,b){
 	document.write("Hello "+a+" "+b)
 }
 
 //question 3
 var a = +prompt("Enter first number")
var b = +prompt("Enter last number")
document.write(Add(a,b))
 function Add(a,b){
 	return a+b;
 }
 
 //question 4
 var a = +prompt("Enter first number")
var b = +prompt("Enter last number")
var c = prompt("Enter Character")
document.write(Calculator(a,b,c))
function Calculator(a,b,c){
	if (c=="+") {
		return a+b
	}
	else if (c=="-") {
		return a-b
	}
	else if (c=="/") {
		return a/b
	}
	else if (c=="%") {
		return a%b
	}
}
//question 5
 var a = +prompt("Enter number")
Square(a)
 function Square(a){
 	document.write(Math.pow(a,2))
 }
 
 //question 6
 var a = +prompt("Enter number")
 document.write(Factorial(a))
 function Factorial(n) { 
            if (n === 0) {  
                return 1;  
            } 
            else {  
                return n * Factorial( n - 1 );  
            } 
 }
 
 //questionn 7
 var a = +prompt("Enter first number")
var b = +prompt("Enter last number")
Counting(a,b)
function Counting(a,b){
	for (var i = a; i <= b; i++){
		document.write(i+"<br>")
	}
}
//question 8 
function hypotenuse(a, b) {
               function square(x) { return x*x; }
               return Math.sqrt(square(a) + square(b));
}
document.write(hypotenuse(1,2))
//question 9
var a = +prompt("Enter width")
var b = +prompt("Enter height")
function CalculatesArea(w,h){
	document.write("<br>Area of Rectangle : "+(w*h))
}
CalculatesArea(a,b)
CalculatesArea(8,4)
//question 10
function palindrome(str){
	var splitString = str.split("");
	var reverseArray = splitString.reverse();
	var joinArray = reverseArray.join("");
	if (str == joinArray){
		document.write("String is palindrome")
	}
	else{
		document.write("String is not palindrome")
	}
}
palindrome("mad")
palindrome("madam")
//question 11
var a ="the quick brown fox";
UppperCase(a);
function UppperCase(str){
	document.write("Example String : " +str+"<br>")
	x=str.slice(0,1)
	y=x.toUpperCase()
	var sttr= str.split('')
	for (var i = 0; i < sttr.length; i++) {
		if (sttr[i] == ' '){
			j=i+1
			k=sttr[j].toUpperCase()
			sttr[j]=k
		}
	}
	sttr[0]=y
	var abc =sttr.join("")
	document.write("Expected Output : "+abc)
}
//question 12
var a="Web Development Tutorial"
LongestWord(a)
function LongestWord(str){
	var ar =str.split('')
	var b =1
	var arr=[0]
	var word=[]
	var count =[]
	for (var i = 0; i < ar.length; i++) {
		if (ar[i] == ' ') {
			arr[b]=i
			b+=1
		}
	}
	arr[b]=ar.length
	b=0
	//document.write(arr)
	for (var i = 0; i < arr.length-1; i++) {
		j=i+1
		word[b]=str.slice(arr[i],arr[j])
		b=b+1
	}
	b=0
	//document.write("<br>"+word)
	for (var i = 0; i < word.length; i++) {
		if (b ==0){
		count[b]=word[b].length
		b=b+1
	}
	else{
		count[b]=word[b].length-1
		b=b+1
	}
	}
	//document.write("<br>"+count)
	var max =Math.max(...count)
	//document.write(" <br>"+max)
	var ind =count.indexOf(max)
	document.write("EXAMPLE STRING : "+str)
	document.write("<br>EXPECTED OUTPUT : "+word[ind])
}
//question 13
function Occurrences(a,b){
	a=a.toLowerCase()
	var ar= a.split('')
	var count =0
	for (var i = 0; i < ar.length; i++) {
		if (ar[i]==b) {
			count+=1
		}
	}
	document.write("Occurrences of letter "+b+" is : "+count)
}
Occurrences("JSResourceS.com","o")
//question 14
function calcCircumference(r){
	var a = Math.PI
	var circum = 2*a*r
	document.write("The circumference is : "+circum+"<br>")
}
function calcArea(r){
	var a = Math.PI
	ra =Math.pow(r,2)
	var area =a*ra
	document.write("The area is : "+area)
}
calcCircumference(2)
calcArea(2)
*/
/*
//chapter no 38 - 42
// question 1
const power = (a,b) => Math.pow(a,b)
console.log(power(8,2))
//question 2
const checkleap = (year) =>{
    if(year%4===0){
        console.log(`${year} is leap year`)
    }
    else{
        console.log(`${year } is not leap year`)
    }
}
checkleap(2017)
//question 3
const s = (x,y,z) => (x+y+z)/2
const Area = (a,b,c) => {
    sa = s(a,b,c)
    return Math.sqrt(sa*(sa-a)*(sa-b)*(sa-c))
}
console.log(Area(3,4,5))
//question 4
const avrg = (a,b,c) => (a+b+c)/3
const percentage = (a,b,c) => (((a+b+c)*100)/300)
const main = (a,b,c) =>{
    console.log(`Your averga marks are ${avrg(a,b,c)} 
Your Percentage is ${percentage(a,b,c)}%`)
}
main(70,80,90)
//question 5
const findindexof = (str,letter) =>{
    count=0
    for(i=1;i<=str.length;i++){
       if(letter===str.slice(i-1,i)){
           return i
       }
    }
    return `letter not in the string`
}
str="abcdef"
console.log(findindexof(str,"a"))
//question 6
str ="vowels"
//console.log(str.replace("c",""))
const replacevowel = (str) =>{
    if(str.length>25){
        console.log(`Sorry string length length is greater then 25`)
    }
    for (i of str){
        if(i==="a" || i==="e" || i==="i" || i==="o" || i==="u"){
            str=str.replace(i,"")
        }
    }
    console.log(str)
}
replacevowel(str)
//question 7
const occurence = (str) =>{
    document.write(str+"<br>")
    document.write("Such occurrence are ")
    for(i=0;i<str.length-1;i++){
        x=str.slice(i,i+2)
        if(x==="aa" || x==="ae" || x==="ai" || x==="ao" || x==="au" || x==="ea" || x==="ee" || x==="ei" || x==="eo" || x==="eu" || x==="ia" || x==="ie" || x==="ii" || x==="io" || x==="iu" || x==="oa" || x==="oe" || x==="oi" || x==="oo" || x==="ou" || x==="ua" || x==="ue" || x==="ui" || x==="uo" || x==="uu"){
            document.write(x+" ,")
        }
    }
}
occurence("Pleases read this application and give me gratuity")
//question 8
km = prompt("Please enter the distance in km")
 const m = (km) => km*1000
 const feet = (km) => km*3280.84
 const inch = (km) => km*39370.1
 const cm = (km) => km*100000
 document.write(m(km)+"<br>")
 document.write(feet(km)+"<br>")
 document.write(inch(km)+"<br>")
 document.write(cm(km)+"<br>")
 */
 //question 
amount=prompt("Enter amount to withdraw")
const cashier = (amount) =>{
    a=amount%100
    hndr=amount-a
    hndr=hndr/100
    ten=a%50
    fifty=a-ten
    fifty=fifty/50
    ten=ten/10
    document.write(`you will have ${hndr} hundred notes ${fifty} fifty notes ${ten} Ten notes`)
}
cashier(amount)