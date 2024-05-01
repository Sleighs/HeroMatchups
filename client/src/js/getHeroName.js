function capitalizeFirstLetter([ first='', ...rest ]) {
	return [ first.toUpperCase(), ...rest ].join('');
}

export default function getHeroName(name, spaces) {
    var newName = capitalizeFirstLetter(name);

    if (name === "Dva" || name === "DVa" || name === "D.va" || name === "D.Va"){
        if (spaces){
            newName = "D.Va"
        } else {
            newName = "Dva"
        }
    } else if (name === "JunkerQueen" || name === "Junkerqueen" || name === "Junker queen" || name === "Junker Queen"){
        if (spaces){
            newName = "Junker Queen"
        } else {
            newName = "JunkerQueen"
        }
    } else if (name === "WreckingBall" || name === "Wreckingball" || name === "Wrecking ball" || name === "Wrecking Ball"){
        if (spaces){
            newName = "Wrecking Ball"
        } else {
            newName = "WreckingBall"
        }
    } else if (name === "Soldier76" || name === "Soldier:76" || name === "Soldier 76" || name === "Soldier: 76"){
        if (spaces){
            newName = "Soldier: 76"
        } else {
            newName = "Soldier76"
        }
    } else if (name === "Torbjorn" || name === "Torbjörn"){
        newName = "Torbjorn"
    } else if (name === "McCree" || name === "Mccree"){
        newName = "Cassidy"
    } 

    return newName
}