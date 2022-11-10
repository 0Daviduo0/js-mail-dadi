let email = prompt("Scopri se sei invitato!");
console.log(email);

const invitati = ["davide0400@gmail.com", "gianpippo@email.com", "esmeralda@hotmail.ru"];
console.log(invitati)

var controllo = 0;

for (let i = 0; i < invitati.length; i++) {

    let invitato = invitati[i];

    console.log(invitato);

    if (email == invitato){
        controllo = 1
    }
}

if (controllo == 0){
    console.log("Mhm, no, non sei invitato😢")
}
else{
    console.log("Sei in lista😎!")
}
