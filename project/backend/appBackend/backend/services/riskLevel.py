# Risk level tell the level of the risk
# if risk score is above 50 it is highly risk
# if it is above 20 it is medium
# else it is low risk

def risk_level(riskScore):
    if riskScore >= 50:
        return 'High'
    elif riskScore >=20:
        return 'Medium'
    else:
        return 'Low'