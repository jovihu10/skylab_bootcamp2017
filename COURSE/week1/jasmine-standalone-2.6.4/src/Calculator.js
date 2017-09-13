
function Calculator(){

    this.sum = function(n1, n2){
    if(!isNaN(n1) && !isNaN(n2)){
        return n1 + n2;
    } else {
        return "Escribe solo numeros";
        }

    }
    this.sub = function(n1, n2){
        if(!isNaN(n1) && !isNaN(n2)){
            return n1 - n2;
        } else {
            return "Escribe solo numeros";
        }
    }
    this.div = function(n1, n2){
        if(!isNaN(n1) && !isNaN(n2)){
            return n1 / n2;
        } else {
            return "Escribe solo numeros";
        }
    }   
    this.mul = function(n1, n2){
        if(!isNaN(n1) && !isNaN(n2)){
            return n1 * n2;
        } else {
            return "Escribe solo numeros";
        }
    }
}

var op = new calculator();
