class Sumatoria {

    getResult() {
        let answer = 4;
        let x = 3;

        for (let i = 1; i < 100000; i++) {
            
            console.log(`${answer} - 4/${x} `)
            answer = answer - (4/x);
            x = x + 2;
            console.log(`${answer} + 4/${x} `)
            answer = answer + (4/x);
            x = x + 2;

        }
        return answer;
    }

}

let sumatoria = new Sumatoria();
console.log(sumatoria.getResult());