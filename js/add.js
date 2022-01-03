// get json data
async function getData(){
    const data = await fetch("json/languages.json");
    const response = await data.json();

    let select = document.querySelector("select");

    response.forEach(element => {
        select.innerHTML += `<option>${element.name}</option>`;
    });

}
getData()

// send Data
function sendData(){
    let language = document.querySelector("select").value
    let title = document.querySelector("#title")
    let text = document.querySelector("#text")
    let code = document.querySelector("#code")

    if(title != "" && text != "" && code != "" && language != ""){


        console.log(language)
        $.post("php/updateData.php",{"title":title.value,"text":text.value,"code":code.value,"fileName":"json/"+language},
        function(data){
            title.value = "";
            text.value = "";
            code.value = "";
        })

    }
    else {
        console.log("All fields are required")
    }
}


// toggle cards
function openCard(id,evnt){
    let cards = document.querySelectorAll(".add");

    cards.forEach(card=>{
        card.style.display = "none";
    })

    document.querySelector(`#${id}`).style.display = "block";

    document.querySelectorAll("button").forEach(btn => {
        btn.classList.remove("active");
    })
    evnt.classList.add("active")
}
openCard("doc",document.querySelector("button:first-child"));



