async function getRes(){
    let name = document.getElementById("search").value;
    let url = "http://127.0.0.1:3000/api/members?username="+name;
    try{
        let res = await fetch(url, {method:"GET"});
        res = await res.json();
        if(res.data != null){
            document.querySelector(".show_username").innerHTML = JSON.stringify(res.data.name +" "+"("+ res.data.username +")").replace(/"/g, "");
        }else{
            document.querySelector(".show_username").innerHTML = ("無此會員");
        }
    }catch(message){
        alert(`發現錯誤\n請聯絡網路管理員`);
    }
}

async function newName(){
    let new_name = document.getElementById("renew").value;
    let data = {name:new_name};
    let url = "http://127.0.0.1:3000/api/member";
    try{
        let res = 
        await fetch(url, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        });
        res = await res.json();
        console.log(res);
        if(res.ok == true){
            document.querySelector(".show_result").innerHTML = ("更新成功");
        }else{
            document.querySelector(".show_result").innerHTML = ("更新失敗");
        }
    }catch(message){
        alert(`發現錯誤\n請聯絡網路管理員`);
    }
}