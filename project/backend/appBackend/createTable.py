import sqlite3

DB_FILE = 'scans.db'

# scan_time TEXT NOT NULL,
def createTable():
    conn = sqlite3.connect(DB_FILE)
    cursor = conn.cursor()
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS scans (
    scan_time TEXT,
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    ip TEXT,
    open_ports TEXT,
    totalOpenPorts INTEGER,
    malicious INTEGER,
    suspicious INTEGER,
    harmless INTEGER,
    exposureScore INTEGER,
    threatScore INTEGER,
    riskScore INTEGER,
    riskLevel TEXT
    )
    """)

    conn.commit()
    conn.close()
