// ORDENAR NUMEROS DE UNA CIFRA 
const array = [1,5,9,8,2,3,7,6,2,3,1,4,5,3];
const array1 = array.sort()
console.log(array1);

// ORDENAR NUMEROS DE MAS DE UNA CIFRA 
const array2 = [1,50,9,800,2,3,7000,26,22,31,1,41500,52,3111];
const array3 = array2.sort((a,b)=>{
    return a-b
    // if(a>b){
    //     return 1
    // }
    // if(a<b){
    //     return -1
    // }
    // return 0
})
console.log(array3);

// ORDENAR ARREGLO LITERAL 
const array4 = [
    {nombre:"juan",     apellido:"bernal"},
    {nombre:"ana",      apellido:"gomez"},
    {nombre:"zara",     apellido:"holguin"},
    {nombre:"fasuto",   apellido:"pinzon"}
]
// console.log(array4);
const array5 = array4.sort((a,b)=>{
    if(a.nombre > b.nombre){
        return 1
    }
    if(a.nombre < b.nombre){
        return -1
    }
    return 0
})
console.log(array5);
