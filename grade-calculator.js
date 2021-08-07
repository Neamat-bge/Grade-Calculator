function findGrade(number) {
    if (number >= 80 && number <= 100) {
        console.log('Congrates!! You Got A+ & Your Grade Point: 5.0');
        return number;
    }

    else if (number < 80 && number >= 70) {
        console.log('Congrates!! You Got A & Your Grade Point: 4.0');
        return number;
    }
    else if (number < 70 && number >= 60) {
        console.log('Congrates!! You Got A- & Your Grade Point: 3.5');
        return number;
    }
    else if (number < 60 && number >= 50) {
        console.log('Congrates!! You Got B & Your Grade Point: 3.0');
        return number;
    }
    else if (number < 50 && number >= 40) {
        console.log('Congrates!! You Got C & Your Grade Point: 2.0');
        return number;
    }
    else if (number < 40 && number >= 33) {
        console.log('Congrates!! You Got D & Your Grade Point: 1.0');
        return number;
    }
    else if (number > 100) {
        console.log('Invalid Number. Try again')
    }
    else {
        console.log("Sorry!! You Fail");
        return number;
    }
}

const myGrade = findGrade(79);
// console.log('Your Result Message', myMark);