$ (document).ready(function () {
  
    var loc = location.href;
    var n1 = loc.length;//地址的总长度
    var n2 = loc.indexOf("=");//取得=号的位置
    var keyword = decodeURI(loc.substr(n2+1, n1-n2));//从=号后面的内容
 // alert(keyword);
  
  var url="http://v.juhe.cn/weather/index?key=bc68704389b17934bcea45f2fd5fd8dc&dtype=xml&format=2&cityname="+keyword;
  //bc68704389b17934bcea45f2fd5fd8dc

  getJSONP(url, (data) => {     //匿名函数
      console.log(data)
      if (data.error_code == 0) {
          console.log(data.reason);
          $("#resultlist").empty();
          var html="<h3>"+data.result.today.city+"今日天气：</h3>";
          var weather_fa = data.result.today.weather_id.fa;
          var weather_fb = data.result.today.weather_id.fb;
          
          html += '<ul>';
          html += '<li>' + "当前温度："+ data.result.sk.temp + " (更新时间：" + data.result.sk.time + ')' +'</li>'
          html += '<li>' + "今日温度："+ data.result.today.temperature +'</li>'
          html += '<li>' + "今日天气："+ data.result.today.weather +'</li>'
          html += '<li>' + "今日风向："+ data.result.today.wind +'</li>'
          html += '<li>' + "穿衣指数："+ data.result.today.dressing_index +'</li>'
          html += '<li>' + "穿衣建议："+ data.result.today.dressing_advice +'</li>'
          html += '<li>' + "紫外线强度："+ data.result.today.uv_index +'</li>'
          html += '</ul>';
          html += '</br></br></br></br>'
          html += "<h3>未来一周天气预报</h3>"
          var futureWeather = data.result.future;
          for (var i = 0; i <= futureWeather.length-1; i++) {
              html += "<h4>"+futureWeather[i].date+"  "+futureWeather[i].week+"</h4>"
              html += '<ul>';
              html += '<li>' + "当日温度："+ futureWeather[i].temperature +'</li>'
              html += '<li>' + "当日天气："+ futureWeather[i].weather +'</li>'
              html += '<li>' + "当日风向："+ futureWeather[i].wind +'</li>'
              html += '</ul>';
          }
          $('#resultlist').html(html); 
      }
      else {
          console.log(data.reason);
          window.alert(data.reason);
      }

  });
       
        
});


