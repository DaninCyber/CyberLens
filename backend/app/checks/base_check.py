from abc import ABC, abstractmethod

from app.models.scan_result import ScanResult


class BaseCheck(ABC):
    """
    Every CyberLens check inherits from this class.
    """

    @abstractmethod
    def run(self) -> list[ScanResult]:
        """Run the check."""
        pass