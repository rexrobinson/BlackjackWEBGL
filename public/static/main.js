import Players from './players.js'
import Game from './game.js'


export const availWidth = window.innerWidth
export const availHeight = window.innerHeight
const startInterval = -(availWidth)
export let sArray = [startInterval,startInterval]
export let player
export let dealer
export let game


new p5( function(p5) {

  p5.setup = function() {
    p5.createCanvas(availWidth, availHeight, p5.WEBGL)
    game = new Game()
    game.genDeck(p5)
    player = new Players('player',game)
    dealer = new Players('dealer',game)
    game.genButton(p5)
    game.genStatusMsg(p5)
    game.genPlayerScoreDiv(p5)
    game.genDealerScoreDiv(p5)
  }

  p5.draw = function() {
    p5.background(0,100,0)
    player.renderCards(p5)
    dealer.renderCards(p5)
    //p5.noLoop()  
  }
})


// window.setup = setup
// window.draw = draw