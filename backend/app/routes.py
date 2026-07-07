from fastapi import APIRouter

from app.scanner import Scanner

router = APIRouter()


@router.get("/scan")
def scan():
    results = Scanner().run()

    return [
        {
            "name": result.name,
            "value": result.value,
            "status": result.status,
            "recommendation": result.recommendation,
        }
        for result in results
    ]