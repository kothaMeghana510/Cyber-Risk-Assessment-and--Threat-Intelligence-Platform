from fastapi import APIRouter
import sqlite3

router = APIRouter()
@router.delete('/scan/{scan_id}')
def remove_scan(scan_id: int):
    if not scan_id:
        return {"error": "IP not found"}

    conn = sqlite3.connect('scans.db')
    cursor = conn.cursor()

    cursor.execute('DELETE FROM scans WHERE id = ?', (scan_id,))
    conn.commit()
    if cursor.rowcount == 0:
        conn.close()
        return {"error": "Scan not found"}
    conn.close()

    return {"message": "Scan deleted Successfully"}