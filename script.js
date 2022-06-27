const read =  document.querySelector("#read");
let text = document.querySelector("#text");


read.addEventListener('click', function(){
    let nbr = document.querySelector("#number").value;
    console.log(nbr);

    if (nbr>2){
        text.innerHTML = nbr + " bolées de cidre sur le mur, " + nbr + " bolées sans alcool. Bois en un et au suivant ! " + nbr-1 + "boléees de cidre sur le mur .";
    }

})