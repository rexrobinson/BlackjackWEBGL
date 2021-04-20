import p5 from 'p5';

const availWidth = window.innerWidth
const availHeight = window.innerHeight


const sketch = (s) => {
    let ace;
    let i = 0
    let theta = 0
    let pos1;
    let pos2;
    let shrink = false
    let cieling = availWidth / 2
    let start = -(availHeight)
    let card1;
    let card2;


    //s.preload = () => {
    //    try {
    //        ace = s.loadImage('../static/sa.jpg')
    //    }
    //    catch {
    //        console.log('preload error')    
    //    }
    //}

    s.setup = () => {
        try {
            s.createCanvas(availWidth, availHeight, s.WEBGL)
            s.angleMode(s.DEGREES)
            card1 = new Card(1,'wendall')
            card2 = new Card(1,'wendall')
        }
        catch {
            console.log('setup error')
        }
    }

    s.draw = () => {
        try {
            s.background(220)
            s.translate(start,-250)
            s.rotate(theta)
            s.rectMode(s.CENTER)

            pos1 = card1.create()
            s.box(pos1.x, pos1.y, pos1.z)
            if (start < -600) {
                start += 2.5
            }

            pos2 = card2.create()
            s.box(pos2.x, pos2.y, pos2.z)
            if (start < 1000) {
                start += 2.5
            }


            theta += 1            


            //s.rotateX(s.frameCount * .01);
            //s.rotateY(s.frameCount * 0.01);
            //s.texture(ace)
            //s.push()
            //s.translate(100,0)
            //s.rotateX(144)
            //s.rotateY(10000)
            //s.rotateZ(theta)
            //s.translate(-300,-250)
            //s.box(150, 200, 2)
            //s.pop()
            //s.fill(255, 204, 0)
            //switch (true) {
            //  case pos.x == 150:
            //    shrink = false
            //    pos.x += 1
            //    break
            //    
            //  case pos.x == cieling:
            //    shrink = true
            //    pos.x -= 1
            //    break

            //  case shrink:
            //    pos.x -= 1
            //    break

            //  case !shrink:
            //    pos.x += 1
            //    break
            //}
        }
        catch {
            console.log("draw error")
        }
    }
}


class Card {
  constructor(cardID,player) {
    this.cardID = cardID
    this.player = player
    this.x = 150
    this.y = 200
    this.z = 2 
  }

  create() {
    return {
     'x': this.x,
     'y': this.y,
     'z': this.z
    }
  }

  updateX(xVal) {
    console.log('before',this.x)
    this.x = xVal
    console.log('after',this.x)
  }


}

const sketchInstance = new p5(sketch)
