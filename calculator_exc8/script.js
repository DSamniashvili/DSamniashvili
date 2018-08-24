function Calculator(){
    let methods = {
        '+': function(a,b){
            return a+b
        },
        '-': function(a,b) {
            return a-b
        }
    }
    this.calculate = function(str){
        let splited = str.split(' ');
        console.log(splited);
        let a = Number(splited[0]);
        let b = Number(splited[2]);
        let op = splited[1];
        return methods[op](a,b)
    }
    this.addMethod = function(name, func){
        return methods[name] = func;
    }
}

let calc = new Calculator();
console.log(calc.calculate("3 + 7"));


let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);
let result = powerCalc.calculate("2 ** 3");
console.log(result); 
