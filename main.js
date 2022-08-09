var translateButton =document.querySelector("#translate-button");
var textInput = document.querySelector("#text-input");
var textOutput = document.querySelector("#text-output")

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text)
{
    return serverURL + "?" + "text=" + text;
                    //query    key      value
}

function errrorHandler()
{
    console.log("error occured" + error);
    alert("something wrong with the server!! please try again later");
}

function clickHandler()
{
    // console.log("clicked");
    var inputText = textInput.value;

    fetch(getTranslationURL(inputText))
    .then(respone => respone.json())
    .then(function logJSON(json){
        var translatedText = json.contents.translated;
        textOutput.innerText = translatedText;
    })
    
    .catch(errrorHandler);
}

translateButton.addEventListener("click", clickHandler);