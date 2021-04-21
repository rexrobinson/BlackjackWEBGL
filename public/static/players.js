import { availWidth, sArray } from './main.js'


export default class Players {
  constructor(who,game) {
    this.game = game
    this.cardCount = 0
    this.hand = []
    this.player = who
    this.hold = false
    this.score = 0
    this.hiddenScore = 0
    this.busted = this.score > 21 ? true : false
    this.win = false
    this.lose = false
    this.count = 0
    this.cPosition = -(availWidth / 2.25)
    this.theta = 0
    this.genHand()
  }

  
  genHand() {
    let choice
    let index
  
    for (let i=0; i<2; i++) {
      choice = this.game.deck[Math.floor(Math.random()*this.game.deck.length)]
      index = this.game.deck.indexOf(choice)
        
      if (this.player == 'dealer' && this.cardCount == 0) {
        this.game.deck[index]['show_back'] = true
      }
  
      this.game.deck.splice(index,1)
      this.hand.push(choice)
      this.cardCount == 0 ? this.hiddenScore = 0 : this.hiddenScore += choice.value[0]
      this.cardCount += 1
      this.score += choice.value[0]
    }
  }

  
  drawCard(p5) {
    let choice
    let index

    if (this.cardCount <= 4 && this.busted == false) {
      choice = this.game.deck[Math.floor(Math.random()*this.game.deck.length)]
      index = this.game.deck.indexOf(choice)
      this.game.deck.splice(index,1)
      this.hand.push(choice)
      this.cardCount += 1
      this.score += choice.value[0]
      sArray.push(this.cPosition)
      this.updateScore(p5)
    } else {
      updateStatusMsg(`Maximum cards dealt - Dealer's Turn`)
      statusMsgDiv.center()
    }
  }

  renderCards(p5) {
    let card
    let y = (this.player == 'player' ? 200 : -200)

    for (let x of this.hand) {
      card = x.data
      p5.push()
      p5.translate(sArray[this.count],y)
      
      if (x.show_back == false) {
         //x.show_back == false ? p5.texture(x.skin) : p5.normalMaterial()
        p5.texture(x.skin)
      } else {
        //this.game.genBack(x)
        p5.normalMaterial()
      }

      card.create(p5)
      if (sArray[this.count] <= this.cPosition) {
        sArray[this.count] += 20
      }
      this.cPosition += 200
      p5.pop()
      this.count += 1
    }
    this.count = 0
    this.cPosition = -(availWidth / 2.25)
  }

  updateScore() {
    if (this.player == 'player') {
      this.game.pScoreDiv.elt.innerHTML = `Player Score: ${this.score}`
    } else {
      this.game.dScoreDiv.elt.innterHTML = `Dealer Score: ${this.score}`
    }

    if (this.score > 21) {
      this.busted = true
      this.game.updateStatusMsg(`BUSTED - ${this.player.toUpperCase()} LOSES`)
      this.game.statusMsgDiv.center()
      this.game.btn.remove()
    }
  }
}