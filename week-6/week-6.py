from flask import Flask, request, render_template, redirect, session
import mysql.connector

connection=mysql.connector.connect(
    host='localhost',
    port='3306',
    user='test',
    password='1234mysql',
    database='website1',
    charset='utf8')

cursor=connection.cursor()

app=Flask(
    __name__,
    static_folder="static",
    static_url_path="/"
)
app.secret_key="key_secret-secretkey"

@app.route("/")
def index1():
    return render_template(
        "index1.html"
    )

@app.route("/signup",methods=["POST"])
def signup():
    user_name = request.form["user_name"]
    user_id = request.form["user_id"]
    user_password = request.form["user_password"]
    sql = "SELECT `user_id` FROM `member` WHERE `user_id` = '"+user_id+"'"
    cursor.execute(sql)
    record=cursor.fetchone()
    if user_name =="" or user_id =="" or user_password =="":
        return redirect("/error/?message=請確實輸入姓名、帳號、密碼")
    elif record != None:
        return redirect("/error/?message=帳號已經被註冊過")
    else:
        sql = "INSERT INTO `member` (`user_name`, `user_id`, `user_password`) VALUES('"+user_name+"','"+user_id+"','"+user_password+"')"
        cursor.execute(sql)
        connection.commit()
        return redirect("/signup_success/")

@app.route("/signin",methods=["POST"])
def signin():
    check1=request.form["id"]
    check2=request.form["password"]
    sql = "SELECT `user_name` FROM `member` WHERE `user_id` = '"+check1+"' AND `user_password` = '"+check2+"'"
    cursor.execute(sql)
    result=cursor.fetchall()
    if len(result) == 1:
        session["user"]=check1
        result_ok=(result[0][0])
        session["user_name"]=result_ok
        return redirect("/member/")
    elif check1 =="" or check2 =="":
        return redirect("/error/?message=請輸入帳號、密碼")
    else:
        return redirect("/error/?message=帳號、或密碼輸入錯誤")

@app.route("/member/",methods=["GET","POST"])
def member():
    if "user" in session:
        check1=session["user"]
        check2=session["user_name"]
        return render_template(
            "member.html",
            name=check2
        )
    else:
        return redirect("/")

@app.route("/signup_success/")
def signup_success():
    return render_template(
        "signup_success.html"
    )

@app.route("/signout")
def signout():
    session.clear()
    return redirect("/")

@app.route("/error/")
def error():
    data=request.args.get("message","")
    return render_template(
        "error.html",
        message=data
    )
if __name__=="__main__":
    app.run(port=3000)

cursor.close()
connection.close()