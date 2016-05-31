var wolf = new Wolf(),
    bee = new Bee(),
    bird = new Bird(),
    penguin = new Penguin();

wolf.setSuccessor(bee);
bee.setSuccessor(bird);
bird.setSuccessor(penguin);

[Food.MEAT, Food.FLOWER, Food.WORM, Food.FISH, Food.CARROT].forEach(function(type) {
  var food = document.querySelector('#' + type);
  food.onclick = function() {
    wolf.handleRequest({type: type});
  }
});
