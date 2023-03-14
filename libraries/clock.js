const DateTime = luxon.DateTime

class Clock {
  dateTime
  hour
  minutes
  seconds

  constructor() {
    noStroke()
    angleMode(DEGREES)
    translate(width / 2, height * 0.4)
    textAlign(CENTER, CENTER)
  }

  drawClock() {
    push()
    translate(width / 2, height * 0.4)
    this.update()
    this.drawClockFace()
    this.drawHourHand()
    this.drawMinuteHand()
    this.drawSecondHand()
    pop()
  }

  update() {
    const currentSelection = select.value()
    this.dateTime = DateTime.now().setZone(timeZones[currentSelection])
    this.hour = this.dateTime.hour
    this.minutes = this.dateTime.minute
    this.seconds = this.dateTime.second
  }

  drawClockFace() {
    fill(0)
    circle(0, 0, width * 0.53)
    fill(255)
    circle(0, 0, width / 2)
    fill(0)
    textSize(width * 0.04)
    for (let num = 1; num <= 12; num++) {
      const angle = map(num, 1, 12, -60, 270)
      text(num, cos(angle) * width * 0.22, sin(angle) * width * 0.22)
    }
  }

  drawHourHand() {
    fill(0)
    const angle = map(this.hour + this.minutes / 60 + this.seconds / 3600, 0, 24, -90, 630)
    push()
    rotate(angle)
    ellipse(width * 0.08, 0, width * 0.16, width * 0.02)
    pop()
  }

  drawMinuteHand() {
    fill(0)
    const angle = map(this.minutes + this.seconds / 60, 0, 60, -90, 270)
    push()
    rotate(angle)
    ellipse(width * 0.1, 0, width * 0.2, width * 0.01)
    pop()
  }

  drawSecondHand() {
    fill(255, 0, 0, 150)
    const angle = map(this.seconds, 0, 60, -90, 270)
    push()
    rotate(angle)
    ellipse(width * 0.1, 0, width * 0.2, width * 0.005)
    pop()
    fill(0)
    circle(0, 0, width * 0.02)
  }
}
