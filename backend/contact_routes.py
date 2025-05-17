from flask import Blueprint, request, jsonify
from db import get_db_connection

contact_bp = Blueprint('contact', __name__)

@contact_bp.route('/api/contact', methods=['POST'])
def submit_contact():
    data = request.get_json()
    print("📨 Received contact form data:", data)  # ✅ Debug log

    try:
        conn = get_db_connection()
        cursor = conn.cursor()

        # ✅ Confirm connected database
        cursor.execute("SELECT DATABASE();")
        print("✅ Connected to DB:", cursor.fetchone())

        # ✅ Show tables in the database
        cursor.execute("SHOW TABLES;")
        print("📋 Tables in DB:", cursor.fetchall())

        query = """
        INSERT INTO contacts (
            first_name, last_name, email, job_title,
            company, country, message, agree_policy, subscribe
        ) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)
        """

        cursor.execute(query, (
            data.get("firstName"),
            data.get("lastName"),
            data.get("email"),
            data.get("jobTitle"),
            data.get("company"),
            data.get("country"),
            data.get("message"),
            data.get("agreePolicy"),
            data.get("subscribe")
        ))

        conn.commit()
        return jsonify({"message": "✅ Contact saved successfully"}), 201

    except Exception as e:
        print("❌ Error saving contact:", e)
        return jsonify({"error": "Internal server error"}), 500

    finally:
        if conn.is_connected():
            cursor.close()
            conn.close()