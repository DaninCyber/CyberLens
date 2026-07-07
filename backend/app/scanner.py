from app.services.system_info import SystemInfoService

class Scanner: 
    """Coordinates all scan services."""

    def run(self):
        results = []

        results.extend(SystemInfoService().run())

        return results