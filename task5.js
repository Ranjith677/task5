// odd number printing in anonymous function 
console.log("answer 1")
let a=[1,2,3,4,5,6,7,8,9,10,11];    
var b=function(a){
   let oddno=[];
for (let i=0; i<=a.length; i++) {
    if (i%2!==0) {oddno.push(i)  } 
}
console.log(oddno);
}
b(a);
console.log("answer 2")
//Convert all the strings to title caps in a string array (anonymous function)
var man =['ALI','RAM','SASI','BALU','BABU','KUMAR','MANI']
 var names=(man)=>{
    let lowercased=man.map(man=>man.toLowerCase());
    console.log(lowercased)   
}
names(man);
console.log("answer 3")
//Sum of the all numbers in a array using (anonymous function)
let add=[1,2,3,4,5,6,7,8,9]
var adition=function(add){
    let sum=0
 for (let i=0; i<add.length; i++) {sum += add[i]
       } 
 console.log(sum);
 }
 adition(add);
 console.log("answer 4")
//print prime number using annomous function  
primearray=[];
  nonprimearray=[];                                          
  let anofun4=(array)=>{
      
      for (var iterator of array) {
          for (var i = 2; i < iterator; i++) {
              var a=i;
              if(iterator%i===0){
              nonprimearray.push(iterator);
             break;}
          }   
          if(iterator%a!==0){
            
          primearray.push(iterator);}
  }
  return primearray;
  }
console.log (anofun4(array=[3,4,5,6,7,8,9,11,12,13,14,1]));
console.log("answer 6")

//print the polindrome using annomous function
var reversedname=[];
var polindromenames=[];
let po=["mom","lil","mum","madam"];
var c=(po)=>{
    for (let iterator of po)
     {
        for (i =iterator.length-1; i>=0; i--) {
          reversedname.push(iterator[i]);
        }
         reversedstring=reversedname.join('');
         if(reversedstring.toUpperCase()===iterator.toUpperCase())
         {console.log(reversedstring)}
         for (i =iterator.length-1; i>=0; i--) {
            reversedname.pop(iterator[i]);
         }
    }
    return 9;
    console.log(polindromenames)
}

c(po);
