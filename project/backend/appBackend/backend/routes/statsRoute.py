from fastapi import APIRouter
import sqlite3

router = APIRouter()

@router.get("/stats")
def get_stats():
    conn = sqlite3.connect('scans.db')
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()

    # total scans
    cursor.execute("SELECT COUNT(*) FROM scans")
    total_scans = cursor.fetchone()[0]

    # risk levels count
    cursor.execute("SELECT COUNT(*) FROM scans WHERE riskLevel='High'")
    high = cursor.fetchone()[0]

    cursor.execute("SELECT COUNT(*) FROM scans WHERE riskLevel='Medium'")
    medium = cursor.fetchone()[0]

    cursor.execute("SELECT COUNT(*) FROM scans WHERE riskLevel='Low'")
    low = cursor.fetchone()[0]

    # average risk score
    cursor.execute("SELECT AVG(riskScore) FROM scans")
    avg_risk = cursor.fetchone()[0] or 0

    # total open ports
    cursor.execute("SELECT SUM(totalOpenPorts) FROM scans")
    total_ports = cursor.fetchone()[0] or 0

    # getting IP and RiskLevel
    cursor.execute("SELECT ip, riskScore, threatScore, exposureScore FROM scans")
    rows = cursor.fetchall()

    ip_risk_list = []
    for row in rows:
        ip_risk_list.append({
            "ip": row['ip'],
            "riskScore": row['riskScore'],
            "threatScore": row['threatScore'],
            "exposureScore": row['exposureScore']
        })
    conn.close()

    return {
        "totalScans": total_scans,
        "highRisk": high,
        "mediumRisk": medium,
        "lowRisk": low,
        "avgRiskScore": round(avg_risk, 2),
        "totalOpenPorts": total_ports,
        "ipRiskData": ip_risk_list
    }