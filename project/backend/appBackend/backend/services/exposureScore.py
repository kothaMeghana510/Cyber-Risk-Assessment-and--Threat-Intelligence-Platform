# Calculating Exposure Score
# It tells which services are exposed on the network
# We give base score as 2 and update the scoe based on the service exposed
def exposure_score(open_ports):
    score = 2
    for port in open_ports:
        if port['service'] in ['telnet', 'rdp', 'ftp', 'vnc']:
            score += 25

        elif port['service'] in ['mysql', 'smb', 'postgresql', 'mongodb']:
            score += 20

        elif port['service'] in ['ssh', 'http', 'https']:
            score += 5

    return score