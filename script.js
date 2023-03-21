const btn1 = document.querySelector('.btn-1');
const btn2 = document.querySelector('.btn-2');
const img = document.querySelector('#img-load');
const text = document.querySelector('#ingame-text');

btn1.addEventListener('click',()=>{
    if(btn1.textContent=="Start"){
        img.src = "image/start.png";
        btn1.textContent = "Wonderhoy";
        btn2.textContent = "Not Wonderhoy";
        text.textContent ="Emu: Hello! My name is Emu."
    }
    else if(btn1.textContent=="Wonderhoy"){
        img.src = "image/wondahoi.png";
        btn1.textContent = "Restart";
        btn2.textContent = "";
        text.textContent ="Emu: Wonderhoy!!!!"
    }
    else if(btn1.textContent=="Restart"){
        location.href="index.html";
    }
})


btn2.addEventListener('click',()=>{
    if(btn2.textContent=="Not Wonderhoy"){
        img.src = "image/sad.png";
        btn1.textContent = "Restart";
        btn2.textContent = "";
        text.textContent ="Emu: Hmm Why?!! Emu is sad now."
    }

})
