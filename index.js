function sum(a,b) {
    if(a === NaN && b === NaN) {
        return console.log("Please!! Enter a valid number")
    }else return a + b;
    
}


module.exports = {
    sum : sum
}