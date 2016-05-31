function GreenPopulationFactory() {
    
}
GreenPopulationFactory.prototype = Object.create(AbstractFactoryPopulation.prototype);

GreenPopulationFactory.prototype.createAnimal = function() {
    return new GreenAnimal();
};

GreenPopulationFactory.prototype.createPerson = function() {
    return new GreenPerson();
};