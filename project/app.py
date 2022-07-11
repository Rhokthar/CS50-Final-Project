import os
import re

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
@app.route("/contacts")
def contacts():
    return render_template("contacts.html")