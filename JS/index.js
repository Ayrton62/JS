let nombre = prompt("Hola guerrero, cual es tu nombre?");
nombre = nombre.toLowerCase();

let personajes = [
    {
        name: "Goku",
        power: 52000,
        img: "http://assets.stickpng.com/images/584e837f6a5ae41a83ddee3b.png",
        dscr: "Le encantan estas batallas, seguro sera entretenido",
        race: "Saiyan"
    },

    {
        name: "Vegeta",
        power: 50000,
        img: "http://assets.stickpng.com/images/584e837f6a5ae41a83ddee3b.png",
        dscr: "Es muy orgulloso ten cuidado, no te dejara vencerlo",
        race: "Saiyan"
    },

    {
        name: "Gohan",
        power: 34000,
        img: "http://assets.stickpng.com/images/584e837f6a5ae41a83ddee3b.png",
        dscr: "No lo hagas enojar, se dice que su poder puede superar al de su padre y a vegeta",
        race: "Human - Saiyan"
    },

    {
        name: "Piccoro",
        power: 22000,
        img: "http://assets.stickpng.com/images/584e837f6a5ae41a83ddee3b.png",
        dscr: "Es el Namakiano mas poderoso, y uno de los unicos que sobrevivio.",
        race: "namek"
    },

    {
        name: "Krillin",
        power: 7000,
        img: "https://e7.pngegg.com/pngimages/194/55/png-clipart-krillin-goku-beerus-frieza-trunks-disco-ball-hand-vertebrate.png",
        dscr: "Segun el creador, el es el humano mas fuerte",
        race: "Human"
    },
];


const selfPower = parseInt(
    prompt(
        "Veo que no estas en la base de datos, dime de cuanto es tu nivel de pelea por favor"
    )
);

alert(selfPower + " no es un mal nivel pero podrias mejorar");

const time = Number(prompt("Por cuantos dias te gustaria entrenar?"));

function train(days, power) {
    days = time;
    power = selfPower;
    train = power * 1.1 * days;
    alert(
        "Eso estuvo bien no? ahora tu nivel es de " +
        train +
        ", pero pasemos a algo mas dificil!"
    );
}

train();

alert("Podras elegir un contrincante entre  los siguientes: ");

for (const personaje of personajes) {
    alert(personaje.name + ": " + personaje.power);
}

function reask() {
    let tryAgain = prompt("No entendi con quien quieres pelar, o ese guerrero no estaba en la lista, quieres intentar de nuevo? contesta si o no");
    if (tryAgain === "si") {
        oponent();
    } else if (tryAgain === "no") {
        alert("Genial, no es necesario que pelees todavia!!");
    } else {
        alert("Demasiados errores, fallo en la matrix");
    }
}


function oponent() {
    let oponentChosen = prompt("A quien te gustaria enfrentarte ahora?").toLowerCase();
    switch (oponentChosen) {
        case "krillin":
            oponentChosen = capitalizeFirstLetter(oponentChosen);
            let personaje = personajes.find(pj => pj.name === oponentChosen);
            alert(`${oponentChosen}, tiene ${personaje.power} de poder`);
            break;
        case "piccoro":
            oponentChosen = capitalizeFirstLetter(oponentChosen);
            personaje = personajes.find(pj => pj.name === oponentChosen);
            alert(`${oponentChosen}, tiene ${personaje.power} de poder`);
            break;
        case "gohan":
            oponentChosen = capitalizeFirstLetter(oponentChosen);
            personaje = personajes.find(pj => pj.name === oponentChosen);
            alert(`${oponentChosen}, tiene ${personaje.power} de poder`);
            break;
        case "vegeta":
            oponentChosen = capitalizeFirstLetter(oponentChosen);
            personaje = personajes.find(pj => pj.name === oponentChosen);
            alert(`${oponentChosen}, tiene ${personaje.power} de poder`);
            break;
        case "goku":
            oponentChosen = capitalizeFirstLetter(oponentChosen);
            personaje = personajes.find(pj => pj.name === oponentChosen);
            alert(`${oponentChosen}, tiene ${personaje.power} de poder`);
            break;
        default:
            reask();
    }
}
oponent();

function capitalizeFirstLetter(str) {
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalized;
}