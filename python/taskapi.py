import flask
import sys
from flask import Flask,request,render_template,jsonify,json
from flask_cors import CORS
import hashlib 
import math, random
import MySQLdb
from captcha.image import ImageCaptcha
import base64 

app = flask.Flask(__name__)
CORS(app)
app.config["DEBUG"] = True

hostname = "localhost"
username = "root"
password = ""
database = "waitlist"

@app.route('/captcha', methods =['GET'])
def captcha():
    n1=6
    digits = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz"
    cap = "" 
    for i in range(n1) : 
        cap += digits[math.floor(random.random() * len(digits))]

    image = ImageCaptcha(width = 280, height = 90)
    data = image.generate(cap)
    image.write(cap, 'captcha.png')
    with open("captcha.png", "rb") as img_file:
        ing = base64.b64encode(img_file.read()).decode('utf-8')
    # print(ing)
    return jsonify({"data":cap,"img":ing})


#login Module
@app.route('/login', methods=['POST']) 
def login():
    content = request.get_json()
    hashpassword = hashlib.md5(content['password'].encode())
    conn = MySQLdb.connect(hostname,username,password,database)
    cur = conn.cursor()
    sql = 'SELECT * FROM waitlist WHERE email= "'+content['email']+'" AND password = "'+hashpassword.hexdigest()+'"'        
    cur.execute(sql)
    account = cur.fetchone()
    conn.close()
#     print(account)
    if account:
        keys=('userId','inital','position','name','email','userUrl','token','profilePicture')
        account=list(account)
        account.pop(5)
        account=tuple(account)
        users={}
        user = dict(zip(keys,account))
        return jsonify({"data":user})
    else:
        return jsonify("error")

@app.route('/signup', methods =['POST'])
def signup():
    content = request.get_json()
#     print(request.get_json(),content['email'])
    conn = MySQLdb.connect(hostname,username,password,database)
    cur = conn.cursor()
    sql = 'SELECT * FROM waitlist WHERE email= "'+content['email']+'"'        
    cur.execute(sql)
    account = cur.fetchone()
#     print(account)
    if account:
        return jsonify({"error":"User Already Exist with this email"})
    else:
        if content['recaptcha']==content['captcha']:
            n1=50
            n2=100
            digits = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz"
            key = "" 
            link=""
            for i in range(n2) : 
                key += digits[math.floor(random.random() * len(digits))] 
            for i in range(n1) : 
                link += digits[math.floor(random.random() * len(digits))]

            url="http://localhost:4200/signup/"+content['name']+"/"+link
            n=1
            digits = "12345678"
            pic = random.randint(1,8)

            hashpassword = hashlib.md5(content['password'].encode())
            # conn = MySQLdb.connect(hostname,username,password,waitlist)
            cur = conn.cursor()
            sql = 'SELECT initialPos FROM waitlist ORDER BY id DESC LIMIT 1'        
            affected = cur.execute(sql)
            lastid = cur.fetchone()
            if affected == 0:
                position = 99
            else:
                position = 1+lastid[0]             
            sql = "INSERT INTO waitlist (name, email, password,APIkey,referalUrl,profilePic,position,referalId,initialPos) VALUES ('" + content['name'] + "','" + content['email'] + "','" + hashpassword.hexdigest() + "','"+key+"','"+url+"',"+str(pic)+","+str(position)+","+str(0)+","+str(position)+")"
#             print(sql)
            cur = conn.cursor()
            cur.execute(sql)
            conn.commit()
            cur = conn.cursor()
            sql = 'SELECT * FROM waitlist ORDER BY id DESC LIMIT 1'        
            cur.execute(sql)
            account = cur.fetchone()
            keys=('userId','inital','position','name','email','userUrl','token','profilePictureURL','referalId')
            # print(account)
            account=list(account)
            account.pop(5)
            account=tuple(account)
            user={}
            user = dict(zip(keys,account))
            return jsonify({"data":user})
        else:
            return jsonify({"error":"CAPTCHA is incorrect"})

@app.route('/refer', methods =['POST'])
def refersignup():
    content = request.get_json()
#     print(request.get_json(),content['email'])
    conn = MySQLdb.connect(hostname,username,password,database)
    cur = conn.cursor()
    sql = 'SELECT * FROM waitlist WHERE email= "'+content['email']+'"'        
    cur.execute(sql)
    account = cur.fetchone()
#     print(account)
    if account:
        return jsonify({"error":"User Already Exist"})
    else:
        if content['recaptcha']==content['captcha']:
            cur = conn.cursor()
            sql = "SELECT position,id,initialPos,email FROM waitlist WHERE referalURL = '"+content['referalUrl']+"'"
#             print(sql)        
            cur.execute(sql)
            currentPositionS = cur.fetchone()
#             print(currentPositionS)
            if currentPositionS[0] == 1 :
                currentPosition = currentPositionS[2]-1
            else:
                print("else")
                currentPosition = currentPositionS[0]-1
            cur = conn.cursor()
            sql = "UPDATE waitlist SET position ='"+str(currentPosition)+"' WHERE referalURL = '"+content['referalUrl']+"'"        
            cur.execute(sql)
            n1=50
            n2=100
            digits = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz"
            key = "" 
            link=""
            for i in range(n2) : 
                key += digits[math.floor(random.random() * len(digits))] 
            for i in range(n1) : 
                link += digits[math.floor(random.random() * len(digits))]

            url="http://localhost:4200/signup/"+content['name']+"/"+link
            n=1
            digits = "12345678"
            pic = random.randint(1,8)

            hashpassword = hashlib.md5(content['password'].encode())
            # conn = MySQLdb.connect(hostname,username,password,waitlist)
            cur = conn.cursor()
            sql = 'SELECT initialPos FROM waitlist ORDER BY id DESC LIMIT 1'        
            cur.execute(sql)
            lastid = cur.fetchone()
            position = 1+lastid[0]            
            sql = "INSERT INTO waitlist (name, email, password,APIkey,referalUrl,profilePic,position,referalId,initialPos) VALUES ('" + content['name'] + "','" + content['email'] + "','" + hashpassword.hexdigest() + "','"+key+"','"+url+"',"+str(pic)+","+str(position)+","+str(currentPositionS[1])+","+str(position)+")"
#             print(sql)
            cur.execute(sql)
            conn.commit()
            cur = conn.cursor()
            sql = 'SELECT * FROM waitlist ORDER BY id DESC LIMIT 1'        
            cur.execute(sql)
            account = cur.fetchone()
            keys=('userId','inital','position','name','email','userUrl','token','profilePictureURL','referalId')
            # print(account)
            account=list(account)
            account.pop(5)
            account=tuple(account)
            user={}
            user = dict(zip(keys,account))
            if currentPosition == 1 :
                    user['isFirstPos'] = 'true'
                    user['referedUser'] = currentPositionS[3]
            else:
                    user['isFirstPos'] = 'false'
                    # user['referedUser'] = 0

            return jsonify({"data":user})
        else:
            return jsonify({"error":"CAPTCHA is incorrect"})

@app.route('/viewall', methods =['GET'])
def viewall():
    conn = MySQLdb.connect(hostname,username,password,database)
    cur = conn.cursor()
    cur.execute( "SELECT * FROM waitlist" )
    result = cur.fetchall()
#     print(result)
    length = len(result)
    if length >=0 :
        arr=[]
        dic = {}
        for x in range(length):
            keys=('userId','inital','position','name','email','userUrl','token','profilePictureURL','referalId')
            account=list(result[x])
            account.pop(5)
            account=tuple(account)
            user={}
            user = dict(zip(keys,account))
            arr.append(user)
        return jsonify({"data":arr})
    else:
        return jsonify({"error":"Somthing Went Worng"})

@app.route('/delete/<int:id>', methods =['DELETE'])
def delete(id):
    conn = MySQLdb.connect(hostname,username,password,database)
    cur = conn.cursor()
    exe = cur.execute( "DELETE FROM waitlist WHERE id="+str(id) )
    if exe > 0:
        conn.commit()
        print(exe)
        return jsonify({"data":"Deletion is successful"})
    else:
        return jsonify({"error":"Deletion is unsuccessful"})

@app.route('/view/<int:id>', methods =['GET'])
def viewbyId(id):
    conn = MySQLdb.connect(hostname,username,password,database)
    cur = conn.cursor()
    sql = 'SELECT * FROM waitlist WHERE id= '+str(id)      
    cur.execute(sql)
    account = cur.fetchone()
    conn.close()
#     print(account)
    if account:
        keys=('userId','inital','position','name','email','userUrl','token','profilePicture')
        account=list(account)
        account.pop(5)
        account=tuple(account)
        user={}
        user = dict(zip(keys,account))
        return jsonify({"data":user})
    else:
        return jsonify("error")

@app.route('/view/<int:id>/referance', methods =['GET'])
def viewbyIdref(id):
    conn = MySQLdb.connect(hostname,username,password,database)
    cur = conn.cursor()
    sql = 'SELECT * FROM waitlist WHERE referalId= '+str(id)      
    cur.execute(sql)
    result = cur.fetchall()
    conn.close()
    length = len(result)
    if length >=0 :
        arr=[]
        dic = {}
        for x in range(length):
            keys=('userId','inital','position','name','email','userUrl','token','profilePictureURL')
            account=list(result[x])
            account.pop(5)
            account=tuple(account)
            user={}
            user = dict(zip(keys,account))
            arr.append(user)
        return jsonify({"data":arr})
    else:
        return jsonify({"error":"Somthing Went Worng"})

@app.route('/edit/<int:id>', methods =['PUT'])
def meditfunc(id):
    content = request.get_json()
    conn = MySQLdb.connect(hostname,username,password,database)
    cur = conn.cursor()
    sql = "UPDATE waitlist SET email ='"+content['email']+"' WHERE id = '"+str(id)+"'"        
    acc=cur.execute(sql)
    conn.commit()
    if acc==1:
        return jsonify({"data":"Updated user info successfully"})
    else:
        return jsonify({"error":"User info updation unsuccessful"})

if __name__=='__main__':
	 app.run(debug=True)             
