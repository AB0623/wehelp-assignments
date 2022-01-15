import urllib.request as req
import json
url="https://padax.github.io/taipei-day-trip-resources/taipei-attractions-assignment.json"

request=req.Request(url, headers={
    "user-agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36"
})
with req.urlopen(request) as response:
    data=response.read().decode("utf-8")

data=json.loads(data)
n1=data["result"]["count"]

for i in range(0,n1-1):
    with open("data.csv",mode="a",encoding="utf-8") as file:
        file.write(data["result"]["results"][i]["stitle"]+", ")
        info_2=data["result"]["results"][i]["address"]
        file.write(info_2[5:8]+", ")
        file.write(data["result"]["results"][i]["longitude"]+", ")
        file.write(data["result"]["results"][i]["latitude"]+", ")
        info_5=data["result"]["results"][i]["file"]
        result_5=info_5.split("http")[1]
        file.write("http"+result_5+"\n")
