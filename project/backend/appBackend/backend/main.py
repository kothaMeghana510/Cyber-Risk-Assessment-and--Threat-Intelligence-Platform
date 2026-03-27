from fastapi import FastAPI
from createTable import createTable
from fastapi.middleware.cors import CORSMiddleware

from backend.routes.scan_route import router as scan_router
from backend.routes.getAllScans import router as allSCan_router
from backend.routes.deleteRoute import router as remove_scan
from backend.routes.getScan import router as get_SingleScan
from backend.routes.statsRoute import router as get_stats

# Connecting backend to frontend
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# target = '45.33.32.156'
# target2 = '192.168.1.5'

@app.on_event("startup")
def startup():
    createTable()

# Routes
app.include_router(scan_router)
app.include_router(allSCan_router)
app.include_router(remove_scan)
app.include_router(get_SingleScan)
app.include_router(get_stats)

# Test Message
@app.get('/')
def message():
    return {'message': 'running'}

