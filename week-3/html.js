function getData(){
    var req=new XMLHttpRequest();
    req.open("get", "https://padax.github.io/taipei-day-trip-resources/taipei-attractions-assignment.json", true);
    req.onload=function(){
        var data = req.response;
        var thisdata = JSON.parse(data);
        for (let i = 0; i < 8; i++){
            var info_5 = thisdata.result.results[i].file;
            var result_5 = info_5.split("http");
            var result_5_ok = ("http"+result_5[1]);
            let div1 = document.querySelector(".container03");
            let article = document.createElement("div");
            article.id = "article";
            let pic_home = document.createElement("div");
            pic_home.id = "pic_home";
            let pic = document.createElement("img");
            pic.id = "pic";
            pic.src = result_5_ok;
            pic_home.appendChild(pic);
            article.appendChild(pic_home);
            let title = document.createElement("div");
            title.id="title";
            title.textContent = thisdata.result.results[i].stitle;
            article.appendChild(title);
            div1.appendChild(article);
        }
    }
    req.send();
}
getData();

var sum = 0;
var next = [8];
function init(){
    var load_button = document.getElementById("load_button");
    var loadMore = function(){
        var req=new XMLHttpRequest();
        req.open("get", "https://padax.github.io/taipei-day-trip-resources/taipei-attractions-assignment.json", true);
        req.onload=function(){
            var data = req.response;
            var thisdata = JSON.parse(data);
            var total = thisdata.result.count;
            var end = total - 1;
            var n1 = parseInt(next.slice(0));
            var n2 = n1 + 8;
            if(n2 <= end){
                for (var i = n1; i < n2; i++){
                    var info_5 = thisdata.result.results[i].file;
                    var result_5 = info_5.split("http");
                    var result_5_ok = ("http"+result_5[1]);
                    let div1 = document.querySelector(".container03");
                    let article = document.createElement("div");
                    article.id = "article";
                    let pic_home = document.createElement("div");
                    pic_home.id = "pic_home";
                    let pic = document.createElement("img");
                    pic.id = "pic";
                    pic.src = result_5_ok;
                    pic_home.appendChild(pic);
                    article.appendChild(pic_home);
                    let title = document.createElement("div");
                    title.id="title";
                    title.textContent = thisdata.result.results[i].stitle;
                    article.appendChild(title);
                    div1.appendChild(article);
                }
            }else{
                for (var j = n1; j < end; j++){
                    var info_5 = thisdata.result.results[j].file;
                    var result_5 = info_5.split("http");
                    var result_5_ok = ("http"+result_5[1]);
                    let div1 = document.querySelector(".container03");
                    let article = document.createElement("div");
                    article.id = "article";
                    let pic_home = document.createElement("div");
                    pic_home.id = "pic_home";
                    let pic = document.createElement("img");
                    pic.id = "pic";
                    pic.src = result_5_ok;
                    pic_home.appendChild(pic);
                    article.appendChild(pic_home);
                    let title = document.createElement("div");
                    title.id="title";
                    title.textContent = thisdata.result.results[j].stitle;
                    article.appendChild(title);
                    div1.appendChild(article);
                    load_button.style.display = "none";
                }
                return;
            }
            sum = n1 + 8;
            next.unshift(sum);
        }
        req.send();
    }
    load_button.addEventListener("click", loadMore);
}
