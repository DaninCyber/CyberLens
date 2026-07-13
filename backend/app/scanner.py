from unittest import result

from app.services.defender import DefenderService
from app.services.system_info import SystemInfoService
from app.services.security_score import SecurityScoreService

class Scanner:
    def __init__(self):
        self.checks = [
            SystemInfoService(),
            DefenderService(),
        ]

    def run(self):
        results = []

        for check in self.checks:
            results.extend(check.run())

        score = SecurityScoreService().calculate(results)
        return {"results": results, 
                "score": score
        }