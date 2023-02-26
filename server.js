window.onload = function(){
    if (performance.navigation.type == performance.navigation.TYPE_RELOAD){
        let arr = [
            "./images/dice1.png", 
            "./images/dice2.png", 
            "./images/dice3.png", 
            "./images/dice4.png", 
            "./images/dice5.png", 
            "./images/dice6.png"
        ];
        
        let p1 = Math.random()*6;
        
        let p2 = Math.random()*6;
    
        
        document.getElementById("img1").src = arr[parseInt(p1)];
        
        document.getElementById("img2").src = arr[parseInt(p2)];
        
        if (parseInt(p1) == parseInt(p2)){
            document.getElementById("title").innerText = "Draw!";
        } else if(parseInt(p1) > parseInt(p2)){
            document.getElementById("title").innerText = "Player 1 Wins!";
        }
        else {
            document.getElementById("title").innerText = "Player 2 Wins!";
        }
    }
    
}


