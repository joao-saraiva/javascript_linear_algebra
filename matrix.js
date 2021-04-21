class Matrix{

    constructor(rows,cols,elements){

        if(rows== undefined|| cols == undefined){
            throw new Error("E necessario um numero para linhas e para colunas")
        }
        if( rows<0){
            throw new Error("O numero de linhas deveria igual ou maior que zero")
        }
        if(cols<0){
            throw new Error("O numero de colunas deveria igual ou maior que zero")
        }
        
        
        this.rows = rows
        this.cols = cols
        if(elements == undefined){
            this.elements = []
            let size = rows*cols
            for(let i = 0;i<size;i++){
                this.elements.push(0)
            }
        }else{
            if(elements.length == rows*cols){
            this.elements = elements
        }else{
            throw new Error("O numero dos elementos nao corresponde ao tamanho da matrix")
        }
        }
        
        
    }
    

    get(i,j){
        this.#validateMatrix(i,j)
        return this.elements[this.#getIndex(i,j)]
    }
    
    set(i,j,value){
        this.#validateMatrix(i,j)
        this.elements[this.#getIndex(i,j)] = value
    }


    #getIndex(i,j){
        return (j-1)+(i-1)*this.cols
    }

    #validateMatrix(i,j){
        if(i== undefined|| j == undefined){
            throw new Error("E necessario um numero para linhas e para colunas")
        }
        if(i<=0 || i>this.rows){
            throw new Error("Numero invalido para linhas coloque um numero entre 1 e  "+this.rows)
        }
        if(j<=0 || j>this.cols){
            throw new Error("Numero invalido para colunas coloque um numero entre 1 e  "+this.cols)
        }
    }

    
}