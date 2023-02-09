export class Player{
    color
    altura
    ancho
    posX
    posY
    context
    nombre
    puntos

    constructor(nombre = 'player',context = null,color = 'white', altura = 80, ancho = 10, posX = 15, posY =200){
        this.color = color
        this.altura = altura
        this.ancho = ancho
        this.posX = posX
        this.posY = posY
        this.context = context
        this.nombre = nombre
        this.puntos = 0
    }
    drawPlayer(){
        this.context.fillStyle = this.color
        this.context.fillRect(this.posX,this.posY,this.ancho,this.altura)
    }
    movePlayer(key){
        switch(key){
            case 'w' : this.posY = (this.posY>10) ? this.posY-=15 : this.posY = this.posY ; break;
            case 's' : this.posY =(this.posY < 410) ?  this.posY+=15 : this.posY = this.posY; break;
        }
    }
}