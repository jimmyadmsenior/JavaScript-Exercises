let lado1 = 5

let lado2 = 4

let lado3 = 6

if (lado1 == lado2 && lado2 == lado3){
    console.log("Triângulo Equilátero");
}
    
else if(lado1 != lado2 && lado3 != lado1 && lado2 != lado3 && lado1 != lado2){

    console.log("Triângulo escaleno");
}
    else{
        console.log("Triângulo isóceles");
    }