var controls = Array.prototype.map.call(document.querySelector("#controls").childNodes, function(control) {
    return new Control(control);  
});

var widgets = [
    new CharWidget(document.querySelector("#widget-char")),
    new ColorWidget(document.querySelector("#widget-color")),
    new TypeWidget(document.querySelector("#widget-type"))
];

controls.forEach(function(control) {
    widgets.forEach(function(widget) {
        control.attach(widget);     
    });
});