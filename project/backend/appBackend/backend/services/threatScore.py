# this tells how much threat our network has
# malicious means threat confirmed so we multiply with 2
# suspicoius means not confirm so we multiply with 0.5

def threat_Score(malicious, suspicious):
    threat = malicious * 2 + suspicious * 0.5
    return threat