//=========================== Number object =======================================
//!JS ում կետը դա այն առանցքային սինվոլն է,որը նախանշում է,որ իրենից ձախ կանգնած է 
//! օբյեկտային տիպ։

  //  let x = 10;
  //   let x1 = new Number("10");  
  //  let x2 = new Number("10");
// console.log(x);
// console.log(typeof x1)
// console.log(x1.valueOf())


//     x1 = x1.valueOf();
//    console.log(x1);
//   console.log(Number.MAX_VALUE)
//  console.log(x1.constructor)

//============================ Boolean Object ====================================

//  let bool1 = true;
//   let bool2 = new Boolean(false);

// // console.log(bool1);
// console.log(bool2);
// console.log(bool2.valueOf());



//==========================   String Object ======================================

//  let str1 = "hello";
// let str2 = new String("hello");
// console.log(str1);
// console.log(str2);
// console.log(str2.valueOf());
// console.log(str1.length);     //length is static method


//interpretator do the following
//str.length => //let tmp = new String(str1)
                // tmp.length 
                // delete tmp

//if str1 object it must be have property, so we can du
// str1.x = 10;
// console.log(str1.x)  // undef ??? why ?

// str.x = 10 => // let tmp = new String(str)
                 // tmp.x = 10;
                 // tmp.delete


  // console.log("a".charCodeAt())
  // console.log(" ".charCodeAt())
//  console.log(String.fromCharCode(10000))

//ClassWork 1.
//տտրված թվերը վերածել սիմվոլների, օգտագործելով 
//fromCharCode մեթոդը։


// let code = "98 97 114 101 118 32 98 97 114 101 118" ;

//  let arr = code.split(" ") 
//  console.log(arr)   
// /    console.log(String.fromCharCode(...arr))
//=====================================================



 //ClassWork 2.
 //Գտնել տրված տեքստի մեջ ություն վերջածանցով բառը և դուրս բերել։
  // let str = "Հայաստանի լեռնաշխարհի բնությունը  գեղեցիկ է";
  // let str1 = "ություն";

// //  console.log(str.indexOf(str1))
//    const arr = str.split(" ");
//    console.log(arr)

//  for(let i = 0; i < arr.length;i++){
//     let index = arr[i].indexOf(str1);
//     let lastIndex = arr[i].lastIndexOf(str1);
//     if(index === lastIndex && index != -1){
//         console.log(arr[i])
//     }
  
//  }
// // //2
// function check(str,str1) {

//     let arr = str.split(" ");
//     console.log(arr);

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i].includes(str1) === true){
//             console.log(arr[i]);
//         }
            
        
//     }
// }

//   check("Հայաստանի լեռնաշխարհի բնությունը գեղեցիկ է","ություն");


 //================= object membrs and methods ==================

// let u3 = new Object({
//     name:"Aram",
//     info(){
//         return this.name
//     }
//  })
//   console.log(u3)

//  let u1 = {
//     name:"Aram",
//     info(){
//         return this.name
//     }
//  }
//   console.log(u1)

//  let u2 = {name:"Karen"};
//  console.log(u1.info());
//  console.log(u3.toString())
//  console.log(JSON.stringify(u2))



// in array case, when we create it
// a1 and a2 they booth have property length
//  let a1 = [1,2,3];
//  let a2 = new Array(1,2,3);
//   console.log(a2);
//   console.log(a1.length, a1.toString());
// let a3 = []
// console.log(a3)

//literal [] or new Array
//  let arr1 = [4];
//  let arr2 = new Array(4);
// console.log(arr1)
// console.log(arr2)


// creatre new object with literals and constructor
// let o1 = {name:"abc", age:25};
// console.log(o1)
// let o2 = new Object({name:"abc",age:25})
// console.log(o2)
// console.log(o1 === o2)

//  console.log(new Object(55))
//  console.log(new Object("hello"))
//  console.log(new Object([1,2,3]))

//! function constructors 

// function User(name,age,position,addres){
//     this.name = name;
//     this.age = age;
//     this.position = position;
//     this.status = true;
//     this.addres = addres
// }

//      let u1 = new User("Aram",30,"Programmer","echmiadzin","gegam",56);
//      console.log(u1)
//      let u2 = new User("Karen",25,"SysAdmin")
// //    u2.status = false;
//     console.log(u2)

//  let u3 = new User("Karen", 55)
//  console.log(u3)

//  console.log(User.prototype)
// User.prototype.gurgen = function(){
//   return this.name
// }

// User.prototype.getAddres = function(){
//   return this.addres
// }
// console.log(User.prototype)
// console.log(u1.gurgen())
// console.log(u2.getAddres())
// //what constructor is run
//  console.log(u3.constructor)




//less2
//!============================= function constructor ===========================

// 1. 
// function User(name, age){
//     this.name = name;
//     this.age = age;
//     this.admin = false;
//     this.say = function(){console.log(this.name)}
// }

//  let user1 = new User("Garik",30);
// let user2 = new User("Aram",22);

//  console.log(user1);
//  console.log(user2);


//  user1.say()
//  user2.say()

//        user1.say = 10;
//       console.log(user1);
//       console.log(user1.say);
//       delete user1.say;
//     console.log(user1);
//     console.log(user1.say);




//2. Methods adds whith prototype
  // console.log(User.prototype);
  // console.log(user1.prototype);
 //User.prototype.say = function(){console.log(this.name)}

 //console.log(User.prototype)
  //user1.say();
 //console.log(user1);
//!======================================================================
//example

//  let a2 = new Array(1,2,3)
//  console.log(a2)
//  Array.prototype.gugo = function(){console.log("hello")}
//  Object.prototype.gugo = function(){console.log("barev")}

   //a2.gugo()
  // let str = "a"
  //  str.gugo();
// console.log(a2)

//1.
// function funk(){
//     return Array.prototype.slice.call(arguments)
// }

//  console.log(funk(1,2,3,4))


//2.
//let n = 10 ;
//n.poghos();  //   ??


// Number.prototype.pogthos = function(x) {
//     return Math.pow(this.valueOf() , x)
// }
//  let n = 2;
//  console.log(n.pogthos(5))


//3.
// function User(name, age){
//     this.name = name;
//     this.age = age;
//     this.admin = false;
    
// }

//       Object.prototype.x = 10;
//      let u = new User("Karen", 25);
      // console.log(u);
      // console.log(u.x)
      // let y = 3;
      // console.log(y)
      // console.log(y.x)

//   let arr = [1,2,3]
//   console.log(arr)
//   console.log(arr.x)
// let str = "hello";
// console.log(str.x)




// for(let i in u){
//    //if(u.hasOwnProperty(i))
//     console.log(i , " :", u[i])
// }


//ClassWork 
//Ստեղծել function-constructor Book հետևյալ 3 պարտաֆիր հատկություններով
//title
//pub_year
//price

//show(); ֆունկցիայի PROTOTYPE ում ստեղծել մեթոդ, որը դուրս է 
//բերում այդ գրքերի տվյալները։
//book1, book2








// function Book (title,pub_year,price) {
//     this.title = title;
//     this.pub_year = pub_year;
//     this.price = price;
   
//      this.show = function(){return this.price}
// }

// Book.prototype.show = function() {
//     return `${this.title}  ${this.pub_year}  ${this.price}`
// }

// let book1 = new Book("JS", 1998 , "30$");
// let book2 = new Book("HTML",2009,"50$");

//   console.log(book1);

// console.log(book1.show());
// console.log(book2.show());

//a * b = 2 *(a + b)



