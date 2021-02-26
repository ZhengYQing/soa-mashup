$(document).ready(function () {
  
    var url="http://route.showapi.com/109-35?showapi_appid=407336&showapi_sign=332840ae07b140c0a7817d89d051bd9c&title=旅游"
    
    $.ajax({
        url: url,
        type: 'GET',
        success: function (data) {
          // console.log(data);
          // console.log(data.showapi_res_body.pagebean.contentlist.length);
          $("#newslist").empty();
          for (var i = 0; i <= data.showapi_res_body.pagebean.contentlist.length-1; i++) {
            var title=document.createElement("a");
            title.innerHTML=data.showapi_res_body.pagebean.contentlist[i].title;
            title.href=data.showapi_res_body.pagebean.contentlist[i].link;
          //  console.log(title);
            
            var pubDate=document.createElement("p");
            pubDate.innerHTML="日期:&nbsp;"+data.showapi_res_body.pagebean.contentlist[i].pubDate;
           // console.log(pubDate);

            var desc=document.createElement("p");
            desc.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;"+data.showapi_res_body.pagebean.contentlist[i].desc;
            //console.log(desc);

            var img_url=document.createElement("img");
            if (data.showapi_res_body.pagebean.contentlist[i].imageurls[0]) {
              img_url.src=data.showapi_res_body.pagebean.contentlist[i].imageurls[0].url;
              img_url.width="455";
              img_url.height="255";
            }
          //  console.log(img_url);

            var parse=document.createElement("p");
            parse.innerHTML="<hr></br>";
            var element=document.getElementById('newslist')
            element.appendChild(title);
            element.appendChild(pubDate);
            element.appendChild(img_url);
            if(desc.innerHTML!="&nbsp;&nbsp;&nbsp;&nbsp;undefined")
            {
            element.appendChild(desc);
            }
            element.appendChild(parse);
          }
      }
})
});
