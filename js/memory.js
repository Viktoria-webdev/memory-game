const buttons = document.querySelectorAll(".rules__button");
buttons.forEach((button) => {
    button.onclick = () => {
        const rules = button.closest(".rules");
        if (rules) {
            rules.style.display = "none";
        }
    };
});

document.querySelector(".game__button").onclick=()=>{
    document.querySelector(".other__game").style.display="none";
    document.querySelector(".menu__head").style.display="flex";
}
document.querySelector(".menu__open").onclick=()=>{
    document.querySelector(".other__game").style.display="flex";
    document.querySelector(".menu__head").style.display="none";
}
document.querySelector(".start_game-memory").addEventListener("click",function(){
    this.style.display="none";
    document.querySelector(".restart-button").style.display="block";
    let arr=[1,2,3,4,5,6,7,8,9,10,11,12];
arr=arr.sort((a,b) =>0.5-Math.random());
console.log(arr);

let x=3;
let y=2;
let stepM=1;
let error=0;

function fieldInit(){
    for (let i=0; i<3;i++){
        for(let k=0;k<4;k++){
            let div=document.createElement('div');
            div.textContent=arr[i*4+k];
            document.querySelector('.gamefield').append(div)
            if(i===2 && k===3){
                div.classList.add('active');
            }
        }
    }
    setTimeout(function(){
        blocks.forEach(x=>{
            x.textContent="";
        })
        document.addEventListener('keydown',pressKey);
    },7000)
}
fieldInit();
const blocks=document.querySelectorAll('.gamefield>div');
let inforM=document.querySelector(".info__memory")
const keys=['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight', 'Enter'];
function pressKey(event){
    if(event.key==="r" || event.key==="R"){
        location.reload();
    }
    if(!keys.includes(event.key) && event.key!=" ") return;
    blocks[y*4+x].classList.remove('active');
    switch(event.key){
        case keys[0]:
            y+1===3?y=0:y++;
            break;
        case keys[1]:
            y-1>=0?y--:y=2;
            break;
        case keys[3]:
            x+1===4?x=0:x++;
            break;
        case keys[2]:
            x-1>=0?x--:x=3;
            break;
        case keys[4]:
        case " ":
            if(blocks[y*4+x].textContent==="" && stepM===arr[y*4+x]){
                blocks[y*4+x].textContent=arr[y*4+x];
                stepM++;
            }
            else{
                inforM.innerHTML="Error:"+`${error+1}`;
                error++;
            }
            break;
    }
    blocks[y*4+x].classList.add('active');
    if(error===3){
        inforM.innerHTML="You lose :(";
    }
    if(stepM===13){
        inforM.innerHTML="You Win!)"
    }
}
document.querySelector('.up').addEventListener('click', () => move('ArrowUp'));
document.querySelector('.down').addEventListener('click', () => move('ArrowDown'));
document.querySelector('.left').addEventListener('click', () => move('ArrowLeft'));
document.querySelector('.right').addEventListener('click', () => move('ArrowRight'));
document.querySelector('.space').addEventListener('click', () => move(' '));

function move(key) {
    blocks[y*4+x].classList.remove('active');
    switch(key){
        case 'ArrowDown':
            y+1===3?y=0:y++;
            break;
        case 'ArrowUp':
            y-1>=0?y--:y=2;
            break;
        case 'ArrowRight':
            x+1===4?x=0:x++;
            break;
        case 'ArrowLeft':
            x-1>=0?x--:x=3;
            break;
        case ' ':
            if(blocks[y*4+x].textContent==="" && stepM===arr[y*4+x]){
                blocks[y*4+x].textContent=arr[y*4+x];
                stepM++;
            } else {
                inforM.innerHTML="Error:"+`${error+1}`;
                error++;
            }
            break;
    }
    blocks[y*4+x].classList.add('active');
    checkGameOver();
}

function checkGameOver() {
    if(error === 3) {
        inforM.innerHTML = "You lose :(";
    }
    if(stepM === 13) {
        inforM.innerHTML = "You Win!)";
    }
}
})
document.querySelector(".restart-button").onclick=function(){
    location.reload();
}