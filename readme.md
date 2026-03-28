# CYBER RISK ASSESSMENT AND THREAT INTELLIGENCE PLATFORM 

**Author:** Meghana Kotha  
**Internship Project – March 2026**

---

## 1. Project Overview

The CYBER RISK ASSESSMENT AND THREAT INTELLIGENCE PLATFORM  is a full-stack application that allows security teams to identify vulnerabilities, analyze potential threats, and assess risk levels of network systems. The project integrates real-time port scanning, threat intelligence data, and automated risk scoring, displaying results in an interactive and user-friendly dashboard.

**Why this project?**  
Organizations need to quickly understand weaknesses in their systems and respond to threats before they cause damage. This project simplifies risk analysis by automating data collection, scoring, and visualization.

**Key Highlights:**
- Scans open ports using Nmap.
- Integrates threat intelligence via VirusTotal API.
- Calculates Exposure Score, Risk Score, and Threat Score.
- Displays KPIs, charts, and summaries in a React dashboard.
- Sends email alerts for high or medium risk findings.

--- 

## 2. Project Modules

### 2.1 Vulnerability Scanning
This module identifies weaknesses in a network, such as:
- Open ports
- Lack of password encryption
- Missing input validation


### 2.2 Threat Intelligence Integration
This module uses VirusTotal API to determine whether a scanned IP or service is associated with malicious activity.  
- Detects potential threats such as hackers, malware, or suspicious activity.  
- Provides additional data to calculate risk severity.  

### 2.3 Risk Scoring
Combines data from the vulnerability scan and threat intelligence to calculate:  
- Exposure Score: Measures system exposure to threats.  
- Risk Score: Likelihood and impact of potential damage.  
- Threat Score: Severity of detected malicious activity.  

**Formula:** Vulnerability + Threat = Risk

### 2.4 Dashboard
- Built using React and Recharts.  
- Visualizes KPIs, charts (pie, bar, line), and summaries.  
- Provides a quick overview of the system's overall security posture.

### 2.5 Alerts
- Sends email notifications for high or medium risk findings.  
- Ensures timely action by the security team.

---

## 3. Architecture & Data Flow

The system follows a modular architecture:

**Flow:**
1. User submits an IP for scanning.  
2. Backend performs Nmap scan and VirusTotal API check.  
3. Raw data is processed to calculate Exposure, Risk, and Threat Scores.  
4. Processed results are stored in Sqlite3.  
5. React dashboard displays KPIs, charts, and summaries.  
6. Email alerts are triggered if risk exceeds thresholds.

---

## 5. Tech Stack & Tools

| Layer           | Technology / Tool                  |
|-----------------|----------------------------------|
| Frontend        | React, Recharts                   |
| Backend         | FastAPI (Python)                  |
| Database        | Sqlite3                          |
| Threat Analysis | VirusTotal API                     |
| Scanning        | Nmap                               |
| Deployment      | Github    |

---

## 6. How to Run

### Backend
``` bash
cd project/backend/appBackend
python -m venv venv
# Linux/Mac
source venv/bin/activate
# Windows
venv\Scripts\activate
pip install -r requirements.txt
uvicorn backend-app:main --reload

### Frontend
cd project/frontend/appFrontend
npm install
npm start
```

## Target Sites Used
- Only sample IP addresses were used for testing
- No unauthorized scanning or illegal activity was performed


## Key Takeaways
- Built a modular full-stack project combining backend frontend, and external APIs
- Applied real-world risk assessment concepts
- Learned data visualization, KPIs, and dashboard design
- Implemented alerts and automated scoring systems

## Screenshots
[!Scanner Page] (Cyber-Risk-Assessment-and-Threat-Intelligence-Platform/project/assets/scanner.png)
