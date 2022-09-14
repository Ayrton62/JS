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
        img: "https://www.pngmart.com/files/2/Vegeta-PNG-Photos.png",
        dscr: "Es muy orgulloso ten cuidado, no te dejara vencerlo",
        race: "Saiyan"
    },

    {
        name: "Gohan",
        power: 34000,
        img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84dc13b7-a2e7-4b45-83ec-311e72e82900/ddmjuhn-d96f723c-2abf-4a03-ae6d-9f3c034a043c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg0ZGMxM2I3LWEyZTctNGI0NS04M2VjLTMxMWU3MmU4MjkwMFwvZGRtanVobi1kOTZmNzIzYy0yYWJmLTRhMDMtYWU2ZC05ZjNjMDM0YTA0M2MucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ld-YmuCCfORBh5jrPUvl5Cf11JMTAF_OLTimXsSvqIQ",
        dscr: "No lo hagas enojar, se dice que su poder puede superar al de su padre y a vegeta",
        race: "Human - Saiyan"
    }
]

let userStat = {
    name: prompt("¿Como te LLamas?"),
    power: prompt("¿Cuanto poder de pelea tienes?"),
    img: "https://w7.pngwing.com/pngs/529/687/png-transparent-person-illustration-human-body-computer-icons-anatomy-homo-sapiens-human-icon-miscellaneous-hand-human.png",
    dscr: "Un simple humano",
    race: "Humano"
}

personajes.push(userStat)

function personajeCard(personajes) {

    const pjCard = document.getElementById("contCards");

    pjCard.innerHTML = "";

    personajes.forEach(personaje => {
        const divPj = document.createElement("div");
        divPj.classList.add("pj");
        divPj.innerHTML = `
        <h3 class="tituloPJ">${personaje.name}</h3>
        <img src="${personaje.img}" alt="${personaje.dscr}">
        <p class="powerPj"> ${personaje.power}</p>
        `;
        pjCard.append(divPj);
    })
}
personajeCard(personajes);