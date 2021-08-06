document.onkeydown = function(e){
    if(e.key === 'w'){
        console.log("Key code is : ",e.keyCode);
        dino = document.querySelector(".dino");
        dino.classList.add('animateDino');
        setTimeout(() =>{
            dino.classList.remove('animateDino');
        },700 );
    }
}
