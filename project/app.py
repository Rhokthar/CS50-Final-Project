import os
import re
import smtplib

from flask import Flask, flash, redirect, render_template, request, session
from flask_session import Session
from tempfile import mkdtemp
from email.mime.text import MIMEText

# Setup App
app = Flask(__name__)

# Templates autoreload
app.config["TEMPLATES_AUTO_RELOAD"] = True

# Index Route: Choose Lang (?)
@app.route("/")
def index():
    return render_template("index.html")


# HOME - EN
@app.route("/en/home")
def en_home():
    return render_template("./en/home.html")
# HOME - IT
@app.route("/it/home")
def it_home():
    return render_template("./it/home.html")


# ABOUT ME - EN
@app.route("/en/about-me")
def en_about_me():
    return render_template("./en/about-me.html")
# ABOUT ME - IT
@app.route("/it/about-me")
def it_about_me():
    return render_template("./it/about-me.html")


# PROJECTS - EN
@app.route("/en/projects")
def en_projects():
    return render_template("./en/projects.html")
# PROJECTS - IT
@app.route("/it/projects")
def it_projects():
    return render_template("./it/projects.html")


# SKILLS - EN
@app.route("/en/skills")
def en_skills():
    return render_template("./en/skills.html")
# SKILLS - IT
@app.route("/it/skills")
def it_skills():
    return render_template("./it/skills.html")


# Def Blog


# CONTACTS - EN
@app.route("/en/contacts", methods=["GET", "POST"])
def en_contacts():
    if request.method == "POST":
        # CHECK VALUES SERVER-SIDE STARTS
        # Variables
        retValueBE = True
        contactEmail = "molino.simone1295@gmail.com"
        websiteEmail = "molino.code.testing.1@gmail.com"
        psw = 'kwzozglydmnaqjyd'
        pyRegEX = re.compile("^([A-Za-z0-9_\.?\-?]+)(?<!\.)(?<!\-)@(?!\.)(?!\-)([A-Za-z0-9_\.?\-?]+)\.([A-Za-z0-9]{2,5})$") 

        # Check name input
        if len(request.form.get("name_input")) < 2:
            retValueBE = False
            return render_template("./en/contacts.html", backEndTests=retValueBE)
        # Check surname input
        elif len(request.form.get("surname_input")) < 2:
            retValueBE = False
            return render_template("./en/contacts.html", backEndTests=retValueBE)
        # Check e-mail input
        elif not pyRegEX.fullmatch(request.form.get("e-mail")):
            retValueBE = False
            return render_template("./en/contacts.html", backEndTests=retValueBE)
        # Check message input
        elif len(request.form.get("contact_info")) < 50:
            retValueBE = False
            return render_template("./en/contacts.html", backEndTests=retValueBE)
        # CHECK VALUES SERVER-SIDE ENDS

        # MAIL SENDING STARTS
        mailObj = smtplib.SMTP("smtp.gmail.com", 587)
        mailObj.starttls()
        mailObj.login(websiteEmail, psw)

        mailMessage = MIMEText("From: " + str(request.form.get("e-mail")) + "\n" + "Message: " + str(request.form.get("contact_info")))
        mailMessage["Subject"] = f"Portfolio Site: {request.form.get('name_input')} {request.form.get('surname_input')} - wanna talk with you!"
        mailMessage["From"] = request.form.get("e-mail")
        mailMessage["To"] = contactEmail

        try:
            mailObj.sendmail(request.form.get("e-mail"), contactEmail, mailMessage.as_string())
        except:
            return render_template("./en/contacts.html")
        # MAIL SENDING ENDS
       
        # RENDER SUCCESS
        return render_template("./en/contact-succeded.html")
        
    # LANDED ON PAGE: RENDER CONTACTS.HTML
    else:
        return render_template("./en/contacts.html")
# CONTACTS - IT
@app.route("/it/contacts", methods=["GET", "POST"])
def it_contacts():
    if request.method == "POST":
        # CHECK VALUES SERVER-SIDE STARTS
        # Variables
        retValueBE = True
        contactEmail = "molino.simone1295@gmail.com"
        websiteEmail = "molino.code.testing.1@gmail.com"
        psw = 'kwzozglydmnaqjyd'
        pyRegEX = re.compile("^([A-Za-z0-9_\.?\-?]+)(?<!\.)(?<!\-)@(?!\.)(?!\-)([A-Za-z0-9_\.?\-?]+)\.([A-Za-z0-9]{2,5})$") 

        # Check name input
        if len(request.form.get("name_input")) < 2:
            retValueBE = False
            return render_template("./it/contacts.html", backEndTests=retValueBE)
        # Check surname input
        elif len(request.form.get("surname_input")) < 2:
            retValueBE = False
            return render_template("./it/contacts.html", backEndTests=retValueBE)
        # Check e-mail input
        elif not pyRegEX.fullmatch(request.form.get("e-mail")):
            retValueBE = False
            return render_template("./it/contacts.html", backEndTests=retValueBE)
        # Check message input
        elif len(request.form.get("contact_info")) < 50:
            retValueBE = False
            return render_template("./it/contacts.html", backEndTests=retValueBE)
        # CHECK VALUES SERVER-SIDE ENDS

        # MAIL SENDING STARTS
        mailObj = smtplib.SMTP("smtp.gmail.com", 587)
        mailObj.starttls()
        mailObj.login(websiteEmail, psw)

        mailMessage = MIMEText("From: " + str(request.form.get("e-mail")) + "\n" + "Message: " + str(request.form.get("contact_info")))
        mailMessage["Subject"] = f"Portfolio Site: {request.form.get('name_input')} {request.form.get('surname_input')} - wanna talk with you!"
        mailMessage["From"] = request.form.get("e-mail")
        mailMessage["To"] = contactEmail

        try:
            mailObj.sendmail(request.form.get("e-mail"), contactEmail, mailMessage.as_string())
        except:
            return render_template("./it/contacts.html")
        # MAIL SENDING ENDS
       
        # RENDER SUCCESS
        return render_template("./it/contact-succeded.html")
        
    # LANDED ON PAGE: RENDER CONTACTS.HTML
    else:
        return render_template("./it/contacts.html")

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=int(os.environ.get("PORT", 8080)))