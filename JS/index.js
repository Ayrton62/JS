const name = prompt("Hola guerrero, cual es tu nombre?").toLowerCase();
const selfPower = Number(prompt("Veo que no estas en la base de datos, dime de cuanto es tu nivel de pelea por favor"));

alert(selfPower  + " no es un mal nivel pero podrias mejorar");

const time = Number(prompt("Por cuantos dias te gustaria entrenar?"));

const train = selfPower * time / 0.519;

alert("Eso estuvo bien no? ahora tu nivel es de " + train + ", pero pasemos a algo mas dificil!")

alert("Podras elegir un contrincante entre  los siguientes: " )


let personajes = [
    {name: "Goku",
    power: 52000,
    img: "http://assets.stickpng.com/images/584e837f6a5ae41a83ddee3b.png"},
    
    {name: "Vegeta",
    power: 50000,
    img: "http://assets.stickpng.com/images/584e837f6a5ae41a83ddee3b.png"},
    
    {name: "Gohan",
    power: 34000,
    img: "http://assets.stickpng.com/images/584e837f6a5ae41a83ddee3b.png"},
    
    {name: "Piccoro",
    power: 22000,
    img: "http://assets.stickpng.com/images/584e837f6a5ae41a83ddee3b.png"},
    
    {name: "Krillin",
    power: 7000,
    img: "https://e7.pngegg.com/pngimages/194/55/png-clipart-krillin-goku-beerus-frieza-trunks-disco-ball-hand-vertebrate.png"}
]


for (personaje of personajes) {
    alert(personaje.name + ": " + personaje.power);      
}
let oponentPower = prompt("A quien te gustaria enfrentarte ahora?").toLowerCase()

switch (oponentPower) {
    case 'krillin':
        alert("El humano mas fuerte" )
        break;
    case 'piccoro':
        alert("El Namakiano mas poderoso")
        break;
    case  'gohan':  
        alert("No lo hagas enojar")
        break;
    case  'vegeta':
        alert("Es muy orgulloso ten cuidado")
        break;
    case  'goku':
        alert("Le encantan estas batallas")
        break;
    default:
        let reask = prompt("No entendi con quien quieres pelar, o ese guerrero no estaba en la lista, quieres intentar de nuevo?")
        if (reask === "si") {
            prompt("A quien te gustaria enfrentarte ?")
        }else if (reask === "si"){
            alert("Genial, no es necesario que pelees todavia!!")
        }else{
            alert("Demasiados errores, fallo en la matrix")
        }
        break;
}



