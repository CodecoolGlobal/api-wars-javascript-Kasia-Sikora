from flask import Flask, render_template, request, redirect
import data_manager, util
import os

app = Flask(__name__)
app.secret_key = os.urandom(32)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/registration')
def user_registration():
    return render_template('registration.html')


@app.route('/registration-form', methods=["GET", "POST"])
def registration_form():
    user_data = request.form.to_dict()
    hashed_password = util.hash_password(user_data['password'])
    user_data = data_manager.save_user(hashed_password, user_data['username'])
    return redirect("/")


if __name__ == '__main__':
    app.run()
