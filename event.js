function changeStyle() {

    let elem = document.getElementById("p1");
    elem.style.color = 'red';
    elem.style.backgroundColor= 'cyan';
    elem.style.paddingLeft= '30px';
    
}

function hideElement() {
    let elem = document.getElementById("p1");
    elem.style.visibility = 'hidden';
}

function showElement() {
  let elem =  document.getElementById("p1");
  elem.style.visibility = 'visible';
    
}

let animateEle =document.getElementById("animateDiv");

let rotate = 0;
let mLeft = 0;

let mTop =0;
function animateDiv() {

    rotate++;
    
    mLeft++;
    mTop++;
    animateEle.style.rotate = `${rotate}deg`;
    animateEle.style.marginLeft = `${mLeft}px`;
    animateEle.style.marginTop = `${mTop}px`;
   requestAnimationFrame(animateDiv);
    
}
animateDiv();

let ele = document.getElementById("animateDiva");

let r1 = 0;
let mR =0;
function animateDiva() {
    r1++;
    mR++;
    ele.style.rotate = `${r1}deg`;
    ele.style.marginLeft = `${mR}px`;

    requestAnimationFrame(animateDiva);
    
}
animateDiva();