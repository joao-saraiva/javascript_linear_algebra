
var contador = 1


document.getElementById('file').onchange = function(){

    var file = this.files[0];
    
    var reader = new FileReader();
    reader.onload = function(progressEvent){
      // Entire file
      //console.log(this.result);
  
      // By lines
      //var lines = this.result.split(/\r\n|\n/);

      //for(var line = 21; line < lines.length; line++){
      //  console.log(lines[line]);
      //}
      //console.log(this.result)
      var lines = this.result.split(/\r\n|\n/)
      for(var j =0 ; j<=4;j++){
          var start = window.performance.now()
      for(var i =0;i<lines.length-1;i++){
            var line = lines[i]
            if(!line.startsWith("%")){
                
                if(contador == 1){
                    var aux = line.split(" ")
                    var matrix = new Matrix(Number(aux[0]),Number(aux[1]))
                    //console.log(matrix)
                    contador++
                    
                }else{
                    var aux = line.split(" ")
                    matrix.set(Number(aux[0]),Number(aux[1]),Number(aux[2]))
                    //console.log(Number(aux[0])+"-"+Number(aux[1])+"->"+Number(aux[2]))
                }
                if(i==lines.length-2){
                   var la = new LinearAlgebra()

                   var end = window.performance.now()
                   
                   console.log(la.solve(matrix))
                   console.log(`Execution time: ${end - start} ms`)
                    
                    
                    
                }
            }
      }
    }
    console.log("reinicie a pagina e insira outro arquivo");
    }
   
    reader.readAsText(file);
  };