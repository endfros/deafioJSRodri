let numero1=0; 
let numero2=0; 
let resultado=0;
let operacion="";
let operaciones = ["suma","resta","multiplicacion","division"];

  operacion = prompt('¿Qué operación requieres? Las operaciones válidas son las siguientes: suma, resta, multiplicacion, division');
  while (!(operacion in operaciones)) {
            if (operacion == "suma" ||operacion == "resta" ||operacion == "multiplicacion" ||operacion == "division" ){
          break;
        } 
            operacion = prompt('Por favor, ingresa una operación válida. Recuerda que las operaciones válidas son las siguientes: suma, resta, multiplicacion, division');

      } 


 numero1 = parseFloat(prompt('Ingresa tu primer número'));
 while (typeof(numero1) != "number"){
  if (typeof(numero1) == "number"){
     break;
   }
   numero1 = parseFloat(prompt('Por favor ingresa un número válido'));
 }
 numero2 = parseFloat(prompt('Ingrese tu segundo número'));
 while (typeof(numero2) != "number"){ 
      if (typeof(numero2) == "number"){
     break;
   }
    numero2 = parseFloat(prompt('Por favor ingresa un número válido'));

 }


function calculadora (operacion, numero1, numero2){
    switch(operacion){
        case "suma":
            resultado = numero1 + numero2
            window.alert(resultado);
            break;

            case "resta":
            resultado = numero1 - numero2
            window.alert(resultado);
            break;

            case "multiplicacion":
            resultado = numero1 * numero2
            window.alert(resultado);
            break;

            case "division":
            resultado = numero1 / numero2
            window.alert(resultado);
            break;

    }
}


calculadora(operacion,numero1,numero2);

