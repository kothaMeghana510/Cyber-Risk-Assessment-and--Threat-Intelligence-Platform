# Risk score tells how risk our network is

def risk_score(totalOpenPorts, malicious, suspicious,exposureScore):
    riskScore = (totalOpenPorts * 2) + (malicious * 5) + (suspicious *3 ) + exposureScore
    return riskScore