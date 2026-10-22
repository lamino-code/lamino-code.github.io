const s=document.createElement("style");
s.textContent=`
    body{min-height:120vh;margin:0;}
    .b:active{
        transform: scale(0.8);
    }
    .b:hover{
        transform: scale(1.1);
    }
    .b{
        user-select: none;
        background: orange;
        filter: drop-shadow(2px 2px 2px black);
        text-align: center;
        align-content: center;
        text-decoration: none;
        font-weight: 700;
        font-family: "Nunito", sans-serif, system-ui;
        color: rgb(13, 25, 35);
        font-size: 2vw;
        border-radius: 0.5em;
        transition: transform 0.5s ease;
        border: 3px solid brown;
        padding:8px;
        height:50px;
    }
    .row{
        display: flex;
        z-index:999;
        margin: 0 auto;
        border-radius: 20px;
        gap:15px;
        top:20px;
        position:sticky;
        align-content: center;
        justify-content: flex-start;
    }
    .content{
        width:max-content;
        position:absolute;
        align-content: center;
        left:50%;
        transform:translateX(-50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
    body{
        background:linear-gradient:(75deg, rgb(66, 52, 52), rgb(148, 227, 238));
    }
`;
st=document.createElement("link")
st.rel="stylesheet"
st.href="https://fonts.googleapis.com/css2?family=Nunito:wght@700&display=swap"
document.head.appendChild(st)
document.head.appendChild(s);
document.body.insertAdjacentHTML("afterbegin",`
    <div class="row">
        <a class="b" href="/index.html">Home</a>
        <a class="b" href="/lipsync.html">Lip-Sync Editor</a>
        <a class="b" href="/aga.html">AGA</a>
        <a class="b" href="/featured.html">Featured Projects</a>
        <a class="b" href="/list/index.html">GD List</a>
    </div>
`);