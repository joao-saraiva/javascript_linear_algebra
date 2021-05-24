class Transformations{
     translacao(a,dx,dy,dz){
        if( !(a instanceof Vector)){
            throw new Error("Os parametros devem ser da classe vector")
        } 
        let la = new LinearAlgebra()
        if(a.dim == 2){
            let c = new Vector(a.dim+1)
            for(let i = 1 ;i<=a.dim;i++){
                c.set(i,a.get(i))
            }
            
            c.set(3,1)
            let b = new Matrix(3,3,[1,0,dx,0,1,dy,0,0,1])
            c = la.dot(c,b)
            let e = new Vector(a.dim)
            e.set(1,c.get(1))
            e.set(2,c.get(2))
           
            return e
        }if(a.dim == 3){
            let c = new Vector(a.dim+1)
            for(let i = 1 ;i<=a.dim;i++){
                c.set(i,a.get(i))
            }
            c.set(4,1)
            let b = new Matrix(4,4,[1,0,0,dx,0,1,0,dy,0,0,1,dz,0,0,0,1])
            c = la.dot(c,b)
            let e = new Vector(a.dim)
            e.set(1,c.get(1))
            e.set(2,c.get(2))
            e.set(3,c.get(3))
            return e
        }
        
     }
    rotacao(a,x,graus){
        if( !(a instanceof Vector)){
            throw new Error("Os parametros devem ser da classe vector")
        } 
       let angulo = graus*Math.PI/180
       let la = new LinearAlgebra()
      
        
        if(a.dim == 2){
            let c = new Vector(a.dim+1)
            for(let i = 1 ;i<=a.dim;i++){
                c.set(i,a.get(i))
            }
            
            c.set(3,1)
            
            
            let b = new Matrix(3,3,[Math.cos(angulo),-Math.sin(angulo),0,Math.sin(angulo),Math.cos(angulo),0,0,0,1])
           
            c = la.dot(c,b)
            let e = new Vector(a.dim)
            e.set(1,c.get(1))
            e.set(2,c.get(2))
           
            return e
        

        }
        if(a.dim == 3){
            if(x.toLowerCase() != "x"&& x.toLowerCase() !="y"&&x.toLowerCase()!="z"){
                throw new Error("Passe valores de posições válidas para um plano 3D")
            }

            let c = new Vector(a.dim+1)
            for(let i = 1 ;i<=a.dim;i++){
                c.set(i,a.get(i))
            }
            c.set(4,1)
            let la = new LinearAlgebra
            if(x.toLowerCase == "x"){
                let b= new Matrix(4,4,[1,0,0,0,0,Math.cos(angulo),-Math.sin(angulo),0,0,Math.sin(angulo),Math.cos(angulo),0,0,0,0,1])
                c = la.dot(c,b)
                let e = new Vector(a.dim)
                e.set(1,c.get(1))
                e.set(2,c.get(2))
                e.set(3,c.get(3))
                return e


            }
            if(x.toLowerCase == "y"){
                let b = new Matrix(4,4[Math.cos(angulo),0,Math.sin(angulo),0,0,1,0,0,-Math.sin(angulo),0,Math.cos(angulo),0,0,0,0,1])
                c = la.dot(c,b)
                let e = new Vector(a.dim)
                e.set(1,c.get(1))
                e.set(2,c.get(2))
                e.set(3,c.get(3))
                return e
            }
            if(x.toLowerCase == "z"){
                let b = new Matrix(4,4,[Math.cos(angulo),-Math.sin(angulo),0,0,Math.sin(angulo),Math.cos(angulo),0,0,0,0,1,0,0,0,0,1])
                c = la.dot(c,b)
                let e = new Vector(a.dim)
                e.set(1,c.get(1))
                e.set(2,c.get(2))
                e.set(3,c.get(3))
                return e
            }
        }
    }
    reflexao (a,x){
        if( !(a instanceof Vector)){
            throw new Error("Os parametros devem ser da classe vector")
        } 
        if(a.dim == 2){
            if(x.toLowerCase() != "x"&& x.toLowerCase() !="y"){
                throw new Error("Passe valores de posições válidas para um plano 2D")
            }
            let c = new Vector(a.dim+1)
            for(let i = 1 ;i<=a.dim;i++){
                c.set(i,a.get(i))
            }
            c.set(3,1)
            let la = new LinearAlgebra()
            if(x.toLowerCase() =="x"){
               
                let b = new Matrix(3,3,[-1,0,0,0,1,0,0,0,1])
                c = la.dot(c,b)
                let e = new Vector(a.dim)
                e.set(1,c.get(1))
                e.set(2,c.get(2))
                return e
            }
           
            if(x.toLowerCase() == "y"){
                let d = new Matrix(3,3,[1,0,0,0,-1,0,0,0,1])
                c = la.dot(c,d)
                let e = new Vector(a.dim)
                e.set(1,c.get(1))
                e.set(2,c.get(2))
                return e
            }
            
             
        }else if(a.dim == 3){
            if(x.toLowerCase() != "x"&& x.toLowerCase() !="y"&&x.toLowerCase()!="z"){
                throw new Error("Passe valores de posições válidas para um plano 3D")
            }

            let c = new Vector(a.dim+1)
            for(let i = 1 ;i<=a.dim;i++){
                c.set(i,a.get(i))
            }
            c.set(4,1)
            let la = new LinearAlgebra

            if(x.toLowerCase() == "x"){
            let b = new Matrix(4,4,[-1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])
            c = la.dot(c,b)
            let f = new Vector(a.dim)
            f.set(1,c.get(1))
            f.set(2,c.get(2))
            f.set(3,c.get(3))
            return f
            }
           
        
            if(x.toLowerCase() == "y"){
                let d = new Matrix(4,4,[1,0,0,0,0,-1,0,0,0,0,1,0,0,0,0,1])
                 c = la.dot(c,d)
                 let f = new Vector(a.dim)
                 f.set(1,c.get(1))
                 f.set(2,c.get(2))
                 f.set(3,c.get(3))
                 return f
            }
            
            
            if(x.toLowerCase() == "z"){
                let e = new Matrix(4,4,[1,0,0,0,0,1,0,0,0,0,-1,0,0,0,0,1])
                c = la.dot(c,e)
                let f = new Vector(a.dim)
                f.set(1,c.get(1))
                f.set(2,c.get(2))
                f.set(3,c.get(3))
                return f
            }
            
          
            
            
        }
    }

    projecao(a,x){
        if( !(a instanceof Vector)){
            throw new Error("Os parametros devem ser da classe vector")
        } 

        if(a.dim == 2){
            if(x.toLowerCase() != "x"&& x.toLowerCase() !="y"){
                throw new Error("Passe valores de posições válidas para um plano 2D")
            }
            let c = new Vector(a.dim+1)
            for(let i = 1 ;i<=a.dim;i++){
                c.set(i,a.get(i))
            }
            c.set(3,1)
            let la = new LinearAlgebra()

            if(x.toLowerCase() == "x"){
                let b = new Matrix(3,3,[1,0,0,0,0,0,0,0,1])
                c = la.dot(c,b)
                let e = new Vector(a.dim)
                e.set(1,c.get(1))
                e.set(2,c.get(2))
                return e
            }

            if(x.toLowerCase() == "y"){
                let b = new Matrix(3,3,[0,0,0,0,1,0,0,0,1])
                c = la.dot(c,b)
                let e = new Vector(a.dim)
                e.set(1,c.get(1))
                e.set(2,c.get(2))
                return e

            }
        }
        else if(a.dim == 3){
            if(x.toLowerCase() != "x"&& x.toLowerCase() !="y"&&x.toLowerCase()!="z"){
                throw new Error("Passe valores de posições válidas para um plano 3D")
            }

            let c = new Vector(a.dim+1)
            for(let i = 1 ;i<=a.dim;i++){
                c.set(i,a.get(i))
            }
            c.set(4,1)
            let la = new LinearAlgebra
            if(x.toLowerCase() == "x"){
                let b = new Matrix(4,4,[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1])
                c = la.dot(c,b)
                let f = new Vector(a.dim)
                f.set(1,c.get(1))
                f.set(2,c.get(2))
                f.set(3,c.get(3))
                return f

            }
            if(x.toLowerCase() == "y"){
                let b = new Matrix(4,4,[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1])
                c = la.dot(c,b)
                let f = new Vector(a.dim)
                f.set(1,c.get(1))
                f.set(2,c.get(2))
                f.set(3,c.get(3))
                return f
            }
            if(x.toLowerCase() == "z"){
                let b = new Matrix(4,4,[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1])
                c = la.dot(c,b)
                let f = new Vector(a.dim)
                f.set(1,c.get(1))
                f.set(2,c.get(2))
                f.set(3,c.get(3))
                return f
            }
        }
    }
    cisalhamento(a,kx,ky){
        if( !(a instanceof Vector)){
            throw new Error("Os parametros devem ser da classe vector")
        } 
       
        let c = new Vector(a.dim+1)
        for(let i = 1 ;i<=a.dim;i++){
            c.set(i,a.get(i))
        }
        c.set(3,1)
        let la = new LinearAlgebra()

       
            let b = new Matrix(3,3,[1,kx,0,ky,1,0,0,0,1])
            c = la.dot(c,b)
            let e = new Vector(a.dim)
            e.set(1,c.get(1))
            e.set(2,c.get(2))
            return e
        
    }
}