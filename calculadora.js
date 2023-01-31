
let num1 = 0;
let num2 = 0;
let resultado = 0;
let operacion = "";


function calculadora(num1,  num2, operacion){
    if(operacion =="+"){
        resultado = num1+num2;
    }
        else if(operacion =="-"){
            resultado = num1-num2;
        }
            else if(operacion =="*"){
                resultado = num1*num2;
            }
                else if(operacion =="/"){
                    if(num2 == 0){
                        console.log("no se puede dividir por cero, Ingrese otro numero");
                    }else{
                        resultado = num1/num2;
                    }
                }
    else{
        console.log("valores ingresados invalidos");
    }
    console.log(resultado);
}

calculadora(5,2,"*")
