from flask import Blueprint, request, jsonify
from db import get_db_connection
contact_bp = Blueprint('contact', __name__)
@contact_bp.route('/api/contact', methods=['POST'])
def submit_contact():
    data = request.get_json()
    print("📨 Received contact form data:", data)

    try:
        conn = get_db_connection()
        cursor = conn.cursor()

        cursor.execute("SELECT DATABASE();")
        print("✅ Connected to DB:", cursor.fetchone())

        cursor.execute("SHOW TABLES;")
        print("📋 Tables in DB:", cursor.fetchall())

        query = """
        INSERT INTO contacts (
            first_name, last_name, email, job_title,
            company, country, message, agree_policy, subscribe
        ) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)
        """

        values = (
            data.get("firstName"),
            data.get("lastName"),
            data.get("email"),
            data.get("jobTitle"),
            data.get("company"),
            data.get("country"),
            data.get("message"),
            data.get("agreePolicy"),
            data.get("subscribe")
        )
        print("📝 Values being inserted:", values)

        cursor.execute(query, values)
        conn.commit()

        return jsonify({"message": "✅ Contact saved successfully"}), 201

    except Exception as e:
        import traceback
        print("❌ Error saving contact:", e)
        traceback.print_exc()
        return jsonify({"error": "Internal server error"}), 500

    finally:
        if conn.is_connected():
            cursor.close()
            conn.close()