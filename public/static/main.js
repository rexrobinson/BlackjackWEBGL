//import p5 from './p5.js'
import Players from './players.js'
import {genBack, genDeck, genButton, genStatusMsg, genPlayerScoreDiv, genDealerScoreDiv } from './game.js'


export const availWidth = window.innerWidth
export const availHeight = window.innerHeight
const startInterval = -(availWidth)
export let sArray = [startInterval,startInterval]
export let player
export let dealer


new p5( function(p5) {

  p5.setup = function() {
    p5.createCanvas(availWidth, availHeight, p5.WEBGL)
    genDeck(p5)
    //genBack()
    player = new Players('player')
    dealer = new Players('dealer')
    genButton(p5)
    genStatusMsg(p5)
    genPlayerScoreDiv(p5)
    genDealerScoreDiv(p5)
  }

  p5.draw = function() {
    p5.background(0,100,0)
    player.renderCards(p5)
    dealer.renderCards(p5)
    //noLoop()  
  }
})


// function setup() {
//   createCanvas(availWidth, availHeight, WEBGL)
//   genDeck()
//   //genBack()
//   player = new Players('player')
//   dealer = new Players('dealer')
//   genButton()
//   genStatusMsg()
//   genPlayerScoreDiv()
//   genDealerScoreDiv()
// }

  
// function draw() {
//   background(0,100,0)
//   player.renderCards()
//   dealer.renderCards()
//   noLoop()   
// }


// window.setup = setup
// window.draw = draw