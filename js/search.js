var normal_word = document.getElementById('normal');
var normal_button = document.querySelector("#normal-button");

var detail_word = document.getElementById('detail');
var detail_button = document.querySelector("#detail-button");


var weather_word = document.getElementById('weather');
var weather_button = document.querySelector("#weather-button");

var keyword = "";

var now_index = 1;


window.onload = function () {

    normal_button.addEventListener('click', function () {
        let keyword = normal_word.value;
        if (keyword == "") {
            alert("请输入有效信息");
            window.location.href ="./search.html" ;
        }
        else {
           // alert(keyword);
           location.href="./search-result.html?"+"txt="+encodeURI(keyword);

        }
    })


   detail_button.addEventListener('click', function () {
        let keyword = detail_word.value;
        if (keyword == "") {
            alert("请输入有效信息");
            window.location.href ="./search.html" ;
        }
        else {
            //alert(keyword);
           location.href="./search-result2.html?"+"txt="+encodeURI(keyword);
        }
    })

    weather_button.addEventListener('click', function () {
        let keyword = weather_word.value;
        if (keyword == "") {
            alert("请输入有效信息");
            window.location.href ="./search.html" ;
        }
        else {
          // alert(keyword);
           location.href="./weather.html?"+"txt="+encodeURI(keyword);

        }
    })
    
}



