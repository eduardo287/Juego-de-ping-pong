export class Ball{
    posX
    posY
    altura
    ancho
    color
    canva
    n
    y

    constructor(canva,posX = 10,posY = 10,altura = 20,ancho = 20,color = 'white'){
        this.posX = posX
        this.posY = posY
        this.altura = altura
        this.ancho = ancho
        this.color = color
        this.canva = canva
        this.n = -5
        this.y = 0
    }
    drawBall(){
        this.canva.fillStyle = this.color
        this.canva.fillRect(this.posX,this.posY,this.ancho,this.altura)
    }
    moveBall(player1,player2){
        /**
         * Evaluacion de la posicion del jugador para desviar la pelota
         */
        if(this.posY-30 >= player1.posY-70 && this.posY <= player1.posY+70 && this.posX === 25){
            this.n = 5
            if(player1.posY>=155  && player1.posY <= 170){
                this.y = 3
            }
        }else if(this.posY-30 >= player1.posY-70 && this.posY <= player1.posY+70 && this.posX === 755){
            this.n = -5
            if(player2.posY>=155  && player2.posY <= 170){
                this.y = 3
            }
        }
        /**
         * Evaluacion de la posición de la pelota en caso de que el jugador no se llegue para desviarla
         */
        if(this.posX === 775){
            this.n = -5
        }else if(this.posX>=0 && this.posX <= 10){
            this.n = 5
        }
        /**
         * fijar limite superior e inferior de rebote de la pelota
         */
        if(this.posY === 476){
            this.y = -3
        }else if(this.posY === 5){
            this.y = 3
        }
        this.posY+=this.y
        this.posX+=this.n
    }
}