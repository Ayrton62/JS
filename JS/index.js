const name = prompt("Hola guerrero, cual es tu nombre?").toLowerCase();
const selfPower = Number(prompt("Veo que no estas en la base de datos, dime cual es tu nivel de poder por favor"));

alert(selfPower  + " no es un mal nivel pero podrias mejorar");

const time = Number(prompt("Por cuantos dias te gustaria entrenar?"));

const train = selfPower * time / 0.5;

alert("Eso estuvo bien no? ahora tu nivel es de " + train + ", pero pasemos a algo mas dificil!")

alert("Ahora pasaremos a un combate mano a mano, puedes elegir entre estos oponentes.  \n" + "Vegeta, Poder: 50000  \n" + "Goku, Poder 52000  \n" + "Gohan, poder: 35000  \n" + "Krillin, Poder: 12000  \n" + "Piccoro, Poder 18000 \n" + "Y muchos otros peleadores \n" )

let oponentPower = prompt("Que nivel te gustaria que tenga el oponente al que te enfrentaras?")



if(oponentPower > selfPower){
    alert("No estas a ese nivel intenta otro")}

while(oponentPower != 0){ 
    if(oponentPower >= 12000 && oponentPower  <= 18000){
        alert("Creo que mi amigo Krillin seria un buen oponente")
    }else if(oponentPower >= 18000 && oponentPower  <= 34999){
        alert("Creo que Piccoro sera tu oponente")
    }else if(oponentPower >= 35000 && oponentPower  <= 50000){
        alert("Creo que Gohan seria una buena opcion")
    }else if(oponentPower >= 50000 && oponentPower  <= 52000){
        alert("Pelearas con Vegeta, un gran desafio")
    }else if(oponentPower >= 52000 && oponentPower  <= 60000){
        alert("Solo Goku tiene ese nivel, suerte en la batalla")
    }else if (oponentPower >= 60000){
        prompt("No hay ningun oponente tan poderoso, prueba con un poder no tan elevado")
    }else{
        alert("Supongo que Chaos es la mejor opcion")
    }
    break;
   }