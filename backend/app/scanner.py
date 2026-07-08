from app.services.defender import DefenderService
from app.services.system_info import SystemInfoService


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

        return results