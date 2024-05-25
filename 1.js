



// const alphabetObj = {};

// for (let i = 97; i <= 122; i++) {
//   const letter = String.fromCharCode(i);
//   alphabetObj[letter] = true;
// }
// console.log(alphabetObj)




// 6. Տրված է բնական թվերի հաջորդականություն: Արտածել այդ հաջորդականության 
// ա) այն տարրերի քանակը, որոնց թվանշանների գումարը հավասար է տրված c թվին, 
// բ) 2-ի աստիճան հանդիսացող տարրերի արտադրյալը, 
// գ) որևէ թվի ֆակտորիալ հանդիսացող տարրերի միջին թվաբանականը, 
// դ) կատարյալ թվերի գումարը, 
// ե) պարզ թվերի արտադրյալը,
//  զ) Ֆիբոնաչիի թվերի քանակը, 
// է) սիմետրիկ թվերի միջին թվաբանականը, 


// ա) այն տարրերի քանակը, որոնց թվանշանների գումարը հավասար է տրված c թվին, 

// let arr = [1209,4,5,67,84,9,9,39,4,5];
// let c = 12;
// let count = 0;

// function sumDigit(num){
//   let sum = 0; 
//   while(num > 0){
//     sum = sum + num % 10;
//     num = Math.floor(num / 10);
//   }
//   return sum;
// }

// for(let i = 0; i < arr.length; i++){
//   if(sumDigit(arr[i]) === c){
//     count++
//   }
// }
// console.log(count)


// բ) 2-ի աստիճան հանդիսացող տարրերի արտադրյալը, 

// let arr = [2,4,5,77,256];
// let result = 1; // 2 * 4 * 256

// function isTwoPow(num) {
//   while(num != 1){
//     if(num % 2 != 0){
//       return false
//     }else{
//       num = num / 2;
//     }
//   }
//   return true
// }

//  for(let i = 0; i < arr.length; i++){
//   if(isTwoPow(arr[i]) === true){
//     result = result * arr[i]
//   }
//  }
// console.log(result)


// գ) որևէ թվի ֆակտորիալ հանդիսացող տարրերի միջին թվաբանականը, 

// let arr = [24,45,6,678,120,34,5]
// let sum = 0
// let count = 0

// function isFactorial(num){
//   let n = 2
//   while(num != 1){
//     if(num % n != 0){
//       return false
//     }else{
//       num = num / n
//       n++
//     }
//   }
//   return true
// }

// for(let i = 0; i < arr.length; i++){
//   if(isFactorial(arr[i]) === true){
//     sum = sum + arr[i];
//     count++
//   }
// }

// console.log("Mijin tvabanakan =" , sum / count)


// դ) կատարյալ թվերի գումարը, 
// let arr = [3,4,5,6,7,888,28,6,34]
// let sum = 0
// function isPerfect(num){
//   let sum = 0;
//   for(let i = 1; i <= num/2; i++){
//     if(num % i == 0){
//       sum = sum + i
//     }
//   }
//   if(sum == num){
//     return true
//   }else {
//     return false
//   }
// }

// for(let i = 0; i < arr.length;i++){
//   if(isPerfect(arr[i]) === true){
//     sum = sum + arr[i]
//   }
// }
// console.log(sum)


// զ) Ֆիբոնաչիի թվերի քանակը, 

// let arr = [8,45,13,55,6,790]
// let count = 0;

// function isFibonacci(num){
//   let fib1 = 1;
//   let fib2 = 1;
//   let nexFib;
//   while(fib2 < num){
//     nexFib = fib1 + fib2;
//     fib1 = fib2;
//     fib2 = nexFib;
//   }
//   if(fib2 == num){
//     return true
//   }else {
//     return false
//   }
// }
// for(let i = 0; i < arr.length ;i++){
//   if(isFibonacci(arr[i]) === true){
//     count++
//   }
// }
// console.log(count)


function isSimetrik(num){
  let str = num + "";
  let arr = [];
  for(let i = str.length - 1; i >= 0; i--){
    arr.push(str[i]);
  }
  if(str == arr.join("")){
    return true
  }else {
    return false
  }

}
let arr = [243,535,3445,101]
let sum = 0;
let count = 0;

for(let i = 0; i < arr.length; i++){
  if(isSimetrik(arr[i]) === true){
    sum = sum + arr[i];
    count++
  }
}

let mijin = sum / count

console.log(mijin)