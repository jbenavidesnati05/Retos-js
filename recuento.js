let colors =["azul", "azul", "amarillo", "rojo", "rojo", "rojo", "rojo", "azul"] ;
console.log(colors);

let countBlue =0; 
let countYellow =0; 
let countRed =0; 
 

    


for (let i = 0; i < colors.length; i++) {
    if(colors[i] =="azul"){
        countBlue = countBlue + 1
    }
        if(colors[i] =="amarillo"){
            countYellow = countYellow + 1
        }
            if(colors[i] =="rojo"){
                countRed = countRed + 1
            }
    else{
        console.log(" no hay colores");
    }
}
console.log("longiud del arreglo"+colors.length);
console.log("azul     => " +countBlue);
console.log("amarillo => " +countYellow);
console.log("rojo     => " +countRed);