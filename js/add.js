// get json data
async function getData(){
    const data = await fetch("json/languages.txt");
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
    let title = document.querySelector("#title").value
    let text = document.querySelector("#text").value
    let code = document.querySelector("#code").value

    if(title != "" && text != "" && code != "" && language != ""){


        console.log(language)
        $.post("php/updateData.php",{"title":title,"text":text,"code":code,"fileName":"json/"+language},
        function(data){
            console.log(data);
        })

    }
    else {
        console.log("All fields are required")
    }
}

let btn = document.querySelector("button");

btn.onclick = function(){
    sendData()
}




