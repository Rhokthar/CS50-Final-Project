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

# Index Route
@app.route("/")
def index():
    return render_template("index.html")


# About Me
@app.route("/about-me")
def about_me():
    return render_template("about-me.html")


# Projects
@app.route("/projects")
def projects():
    return render_template("projects.html")


# Skills
@app.route("/skills")
def skills():
    return render_template("skills.html")


# Def Blog


# Contacts
@app.route("/contacts", methods=["GET", "POST"])
def contacts():
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
            return render_template("contacts.html", backEndTests=retValueBE)
        # Check surname input
        elif len(request.form.get("surname_input")) < 2:
            retValueBE = False
            return render_template("contacts.html", backEndTests=retValueBE)
        # Check e-mail input
        elif not pyRegEX.fullmatch(request.form.get("e-mail")):
            retValueBE = False
            return render_template("contacts.html", backEndTests=retValueBE)
        # Check message input
        elif len(request.form.get("contact_info")) < 50:
            retValueBE = False
            return render_template("contacts.html", backEndTests=retValueBE)
        # CHECK VALUES SERVER-SIDE ENDS

        # MAIL SENDING STARTS
        mailObj = smtplib.SMTP("smtp.gmail.com", 587)
        mailObj.starttls()
        mailObj.login(websiteEmail, psw)

        mailMessage = MIMEText(str(request.form.get("contact_info")))
        mailMessage["Subject"] = f"Portfolio Site: {request.form.get('name_input')} {request.form.get('surname_input')} wanna talk with you!"
        mailMessage["From"] = request.form.get("e-mail")
        mailMessage["To"] = contactEmail

        try:
            mailObj.sendmail(request.form.get("e-mail"), contactEmail, mailMessage.as_string())
        except:
            return render_template("contacts.html")
        # MAIL SENDING ENDS
       
        # RENDER SUCCESS
        return render_template("contact-succeded.html")
        
    # LANDED ON PAGE: RENDER CONTACTS.HTML
    else:
        return render_template("contacts.html")