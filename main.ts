// function getUserNumber(num:Number):void{
// if(num>10){
//     console.log("greater then 10");

// }
// else{

//     console.log("less then 10")
// }
// }

// function printConsoleText(userNum:number):void{
//     if (userNum>10) {
//         console.log("greater then 10");
//     }
//     else if (userNum<10) {
//         console.log("less then 10");
//     } else {
//         console.log("equal to 10");
        
//     }
// }


// function getUserNumbers(first:number,second:number):void{
//     if(first>second){
//         console.log("first>second")
//     }else if (first<second) {
//         console.log("first>second")
        
//     } else {
//         console.log("values are equal")
//     }
// }
// function getNumbersRturenMin(num1:number,num2:number):void{
// console.log( Math.min(num1,num2));
// }
// getNumbersRturenMin(1,2)

// function getNumbersPrintMin(num1:number,num2:number,num3:number):number{
// return Math.min(num1,num2,num3);
// }

// function getNumbersReturnAverage(num1:number,num2:number,num3:number):void{
//   let allNunbers:number= num1+num2+num3;
//   console.log( allNunbers/3);
// }
// getNumbersReturnAverage(3,6,9)

// function getNumbersReturnSum(num1:number,num2:number,num3:number,num4:number):number{
// return num1+num2+num3+num4
// }

// let numbersArray:number[]=[4,5,6,9,87,8,23,4,84,3,545,513]
// function getArrayReturnMin():number{
// return Math.min(...numbersArray);
// }
// getArrayReturnMin()

//שאלה 9
// let sum:number=0;
// let myArray:number[]=[]
// function getNumbersreturnSum():void{
//     myArray.forEach(item=>sum+=item);
//     let worth:number= sum/myArray.length
//     console.log(worth);
// }
// getNumbersreturnSum()

// let sum:number=0;
// function getNumbersArrayReturnSum(numberArray:number[]):number{
// numberArray.forEach(item=>sum+=item);
// return sum;
// }
// getNumbersArrayReturnSum([2,5,6,9,8,4,7,8])


// function printSecondName(namesArray:string[]):string{
//     let secondName:string=namesArray[1];
//     return secondName;
// }
// printSecondName(["yehuda","natan","nahom","mimi"])

// let nameArray:string[]=["Artor","Nimi","Mimi","alecs","Avi"];
// function returnNameA():string{
//     for(let i:number=0; i<nameArray.length;i++){
//         if(nameArray[i][0]==="A"){
//             return nameArray[i];
//         }
//     }
//     return "no name";
// }
// returnNameA()

// function printMassege(numArray:number[]):boolean{
//     for(let i:number=0;i<numArray.length;i++){
//         if(numArray[i]%2==0){
//             return true
//         }
//     }
//     return false;
// }
// console.log(printMassege([2,5,6,9,7,8,5]))

// function getDate(userDate:string):Date{
//     const myDate:Date=new Date(userDate);
//     return myDate;
// }
// console.log(getDate("05/05/2022"))

// function printTextNumeTimes(myName:string,num:number){
//     for(let i:number=0;i<num;i++){
//         console.log(myName);
//     }
// }
// printTextNumeTimes("yehuda",4)

// function getAgeprintSom(myName:string,age:number):string{
// if(age>18){
//     return `Welcome ${myName}`
// }
// return `no inter ${myName} `
// }
// console.log(
//  getAgeprintSom("yehuda",20));

// function printLeter(firstName:string,lastName:string):any{
// if(firstName[0]===lastName[0]){
//     return firstName[0];
// }
// return 0;
// }
// console.log(
//  printLeter("yehuda","yamin"));

// function getArrayReturnText(myArray:any[]){
//     switch (myArray.length) {
//         case 0:return "No information";
            
//         case 1:return "one data";
        
//         case 2:return "two data"
//         default:
//             return "many data";
//     }
// }
// console.log(
//  getArrayReturnText([2,1]));


// let stringArray:string=""
// function printSom(myArray:any[]){
// switch (myArray[0]) {
//     case "upside down":
//         return myArray.reverse();

//     case "ascending order":
//         return myArray.sort((a,b)=>a-b);

//     case "Descending":
//         return myArray.sort((a,b)=>a-b).reverse();

//     case "text":
//         myArray.forEach(item=>stringArray+=`${item}`);
//         return stringArray;

//     default: return
        
// }
// }
// console.log( printSom(["text",8,6,32,4,8,65,89,6]));



// let bArray:boolean[]=[];
// let nArray:number[]=[];
// let sArray:string[]=[];
// let oArray:object[]=[]; 
// function orderArray(myArray:any[]){
//     myArray.forEach(Element=>{
//         switch (typeof(Element)) {
//             case "number": nArray.push(Element)
//                 break;
//             case "boolean": bArray.push(Element)
//                 break;
//             case "string": sArray.push(Element)
//                 break;
//             case "object": oArray.push(Element)
            
//             default:
//                 return;
//         }}
//         )
//         let newArray:any[]=[];
//         newArray.push(bArray,nArray,sArray,oArray);
//         console.log(newArray);
// }
// orderArray([3,2,"sefjhsd","sdfjhsdf",true,false]);


