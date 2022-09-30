function sayHi(name){
    return `Hi, ${name}.`;
}
console.log(sayHi(`Kee`))
//------------------------------------------

function bigString(string1,string2){
    if (string1.length > string2.length){
        return string1;
    }else if (string1.length < string2.length){
        return string2;
    }else{
        return (`The strings are of equal length.`)
    }
}
console.log(bigString('longerrr','short'))
console.log(bigString('long','shorter'))
console.log(bigString('equal','equal'))
//-------------------------------------------

function bigNumber(a,b){
    if (a > b){
        return a;
    }else if (a < b){
        return b;
    }else{
        return `The numbers are equal.`
    }
}
console.log(bigNumber(3,2))
console.log(bigNumber(1,2))
console.log(bigNumber(2,2))
//--------------------------------------------

function fiveMore(numsArray){
    
    for(i=0; i<numsArray.length; i++){
    
        if(numsArray[i] % 2 !== 0){
            numsArray[i]+=5;
        }
    }
    return numsArray
}
console.log(fiveMore([1,2,3,4,5]))

//------------------------------------------

function arraySummer(numsArray){
    let sum = 0;
   for (i=0; i<numsArray.length; i++){
       sum += numsArray[i];
             
    }return sum
}
console.log(arraySummer([1,2,3,4,5]))

//-----------------------------------



function everyDivisible(n){
   if(n<10){
        for(i=1; i<=100; i++){
            if (i % n === 0){
                console.log(i);
            }
        }
    }
}
everyDivisible(9)