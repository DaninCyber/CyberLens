from fastapi import APIRouter

from app.scanner import Scanner

router = APIRouter()


@router.get("/scan")
def scan():
    results = Scanner().run()

    return [
    {
        "id": result.id,
        "title": result.title,
        "value": result.value,
        "status": result.status,
        "description": result.description,
        "recommendation": result.recommendation,
        "category": result.category,
    }
    for result in results
]