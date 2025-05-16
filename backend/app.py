from flask import Flask
from contact_routes import contact_bp
from flask_cors import CORS
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

# Register Blueprint
app.register_blueprint(contact_bp)

if __name__ == '__main__':
    port = int(os.getenv("PORT", 3000))
    print(f"🚀 Flask server running at http://localhost:{port}")
    app.run(host='0.0.0.0', port=port)