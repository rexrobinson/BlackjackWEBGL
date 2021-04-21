import Card from './card.js'
import { availWidth, availHeight, player, dealer } from './main.js'



export default class Game {
  constructor() {
    this.btn
    this.deck = []
    this.pScoreDiv
    this.dScoreDiv
    this.statusMsg = 'Player Hold or Deal'
    this.statusMsgDiv
  }

  genStatusMsg(p5) {
    this.statusMsgDiv = p5.createDiv(this.statusMsg)
    this.statusMsgDiv.style('font-size', '48px')
    this.statusMsgDiv.style('color','white')
    this.statusMsgDiv.position(availWidth / 2, availHeight / 2)
    this.statusMsgDiv.center()
  }
    
    
  updateStatusMsg(msg) {
    this.statusMsgDiv.elt.innerHTML = msg
  }
    
    
  genPlayerScoreDiv(p5) {
    this.pScoreDiv = p5.createDiv(`Player Score: ${player.score}`)
    this.pScoreDiv.style('font-size', '32px')
    this.pScoreDiv.style('color','white')
    this.pScoreDiv.position(availWidth * .025, availHeight - 100)
  }
    
    
  genDealerScoreDiv(p5) {
    this.dScoreDiv = p5.createDiv(`Dealer Score: ${dealer.hiddenScore}`)
    this.dScoreDiv.style('font-size', '32px')
    this.dScoreDiv.style('color','white')
    this.dScoreDiv.position(availWidth * .025, 100)
  }
    
    
  genBack(card) {
    console.log(card.skin)
    // this.back = createGraphics(150,200, WEBGL)
    // this.back.background(255)
    //back.ellipse(mouseX,mouseY, 20)
  }
    
    
  genDeck(p5) {
    let x
    let y
    let val
    
    for (let card of ['h','s','c','d']) {
      for (let i=2; i<11; i++) {
        x = p5.loadImage(`../static/cards/${card}${i}.jpg`)
        y = new Card()
        this.deck.push({
          'id': `${card}${i}`,
          'skin': x,
          'value': [parseInt(i),parseInt(i)],
          'show_back': false,
          'data': y
        })
      }
      for (let royal of ['a','j','q','k']) {
        x = p5.loadImage(`../static/cards/${card}${royal}.jpg`)
        y = new Card()
        val = (royal == 'a' ? [1,11] : [10,10])
        this.deck.push({
          'id': `${card}${royal}`,
          'skin': x,
          'value': val,
          'show_back': false,
          'data': y
        })
      }
    }
  }
    
    
  genButton(p5) {
    this.btn = p5.createButton('HIT ME');
    this.btn.position(1500, 600);
    this.btn.mousePressed( function() {
      player.drawCard(p5)
    })
  }  
}


