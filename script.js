// variables in javascript....
//
//var name = "sharath";
//var no = 23;
//var grade = 23.0256;
//var value = null;
//var value2 = undefined;
//var value3 = NaN;
//var bool = true;
//
//let new1  = "hello";
//const new2 = "you can't change my value...";
//
// operators in javascript......
//
//var Math_operators = " + - * / % ** ";
//
//var Logical_operators = " |  &  ||  &&  ! ";
//
//var Comparison_operators = " ==  !==  ===  !== <  >  <=  >=  ^  ";
//
//
// Conditional statements in javascript.....
//
//var another_name = "sharath"
//
//if (another_name = "mohan") {
//    console.log("hello" + another_name);
//} else if ( another_name = "sharath") {
//    console.log("hello" + another_name);    
//} else {
//    console.log("hello" + another_name);
//}
//
//// ternary operators.....
//
//var fname = "sharath";
//
//var name = fname == "sharath"? "mohan" : "no_name";
//
//// switch statements in javascript.......
//
//var name_One = "karthik";
//
//switch (name_One) {
//    case "nithin":
//    console.log(name_One);
//    break;
//    case "karthik":
//    console.log(name_One);
//    break;
//    case "raj":
//    console.log(name_One);
//    break;
//    default:
//    console.log("nothing inside of it..");
//}
//
// arrays in javascript........
//var list1 = Array(1,2,3,4,5,6,7,8,9,0);
//var list2 = ["name" , "hello" , 12 , 1250.25 , undefined, NaN , null];
//var list3 = ["hello" , [1,2,3, [9,8,7,4] ] , "hi" , "hella"];
//var list4 = [
//  {"name" : "karthik"},
//    {"name" : "rudresh"},
//    [1,2,3,4,5,6]
//];
//
//console.log(list1[0]);
//console.log(list2[list2.length-1]);
//console.log(list3[1][3][2]);
//console.log(list4[0].name);
//
//const names = ["deer", "tiger" , "lion"]
//
//console.log(names.includes("lion"));
//
//
//let obj4 = {
//    "name":"sharath",
//    "age":23,
//    "pet":"cat",
//}
//
//let obj5 = [1,2,3,4,5,6,7,8,9,0];
//
////console.log(Object.keys(obj4));
////console.log(Object.values(obj4));
////console.log(Object.entries(obj4));
//
//Object.keys(obj4).forEach( ( key ) => {
//    console.log( key , obj4[key]);
//})
//
//Object.values(obj4).forEach( ( value ) => {
//    console.log(value);
//})
//
//Object.entries(obj4).forEach( ( key ) => {
//    console.log( key , obj4[key]);
//})


// objects in javascript.......
//
//var object1 = {"name":"sharath" , "age" : "23"};
//var object2 = {"names":["rebbaca" , "jenny" , "sherly"]}
//
//console.log(object1.name , object1.age);
//console.log(object2.names[1]);
//
// Loops in javascript.........
//
//
//for (var i=0;i<=10;i++) {
//    console.log(i);
//}
//
//console.log("*********************");
//     
//var i=0;
//for (;i<=10;) {
//    console.log(i);
//    i++;
//}
//
//console.log("*********************");
//
//var arr = ["sharath" , "mohan" , "karthik" , "rudresh"];
//arr.forEach ( function (i , j) {
//    console.log(i , j);
//});
//
//console.log("*********************");
//
//var i=0;
//while (i<=10) {
//    console.log(i);
//    i++; 
//}
//
//console.log("*********************");
//
//var i=0;
//do {
//    console.log(i);
//    i++;   
//} while (i<=10);
//
//
// function in javascript...
//
//
//function say_Hello(name, age){
//    console.log("hello " + name + " " + age);
//}
//
//say_Hello("sharath" ,"23");
//
//
//const greeting = function hi(name , age){
//    console.log("hello " + name + " " + age);
//}
//
//greeting("sharath" ,"23");
//
//const func = (name , age) => {
//    console.log("hello " + name + " " + age);
//}
//
//func("sharath" ,"23");
//
// advanced objects assignment in javascript........
//
//const obj1 = {
//    "name1" : "sharath",
//    "name2" : "mohan",
//    "name3" : "karthik"
//};
//
//console.log(obj1);
//
//let {name3} = obj1;
//
//console.log(name3);
//
//
//
//var val1 = "sharath";
//var val2 = "mohan";
//var val3 = "karthik";
//
//const obj2 = {
//    val1,
//    val2,
//    val3
//};
//
//
//
//
//const arr4 = [1,3,5,7,9,11,13,15];
//
//let double = [];
//
//arr4.forEach((num) => {
//    double.push(num * 2);
//})
//
//console.log(double);
//
// map , filter , reduce functions in javascript......

//const arr = [1,3,5,7,9,11,13,15];
//
//let mapArray = arr.map((num) => {
//   return num * 2;
//});
//
//console.log(mapArray);
//
//let filterArray = arr.filter( (num) => {
//    return num%3 != 0;
//});
//
//console.log(filterArray);
//
//let reduceArray = arr.reduce( (accumulator, num) => {
//        return (accumulator - num);             
//} , 10);
//
//console.log(reduceArray);
//
//
// specials in ECMA-5 and 6 ....

//let name = "sharath";
//let age = 23;
//
//const obj1 = {
//    name , age
//}
//
//console.log(obj1);
//
//let value1 = Symbol();
//let value2 = Symbol("foo");
//let value3 = Symbol("foo");
//
//console.log(value2 === value3);
//
// gives false because we use symbol to create unique values with same variable name .....

//
//let arrow_func = (a,b) => {
//    let c = a + b
//    return c;
//}
//
//console.log(arrow_func(25,12));
//
//let data = (a,b) => a+b;
//
//console.log(data(2,56));
//
//
// advanced functions in javascript , closures , currying , compose....
        
//const closure1 = () => {
//    let name = "sharath";
//    const child = () => {
//        return "hello " + name;
//    }
//    return child();
//}
//
//console.log(closure1());
//
//const currying = (a) => (b) => a * b;
//
//console.log(currying(12)(10));
//
//
//const compose = (a) => {
//    const child = (b,c) => {
//        return a(b)(c);
//    }
//    return child;
//} 
//
//console.log(compose(currying)(10,10));


//const name = () => {
//    console.log("hello");
//}
//let name1 = name;
//
//console.log(name1());



// classes and objects in javascript..........

//const obj1 = {
//    no:[1,2,3,4,5,6,7,8,9],
//    names:["sharath" , "karthik" , "rudresh"],
//    func1 : () => {
//        return 18 + 12 * 10;
//    },
//}
//
//console.log(obj1.no , obj1.names , obj1.func1());

//const obj2 = {
//    func1 : function() {
//        console.log(this);
//    }
//}
//
//obj2.func1();


//class car {
//    constructor(name, wheels , doors) {
//        this.name = name;
//        this.wheels = wheels;
//        this.doors = doors;
//        console.log("class 'car' is initializing...")
//    }
//    
//    car_info() {
//        if (this.name && this.wheels && this.doors) {
//            return 'this is ' + this.name + ' this car has ' + this.wheels + ' wheels and ' + this.doors + ' doors';
//        } else {
//            return "i don't found any info here...";
//        }
//    }
//    
//    driving() {
//        if (this.name && this.wheels && this.doors) {
//            return 'I am ' + this.name + ' Now i am running on my ' + this.wheels + ' wheels by closing ' + this.doors + ' doors';
//        } else {
//            return "i don't found any info here...";
//        }
//    }
//    
//    update_car_name(name , wheels , doors) {
//        this.name = name;
//        this.wheels = wheels;
//        this.doors = doors;
//        console.log("car info set successfully...");
//    }
//    
//    wipe_car_name() {
//        this.name = null;
//        this.wheels = null;
//        this.doors = null;
//        console.log("car info deleted successfully...");
//    }
//    
//}
//
//class new_cars extends car {
//    constructor(name , wheels , doors){
//        super( name , wheels , doors);
//        console.log("class 'new car' is initializing...");
//    }
//    
//}
//
//
//
//const car1 = new new_cars("volvo" , 4 , 5);
//const  car2 = new new_cars("volvo" , 4 , 5);
//
//car1.update_car_name("benz" , 6 , 7);
//console.log(car1.driving("benz" , 6 , 7));
//car1.wipe_car_name();
//
//console.log(car1.car_info());


//advanced for loops in javascript....

//
//let name = "sharath mohan";
//
//for (i of name){
//    console.log(i);
//}
//
//
//let names = ["henry" , "sharath" , "mohan" , "george" , "mark"];
//
//
// arrays , strings are iterables........
//for (i of names){
//    console.log(i);
//}
//
//
//let obj6 = {
//    "animal1" : "human",
//    "animal2" : "snake",
//    "animal3" : "jaguar",
//    "animal4" : "crocodile",
//    "animal5" : "lion"
//}
//
// objects are emmurable.....
//for (i in obj6) {
//    console.log(i , ":", obj6[i]);
//}




//
//let first_id = document.getElementById('first_id');
//let first_class = document.getElementById('first_class');
//let first_tag = document.getElementById('first_tag');
//
//first_id.innerHTML = "hello world";
//first_id.innerText = "hi world";
//first_id.textContent = "hi world";
//
//
//
//document.querySelector(".active");
//document.querySelector("#main");
//document.querySelector("small");























