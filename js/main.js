'use strict'
import {Player} from './Player.js'
import {Ball} from './Ball.js'
let lienzo = document.getElementById('lienzo')
let context = lienzo.getContext('2d')
const player1 = new Player('eduardo',context)
const player2 = new Player('Alberto',context,'white',80,10,775)
const ball = new Ball(context,400,230)
const countP1 = document.getElementById('player1')
const countP2 = document.getElementById('player2')
countP1.innerHTML = player1.puntos
document.addEventListener('keydown',(e) => player1.movePlayer(e.key))
document.addEventListener('keydown',(e) => player2.movePlayer(e.key))
let n = 5

function winPlayer(){
    if(ball.posX === 10){
        ++player2.puntos
    }else if(ball.posX === 775){
        ++player1.puntos
    }       
    if(player1.puntos === 3){
        alert(player1.nombre+' ha ganado')
        player1.puntos = 0
        player2.puntos = 0
    }else if(player2.puntos === 3){
        alert(player2.nombre+' ha ganado')
        player1.puntos = 0
        player2.puntos = 0
    }   
}
function updateCanva(){
    const TIME_OUT = 15
    const WIDTH = 800
    const HEIGHT = 500
    context.clearRect(0,0,WIDTH,HEIGHT)
    player1.drawPlayer()
    ball.drawBall()
    ball.moveBall(player1,player2)
    player2.drawPlayer()
    countP1.innerHTML = player1.nombre +'<br>'+player1.puntos
    countP2.innerHTML = player2.nombre +'<br>'+player2.puntos
    winPlayer()
    
    setTimeout(updateCanva,TIME_OUT)
}
window.onload = ()=> {
    updateCanva()
}