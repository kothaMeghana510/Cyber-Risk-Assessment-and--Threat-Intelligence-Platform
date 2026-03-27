import smtplib
from email.mime.text import MIMEText
from dotenv import load_dotenv
import os
from backend.emailAlert.emailBody import generateEmail

load_dotenv()
def sendMail(data):
    sender = os.getenv('SENDER_MAIL')
    password = os.getenv('APP_PASSWORD')
    receiver = os.getenv('RECEIVER_MAIL')

    subject = 'Risk Alert IP'
    html_body = generateEmail(data)

    msg = MIMEText(html_body, 'html')
    msg['Subject'] = subject
    msg['From'] = sender
    msg['To'] = receiver

    try:
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login(sender, password)
        server.sendmail(sender, receiver, msg.as_string())
        print('✅ Mail Sent')
        server.quit()
    except Exception as e:
        print("❌ Mail Error:", e)