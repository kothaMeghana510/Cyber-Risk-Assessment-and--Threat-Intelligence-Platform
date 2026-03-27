def generateEmail(data):
    html = f"""
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="UTF-8">
    </head>
    
    <body style="margin:0; padding:0; background-color:#0f172a; font-family:Arial, sans-serif;">
    <table width="100%" cellspacing="0" cellpadding="0">
     <tr>
      <td align="center">
            <table width="600" style="background:#111827; border-radius:10px; padding:20px; color:white;">

              <tr>
                <td style="text-align:center; padding-bottom:20px;">
                  <h1 style="color:#38bdf8; margin:0;">🔐 Cyber Risk Alert</h1>
                  <p style="color:#9ca3af;">Threat Intelligence Report</p>
                </td>
              </tr>

              <tr>
                <td style="background:#1f2937; padding:15px; border-radius:8px; border-left:5px solid {'#ef4444' if data['riskLevel'] == 'High' else '#f59e0b'};">

                  <h2 style="margin:0; color:{'#ef4444' if data['riskLevel'] == 'High' else '#f59e0b'};">
                    ⚠️ {data['riskLevel']} Risk Detected
                  </h2>

                  <p style="margin-top:10px; color:#d1d5db;">
                    Immediate attention is required for the scanned target.
                  </p>

                </td>
              </tr>

              <tr>
                <td style="padding-top:20px;">
                  <table width="100%" style="border-collapse:collapse;">

                    <tr>
                      <td style="padding:10px; border-bottom:1px solid #374151;">IP Address</td>
                      <td style="padding:10px; border-bottom:1px solid #374151;">{data['ip']}</td>
                    </tr>

                    <tr>
                      <td style="padding:10px; border-bottom:1px solid #374151;">Risk Score</td>
                      <td style="padding:10px; border-bottom:1px solid #374151;">{data['riskScore']}</td>
                    </tr>

                    <tr>
                      <td style="padding:10px; border-bottom:1px solid #374151;">Exposure Score</td>
                      <td style="padding:10px; border-bottom:1px solid #374151;">{data['exposureScore']}</td>
                    </tr>

                    <tr>
                      <td style="padding:10px; border-bottom:1px solid #374151;">Threat Score</td>
                      <td style="padding:10px; border-bottom:1px solid #374151;">{data['threatScore']}</td>
                    </tr>

                    <tr>
                      <td style="padding:10px;">Timestamp</td>
                      <td style="padding:10px;">{data['scan_time']}</td>
                    </tr>

                  </table>
                </td>
              </tr>

              <tr>
                <td style="padding-top:20px;">
                  <h3 style="color:#38bdf8;">🔓 Open Ports</h3>
                  <p style="color:#d1d5db;">
                    {", ".join(str(p) for p in data['open_ports'])}
                  </p>
                </td>
              </tr>

              <tr>
                <td style="text-align:center; padding-top:20px;">
                  <a href="http://localhost:5173"
                     style="background:#38bdf8; color:#0f172a; padding:10px 20px; border-radius:5px; text-decoration:none; font-weight:bold;">
                     View Dashboard
                  </a>
                </td>
              </tr>

              <tr>
                <td style="text-align:center; padding-top:20px; color:#6b7280; font-size:12px;">
                  © 2026 Cyber Risk Scanner • Stay Secure 🔐
                </td>
              </tr>

            </table>

          </td>
        </tr>
      </table>

    </body>
    </html>
    # """
    return html