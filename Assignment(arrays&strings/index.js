let items = [
    {name: 'Bike', price: 100},
    {name: 'Album', price:200},
    {name: 'Book', price:10},
    {name: 'Phone', price:5},
    {name: 'Computer', price:1000},
    {name: 'Keyboard', price:25},

    
]
//Add item in the last index of the array
 items.push({
    name:'RedBull', price:75
})
console.log(items);
// Removes the first item in the last index of the array
items.shift()
console.log(items);
//Add items to the first index of the array
items.unshift({
    name:"TV", price:2000
})
console.log(items);
// Removes the last item in an array
items.pop()
console.log(items);
// Length property returns the number of elements in the array && can truncate the number of items in an array if set to a certain length
let goods =[
    {name: 'Bike', price: 100},
    {name: 'Album', price:200},
    {name: 'Book', price:10},
    {name: 'Phone', price:5},
    {name: 'Computer', price:1000},
    {name: 'Keyboard', price:25},    
]
console.log(goods.length);
goods.length= 3;
console.log(goods);
//splice() can add item's to an array and remove items as specified below
let goods1= goods
goods1.splice(0,2, {name:'laptop', price:1500})
console.log(goods1);
// reduce() is The callback function takes two arguments: an accumulator and the current value of the element being processed. It can also take two optional arguments: the current index of the element being we'll use the reduce method to calculate price of items inside an array
let total =items.reduce((currentTotal, item)=>{
    return item.price+currentTotal
},0)
console.log(total);
// includes() checks if an array has a certain element
let fruits = ['apples', 'banana', 'oranges']
let ifHas=fruits.includes('apples')
console.log(ifHas);
//join() an array elements into a single string "/" is used as a seperator
let stringfyFruits= fruits.join("/")
console.log(stringfyFruits);
// indexof()  allows the user to search for an element in an array and returns the index of the first encounter with the element, if the element is not fount it returns an index of -1
let findIndex= fruits.indexOf("oranges")
let findIndex1= fruits.indexOf('watermelon')
console.log(findIndex);
console.log(findIndex1);
// find() method takes a callback function as its argument and calls the function once for each element in the array, starting from the first element, until the function returns true
let numbers = [1,3,4,5,6,7,33,5,77]
let findEl= numbers.find((element)=>{
    return element>20
})
console.log(findEl);
// findIndex() it's like find() but this returns the index of the element
 let findElIndex= numbers.findIndex((element)=>{
    return element> 30
 })
 console.log(findElIndex);
 let duplicate = numbers.includes((element)=>{
    return element===element
 })
 console.log(duplicate);


let string= ['cars', 'bicycles' ,'planes' ,'ships']
// Reverse an Array
// let revNumbers= numbers.reverse()
// console.log(revNumbers);
// 
let filterdArr = numbers.filter((num)=>{
     return num> 30
})
console.log(filterdArr);

let str = "Hello world"
let char = str.charAt(7)
console.log(char);
let fillNum = numbers
fillNum.fill(0, 0 ,5)
console.log(fillNum);
const arr = [1, 2, 3, 4, 5];
const squaredArr = arr.map(function(num) {
  return num > num;
});
console.log(squaredArr);


let splicedItem = [1,3,5,5,6,7,7,8]
splicedItem.splice(0, 3 ,55)
console.log(splicedItem);

   splicedItem.reverse()
   console.log(splicedItem);
   let reversedArr = []
let reversingArr = (arr)=>{
     for(let i = arr.length; i>=0; i--){
          reversedArr.push(arr[i])
     }
     return reversedArr
}
console.log(reversingArr(splicedItem));

// Higest and lowest numbers inside an array
let lowestValue = Math.min(... splicedItem)
let highestValue = Math.max(... splicedItem)
console.log("this is the highest value:",highestValue, "this is the lowest value",lowestValue);

let Item = [1,-3,5,5,-6,7,7,-8]
let ng=[]
let negativeElements= (element)=>{
     element.sort()
     return element
}
console.log(negativeElements(Item));
console.log( negativeElements(Item));
function findPalindrom(str){
     let rts = str.split("").reverse().join("")
     if (rts===str){
          return "This is a palindrome", true
     }
     else{
          return "This is a palindrome", false
     }

}
console.log(findPalindrom("madam"));
let findPalindromNum = (num)=>{
     let mun = parseInt(num.toString().split("").reverse().join(""))
     if(mun===num){
          return "This is a palindrome"
     }
     else{
          return "This is not a palindrome number"
     }

}
console.log(findPalindromNum(77));

// find() finds a value that satisfies the a given condition
let findNum = (arr)=>{
     let Num = numbers.find(num=> num > 30)
     return Num
}
console.log(findNum(numbers));
// concat() replace() 
let str1 = "Hello"
let str2 = 'world'
let newString=str1.concat(' ', str2)
console.log(newString);
let str3 = "The brown fox  "
let replaceString = str3.replace("fox", 'cat')
console.log(replaceString);
// split() turns a string into an array
let str4=str3
let splitString = str4.split(" ")
console.log(splitString);
let str5 =str3
let subString = str5.substring(4, 9)
console.log(subString);
//slice
let str6 = str3
let sliceString = str6.slice(5)
console.log(sliceString);
let str7 = str3
let toLower = str7.toLowerCase()
console.log(toLower);
let str8 = str3
let toUpper = str8.toUpperCase()
console.log(toUpper);
// trim removes the whitespace
let str9 = str3
let trimString = str9.trim()
console.log(trimString);
let str10 = str3
console.log(str10.includes("brown"))
let str11 = str3
console.log(str11.search("car"));
console.log(str11.search("brown"));
