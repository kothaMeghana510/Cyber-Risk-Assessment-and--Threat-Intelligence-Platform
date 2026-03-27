import sqlite3
import json
from fastapi import APIRouter

router = APIRouter()

@router.get('/scan/{scan_id}')
def getScan(scan_id: int):
    conn = sqlite3.connect('scans.db')
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()

    cursor.execute("SELECT * FROM scans WHERE id = ?", (scan_id, ))
    row = cursor.fetchone()

    if not row:
        return {
            'error' : 'Scan Not Found!'
        }
    conn.close()
    return {
        "scan_time": row["scan_time"],
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
    }