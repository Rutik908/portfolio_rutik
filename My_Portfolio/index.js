const text = document.querySelector(".sec-change");


const textload = () => { 

    setTimeout (( ) =>{
        text.textContent ="Rutik Jadhav";
    }, 0);
    setTimeout (( ) =>{
        text.textContent ="web devloper";
    }, 4000);

    /*setTimeout (( ) =>{
        text.textContent ="f";
    }, 8000);*/
}

textload();
setInterval(textload,12000);