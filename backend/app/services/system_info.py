import getpass
import platform
import socket

from app.models.scan_result import ScanResult

class SystemInfoService:
    """Collects basic information about the current system."""

    def run(self) -> list[ScanResult]:
        """Collects basic information about the current system."""
        return [
          ScanResult(
                name="Operating System",
                value=f"{platform.system()} {platform.release()}",
            ),
            ScanResult(
                name="Hostname",
                value=socket.gethostname(),
            ),
            ScanResult(
                name="Current User",
                value=getpass.getuser(),
            ),
            ScanResult(
                name="Python Version",
                value=platform.python_version(),
            ),
        ]