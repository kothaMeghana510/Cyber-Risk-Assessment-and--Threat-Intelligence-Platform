import sqlite3
from fastapi import APIRouter
import json

router = APIRouter()

@router.get('/allScans')
def get_scans():
    conn = sqlite3.connect('scans.db')
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()

    cursor.execute("SELECT * FROM scans")
    rows = cursor.fetchall()
    result = []

    if len(rows) == 0:
        return {"error": "No Scans Till Now!"}

    for row in rows:
        result.append({
            "scan_time": row['scan_time'],
            "id": row["id"],
            "ip": row["ip"],
            "open_ports": json.loads(row["open_ports"]),
            "totalOpenPorts": row["totalOpenPorts"],
            "malicious": row["malicious"],
            "suspicious": row["suspicious"],
            "harmless": row["harmless"],
            "exposureScore": row["exposureScore"],
            "riskScore": row['riskScore'],
            "riskLevel": row['riskLevel'],
            "threatScore": row['threatScore']
        })

    conn.close()
    return result