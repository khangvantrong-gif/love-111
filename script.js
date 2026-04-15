// 🎵 bật nhạc khi chạm lần đầu
let started=false;
document.body.addEventListener("click",()=>{
    if(!started){
        document.getElementById("music").play();
        started=true;
    }
});

// 🌸 hiệu ứng nền
for(let i=0;i<40;i++){
    let p=document.createElement("div");
    p.className="petal";
    p.style.left=Math.random()*100+"vw";
    p.style.animationDuration=(5+Math.random()*5)+"s";
    document.body.appendChild(p);
}

for(let i=0;i<20;i++){
    let h=document.createElement("div");
    h.className="heart";
    h.innerHTML="❤";
    h.style.left=Math.random()*100+"vw";
    h.style.animationDuration=(6+Math.random()*4)+"s";
    document.body.appendChild(h);
}

// 👉 chuyển trang
let p=1;
document.body.onclick=()=>{
    if(p<3){
        document.getElementById("p"+p).classList.remove("active");
        p++;
        document.getElementById("p"+p).classList.add("active");

        if(p==2) showGallery();
        if(p==3) typeText();
    }
};

// 👉 đếm thời gian
let start=new Date("2025-12-25");

setInterval(()=>{
    let now=new Date();
    let diff=now-start;

    let d=Math.floor(diff/86400000);
    let h=Math.floor(diff/3600000)%24;
    let m=Math.floor(diff/60000)%60;
    let s=Math.floor(diff/1000)%60;

    d&&(document.getElementById("d").innerText=d+"d");
    document.getElementById("h").innerText=h+"h";
    document.getElementById("m").innerText=m+"m";
    document.getElementById("s").innerText=s+"s";
},1000);

// 👉 ảnh hiện dần
function showGallery(){
    let gallery=document.getElementById("gallery");

    for(let i=1;i<=12;i++){
        let img=document.createElement("img");
        img.src="assets/img"+i+".jpg";
        gallery.appendChild(img);

        setTimeout(()=>{
            img.classList.add("show");
        }, i*150);
    }
}

// 👉 text gõ chữ
let text="111 ngày qua không phải là quãng thời gian dài, nhưng đủ để t biết t cần m đến mức nào. ❤️";

function typeText(){
    let i=0;
    let box=document.getElementById("cardText");

    let typing=setInterval(()=>{
        box.innerHTML+=text[i];
        i++;
        if(i>=text.length) clearInterval(typing);
    },40);
}
