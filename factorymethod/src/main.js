var factories = [
        new BlueBrickFactory(),
        new GreenBrickFactory(),
        new OrangeBrickFactory(),
        new RedBrickFactory()
    ],
    wall = document.querySelector("#wall"),
    info = document.querySelector("#bricksAmount");
        
document.querySelector("#buildControl").addEventListener("click", function() {
    var brickFactory = factories[Math.floor(Math.random() * factories.length)],
        brick = brickFactory.create();
    wall.appendChild(brick.content);
    info.innerText = parseInt(info.innerText) + brick.size;
});