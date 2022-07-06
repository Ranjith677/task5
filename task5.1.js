// odd numbers  using arrow function (=>)
console.log("answer 1")
var a=[1,2,3,4,5,6,7,8,9,10];
var aodd=(a)=> {  
    let oddno1=[]
    for (let i=0; i<=a.length; i++) {
    if (i%2!==0) {oddno1.push(i) } 
}
console.log(oddno1);
} 
aodd(a);
console.log("answer 2")
// convert all the strings to title caps in a string array using arrow function (=>)
var man =['ALI','RAM','SASI','BALU','BABU','KUMAR','MANI']
var names=(man) =>
{let lowercased=man.map(man=>man.toLowerCase());
    console.log(lowercased)
}
names(man);
console.log("answer 3")
//Sum of the all number in  array using arrow function 
let add=[1,2,3,4,5,6,7,8,9]
 var numbers= (add)=>{
    let sum=0
 for (let i=0; i<add.length; i++) {sum += add[i]
       } 
 console.log(sum);
 }
 numbers(add);
 console.log("answer 4")
 //print the All prime number arrow function
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
console.log("answer 5")

//print polindrome using arrow function
var reversedname=[];
var polindromenames=[];
let pol=["mom","lil","mum","mada","mit"];
let a3=(pol)=>{
    for (let iterator of pol)
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
}
a3(pol);
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
let fnction = (arrr) =>{
    let uniquearr=[...new Set(arrr)];
    console.log(uniquearr);

};
fnction(arrr);
console.log("answer 8")

//rotate an array by k times
let a1=[1,2,3,4,5,6,7,8];
let n =a1.length;
let k=2;
var function1=(a1,n,k)=>{
    k=(k%n)
    for (let i= 0; i<n; i++) {
        
        if (i<k) 
        {console.log(a1[n+i-k+""]);

            
        } else {console.log((a1[i-k])+"");
            
        }
        


    }
};
function1(a1,n,k);
