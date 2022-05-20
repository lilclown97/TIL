from flask import Flask, render_template, request
import requests

app = Flask(__name__)


@app.route('/')
def main():
    myname = "Sparta"
    return render_template("index.html", name=myname)


@app.route('/detail/<keyword>')
def detail(keyword):
    r = requests.get(f"https://owlbot.info/api/v4/dictionary/{keyword}", headers={"Authorization": "Token e92b6d41d3548ec32e875ef446e8e83ee254d827"})
    result = r.json()
    print(result)
    word_receive = request.args.get("word_give")
    print(word_receive)
    return render_template("detail.html", word=keyword)


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)