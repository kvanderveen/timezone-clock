let select
let clock

function setup() {
  createCanvas(windowWidth, windowHeight)
  select = drawSelect()
  clock = new Clock()
}

function draw() {
  background(220)
  clock.drawClock()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
  select.remove()
  select = drawSelect()
}
