/**
 * Created by Rakesh on 11/28/2016.
 */

function color(){
    var i = 0;
    i++;
    var randomColor = Math.floor(Math.random()*16777215);
    //console.log(i);
    document.getElementById("body").style.backgroundColor = "#"+randomColor.toString(16);
//document.getElementById("body").style.color = "#"+("0xFFFFFF"-("0x"+(randomColor.toString(16)))).toString(16);
//console.log("0xFFFFFF"-("0x"+(randomColor.toString(16))));
    document.getElementById("body").style.transition = "all 5s";
    setTimeout(color, 10000);
};

$(document).ready(function(){

    getRandomQuote();



});

function getRandomQuote(){
    //$("#quote").empty();
    var myurl = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";
    $.ajax({url: myurl, success: myCallback, cache: false});
    /*
    $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", function(a) {
        console.log(a);

        $("#quote").append(a[0].content + "<p>— " + a[0].title + "</p>")
    });
    */


}

$("#next").click(function(){

        getRandomQuote();

    }
);
function myCallback(result){
    $("#quote").empty();
    $("#quote").append(result[0].content + "<p>— " + result[0].title + "</p>");

    $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + result[0].content + '" ' + result[0].title));
}