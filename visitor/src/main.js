var field = new Field(document.querySelector('#field'));
field.addElement(new Rectangle(field.getView()));
field.addElement(new Circle(field.getView()));
field.addElement(new Rectangle(field.getView()));
field.addElement(new Circle(field.getView()));
field.addElement(new Circle(field.getView()));
field.addElement(new Rectangle(field.getView()));

var controlsArea = document.querySelector('#controls');
new ChangeBackgroundControl(controlsArea);
new ChangeBorderControl(controlsArea);

console.clear();
