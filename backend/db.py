import os
import mysql.connector
from dotenv import load_dotenv

load_dotenv()

def get_db_connection():
    conn = mysql.connector.connect(
        host=os.getenv("DB_HOST"),
        user=os.getenv("DB_USER"),
        password=os.getenv("DB_PASSWORD"),
        database=os.getenv("DB_NAME")
    )
    cursor = conn.cursor()
    cursor.execute("SELECT DATABASE();")
    print("⚙️ Connected to database:", cursor.fetchone())
    cursor.close()
    return conn