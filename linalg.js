class LinearAlgebra{

    transpose(a){
        let c;

        if(a instanceof Vector){
            c = new Vector(a.dim)
            c.cols = a.rows
            c.rows = a.cols

           for(let i=1;i<=c.dim;i++){
               c.set(i,a.get(i))
           }
         
        
    }
        else if(a instanceof Matrix){
            c = new Matrix(a.cols,a.rows)

        for(let i = 1;i<=c.rows;i++){
            for(let j = 1;j<=c.cols;j++){
                c.set(i,j,a.get(j,i))
            }
        }
    
        }else{
            throw new Error("O parametro deve ser um objeto da classe matrix ou da classe vector")
        }
    
    return c
    }

    sum(a,b){

        if(!(a instanceof Matrix)   || !(b instanceof Matrix)){
            throw new Error("Os parametros devem ser da classe matrix ou vector")
        }
        
        if(a.rows!=b.rows|| a.cols!=b.cols){
            throw new Error("As matrizes nao possuem a mesma dimensao")
        }
        let c
        if(a instanceof Vector&& b instanceof Vector){
            c = new Vector(a.dim)
            c.rows = a.rows
            c.cols = a.cols
            for(let i = 1;i<=a.rows;i++){
                c.set(i,a.get(i)+b.get(i))
            }
        }
        else if(a instanceof Matrix&& b instanceof Matrix){
            c = new Matrix(a.rows,a.cols)
            for(let i = 1;i<=a.rows;i++){
                for(let j =1;j<=a.cols;j++){
                    c.set(i,j,a.get(i,j)+b.get(i,j))
                }
            }
        }
        
         
        return c
    }

    times(a,b){

        if( !(b instanceof Matrix)){
            throw new Error("Os parametros devem ser da classe matrix ou vector")
        }
       
        let c
        if(typeof(a)=="number"){
            console.log("A = NUMERO")
            if(b instanceof Vector){
                c = new Vector(b.dim)
                c.rows = b.rows
                c.cols = b.cols

                for(let i =1 ;i<=b.rows;i++){
                    c.set(i,a*b.get(i))
                }
            
            }else if(b instanceof Matrix){
                c = new Matrix(b.rows,b.cols);
                for (let i =1;i<=b.rows;i++){
                    for (let j =1; j<=b.cols;j++){
                        c.set(i,j,a*b.get(i,j))
                    }
                }
            }
        }else{
        if(a.rows!=b.rows|| a.cols!=b.cols){
            throw new Error("As matrizes nao possuem a mesma dimensao")
        }
        
        if(a instanceof Vector&& b instanceof Vector){
            c = new Vector(a.dim)
            c.rows = a.rows
            c.cols = a.cols
            for(let i = 1;i<=a.rows;i++){
                c.set(i,a.get(i)*b.get(i))
            }
        }
        else if(a instanceof Matrix&& b instanceof Matrix){
            c = new Matrix(a.rows,a.cols)
            for(let i = 1;i<=a.rows;i++){
                for(let j =1;j<=a.cols;j++){
                    c.set(i,j,a.get(i,j)*b.get(i,j))
                }
            }
        }
    }
         
        return c
    }
    dot(a,b){
        if(!(a instanceof Matrix)   || !(b instanceof Matrix)){
            throw new Error("Os parametros devem ser da classe matrix ou vector")
        }
        
        if(a.cols!=b.rows){
            throw new Error("A quantidade de linhas de A não são iguais a quantidade colunas de B")
        }
        let c 
        if(a instanceof Vector&& b instanceof Vector){
            
            c = 0
            for(let i = 1;i<=a.dim;i++){
                c = c+a.get(i)*b.get(i)
            }


        }else{
        c = new Matrix(a.rows,b.cols)
       for(let i = 1;i<=a.rows;i++){
           for(let j =1;j<=b.cols;j++){
               for(let k = 1; k<=a.cols;k++){
                c.set(i,j,c.get(i,j)+a.get(i,k)*b.get(k,j))
               }
           }
       }
    }
        return c
    }
    
    gauss(a){
        if( !(a instanceof Matrix)){
            throw new Error("Os parametros devem ser da classe matrix ou vector")
        } 
        let c = new Matrix(a.rows,a.cols)
        c = a

        
            for(let n = 1;n<=c.rows-1 ;n++){
             this.#organizaPivo(c,n)
            this.#zeraColuna(c,n)
           
            }
            
            
          
       return c
    }

    solve(a){
        if( !(a instanceof Matrix)){
            throw new Error("Os parametros devem ser da classe matrix ou vector")
        } 
        let c = new Matrix(a.rows,a.cols)
        c = a
        this.gauss(a)

        for(let m = c.rows;m>1;m--){
            this.#regressao(c,m)
        }
        for(let k =1 ;k<=c.rows;k++){
            this.#resultado(c,k)
        }
        
        let d = new Vector(c.rows)
        for(let i =1;i<=c.rows;i++){
            d.set(i,c.get(i,c.cols))
        }
        return d
    }
    det(a){
        if( !(a instanceof Matrix)){
            throw new Error("Os parametros devem ser da classe matrix ou vector")
        } 

        let c = new Matrix(a.rows,a.cols)
        c = a
        
        this.gauss(c)
        let determinante = c.get(1,1)
        let d = new Vector(c.rows);


        for(let i = 1;i<=c.cols-1;i++){
           let valor = c.get(i,i)

           if(i>=2){
               determinante = determinante*valor
           }
           
        }
        console.log(determinante)
       
    }

    inv(a){
        if( !(a instanceof Matrix)){
            throw new Error("Os parametros devem ser da classe matrix ou vector")
        } 
        let c = new Matrix(a.rows,(2*a.cols));
        let d = new Matrix(a.rows,a.cols)
       
        for(let i = 1 ;i<=c.rows;i++){
            for(let j = 1;j<=c.cols;j++){
                if(j<=a.cols){
                    c.set(i,j,a.get(i,j))
                }
              
            }
        }

       for (let i = 1;i<=c.rows;i++){
           let add1 = true;
           for(let j = a.cols+1;j<=c.cols-1;j++){
               
               if(i<=1&&add1==true){
                var coluna = j+1;
                c.set(i,j,1)
                
                add1= false;
                
               }else if(i>1&&add1==true){
                   c.set(i,coluna,1);
                   coluna++
                   add1 = false;
               }
               
           }
       }
       this.solve(c)
       let positionx = 1
       let positiony = 1
       for(let i =1;i<=c.rows;i++){
           if(positiony>=2){
               positionx++
               positiony = 1;
           }
           for(let j=a.cols+1;j<=c.cols;j++){
                d.set(positionx,positiony,c.get(i,j))
                positiony++
           }
           
       }

       
        return d;
    }
    #organizaPivo(a,n){
        let c = new Matrix(a.rows,a.cols)
        c = a
        var max = c.get(n,n)
        
        for(let i = n;i<=c.cols-1;i++){
            let maxIndex = i
            for(let j = n;j<=c.rows;j++){
                if(Math.abs(max)<Math.abs(c.get(j,n))){
                    max = c.get(j,i)
                    maxIndex = j
                }
            }
            if(maxIndex!=i){
                for(let k = 1;k<=c.cols;k++){
                    let temp = c.get(i,k)
                    c.set(i,k,c.get(maxIndex,k))
                    c.set(maxIndex,k,temp)
                }
            }
        }
        
        

        return c
    }
    
    #zeraColuna(a,n){
        let c = new Matrix(a.rows,a.cols)
        c = a
       
        let pivo = c.get(n,n)
        
        for(let i = n;i<=c.rows-1;i++){
            let constante = (-c.get(i+1,n)/pivo)
            
                for(let k = 1;k<=c.cols;k++){
                    let temp = c.get(n,k)*constante
                    
                    c.set(i+1,k,(c.get(i+1,k)+temp))
                    
                }
                            
    }
     return c   
    }
   #regressao(a,m){
       let c = new Matrix(a.rows,a.cols)
       c = a
       let pivo = c.get(m,m)

       for(let i = m;i>1;i--){
            let constante = (-c.get(i-1,m)/pivo)
            for(let k = 1;k<=c.cols;k++){
                let temp = c.get(m,k)*constante
                c.set(i-1,k,(c.get(i-1,k)+temp))
                
            }
               
       }
       return c
   }
   #resultado(a,n){
        let c = new Matrix(a.rows,a.cols)
        c = a
        let pivo = c.get(n,n)
        let constante = 1/pivo
       
            
                for(let k = 1;k<=c.cols;k++){
                    let temp = c.get(n,k)*constante
                    c.set(n,k,temp)
                    
                }
                            
    
   }
}