async function getRes(){
    let name = document.getElementById("search").value;
    console.log(name)

    // let url = `http://127.0.0.1:3000/api/members?username=${name}`
    let url = "http://127.0.0.1:3000/api/members?username="+name
    try{
        let res = await fetch(url, {method:"GET"});
        res = await res.json();
        console.log(res)
        if(res.data != null){
            document.querySelector(".show_username").innerHTML = JSON.stringify(res.data.name +" "+"("+ res.data.username +")").replace(/"/g, "");
        }else{
            document.querySelector(".show_username").innerHTML = ("無此會員");
        }
    }catch(message){
        alert(`發現錯誤\n請聯絡網路管理員`);
    }
}
