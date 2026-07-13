from fastapi import APIRouter

from app.scanner import Scanner

router = APIRouter()


@router.get("/scan")
def scan():
    scan = Scanner().run()

    return {
    "score": scan["score"],
    "results": [
        {
            "id": result.id,
            "title": result.title,
            "value": result.value,
            "status": result.status,
            "description": result.description,
            "recommendation": result.recommendation,
            "category": result.category,
        }
        for result in scan["results"]
    ],
}