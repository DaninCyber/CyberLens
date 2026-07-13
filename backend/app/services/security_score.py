from app.models.scan_result import ScanResult


class SecurityScoreService:
    """Calculates an overall security score."""

    def calculate(self, results: list[ScanResult]) -> int:
        score = 100

        for result in results:
            if result.status == "Critical":
                score -= 25

            elif result.status == "Warning":
                score -= 10

        return max(score, 0)