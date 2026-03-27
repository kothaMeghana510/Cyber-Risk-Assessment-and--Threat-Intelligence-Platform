import requests
from dotenv import load_dotenv
import os

#  API key to access VirusTotal API
load_dotenv()
API_KEY = os.getenv('API_KEY')

# Function that takes IP and get data from virusTotal
# It gives data like malicious, suspicious etc
def virusTotalScan(target):
    url = f"https://www.virustotal.com/api/v3/ip_addresses/{target}"

    headers = {
        'x-apikey' : API_KEY
    }

    response = requests.get(url, headers=headers)
    if response.status_code == 200:
        data = response.json()
        stats = data['data']['attributes']['last_analysis_stats']
        return {
            'vt_malicious': stats['malicious'],
            'vt_suspicious': stats['suspicious'],
            'vt_harmless': stats['harmless']
        }
    else:
        return {
            'vt_malicious': 0,
            'vt_suspicious': 0,
        }