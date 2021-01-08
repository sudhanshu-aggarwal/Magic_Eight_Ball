let eightBall = "";
let ask = document.getElementById('err');
let userName = localStorage.getItem("userName");
let lbl = document.getElementById('tp');
let meteor = document.getElementById('meteor');

lbl.textContent = ("Ask Your Question " + userName + "!");

ask.onclick = function() {

    
    let randomNumber = Math.floor(Math.random() * 8);
    let answer2 = document.getElementById('answer2');
    let ques = document.getElementById('in2');
    let qst = ques.value;
    let a1;

    switch(randomNumber){
        case 0:
            eightBall = 'It is certain';
            break;
        case 1:
            eightBall = 'It is decidedly so';
            break;
        case 2:
            eightBall = 'Reply hazy try again';
            break;
        case 3:
            eightBall = 'Cannot predict now';
            break;
        case 4:
            eightBall = 'Do not count on it';
            break;
        case 5:
            eightBall = 'My sources say no';
            break;
        case 6:
            eightBall = 'Outlook not so good';
            break;
        case 7:
            eightBall = 'Signs point to yes';
            break;
    }
    if(qst.length > 0){
        answer2.textContent = eightBall;
        a1 = eightBall;
    }
    else{
        answer2.textContent = 'Please Ask Your Question!!!';
        a1 = 'Please Ask Your Question!!!';
    }
    let xyz = Number(a1.length * 4);
    meteor.animate([
        {transform: 'translateX(-520%)'},
        {transform: 'translateX(80%)'}
    ], {
        duration: 2000,
        iterations: 1
    });
    answer2.animate([
        {transform: 'translateX(-'+ xyz + '%)'},
        {transform: 'translateX(0%)'}
    ], {
        duration: 1600,
        iterations: 1
    });
}