let img = document.querySelector("#img");
let Start = document.querySelector("#Start");
let Stop = document.querySelector("#Stop");
let startImg;
count = 0;


Start.addEventListener("click",function(){
    startImg = setInterval(run,50);
    function run(){

        if(count==1100){
            clearInterval(startImg)
            count = 0;
        } 
        else{
            count+= 5;
            img.style.marginLeft = count+ "px";
        }

    }
});

Stop.addEventListener("click", function(){
    clearInterval(startImg)
});

