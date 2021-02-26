 $ (document).ready(function () {
  
    var loc = location.href;
    var n1 = loc.length;//地址的总长度
    var n2 = loc.indexOf("=");//取得=号的位置
    var keyword = decodeURI(loc.substr(n2+1, n1-n2));//从=号后面的内容
  //alert(keyword);
  
   var url="http://api.tianapi.com/txapi/scenic/index?key=38686a13ee8b6ca757704e97056142c3&num=15&city="+keyword;
    $.ajax({
        url: url,
        type: 'GET',
        success: function (data) {
          // console.log(data);
          // console.log(data.showapi_res_body.pagebean.contentlist.length);
          $("#resultlist").empty();
          var i=0;
         while(data.newslist[i]) {
            var title=document.createElement("h3");
            title.innerHTML="&nbsp&nbsp景区："+data.newslist[i].name;
           // console.log(title);
            
            var intro=document.createElement("h5");
            intro.innerHTML="&nbsp&nbsp&nbsp&nbsp介绍:"
            var introItem=document.createElement("p");
            introItem.innerHTML="&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+data.newslist[i].content;
            //console.log(introItem);
     
            var parse=document.createElement("p");
            parse.innerHTML="<hr></br>";

            var element=document.getElementById('resultlist');

            element.appendChild(title);
            element.appendChild(intro);
            element.appendChild(introItem);

            element.appendChild(parse);
            i++;
         }
      }    
    });

       
        
});
