from flask import Flask, request, render_template, redirect, url_for, session

app=Flask(
    __name__,
    static_folder="static",
    static_url_path="/"
)
app.secret_key="key_secret-secretkey"

@app.route("/")
def index():
    return render_template(
        "index.html"
    )

@app.route("/signin",methods=["POST"])
def signin():
    check1=request.form["id"]
    check2=request.form["key"]
    if check1 == "test" and check2 == "test":
        session["user"]=check1
        return redirect("/member/")
    elif check1 =="" or check2 =="":
        return redirect("/error/?message=請輸入帳號、密碼")
    else:
        return redirect("/error/?message=帳號、或密碼輸入錯誤")

@app.route("/member/",methods=["GET","POST"])
def member():
    if "user" in session:
        check1=session["user"]
        return render_template(
            "member.html"
        )
    else:
        return redirect("/")

@app.route("/signout")
def signout():
    session.pop("user",None)
    return redirect("/")

@app.route("/error/")
def error():
    data=request.args.get("message","")
    return render_template(
        "error.html",
        message=data
    )

app.run(port=3000)
