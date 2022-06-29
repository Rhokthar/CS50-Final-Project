from flask import Flask, flash, redirect, render_template, request, session
from flask_session import Session
from tempfile import mkdtemp

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")