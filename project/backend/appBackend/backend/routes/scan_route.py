from fastapi import APIRouter
from pydantic import BaseModel
import sqlite3
import json
from datetime import datetime

from backend.services.scanner import scan_target
from backend.services.virusTotalScan import virusTotalScan
from backend.services.exposureScore import exposure_score
from backend.services.threatScore import threat_Score
from backend.services.riskScore import risk_score
from backend.services.riskLevel import risk_level
from backend.emailAlert.emailAlert import sendMail

router = APIRouter()
class ScanIp(BaseModel):
    target: str

@router.post('/scan')
def scan(request: ScanIp):
    try:
        ip = request.target

        scan_Time = datetime.now().isoformat()
        open_ports = scan_target(ip)

        totalOpenPorts = len(open_ports)

        vt_scanResults = virusTotalScan(ip)

        exposureScore = exposure_score(open_ports)

        threatScore = threat_Score(vt_scanResults['vt_malicious'], vt_scanResults['vt_suspicious'])
        riskScore = risk_score(totalOpenPorts, vt_scanResults['vt_malicious'], vt_scanResults['vt_suspicious'],
                               exposureScore)
        riskLevel = risk_level(riskScore)

        conn = sqlite3.connect('scans.db')
        cursor = conn.cursor()


        cursor.execute("""
            INSERT INTO scans(scan_time, ip, open_ports, totalOpenPorts, malicious, suspicious, 
                harmless, exposureScore, threatScore, riskScore, riskLevel) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """, (
            scan_Time,
            ip,
            json.dumps(open_ports),
            totalOpenPorts,
            vt_scanResults["vt_malicious"],
            vt_scanResults["vt_suspicious"],
            vt_scanResults["vt_harmless"],
            exposureScore,
            threatScore,
            riskScore,
            riskLevel
        ))
        scan_id = cursor.lastrowid

        conn.commit()
        conn.close()


        data = {
            "id": scan_id,
            "scan_time": scan_Time,
            "ip": ip,
            "open_ports": open_ports,
            "totalOpenPorts": totalOpenPorts,
            "malicious": vt_scanResults['vt_malicious'],
            "suspicious": vt_scanResults['vt_suspicious'],
            "harmless": vt_scanResults['vt_harmless'],
            "exposureScore": exposureScore,
            "threatScore": threatScore,
            "riskScore": riskScore,
            "riskLevel": riskLevel
        }

        try:
            if riskLevel in ["High", "Medium"]:
                sendMail(data)
        except Exception as mail_error:
            print("Email failed:", mail_error)

        return {
            "id": scan_id,
            "scan_time": scan_Time,
            "ip": ip,
            "open_ports": open_ports,
            "totalOpenPorts": totalOpenPorts,
            "malicious": vt_scanResults['vt_malicious'],
            "suspicious": vt_scanResults['vt_suspicious'],
            "harmless": vt_scanResults['vt_harmless'],
            "exposureScore": exposureScore,
            "threatScore": threatScore,
            "riskScore": riskScore,
            'riskLevel': riskLevel
        }
    except:
        print('something went wrong')


