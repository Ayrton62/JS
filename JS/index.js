const elegido = prompt("Hola entrenador, con que pokemon iras a la batalla. escribe solamente la inicial del pokemon que te gustaria, Puedes elegir a Charmander, Squirtle o Bulbasaur").toLowerCase()

if (elegido === "c"){
    alert("Muchos dicen que es el mas poderoso, te deseo suerte de igual forma.")
}else if (elegido === "s"){
    alert("Buena eleccion, estoy seguro que tu aventura tendra buen comienzo.")
}else if (elegido === "b"){
    alert("Es un muy buen pokemon para batallas largas.")
}else{
    alert("Creo que no entendiste muy bien las instrucciones, te dare este caterpie para que te acompañe")
}