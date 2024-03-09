let player_1 = prompt( "Enter the name of Player 1: ");
document.getElementById("player_1").textContent = (player_1.slice(0,1)).toUpperCase() + player_1.slice(1,).toLowerCase();
let player_2 = prompt("Enter the name of Player 2 :");
document.getElementById("player_2").textContent = (player_2.slice(0,1)).toUpperCase() + player_2.slice(1,).toLowerCase();
let p1_point = 0; let p2_point  = 0;
function roll_dice(){
    let dice_1 = Math.floor(Math.random()*6)+1;
    let dice_2 = Math.floor(Math.random()*6)+1;
    
    // changing img of dice 1
    if( dice_1 === 1){
        document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
    }
    else if( dice_1 === 2){
        document.querySelector(".img1").setAttribute("src", "./images/dice2.png");  
    }
    else if( dice_1 === 3){
        document.querySelector(".img1").setAttribute("src", "./images/dice3.png");  
    }
    else if( dice_1 === 4){
        document.querySelector(".img1").setAttribute("src", "./images/dice4.png");  
    }
    else if( dice_1 === 5){
        document.querySelector(".img1").setAttribute("src", "./images/dice5.png");  
    }
    else{
        document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
    }

    //changin img of dice 2
    if( dice_2 === 1){
        document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
    }
    else if( dice_2 === 2){
        document.querySelector(".img2").setAttribute("src", "./images/dice2.png");  
    }
    else if( dice_2 === 3){
        document.querySelector(".img2").setAttribute("src", "./images/dice3.png");  
    }
    else if( dice_2 === 4){
        document.querySelector(".img2").setAttribute("src", "./images/dice4.png");  
    }
    else if( dice_2 === 5){
        document.querySelector(".img2").setAttribute("src", "./images/dice5.png");  
    }
    else{
        document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
    }
    if(dice_1 > dice_2){
        p1_point++;
        document.querySelector("#p1_point span").textContent = p1_point;
    }
    else if( dice_1 == dice_2){
        //do nothing
    }
    else{
        p2_point++;
        document.querySelector("#p2_point span").textContent = p2_point;
    }
}