// scrollToTop
let scrollToTop = document.querySelector(".scrollToTop");

scrollToTop.onclick = function(){
    window.scroll({
        top : 0,
        behavior : "smooth"
    })
}
// toggle navbar
let closeBars = document.querySelector("#closeBars");

closeBars.onclick = function(){
    document.querySelector("nav").classList.toggle("close");
    document.querySelector("main").classList.toggle("close");
}

// list color
let lists = document.querySelectorAll("li");

lists.forEach(clicked => {
    clicked.onclick = function(){
        lists.forEach(list => {
            list.classList.remove("selected")
        });
        clicked.classList.add("selected")
        getData(clicked.querySelector("p").textContent)
    }
});

// get json data
async function getData(link){
    const data = await fetch("json/"+link+".json");
    const response = await data.json();

    let container = document.querySelector(".container");

    container.innerHTML = "";

    container.innerHTML += `<div class="languageName">${response.language}</div>`;

    let headerLists;
    headerLists = `<div class="header"><ul>`;
    response.header.forEach(li =>{
        headerLists += `<li>${li}</li>`;
    })
    headerLists += `</ul></div>`;

    container.innerHTML += headerLists;

    console.log(response.content)
    response.content.forEach(element => {
        
        container.innerHTML += `
        <div class="content">
            <div class="title">${element.title}</div>
            <div>
                ${element.text.replace(/</g, "&lt").replace(/-/g,"<br>").replace(/_/g,"&emsp;")}
            </div>
            <div class="code">
            <button class="copy" onclick="copyCode(this)">copy</button>
                <code>
                    ${element.code.replace(/</g, "&lt").replace(/-/g,"<br>").replace(/_/g,"&emsp;")}
                </code>
            </div>
        </div>`;
    });
}
getData("html")


function copyCode(element){
    let copyText = element.parentElement.querySelector(':nth-child(2)').textContent

    
    navigator.clipboard.writeText(copyText);
}



