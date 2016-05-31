var CLOTHES_AMOUNT = 20,
    CLOTHES_CONTAINER_ID = "clothes-container",
    MAX_DECORATORS_DEPTH = 3;
    
var clothesContainer = document.getElementById(CLOTHES_CONTAINER_ID);
    
for(var i = 0; i < CLOTHES_AMOUNT; i++) {
    var shirt = getRandomShirt();
    shirt.render();
    clothesContainer.appendChild(shirt.getContent());
}

function getRandomShirt() {
    var shirt = new Shirt(),
        decaratorsDepth = Math.round(Math.random() * MAX_DECORATORS_DEPTH);
    console.group("shirt");
    for(var i = 0; i < decaratorsDepth; i++) {
        shirt = decorate(shirt);
        console.log(shirt);
    }
    console.groupEnd();
    return shirt;
}
    
function decorate(shirt) {
   var rndValue = Math.random();
   if (rndValue <= 0.325) {
       return new LSizedShirtDecorator(shirt);
   } else if (rndValue <= 0.65) {
       return new ColorlessShirtDecorator(shirt);
   } else {
       return new HighlightedShirtDecorator(shirt);
   }
}