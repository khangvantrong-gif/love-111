*{margin:0;padding:0;box-sizing:border-box;}

body{
    font-family:'Be Vietnam Pro',sans-serif;
    background:linear-gradient(to bottom,#ffe6eb,#fff);
    overflow:hidden;
}

/* hiệu ứng */
.petal,.heart{
    position:fixed;
    pointer-events:none;
}

.petal{
    width:8px;height:8px;
    background:#ffb6c1;
    border-radius:50%;
    animation:fall linear infinite;
}

@keyframes fall{
    to{transform:translateY(100vh);}
}

.heart{
    color:#ff6b81;
    font-size:16px;
    animation:floatUp linear infinite;
}

@keyframes floatUp{
    to{transform:translateY(-100vh);opacity:0;}
}

/* page */
.page{
    position:absolute;
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    opacity:0;
    transform:scale(0.95);
    transition:0.6s;
}

.active{
    opacity:1;
    transform:scale(1);
}

/* title */
.title{
    font-family:'Pacifico',cursive;
    font-size:30px;
    color:#ff4d6d;
}

/* couple */
.couple{
    display:flex;
    align-items:center;
    gap:30px;
    margin:20px;
}

.avatar img{
    width:70px;height:70px;
    border-radius:50%;
    border:3px solid white;
}

.heart-mid{
    font-size:26px;
    color:#ff4d6d;
}

/* date */
.date{color:#777;}

.time{
    display:flex;
    gap:10px;
    margin-top:15px;
}

.box{
    background:white;
    padding:10px;
    border-radius:10px;
    color:#ff4d6d;
}

/* gallery */
.gallery{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:8px;
    padding:15px;
}

.gallery img{
    width:100%;
    border-radius:10px;
    opacity:0;
    transform:scale(0.8);
    transition:0.5s;
}

.gallery img.show{
    opacity:1;
    transform:scale(1);
}

/* card */
.card{
    background:white;
    padding:25px;
    border-radius:15px;
    color:#ff4d6d;
    max-width:300px;
    text-align:center;
}

/* hint */
.hint{
    margin-top:20px;
    color:#aaa;
    font-size:14px;
    animation:blink 1.5s infinite;
}

@keyframes blink{
    50%{opacity:0;}
}
