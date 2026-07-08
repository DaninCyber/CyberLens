import getpass
import platform
import socket
from app.checks.base_check import BaseCheck
from app.models.scan_result import ScanResult

class SystemInfoService(BaseCheck):
    """Collects basic information about the current system."""

    def run(self) -> list[ScanResult]:
        """Collects basic information about the current system."""
        return [
    ScanResult(
        id="operating-system",
        title="Operating System",
        value=f"{platform.system()} {platform.release()}",
        status="Healthy",
        description="Current operating system.",
        category="System",
    ),
    ScanResult(
        id="hostname",
        title="Hostname",
        value=socket.gethostname(),
        status="Healthy",
        description="The network name of this computer.",
        category="System",
    ),
    ScanResult(
        id="current-user",
        title="Current User",
        value=getpass.getuser(),
        status="Healthy",
        description="The user currently logged into Windows.",
        category="System",
    ),
    ScanResult(
        id="python-version",
        title="Python Version",
        value=platform.python_version(),
        status="Healthy",
        description="Python runtime version used by CyberLens.",
        category="System",
    ),
]