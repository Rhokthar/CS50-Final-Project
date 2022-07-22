import os
import re
import smtplib

from flask import Flask, flash, redirect, render_template, request, session
from flask_session import Session
from tempfile import mkdtemp

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
        mailReceiver = "molino.code.testing.1@gmail.com"
        mailSender = "molino.code.testing.1@gmail.com"
        localServer = smtplib.SMTP("server.smtp.com")

        mailMSG = "Prova"
        localServer.sendmail(mailSender, mailReceiver, mailMSG)
        return render_template("index.html")
    else:
        return render_template("contacts.html")