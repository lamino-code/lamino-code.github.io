let t=`
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
        font-size: 30px;
        border-radius: 0.5em;
        transition: transform 0.5s ease;
        border: 3px solid brown;
        padding: 8px;
        height:50px;
    }
    .row {
        display: flex;
        margin: 0 auto;
        border-radius: 20px;
        gap:15px;
        top: 20px;
        position: sticky;
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
        background:dodgerblue;
    }
`;
const s=document.createElement("style");
s.textContent=t;
document.head.appendChild(s);
document.body.insertAdjacentHTML("afterbegin", `
    <div class="row">
        <a class="b" href="index.html">Home</a>
        <a class="b" href="lipsync.html">Lip-Sync Editor</a>
        <a class="b" href="aga.html">AGA</a>
        <a class="b" href="featured.html">Featured Projects</a>
    </div>
`);
