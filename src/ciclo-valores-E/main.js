class Factorial {

    factorial(n) {
        let fact = 1;
        for (let i = 1; i <= n; i++) {
            fact *= i;
        }
        return fact;
    }

    getResult(n) {
        let answer = 1;
        if (n >= 1) {
        for (let i = 1; i < n; i++) {
            answer = answer + (1/this.factorial(i));
        }
        return answer;
        } else {
            return 'Not Valid input';
        }
    }
}

let factorial = new Factorial();
console.log(factorial.getResult(10))