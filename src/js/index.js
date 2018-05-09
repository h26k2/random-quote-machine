

const handleCon = document.getElementsByClassName("handle")[0];
const quoteElement = document.getElementById("quote--area").getElementsByTagName("p")[0];
const handle = document.getElementsByClassName("handle")[0];
let sharingLinks = document.getElementsByClassName("machine--lights")[0].getElementsByTagName("a");

function getQuote(){
    $.ajax({
        url:"https://api.forismatic.com/api/1.0/?",
        dataType : "jsonp",
        data:"method=getQuote&format=jsonp&lang=en&jsonp=?",
        success:function(response){
            if(response.quoteText.length <= 280){
                quoteElement.innerText = response.quoteText;
                sharingLinks[0].setAttribute("href","https://www.twitter.com/intent/tweet?text="+
                response.quoteText+"%0A'Quote Generator' Made by @hasnainkarim262");
            }
            else{
                getQuote();
            }
        }
    });
}

function doStuff(){

    handleCon.setAttribute("style","animation-name:handle;");
    setTimeout(function(){
        handleCon.removeAttribute("style");
    },1100);
    getQuote();

}

window.addEventListener("load",getQuote);
handle.addEventListener("click",doStuff);