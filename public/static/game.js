import Card from './card.js'
import { availWidth, availHeight, player, dealer } from './main.js'

export let btn
export let deck = []
export let pScoreDiv
export let dScoreDiv
export let statusMsg = 'Player Hold or Deal'
export let statusMsgDiv


export function genStatusMsg(p5) {
  statusMsgDiv = p5.createDiv(statusMsg)
  statusMsgDiv.style('font-size', '48px')
  statusMsgDiv.style('color','white')
  statusMsgDiv.position(availWidth / 2, availHeight / 2)
  statusMsgDiv.center()
}
  
  
export function updateStatusMsg(msg) {
  statusMsgDiv.elt.innerHTML = msg
}
  
  
export function genPlayerScoreDiv(p5) {
  pScoreDiv = p5.createDiv(`Player Score: ${player.score}`)
  pScoreDiv.style('font-size', '32px')
  pScoreDiv.style('color','white')
  pScoreDiv.position(availWidth * .025, availHeight - 100)
}
  
  
export function genDealerScoreDiv(p5) {
  dScoreDiv = p5.createDiv(`Dealer Score: ${dealer.hiddenScore}`)
  dScoreDiv.style('font-size', '32px')
  dScoreDiv.style('color','white')
  dScoreDiv.position(availWidth * .025, 100)
}
  
  
export function genBack() {
  back = createGraphics(150,200, WEBGL)
  back.background(255)
  //back.ellipse(mouseX,mouseY, 20)
}
  
  
export function genDeck(p5) {
  let x
  let y
  let val
  
  for (let card of ['h','s','c','d']) {
    for (let i=2; i<11; i++) {
      x = p5.loadImage(`../static/cards/${card}${i}.jpg`)
      y = new Card()
      deck.push({
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
      deck.push({
        'id': `${card}${royal}`,
        'skin': x,
        'value': val,
        'show_back': false,
        'data': y
      })
    }
  }
}
  
  
export function genButton(p5) {
  btn = p5.createButton('HIT ME');
  btn.position(1500, 600);
  btn.mousePressed( function() {
    player.drawCard(p5)
  })
}