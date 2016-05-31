var isStarted = false,
    populationFactory = null,
    greenFactory = new GreenPopulationFactory(),
    redFactory = new RedPopulationFactory();
        
document.querySelector("#greenFactory").addEventListener("click", function() {
    populationFactory = greenFactory;
    selectFactoryIcon(this);
    if(isStarted === false) {
        start();
    }
});
        
document.querySelector("#redFactory").addEventListener("click", function() {
    populationFactory = redFactory;
    selectFactoryIcon(this);
    if(isStarted === false) {
        start();
    }
});

function selectFactoryIcon(view) {
    document.querySelector("#redFactory").classList.remove("active");
    document.querySelector("#greenFactory").classList.remove("active");
    view.classList.add("active");
}

function addPerson() {
    var person = populationFactory.createPerson();
    person.move();
}
    
function addAnimal() {
    var animal = populationFactory.createAnimal();
    animal.hide();
}

function start() {
    isStarted = true;
    addPerson();
    addAnimal();
    setInterval(addPerson, 3000);
    setInterval(addAnimal, 2000);
}