class Sumatoria {

    getResult(n) {
        let answer = 4;
        let x = 3;

        if (n >= 1) {
        for (let i = 1; i < n; i++) {
            
            answer = answer - (4/x);
            x = x + 2;
            answer = answer + (4/x);
            x = x + 2;

        }
        return answer;
        } else {
            return 'Not Valid input';
        }
    }

}

let sumatoria = new Sumatoria();
console.log(sumatoria.getResult(1000));