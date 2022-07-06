// odd number printing in IIFE
console.log("answer 1")
let a=[1,2,3,4,5,6,7,8,9,10,11];  
(function(a){
    let oddno=[];
for (let i=0; i<=a.length; i++) {
    if (i%2!==0) {oddno.push(i)  } 
}
console.log(oddno);
})(a);
console.log("answer 2")

//Convert all the strings to title caps in a string array (IIFE function)
var man =['ALI','RAM','SASI','BALU','BABU','KUMAR','MANI'];
(function (man)
{let lowercased=man.map(man=>man.toLowerCase());
    console.log(lowercased)
})(man);
console.log("answer 3")
//sum of the all numbers in aarray using IIFE 
let add=[1,2,3,4,5,6,7,8,9];
(function (add){
    let sum=0;
 for (let i=0; i<add.length; i++) {sum += add[i]
       } 
 
 console.log(sum);
 })(add);
console.log("answer 4")

//print all prime number IIFE function 
primearray=[];
  nonprimearray=[];                                          
  (function(array1){
      
      for (var iterator of array1) {
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
  
  })([3,4,5,6,7,8,9,11,12,13,14,1]);
  console.log(primearray);
console.log("answer 5")
//print polindrome using IIFE

var reversedname1=[];
var polindromenames1=[];
let po2=["mom","lil","mum","madam","nut","suriya"];
(function(po2){
    for (let iterator of po2)
     {
        for (i =iterator.length-1; i>=0; i--) {
          reversedname1.push(iterator[i]);
        }
         reversedstring1=reversedname1.join('');
         if(reversedstring1.toUpperCase()===iterator.toUpperCase())
         {console.log(reversedstring1)}
         for (i =iterator.length-1; i>=0; i--) {
            reversedname1.pop(iterator[i]);
         }
    }
    return 9
    console.log(polindromenames1);
})(po2);
console.log("answer 6")
//return all median of two sorted arrays of the same size
 let afunction =(ar1,ar2)=>{
    ar3=[...ar1,...ar2];
    for ( i = 0; i< ar3.length; i++) {
        for (let j = 0; j< ar3.length; j++)
         {
    
            if(ar3[i]<ar3[j])
            {
                temp=ar3[i];
                ar3[i]=ar3[j];
                ar3[j]=temp;
            }
        }
        
    }
    index=ar3.length/2;
    median=(ar3[index]+ar3[index+1])/2
    return median;


};
console.log(afunction([45,34,78,27,61,55],[12,100,34,78]));


//remove the all duplicates from an array
console.log("answer7")
var arrr=[1,2,3,4,5,7,8,9,3];
(function (arrr) {
    let uniquearr=[...new Set(arrr)];
    console.log(uniquearr);

})(arrr);
console.log("answer 8")

//rotate an array by k times
let a1=[1,2,3,4,5,6,7,8];
let n =a1.length;
let k=2;
(function(a1,n,k){
    k=(k%n)
    for (let i= 0; i<n; i++) {
        
        if (i<k) 
        {console.log(a1[n+i-k+""]);

            
        } else {console.log((a1[i-k])+"");
            
        }
        


    }
})(a1,n,k);

 
