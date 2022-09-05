const read =  document.querySelector("#read");
let text = document.querySelector("#text");


read.addEventListener('click', function(){
    let bolee = document.querySelector("#number").value;
    console.log(bolee);
    
    // Pour gérer les chiffre qui ne sont pas compris entre 0 et 99

    if (bolee<0 || bolee>99 ){
        text.innerHTML = "Il nous faudrait un nombre compris entre 99 et 0 pour tout ça .";
    }

    // Pour gérer le chiffre 2 pour lequel la deuxième partie de la chanson sera au singulier

    else if (bolee==2){
            text.innerHTML = bolee + " bolées de cidre sur le mur, " + bolee + " bolées sans alcool.</br>  Bois en un et au suivant ! " + (bolee-1) + " bolée de cidre sur le mur .";
    }

    // Pour gérer le chiffre 1 qui pour lequel les paroles change pour ne pas avoir de s et ainsi pour la deuxième partie de la chanson qui sera sans bolée

    else if (bolee==1){
        text.innerHTML = bolee + " bolée de cidre sur le mur, " + bolee + " bolée sans alcool.</br> Bois en un et au suivant ! Plus de bolées de cidre sur le mur.";
    }

    // Dans le cas où rien n'est rentrer tout en validant

    else if(bolee==""){
            text.innerHTML = "Hey ! Il faudrait nous mettre un petit nombre pour faire fonctionner tout ça =)";
    }

    // Dans le cas où le chiffre rentrer est 0 et donc pour le coup sans rien à boire , ce qui est plutôt triste

    else if(bolee==0){
        text.innerHTML = "Plus de bolées de cidre sur le mur, plus de bolées sans alcool.</br> Vas au supermarché pour en acheter, 99 bolées de cidre sur le mur.";
    }

    // Ici pour gérer le reste qui sera compris entre 3 et 99 comme on à gerer toutes les exceptions

    else{
        text.innerHTML = bolee + " bolées de cidre sur le mur, " + bolee + " bolées sans alcool. </br> Bois en un et au suivant ! " + (bolee-1) + " bolées de cidre sur le mur .";
    }
})
