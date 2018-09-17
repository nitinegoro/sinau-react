class Shape {
  	constructor(id) 
  	{
  		this._id = id;
  	}

  	move(x, y) {
    	this._x = x;
    	this._y = y;
  	}

  	getX() {
    	return this._x;
  	}
}

class Rectangle extends Shape {
  	constructor(id, height, width) 
  	{
  		super(id);
    	this._height = height;
    	this._width = width;
  	}
}

class Circle extends Shape {
  	constructor(id, radius) 
  	{
  		super(id);
  		this._radius = radius;
  	}
}

class Eye extends Shape {
  	constructor(x, color) 
  	{
  		super(x);
  		this._x = x;
  		this._color = color;
  	}

  	roll(rollAmount) {
  		this.move(this.getX() + rollAmount, this._y)
  	}

  	getMove() {
  		return this._x;
  	}
}

const shape = new Shape(1);
const circle = new Circle(1, 10);
const rectangle = new Rectangle(1, 100, 200);
const eye = new Eye(10, 'red');

shape.move(10,10);
eye.roll(10);

const classes = [shape, circle, rectangle, eye];

console.log(classes);

