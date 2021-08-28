class Factorial {

    factorial(n) {
        let fact = 1;
        for (let i = 1; i <= n; i++) {
            fact *= i;
        }
        return fact;
    }

    getResult() {
        let answer = 1;
        for (let i = 1; i < 10; i++) {
            answer = answer + (1/this.factorial(i));
        }
        return answer;
    }
}

let factorial = new Factorial();
console.log(factorial.getResult())