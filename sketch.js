var addition,subtraction,multiplication,division

function setup() {
  createCanvas(800,400);
  num1 = prompt("Enter your first number here.")
  num2 = prompt("Enter your second number here.")
  add = createButton("add")
  add.position(50,70)
  add.mousePressed(function(){
    addition = parseInt(num1)+parseInt(num2)
  })

  subtract = createButton("subtract")
  subtract.position(50,100)
  subtract.mousePressed(function(){
    subtraction = parseInt(num1)-parseInt(num2)
  })

  multiply = createButton("multiply")
  multiply.position(50,130)
  multiply.mousePressed(function(){
    multiplication = parseInt(num1)*parseInt(num2)
  })

  divide = createButton("divide")
  divide.position(50,160)
  divide.mousePressed(function(){
    division = parseInt(num1)/parseInt(num2)
  })
}

function draw() {
  background(255,255,255);  
  text(addition,100,85)
  text(subtraction,120,115)
  text(multiplication,115,145)
  text(division,105,175)
}