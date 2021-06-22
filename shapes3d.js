class Plane{
    constructor(x,y,z,w,h,l){
        this.points = [
            new Vector(3,[x,y,z]),
            new Vector(3,[x+w,y,z]),
            new Vector(3,[x+w,y+h,z]),
            new Vector(3,[x,y+h,z]),
            new Vector(3,[x,y,z+l]),
            new Vector(3,[x+w,y,z+l]),
            new Vector(3,[x+w,y+h,z+l]),
            new Vector(3,[x,y+h,z+l]),
        ]
        this.transformation = new Transformations()
        this.meiox = (this.points[0].get(1)+this.points[2].get(1))/2
        this.meioy = (this.points[0].get(2)+this.points[2].get(2))/2
        this.meioz = (this.points[0].get(3)+this.points[2].get(3))/2
    }
    draw(){
        beginShape(TRIANGLES)
        //frontal

        vertex(this.points[0].get(1),this.points[0].get(2),this.points[0].get(3))
        vertex(this.points[1].get(1),this.points[1].get(2),this.points[1].get(3))
        vertex(this.points[2].get(1),this.points[2].get(2),this.points[2].get(3))

        vertex(this.points[2].get(1),this.points[2].get(2),this.points[2].get(3))
        vertex(this.points[3].get(1),this.points[3].get(2),this.points[3].get(3))
        vertex(this.points[0].get(1),this.points[0].get(2),this.points[0].get(3))
        //superior

        vertex(this.points[0].get(1),this.points[0].get(2),this.points[0].get(3))
        vertex(this.points[1].get(1),this.points[1].get(2),this.points[1].get(3))
        vertex(this.points[4].get(1),this.points[4].get(2),this.points[4].get(3))

        vertex(this.points[1].get(1),this.points[1].get(2),this.points[1].get(3))
        vertex(this.points[4].get(1),this.points[4].get(2),this.points[4].get(3))
        vertex(this.points[5].get(1),this.points[5].get(2),this.points[5].get(3))

        //traseira
        vertex(this.points[4].get(1),this.points[4].get(2),this.points[4].get(3))
        vertex(this.points[5].get(1),this.points[5].get(2),this.points[5].get(3))
        vertex(this.points[6].get(1),this.points[6].get(2),this.points[6].get(3))
        
        vertex(this.points[4].get(1),this.points[4].get(2),this.points[4].get(3))
        vertex(this.points[6].get(1),this.points[6].get(2),this.points[6].get(3))
        vertex(this.points[7].get(1),this.points[7].get(2),this.points[7].get(3))

        //lateral esquerda
        vertex(this.points[0].get(1),this.points[0].get(2),this.points[0].get(3))
        vertex(this.points[3].get(1),this.points[3].get(2),this.points[3].get(3))
        vertex(this.points[7].get(1),this.points[7].get(2),this.points[7].get(3))

        vertex(this.points[0].get(1),this.points[0].get(2),this.points[0].get(3))
        vertex(this.points[4].get(1),this.points[4].get(2),this.points[4].get(3))
        vertex(this.points[7].get(1),this.points[7].get(2),this.points[7].get(3))

        //lateral direita 
        vertex(this.points[1].get(1),this.points[1].get(2),this.points[1].get(3))
        vertex(this.points[6].get(1),this.points[6].get(2),this.points[6].get(3))
        vertex(this.points[2].get(1),this.points[2].get(2),this.points[2].get(3))

        vertex(this.points[1].get(1),this.points[1].get(2),this.points[1].get(3))
        vertex(this.points[6].get(1),this.points[6].get(2),this.points[6].get(3))
        vertex(this.points[5].get(1),this.points[5].get(2),this.points[5].get(3))

        //inferior
        vertex(this.points[2].get(1),this.points[2].get(2),this.points[2].get(3))
        vertex(this.points[3].get(1),this.points[3].get(2),this.points[3].get(3))
        vertex(this.points[7].get(1),this.points[7].get(2),this.points[7].get(3))

        vertex(this.points[2].get(1),this.points[2].get(2),this.points[2].get(3))
        vertex(this.points[6].get(1),this.points[6].get(2),this.points[6].get(3))
        vertex(this.points[7].get(1),this.points[7].get(2),this.points[7].get(3))
        endShape()
    }

    rotate(angulo){
        for(let i = 0; i <this.points.length;i++){
            this.points[i] = this.transformation.rotacao(this.points[i],"y",angulo)
            this.points[i] = this.transformation.rotacao(this.points[i],"x",angulo)
            this.points[i] = this.transformation.rotacao(this.points[i],"z",angulo)
        }

    
    }
    translate(){
        for(let i = 0; i <this.points.length;i++){
            this.points[i] = this.transformation.translacao(this.points[i],-this.meiox,-this.meioy,-this.meioz)
            
        }
      
        }
        
    translateCentro(){
        for(let i = 0; i <this.points.length;i++){
            this.points[i] = this.transformation.translacao(this.points[i],this.meiox,this.meioy,-this.meioz)
            
        }
    }
}

class Parallelogram{
    constructor(x,y,z,w,h,l){
        this.points = [
            new Vector(3,[x,y,z]),
            new Vector(3,[x+w,y,z]),
            new Vector(3,[x+w,y+h,z]),
            new Vector(3,[x,y+h,z]),
            new Vector(3,[x,y,z+l]),
            new Vector(3,[x+w,y,z+l]),
            new Vector(3,[x+w,y+h,z+l]),
            new Vector(3,[x,y+h,z+l]),
        ]
        this.transformation = new Transformations()
        this.meiox = (this.points[0].get(1)+this.points[2].get(1))/2
        this.meioy = (this.points[0].get(2)+this.points[2].get(2))/2
        this.meioz = (this.points[0].get(3)+this.points[2].get(3))/2
    }
    draw(){
        beginShape(TRIANGLES)
        //frontal

        vertex(this.points[0].get(1),this.points[0].get(2),this.points[0].get(3))
        vertex(this.points[1].get(1),this.points[1].get(2),this.points[1].get(3))
        vertex(this.points[2].get(1),this.points[2].get(2),this.points[2].get(3))

        vertex(this.points[2].get(1),this.points[2].get(2),this.points[2].get(3))
        vertex(this.points[3].get(1),this.points[3].get(2),this.points[3].get(3))
        vertex(this.points[0].get(1),this.points[0].get(2),this.points[0].get(3))
        //superior

        vertex(this.points[0].get(1),this.points[0].get(2),this.points[0].get(3))
        vertex(this.points[1].get(1),this.points[1].get(2),this.points[1].get(3))
        vertex(this.points[4].get(1),this.points[4].get(2),this.points[4].get(3))

        vertex(this.points[1].get(1),this.points[1].get(2),this.points[1].get(3))
        vertex(this.points[4].get(1),this.points[4].get(2),this.points[4].get(3))
        vertex(this.points[5].get(1),this.points[5].get(2),this.points[5].get(3))

        //traseira
        vertex(this.points[4].get(1),this.points[4].get(2),this.points[4].get(3))
        vertex(this.points[5].get(1),this.points[5].get(2),this.points[5].get(3))
        vertex(this.points[6].get(1),this.points[6].get(2),this.points[6].get(3))
        
        vertex(this.points[4].get(1),this.points[4].get(2),this.points[4].get(3))
        vertex(this.points[6].get(1),this.points[6].get(2),this.points[6].get(3))
        vertex(this.points[7].get(1),this.points[7].get(2),this.points[7].get(3))

        //lateral esquerda
        vertex(this.points[0].get(1),this.points[0].get(2),this.points[0].get(3))
        vertex(this.points[3].get(1),this.points[3].get(2),this.points[3].get(3))
        vertex(this.points[7].get(1),this.points[7].get(2),this.points[7].get(3))

        vertex(this.points[0].get(1),this.points[0].get(2),this.points[0].get(3))
        vertex(this.points[4].get(1),this.points[4].get(2),this.points[4].get(3))
        vertex(this.points[7].get(1),this.points[7].get(2),this.points[7].get(3))

        //lateral direita 
        vertex(this.points[1].get(1),this.points[1].get(2),this.points[1].get(3))
        vertex(this.points[6].get(1),this.points[6].get(2),this.points[6].get(3))
        vertex(this.points[2].get(1),this.points[2].get(2),this.points[2].get(3))

        vertex(this.points[1].get(1),this.points[1].get(2),this.points[1].get(3))
        vertex(this.points[6].get(1),this.points[6].get(2),this.points[6].get(3))
        vertex(this.points[5].get(1),this.points[5].get(2),this.points[5].get(3))

        //inferior
        vertex(this.points[2].get(1),this.points[2].get(2),this.points[2].get(3))
        vertex(this.points[3].get(1),this.points[3].get(2),this.points[3].get(3))
        vertex(this.points[7].get(1),this.points[7].get(2),this.points[7].get(3))

        vertex(this.points[2].get(1),this.points[2].get(2),this.points[2].get(3))
        vertex(this.points[6].get(1),this.points[6].get(2),this.points[6].get(3))
        vertex(this.points[7].get(1),this.points[7].get(2),this.points[7].get(3))
        endShape()
    }

    rotate(angulo){
        for(let i = 0; i <this.points.length;i++){
            this.points[i] = this.transformation.rotacao(this.points[i],"y",angulo)
            
        }

    
    }
    translate(){
        for(let i = 0; i <this.points.length;i++){
            this.points[i] = this.transformation.translacao(this.points[i],-this.meiox,-this.meioy,-this.meioz)
            
        }
      
        }
        
    translateCentro(){
        for(let i = 0; i <this.points.length;i++){
            this.points[i] = this.transformation.translacao(this.points[i],this.meiox,this.meioy,-this.meioz)
            
        }
    }
}

 class Sphere{
     constructor(x,y,z,r,st,se,R,G,B,translate){
         this.meio = [
             new Vector(3,[x,y,z])
         ]
         this.points =[
            
            
         ]
         this.transformation = new Transformations()
         this.translates = translate
         this.xy 
         this.pontoX = x
         this.pontoY = y
         this.pontoZ = z
         this.raio = r
         this.Sector = se
         this.Stack = st
         this.r = R
         this.g = G
         this.b = B
         for (let i = 0; i <=st;i++){
             let stackAngle = Math.PI/2 -Math.PI*i/st
             
            this.xz = r * Math.cos(stackAngle)
            this.pontoY = r*Math.sin(stackAngle)

            for (let j = 0;j <se ; j++){
                let sectorAngle = 2*Math.PI*j/se
                this.pontoX = this.xz * Math.sin(sectorAngle)
                this.pontoZ = this.xz * Math.cos(sectorAngle)
                this.points.push(new Vector(3,[this.pontoX,this.pontoY,this.pontoZ]))
            }
         }

         if(this.translates > 0) {
            for(let i = 0; i <this.points.length;i++){
                this.points[i] = this.transformation.translacao(this.points[i],translate,0,0)
                
            }
         }

         
        
     }
     draw(){
         
      

       

         beginShape(TRIANGLE_STRIP)

         for (let i = 0 ; i <this.Stack-1;i++){
            let k1 = i* (this.Sector+1)
            let k2 = k1+ this.Sector+1

            for(let  j = 0; j <this.Sector;j++,k1++,k2++){

                if(i!=0){
                    vertex(this.points[k1].get(1),this.points[k1].get(2),this.points[k1].get(3))
                    vertex(this.points[k2].get(1),this.points[k2].get(2),this.points[k2].get(3))
                    vertex(this.points[k1+1].get(1),this.points[k1+1].get(2),this.points[k1+1].get(3))
           
                }

                if(i != (this.Stack-1)){
                    vertex(this.points[k1+1].get(1),this.points[k1+1].get(2),this.points[k1+1].get(3))
                    vertex(this.points[k2].get(1),this.points[k2].get(2),this.points[k2].get(3))
                    vertex(this.points[k2+1].get(1),this.points[k2+1].get(2),this.points[k2+1].get(3))
                }
                vertex(this.points[k1].get(1),this.points[k1].get(2),this.points[k1].get(3))
                vertex(this.points[k2].get(1),this.points[k2].get(2),this.points[k2].get(3))

                if(i !=0){
                    vertex(this.points[k1].get(1),this.points[k1].get(2),this.points[k1].get(3))
                    vertex(this.points[k1+1].get(1),this.points[k1+1].get(2),this.points[k1+1].get(3))
                }
            }

            vertex(this.points[k1].get(1),this.points[k1].get(2),this.points[k1].get(3))
            vertex(this.points[k2].get(1),this.points[k2].get(2),this.points[k2].get(3))
            fill(this.r,this.g,this.b)
         }
         endShape()
     }
     rotate(angulo){
        
        for(let i = 0; i <this.points.length;i++){
            this.points[i] = this.transformation.rotacao(this.points[i],"y",angulo)
            
        }
        
    }
    translate(ax,ay,az){
        for(let i = 0; i <this.points.length;i++){
            this.points[i] = this.transformation.translacao(this.points[i],ax,ay,az)
            
        }
      
        }

        translateCentro(){
            for(let i = 0; i <this.points.length;i++){
                this.points[i] = this.transformation.translacao(this.points[i],this.meio[0].get(1),this.meio[0].get(2),this.meio[0].get(3))
                    
             }
            }   
 }  

 class Pyramid {
     
    constructor(x,y,z,w,h,hp){
    
        this.points=[
            new Vector(3,[x,y,z]),
            new Vector(3,[x+w,y,z]),
            new Vector(3,[x+w,y+h,z]),
            new Vector(3,[x,y+h,z]),
            new Vector(3,[x,y+h,z]),
            new Vector(3,[(x+x+w)/2,((y+y+h)/2),(z+z)/2+hp])
        ]
        this.transformation = new Transformations()
        this.meiox = (this.points[0].get(1)+this.points[2].get(1))/2
        this.meioy = (this.points[0].get(2)+this.points[2].get(2))/2
        this.meioz = (this.points[0].get(3)+this.points[2].get(3))/2
    }

    draw(){
        beginShape(TRIANGLES)
        //base
        vertex(this.points[0].get(1),this.points[0].get(2),this.points[0].get(3))
        vertex(this.points[1].get(1),this.points[1].get(2),this.points[1].get(3))
        vertex(this.points[2].get(1),this.points[2].get(2),this.points[2].get(3))

        vertex(this.points[2].get(1),this.points[2].get(2),this.points[2].get(3))
        vertex(this.points[3].get(1),this.points[3].get(2),this.points[3].get(3))
        vertex(this.points[0].get(1),this.points[0].get(2),this.points[0].get(3))

        //
        vertex(this.points[0].get(1),this.points[0].get(2),this.points[0].get(3))
        vertex(this.points[1].get(1),this.points[1].get(2),this.points[1].get(3))
        vertex(this.points[5].get(1),this.points[5].get(2),this.points[5].get(3))

        vertex(this.points[1].get(1),this.points[1].get(2),this.points[1].get(3))
        vertex(this.points[2].get(1),this.points[2].get(2),this.points[2].get(3))
        vertex(this.points[5].get(1),this.points[5].get(2),this.points[5].get(3))

        vertex(this.points[2].get(1),this.points[2].get(2),this.points[2].get(3))
        vertex(this.points[3].get(1),this.points[3].get(2),this.points[3].get(3))
        vertex(this.points[5].get(1),this.points[5].get(2),this.points[5].get(3))

        vertex(this.points[0].get(1),this.points[0].get(2),this.points[0].get(3))
        vertex(this.points[3].get(1),this.points[3].get(2),this.points[3].get(3))
        vertex(this.points[5].get(1),this.points[5].get(2),this.points[5].get(3))
        
        endShape()
    }

    rotate(angulo){
        for(let i = 0; i <this.points.length;i++){
            this.points[i] = this.transformation.rotacao(this.points[i],"y",angulo)
            this.points[i] = this.transformation.rotacao(this.points[i],"x",angulo)
            this.points[i] = this.transformation.rotacao(this.points[i],"z",angulo)
        }
    }

    translate(){
        for(let i = 0; i <this.points.length;i++){
            this.points[i] = this.transformation.translacao(this.points[i],-this.meiox,-this.meioy,-this.meioz)
            
        }
      
        }
        
    translateCentro(){
        for(let i = 0; i <this.points.length;i++){
            this.points[i] = this.transformation.translacao(this.points[i],this.meiox,this.meioy,-this.meioz)
            
        }
    }
 }