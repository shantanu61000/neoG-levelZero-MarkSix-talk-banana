const btnTranlate = document.querySelector("#btn-translate");
const txtInput = document.querySelector("#txt-input");
const outputDiv = document.querySelector("#output");
const serverUrl = "https://api.funtranslations.com/translate/minion.json"
// const serverUrl = "https://lessonfourapi.tanayratap.repl.co/translate/yoda.json"

function getTranslationUrl(text){
    return serverUrl + "?text=" + text;
}

function errorHandler(error){
    console.log("Error occured "+error);
}

function clickHandler(){
    const input = txtInput.value;

    fetch(getTranslationUrl(input))
    .then( response => response.json())
    .then( json => {
        outputDiv.innerText = json.contents.translated;
    })
    .catch(errorHandler);
}

btnTranlate.addEventListener("click",clickHandler);