var gameField = document.querySelector("#game-field");
    
function addDino() {
    var dino = DinoFactory.getInstance().createRandomDino();
    gameField.appendChild(dino.getEntity());
    DinoInfo.getInstance().addDino();
}

setInterval(addDino, 2000);
addDino();