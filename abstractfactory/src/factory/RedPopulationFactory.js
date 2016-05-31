function RedPopulationFactory() {
    
}
RedPopulationFactory.prototype = Object.create(AbstractFactoryPopulation.prototype);

RedPopulationFactory.prototype.createAnimal = function() {
    return new RedAnimal();
};

RedPopulationFactory.prototype.createPerson = function() {
    return new RedPerson();
};