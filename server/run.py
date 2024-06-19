import os
from flask import Flask, send_from_directory
from flask_cors import CORS
import logging

logger = logging.getLogger(__name__)

app = Flask(__name__, static_folder="../client/dist")


CORS(app)


@app.route("/")
def serve():
    return send_from_directory(app.static_folder, "index.html")


def main():
    app.run(debug=True, host="0.0.0.0", port=8080)


if __name__ == "__main__":
    main()
