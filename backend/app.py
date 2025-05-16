from flask import Flask
from contact_routes import contact_bp
from flask_cors import CORS
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

app.register_blueprint(contact_bp)

if __name__ == '__main__':
    port = int(os.environ["PORT"])  # ✅ no fallback
    print(f"🚀 Flask server running at http://0.0.0.0:{port}")
    app.run(host='0.0.0.0', port=port)