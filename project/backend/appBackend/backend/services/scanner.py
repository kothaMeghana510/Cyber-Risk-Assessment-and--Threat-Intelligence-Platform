import nmap

# Function to scan an IP using nmap to know Open Ports and services exposed
def scan_target(target):
    scanner = nmap.PortScanner()

    print('Scanning Target: ', target)
    scanner.scan(target)
    open_ports = []
    risk_lookup = {
        'telnet': 'CRITICAL', 'rdp': 'CRITICAL', 'smb': 'CRITICAL',
        'ftp': 'HIGH', 'mysql': 'HIGH', 'mssql': 'HIGH',
        'http': 'MEDIUM', 'smtp': 'MEDIUM', 'snmp': 'MEDIUM',
        'https': 'LOW', 'ssh': 'LOW'
    }
    try:
        for host in scanner.all_hosts():
            for proto in scanner[host].all_protocols():
                ports = scanner[host][proto].keys()

                for port in ports:
                    state = scanner[host][proto][port]['state']

                    if state == 'open':
                        service_info = scanner[host][proto][port]
                        if service_info['state'] == 'open':
                            service_name = service_info['name'].lower()
                            risk_level = risk_lookup.get(service_name, 'UNKNOWN')
                            open_ports.append({
                                'port': port,
                                'service': service_name,
                                'risk-level': risk_level
                            })
    except:
        print('Something Went Wrong')

    return open_ports
