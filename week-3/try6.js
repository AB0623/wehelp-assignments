function sendRequest(){
    return new Promise(function(resolve, reject){
            reject("error");
    })
}
let url = "https://padax.github.io/taipei-day-trip-resources/taipei-attractions-assignment.json";
async function init(){
    try{
        let data = await fetch(url);
        data = await data.json();
        let sum = 0;
        let next = [0];
        let total = data.result.results.length;
        let n1 = parseInt(next.slice(0));
        let n2 = n1 + 8;

        function loadData(n1, n2){
            for(let i = n1; i < [n2 || total]; i++){
                let info_5 = data.result.results[i].file;
                let result_5 = info_5.split("http");
                let result_5_ok = ("http"+result_5[1]);
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
                title.textContent = data.result.results[i].stitle;
                article.appendChild(title);
                div1.appendChild(article);
            }
            sum = n1 + 8;
            next.unshift(sum);
        }
        loadData(n1, n2);

        let load_button = document.getElementById("load_button");
        load_button.addEventListener("click", loadMore);
        function loadMore(){
            let total = data.result.results.length;
            let n1 = parseInt(next.slice(0));
            let n2 = n1 + 8;
            if(n2 <= total){
                loadData(n1, n2);
            }else{
                loadData(n1, total);
                load_button.style.display = "none";
                return;
            }
        }
    }catch(message){
        console.log(`${message}`);
    }
}
