var brickFactory = new BrickFactory(),
    wall = document.querySelector("#wall"),
    info = document.querySelector("#bricksAmount");
        
document.querySelector("#buildControl").addEventListener("click", function() {
    var type = document.querySelector("#typeSelect").value,
        brick = brickFactory.create(type);
    wall.appendChild(brick.content);
    info.innerText = parseInt(info.innerText) + brick.size;
});