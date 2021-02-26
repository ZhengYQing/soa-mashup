$ (document).ready(function () {
  
    var loc = location.href;
    var n1 = loc.length;//地址的总长度
    var n2 = loc.indexOf("=");//取得=号的位置
    var keyword = decodeURI(loc.substr(n2+1, n1-n2));//从=号后面的内容
  //alert(keyword);
  
   var url="http://route.showapi.com/268-1?showapi_appid=407336&showapi_sign=332840ae07b140c0a7817d89d051bd9c&keyword="+keyword;
    $.ajax({
        url: url,
        type: 'GET',
        success: function (data) {
         
          $("#resultlist").empty();
          
          for (var i = 0; i <= data.showapi_res_body.pagebean.contentlist.length-1; i++) {

            var title=document.createElement("h3");
            title.innerHTML="&nbsp;&nbsp;景区："+data.showapi_res_body.pagebean.contentlist[i].name;
            console.log(title);

            var addr=document.createElement("h5");
            addr.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;地址:"
            var addrItem=document.createElement("p");
            addrItem.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+data.showapi_res_body.pagebean.contentlist[i].address;
            console.log(addrItem);

            var star=document.createElement("h5");
            star.innerHTML="&nbsp&nbsp&nbsp&nbsp星级:"
            var starItem=document.createElement("p");
            starItem.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+data.showapi_res_body.pagebean.contentlist[i].star;
            console.log(starItem);
           

            var img_url=document.createElement("img");
            if (data.showapi_res_body.pagebean.contentlist[i].picList[0]) {
              img_url.src=data.showapi_res_body.pagebean.contentlist[i].picList[0].picUrl;
              img_url.width="600";
              img_url.height="300";
            }

             
            var intro=document.createElement("h5");
            intro.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;介绍:"
            var introItem=document.createElement("p");
            introItem.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+data.showapi_res_body.pagebean.contentlist[i].summary;
            console.log(introItem);

            var atten=document.createElement("h5");
            atten.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;注意事项:"
            var attenItem=document.createElement("p");
            attenItem.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+data.showapi_res_body.pagebean.contentlist[i].attention;
            console.log(attenItem);

            var price=document.createElement("h5");
            price.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;最低门票价格:"
            var priceItem=document.createElement("p");
            priceItem.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+data.showapi_res_body.pagebean.contentlist[i].price;
            console.log(priceItem);

     
            var parse=document.createElement("p");
            parse.innerHTML="<hr></br>";

            var element=document.getElementById('resultlist');

            element.appendChild(title);

            if(addrItem.innerHTML!="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;undefined")
            {
              element.appendChild(addr);
              element.appendChild(addrItem);
            }
           

            if(starItem.innerHTML!="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;undefined"&&starItem.innerHTML!="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;")
            {
              element.appendChild(star);
              element.appendChild(starItem);
            }
            
            if(img_url.src)
            {
            element.appendChild(img_url);
            }

            if(introItem.innerHTML!="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;undefined")
            {
              element.appendChild(intro);
              element.appendChild(introItem);
            }
            
            if(attenItem.innerHTML!="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;undefined")
            {
              element.appendChild(atten);
              element.appendChild(attenItem);
            }
           

            if(priceItem.innerHTML!="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;undefined")
            {
              element.appendChild(price);
              element.appendChild(priceItem);
            }
            

            element.appendChild(parse);
        }
      }
    });
    

       
        
});


