let userName = "";
let input1 = document.getElementById('in1');
let b1 = document.getElementById('pg1');
let p = document.getElementById('answer1');
let nxt = document.getElementById('next');
let meteor = document.getElementById('meteor');


b1.onclick = function() {
    
    meteor.animate([
        {transform: 'translateX(-100%)'},
        {transform: 'translateX(500%)'}
    ], {
        duration: 2000,
        iterations: 1
    });
    // meteor.classList.add('m1');
    // meteor.classList.remove('m1');
    // meteor.classList.add('m1')
    // meteor.style.animation = "meteoroid 3s";
    // meteor.addEventListener("animationstart" , start);
    // meteor.addEventListener("animationiteration" , rpt);
    userName = input1.value.trim();
    let xyz;
    let a1 = ("Hello Earth Living! " + userName + "!");
    let a2 = "Hello Earth Living! Please Tell Us Your Name!";
    userName.length > 0 ? p.innerHTML = a1 : p.innerHTML = a2;
    if(userName.length > 0) {
        xyz = Number(a1.length * 2.25);
    }
    else{
        xyz = Number(a2.length * 2.25);
    }
    
    p.animate([
        {transform: 'translateX(-' + xyz + '%)'},
        {transform: 'translateX(0%)'}
    ], {
        duration: xyz * 20,
        iterations: 1
    });
    if(userName.length > 0)
    {
        nxt.style.display = 'block';
    }
    else{
        nxt.style.display = 'none';
    }
    // meteor.addEventListener("animationend" , end);
    // meteor.style.transform = "translateX(-100%)";
    // meteor.classList.remove('m1');
}

// function start() {
//     console.log("start");
//     meteor.style.transform = "translateX(-100%)";
// }

// function rpt() {
//     console.log("repeat");
//     meteor.style.transform = "translateX(-100%)";
// }

// function end() {
//     console.log("end");
//     meteor.style.transform = "translateX(-100%)";
// }

// meteor.addEventListener('transitionstart' , function() {
//     console.log('true');
//     meteor.style.transform = "translateX(500%)";
// });


let ls = document.getElementById('next');
ls.onclick = function() {
    localStorage.setItem('userName' , userName);
}


// function str(prt) {
//     let xy="";
//     for(let i=0; i < prt.length;i++)
//     p.innerHTML = (xy += prt[i]);
// }