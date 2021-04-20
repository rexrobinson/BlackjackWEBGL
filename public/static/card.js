export default class Card {
  constructor() {
    this.x = 150
    this.y = 200
    this.z = 1
  }
  
  create(p5) {
    p5.box(this.x, this.y, this.z)
  }
}