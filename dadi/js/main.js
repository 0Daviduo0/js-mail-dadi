// Richiesta numero
let numeroPersona = (Math.round(Math.random() * 5) + 1);

console.log("Numero persona",numeroPersona);

// Numero CPU
let numeroCPU = (Math.round(Math.random() * 5) + 1);

console.log("Numero CPU",numeroCPU);


    if (numeroPersona < numeroCPU){
        console.log("Ahaha, Looser🫵🤣")
    }
    else if (numeroPersona == numeroCPU){
        console.log("Pareggio, per ora🙄")
    }
    else{
        console.log("Hai vinto, hai ottenuto la ludopatia🥳")
    }
