function AbstractFactoryPopulation() {
    
}

AbstractFactoryPopulation.prototype.createAnimal = function() {
    console.error("AbstractFactoryPopulation: createAnimal");
};

AbstractFactoryPopulation.prototype.createPerson = function() {
    console.error("AbstractFactoryPopulation: createPerson");
};