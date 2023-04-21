const btnTranlate = document.querySelector("#btn-translate");
const txtInput = document.querySelector("#txt-input");
const outputDiv = document.querySelector("#output");

btnTranlate.addEventListener("click",()=>{
    outputDiv.innerText = txtInput.value
    fetch("https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=Hello my name is shantanu")
    .then( (res) => {return res.json(); })
    .then(json => {
        console.log(json);
    })
})