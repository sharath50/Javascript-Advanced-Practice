//// javascript syntax
//
///*
//var 
//let 
//const
//
//always ends with ';';
//dinamically and weakly typed language...
//
//automatically converts strings into int vice versa according to the situation......
//
//
//outputs are 
//
//innerHTML = "hello world";
//innerText = "hello world";
//textContent = "hello world";
//
//document.write("hello world");
//window.alert("hello world");
//console.log("hello world");
//
//
//
//
//
//*/
//
////variables in javascript....
//
//let name = "javascript";
//        let int = 12562312;
//        let float = 12540.25123;
//        let bool = true;
//        let value1 = null;
//        let value2 = undefined;
//        let value3 = NaN;
//        
//        // new in ES6 this is symbol to create unique values....
//        let value4 = Symbol("hello");
//        let value5 = Symbol("hello");
//        
//        // now value4 and value5 are completely two different unique values....
//        
//        //variable types...
//        
//        var variable1 = "just a string as many chars as we want....?";
//        let variable2 = "we can use let to make it private variable inside local perimeter...";
//        
//        const variable3 = "const variables canno't change just like tuples in python -- immutables"
//        
//        
//
//// operators in javascript......
//
//var Math_operators = " + - * / % ** ";
//
//var Logical_operators = " |  &  ||  &&  ! ";
//
//var Comparison_operators = " ==  !==  ===  !== <  >  <=  >=  ^  ";
//
//
//
//// Conditional statements in javascript.....
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
//var name1 = fname == "sharath"? "mohan" : "no_name";
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
//
//
//// arrays in javascript........
//
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
//console.log(Object.keys(obj4));
//console.log(Object.values(obj4));
//console.log(Object.entries(obj4));
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
//
//
//// objects in javascript.......
//
//var object1 = {"name":"sharath" , "age" : "23"};
//var object2 = {"names":["rebbaca" , "jenny" , "sherly"]}
//
//console.log(object1.name , object1.age);
//console.log(object2.names[1]);
//
//// Loops in javascript.........
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
//for (let i=0; i<arr.length;i++) {
//    console.log(arr[i]);
//}
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
//// function in javascript...
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
//// advanced objects assignment in javascript........
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
//// map , filter , reduce functions in javascript......
//
//const arr1 = [1,3,5,7,9,11,13,15];
//
//let mapArray = arr1.map((num) => {
//   return num * 2;
//});
//
//console.log(mapArray);
//
//let filterArray = arr1.filter( (num) => {
//    return num%3 != 0;
//});
//
//console.log(filterArray);
//
//let reduceArray = arr1.reduce( (accumulator, num) => {
//        return (accumulator - num);             
//} , 10);
//
//console.log(reduceArray);
//
//
//// specials in ECMA-5 and 6
//
//let name6 = "sharath";
//let age = 23;
//
//const obj6 = {
//    name3 , age
//}
//
//console.log(obj1);
//
//let value01 = Symbol();
//let value02 = Symbol("foo");
//let value03 = Symbol("foo");
//
//console.log(value02 === value03);
//
//// gives false because we use symbol to create unique values with same variable name .....
//
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
//// advanced functions in javascript , closures , currying , compose
//        
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
//
//
//const name001 = () => {
//    console.log("hello");
//}
//let name07 = name001;
//
//console.log(name07());
//
//
//
//// classes and objects in javascript..........
//
//const obj01 = {
//    no:[1,2,3,4,5,6,7,8,9],
//    names:["sharath" , "karthik" , "rudresh"],
//    func1 : () => {
//        return 18 + 12 * 10;
//    },
//}
//
//console.log(obj01.no , obj01.names , obj01.func1());
//
//const obj02 = {
//    func1 : function() {
//        console.log(this);
//    }
//}
//
//obj02.func1();
//
//
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
//
//
// 
//class names {
//    constructor(name , age , work) {
//        this.name = name;
//        this.age = age;
//        this.work = work;
//    }
//    
//    hello() {
//        console.log('hello...');
//    }
//}
//
//class persons extends names {
//    constructor(name , age , work) {
//        super(name , age , work);
//    }
//    
//    hi() {
//        console.log('hi...');
//    }
//    
//    info() {
//        if (this.work){
//            console.log(`name is ${this.name} age is ${this.age} work is ${this.work}`);
//        } else if (this.grade){
//            console.log(`name is ${this.name} age is ${this.age} work is ${this.grade}`);
//        }
//        
//    }
//}
//
//class solders extends persons {
//    constructor(name , age , grade) {
//        super(name , age);
//        this.grade = grade;
//    }
//    
//    info() {
//        console.log(`name is ${this.name} age is ${this.age} and grade is ${this.grade}`);
//    }
//}
//
//const person1 = new persons('mohan' , 21 , 'web designer')
//const solder1 = new solders('sharath' , 23 , '4th');
//
//solder1.hello();
//solder1.hi();
//
//solder1.info();
//person1.info();


////prototyping of OOP in javascript...........
//
//
//const account = function(fname , lname , age , gender , work , salary , initial_deposite , branch) {
//    this.fname = fname;
//    this.lname = lname;
//    this.fullname = fname + lname;
//    this.age = age;
//    this.gender = gender;
//    this.work = work;
//    this.salary = salary;
//    this.iDeposite = initial_deposite;
//    this.balance = this.iDeposite;
//    this.branch = branch;
//    
//    let membership;
//    if (this.iDeposite >= 10000) {
//        membership = 'Gold';
//    } else if (this.iDeposite >= 6000) {
//        membership = 'Platinum';
//    } else {
//        membership = 'regular'; 
//    }
//    if (membership == 'Gold' || membership == 'Platinum') {
//        console.log(`hi ${this.fullname}, thank you for opening account in our bank sector at ${this.branch} branch you got ${membership} membership. enjoy...! `);
//    } else {
//        console.log(`hi ${this.fullname}, thank you for opening account in our bank you got bank account in our bank. enjoy...! `);
//    }
//}
//
//
//account.prototype.info = function() {
//    const prefix = this.gender == 'male'? 'he': 'she';
//    return `name is ${this.fname} age is ${this.age}, and ${prefix} is working as a ${this.work}, salary would be ${this.salary} and ${prefix} deposited intially ${this.iDeposite.toFixed(2)}`;
//}
//
//account.prototype.deposite = function(amount) {
//    this.balance += amount;
//    return `amount Rs.${amount} has been deposite right now... balance : ${this.balance.toFixed(2)}`;
//}
//
//account.prototype.withdraw = function(amount) {
//    if (this.balance >= amount) {
//        this.balance -= amount;
//        return `amount Rs.${amount} has been withdrawn right now...  balance : ${this.balance.toFixed(2)}`;
//    } else {
//        return `hi, you are trying to widraw Rs.${amount} which is more than the balance what you have in your account right now... balance : ${this.balance.toFixed(2)}`;
//    }
//    
//}
//
//
//const online_account = function(fname , lname , age , gender , work , salary , initial_deposite , online) {
//    account.call(this, fname , lname , age , gender , work , salary , initial_deposite);
//    this.online = online;
//    
//    let membership;
//    if (this.iDeposite >= 10000) {
//        membership = 'Gold';
//    } else if (this.iDeposite >= 6000) {
//        membership = 'Platinum';
//    } else {
//        membership = 'regular'; 
//    }
//    if (membership == 'Gold' || membership == 'Platinum') {
//        if (this.online){
//            console.log(`hi ${this.fullname}, thank you for opening online account in our bank sector you got ${membership} membership. enjoy...! `);
//        } else {
//            console.log();
//        }
//    } else {
//        console.log(`hi ${this.fullname}, thank you for opening account in our bank you got bank account in our bank. enjoy...! `);
//    }
//}
//
//
//online_account.prototype = Object.create(account.prototype);
//
//online_account.prototype.constructor = online_account;
//
//
//const client1 = new account('sharath' , 'mohan' , 23 , "male" ,'web developer' , 15000 , 7000 , 'vidyaranyapura');
//
//const client2 = new online_account('rudresh' , 'karthik' , 19 , 'male' , 'accountant' , 13000 , 10000 , true);
//
//console.log(client1.info());
//console.log(client1.deposite(700));
//console.log(client1.withdraw(1000));
//
//console.log(client2.info());
//console.log(client2.deposite(1800));
//console.log(client2.withdraw(15000));
//
//console.log(client1.fname);
//console.log(client1.lname);
//console.log(client1.fullname);
//console.log(client1.age);
//console.log(client1.work);
//console.log(client1.salary);
//console.log(client1.iDeposit);
//console.log(client1.balance);
//
//console.log(client1.info());
//console.log(client1.deposite(200));
//console.log(client1.withdraw(2200));
//
//
//console.log(client2.info());
//console.log(client2.deposite(700));
//console.log(client2.withdraw(200));
//


// creating objects in javascript....

//const employees = {
//    getInfo : function() {
//        return `first name : ${this.fname}, and last name : ${this.lname} \n name : ${this.fname + this.lname} and employee id : ${this.empIdNo}, date of join : ${this.dateOfJOin}, designation : ${this.designation}, salary : ${this.salary}`
//    },
//}
//
//
//const employee1 = Object.create(employees);
//
//employee1.fname = "Poprica";
//employee1.lname = "Roney";
//employee1.fullname = employee1.fname + employee1.lname;
//employee1.empIdNo = 457121;
//employee1.dateOfJoin = '10-02-2017';
//employee1.designation = 'web developer';
//employee1.salary = 15000;
//
//
//console.log(employee1.fname)
//console.log(employee1.lname)
//console.log(employee1.fullname)
//console.log(employee1.empIdNo)
//console.log(employee1.dateOfJoin)
//console.log(employee1.designation)
//console.log(employee1.salary)
//
//employee1.fname = "brenda";
//
//console.log(employee1.fullname)
//console.log(employee1.fname)



//// advanced for loops in javascript....
//
//
//let name002= "sharath mohan";
//
//for (i of name002){
//    console.log(i);
//}
//
//
//let names1 = ["henry" , "sharath" , "mohan" , "george" , "mark"];
//
//
//// arrays , strings are iterables
//
//for (i of names1){
//    console.log(i);
//}
//
//
//let obj06 = {
//    "animal1" : "human",
//    "animal2" : "snake",
//    "animal3" : "jaguar",
//    "animal4" : "crocodile",
//    "animal5" : "lion"
//}
//
//// objects are emmurable
//
//for (key in obj06) {
//    console.log(key , ":", obj6[key]);
//}



// DOM selectors in JAvascript


//let string = "hello world good evening all of you..."
//
//obj1 = {
//    fname:"sharath",
//    lname:"mohan",
//}
//
//console.log(string.indexOf('h'));
//console.log(string.lastIndexOf('l'));
//console.log(string.charAt(25));
//
//console.log(string.search("good"));
//console.log(string.search("good"));
//console.log(string.split(" "));
//console.log(string.toLowerCase());
//console.log(string.toUpperCase());
//console.log(string.endsWith('.'));
//console.log(string.includes('z'));
//console.log(string.startsWith('e'));
//console.log(string.concat("hi"));
//
//
//console.log("$".repeat(50));
//
//
//
//let list = Array("hello", "world", "good", "evening", "all", "of", "you...");
//
//// array functions
//
//console.log(list.length);
//console.log(list.slice(1,2));
//console.log(list.splice(1,4,"hello"));
//console.log(list.concat("hi"));
//console.log(list.join(""));
//console.log(list.toString(""));
//console.log(list.sort());
//console.log(list.reverse());
//console.log(list.pop());
//console.log(list.push("gango"));
//console.log(list.shift());
//console.log(list.unshift("hohooo"));
//
//console.log(list.unshift("hohooo"));
//console.log(list.includes("all"));
////console.log(list.fill("all"));
//console.log(list.splice(1,0,"home"));
//console.log(list);
//
//var txt = "";
//var numbers = [45, 4, 9, 16, 25];
//numbers.forEach(myFunction);
//
//function myFunction(value, index, array) {
//  txt += value + "<br>"; 
//}
//
//console.log(txt);
//
//// ---------------------------------
//
//
//let map_list = list.map( (i)=> {
//    return i.split("");
//});
//
//console.log(map_list);
//
//map_list.forEach( (i) => {
//    i.forEach( (j)=> {
//        console.log(j);     
//    });
//});
//
//
//let filter_array = list.filter( (k) => {
//    return k.length >= 4;
//})
//
//console.log(filter_array);
//
//
//let reduce_array = list.reduce( (acc , i) => {
//        return acc += i;
//} , "starting.... : ");
//
//console.log(reduce_array);
//
////----------------------------------------
//
//
//let no = 1235.51656;
//let no1 = 12023;
//
//// numbers functions....
//
//console.log(no.toString());
//console.log(no.toExponential());
//console.log(no.toPrecision(6));
//console.log(no.toFixed(2));
//
//console.log(Math.round(no));
//console.log(Math.floor(no));
//console.log(Math.ceil(no));
//console.log(Math.abs(no));
//console.log(Math.trunc(no));
//console.log(Math.cbrt(no));
//console.log(Math.sqrt(no));
//console.log(Math.pow(no,no));
//console.log(Math.max(1,2,3,4,5));
//console.log(Math.min(1,2,3,4,5));
//console.log(Number("456"));
//console.log(parseInt(455.020));
//console.log(no1.toPrecision(7));
//


// working with date objects...


//var d = new Date(1973 , 11 , 09 , 08 , 35 , 43 , 0);
//var d1 = new Date();
//
//console.log(d1.getFullYear());
//console.log(d1.getMonth());
//console.log(d1.getDate());
//list = ["sunday" , "monday" , "tuesday" , "wednessday" , "thursday" , "friday" , "saturday"]
//console.log(list[d1.getDay()]);
//console.log(d1.getHours());
//console.log(d1.getMinutes());
//console.log(d1.getSeconds());
//console.log(d1.getMilliseconds());


//
//localStorage.setItem();
//sessionStorage.setItem();
//
//localStorage.getItem();
//sessionStorage.getItem();
//
//sessionStorage.clear();
//localStorage.clear();
//

//document.getElementById('button').addEventListener('click' , loadData);
//
//
//function loadData() {
//    const xhr = new XMLHttpRequest();
//    
//    xhr.open('GET' , 'sample.txt', true);
//    
//    xhr.onload = function() {
//        /*
//        200 : correct
//        403 : forbidden
//        404 : not found
//        */
//        if (this.status === 200) {
//        document.getElementById('output').innerHTML = `<h1 class="h1">${this.responseText}</h1>`;
//        }
//    }
//    
// //   OR WE CAN WRITE IT LIKE THIS...    
//    
//    xhr.onreadystatechange = function() {
//        /*
//        0 = unsent
//        1 = opened
//        2 = received
//        3 = loading
//        4 = done
//        */
//        
//        if (this.status === 200 && this.readyState === 4) {
//            document.getElementById('output').innerHTML = `<h1 class="h1">${this.responseText}</h1>`;
//        }
//    }
//    
//    xhr.send();
//}

//document.getElementById('button1').addEventListener('click' , loademployeeData);
//
//document.getElementById('button2').addEventListener('click' , loademployeesData);
//
//document.getElementById('button3').addEventListener('click' , loadonlineData);
//
//
//function loademployeeData() {
//    //create new server request
//    const xhr = new XMLHttpRequest();
//    
//    //get the file data
//    xhr.open('GET', "employee.json" , true);
//    
//    //read the data and output
//    xhr.onload = function() {
//        if (this.status === 200) {
//           
//            const dataArr1 = JSON.parse(this.responseText);
//            let content = "<ul class=\"list-unstyled\">";
//            for (i in dataArr1) {
//               content += `<li class="list-item">${i} : ${dataArr1[i]}</li>`;
//            };
//            content += '</ul>';
//            document.getElementById('output1').innerHTML = content;
//        }
//    }
//    
//    xhr.send();
//}
//
//
//function loademployeesData() {
//    //create new server request
//    const xhr = new XMLHttpRequest();
//    
//    //get the file data
//    xhr.open('GET', "employees.json" , true);
//    
//    //read the data and output
//    xhr.onload = function() {
//        if (this.status === 200) {
//            const dataArr1 = JSON.parse(this.responseText)
//    
//                dataArr1.forEach( (item) => {
//                    let content = "<ul class=\"list-unstyled\">";
//                    for (i in item) {
//                        content += `<li class="list-item">${i} : ${item[i]}</li>`;
//                    };
//                    content += '</ul><hr/>';
//                    document.getElementById('output2').innerHTML += content;
//                });      
//        }
//    }
//    
//    xhr.send();
//}
//

//// receiving data from the online json placeholder website...
//function loadonlineData() {
//    //create new server request
//    const xhr = new XMLHttpRequest();
//    
//    //get the file data
//    xhr.open('GET', "https://jsonplaceholder.typicode.com/posts" , true);
//    
//    //read the data and output
//    xhr.onload = function() {
//        if (this.status === 200) {
//            const dataArr1 = JSON.parse(this.responseText)
//    
////            console.log(dataArr1);
//                let content = "";
//                dataArr1.forEach( (item) => {
//                    content += `<h3 class='h3 text-secondary'>Post Id : ${item.id}</h3><h3 class='h3 text-primary'>${item.title}</h3><p class='lead text-muted'>${item.body}</p>`
//                });
//            document.getElementById('output3').innerHTML += content;
//        }
//    }
//    
//    xhr.send();
//}
















