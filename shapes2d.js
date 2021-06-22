class Rectangle{
   
    constructor(x,y,width,heigth){
        this.points = [
            new Vector(2,[x,y]),
            new Vector(2,[x+width,y]),
            new Vector(2,[x+width,y+heigth]),
            new Vector(2,[x,y+heigth]),
            
        ]

        this.transformation = new Transformations()
        this.meiox = (this.points[0].get(1)+this.points[2].get(1))/2
        this.meioy = (this.points[0].get(2)+this.points[2].get(2))/2
        this.translatePoints = [
            new Vector(2,[this.points[0].get(1)-this.meiox,this.points[0].get(2)-this.meioy]),
            new Vector(2,[this.points[1].get(1)-this.meiox,this.points[1].get(2)-this.meioy]),
            new Vector(2,[this.points[2].get(1)-this.meiox,this.points[2].get(2)-this.meioy]),
            new Vector(2,[this.points[3].get(1)-this.meiox,this.points[3].get(2)-this.meioy]),
        ]
    }
    rotate(angulo){
        for(let i = 0; i <this.points.length;i++){
            this.points[i] = this.transformation.rotacao(this.points[i],"",angulo)
        }

    
    }

    translate(){
        for(let i = 0; i <this.points.length;i++){
            this.points[i] = this.transformation.translacao(this.points[i],-this.meiox,-this.meioy)
            
        }
      
        }
        
    translateCentro(){
        for(let i = 0; i <this.points.length;i++){
            this.points[i] = this.transformation.translacao(this.points[i],this.meiox,this.meioy)
            
        }
    }
    draw(){ 
        background("#fae")
        beginShape(TRIANGLES)
        vertex(this.points[0].get(1),this.points[0].get(2))
        vertex(this.points[1].get(1),this.points[1].get(2))
        vertex(this.points[2].get(1),this.points[2].get(2))
        
        vertex(this.points[2].get(1),this.points[2].get(2))
        vertex(this.points[3].get(1),this.points[3].get(2))
        vertex(this.points[0].get(1),this.points[0].get(2))
        endShape()
    }
}

class Line{
    
    constructor(x1,y1,x2,y2){
        this.points = [
            new Vector(2,[x1,y1]),
            new Vector(2,[x2,y2]),
        ]
        this.transformation = new Transformations()
        this.meiox = (this.points[0].get(1)+this.points[1].get(1))/2
        this.meioy = (this.points[0].get(2)+this.points[1].get(2))/2
    }
    
    draw(){
        beginShape()
        vertex(this.points[0].get(1),this.points[0].get(2))
        vertex(this.points[1].get(1),this.points[1].get(2))
        endShape()
    }
  
    rotate(angulo){

        for (let i =0 ; i<this.points.length;i++){
            this.points[i] = this.transformation.rotacao(this.points[i],"",angulo)
            //console.log(1)
        }
    }

    translate(){
        for(let i = 0; i <this.points.length;i++){
            this.points[i] = this.transformation.translacao(this.points[i],-this.meiox,-this.meioy)
            
        }
      
        }

    translateCentro(){
        for(let i = 0; i <this.points.length;i++){
            this.points[i] = this.transformation.translacao(this.points[i],this.meiox,this.meioy)
                
         }
        }      
}

class Circle{

    constructor(x,y,r,t){
        this.points = [
            new Vector(2,[x,y]),
            new Vector(2,[x+r,y]),
        ]
        
        this.transformation = new Transformations()
        this.points[0] = this.transformation.translacao(this.points[0],-this.points[0].get(1),-this.points[0].get(2))
        this.angulo = 360/t
        
        for(let i = 0; i < t;i++){
            let a = new Vector(2)
            for (let j = i;j <this.points.length;j++){
                
                //console.log(this.points[j])
                
                a = this.transformation.rotacao(this.points[j],"",this.angulo)
              
            }
            //console.log
            this.points.push(a)
            
           
        }

        //console.log(this.points)
        this.points[0] = this.transformation.translacao(this.points[0],this.points[0].get(1),this.points[0].get(2))
    }
    draw(){
        
        beginShape(TRIANGLES)
        for(let i = 0; i< this.points.length-1;i++){
            
            vertex(this.points[0].get(1),this.points[0].get(2))
            vertex(this.points[i].get(1),this.points[i].get(2))
            vertex(this.points[i+1].get(1),this.points[i+1].get(2))
        }
        endShape()
    }
    rotate(angulo){

        for (let i =0 ; i<this.points.length;i++){
            this.points[i] = this.transformation.rotacao(this.points[i],"",angulo)
           //console.log(1)
        }
    }

    translate(){
        for(let i = 0; i <this.points.length;i++){
            this.points[i] = this.transformation.translacao(this.points[i],-this.points[0].get(1),-this.points[0].get(2))
            
        }
      
        }

        translateCentro(){
            for(let i = 0; i <this.points.length;i++){
                this.points[i] = this.transformation.translacao(this.points[i],this.points[0].get(1),this.points[0].get(2))
                    
             }
            }   
}
class Triangle{

    constructor(x1,y1,x2,y2,x3,y3){
        this.points = [
            new Vector(2,[x1,y1]),
            new Vector(2,[x2,y2]),
            new Vector(2,[x3,y3]),
        ]
        this.transformation = new Transformations()
        this.meiox = (this.points[0].get(1)+this.points[1].get(1)+this.points[2].get(1))/3
        this.meioy = (this.points[0].get(2)+this.points[1].get(2)+this.points[2].get(2))/3
       // console.log(this.points)
    }

    rotate(angulo){

        for (let i =0 ; i<this.points.length;i++){
            this.points[i] = this.transformation.rotacao(this.points[i],"",angulo)
           // console.log(1)
        }
    }
    draw(){
        beginShape(TRIANGLES)

        
        vertex(this.points[0].get(1),this.points[0].get(2))
        vertex(this.points[2].get(1),this.points[1].get(2))
        vertex(this.points[1].get(1),this.points[2].get(2))
        endShape()
    }
    translate(){
        for(let i = 0; i <this.points.length;i++){
            this.points[i] = this.transformation.translacao(this.points[i],-this.meiox,-this.meioy)
            
        }
      
        }
        translateCentro(){
            for(let i = 0; i <this.points.length;i++){
                this.points[i] = this.transformation.translacao(this.points[i],this.meiox,this.meioy)
                    
             }
            }     
}