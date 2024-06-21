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


@app.route('/<path:path>')
def serve_static(path):
    """
    Serve static files from the React build directory.
    """
    if path != "" and os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

def main():
    app.run(host="0.0.0.0")


if __name__ == "__main__":
    main()
