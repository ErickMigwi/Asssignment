//Question 1

let array1=["apples", "Banana","Banana", 5, 5,6, 6]
function removeDuplicate(){
    for(let i= 0; i<=array1.length; i++){
    if(array1[i]===array1[i]){
        array1.splice(i, 1)

    }
}
    console.log( array1)
    
}
removeDuplicate()
//Question 2
let array2= [1,2,3,4,5,6,7,8]
function FindSpecificEl(){
for(let i=0; i<=array2.length; i++){
    if(array2[i]===5){
        console.log(true)
    }
}
}
FindSpecificEl()
//Question 3
 let array3= [undefined, true, "ErickMigwi",true, false,6]
  function RemoveUnecessary(){
      for(let i=0; i<=array3.length; i++){
      if(array3[i]===true||array3[i]===undefined||array3[i]===false){
          array3.splice(i,1)
      }
  }
      console.log(array3)
      
  }
RemoveUnecessary()
RemoveUnecessary()
//Question 4
function RevereString(){
let word = "Hello  World"
word1 = word.split(' ').reverse().join(' ');
console.log(word1)
}
RevereString()