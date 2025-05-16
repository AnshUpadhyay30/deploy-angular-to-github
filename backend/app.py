from flask import Flask
from contact_routes import contact_bp
from flask_cors import CORS
import os
from dotenv import load_dotenv

# Load environment variables from .env
load_dotenv()

app = Flask(__name__)
CORS(app)

# Register contact API blueprint
app.register_blueprint(contact_bp)

# Required for Render (uses PORT env variable)
if __name__ == '__main__':
    port = int(os.getenv("PORT", 10000))  # fallback to 10000 if PORT isn't set
    print(f"🚀 Flask server running at http://0.0.0.0:{port}")
    app.run(host='0.0.0.0', port=port)