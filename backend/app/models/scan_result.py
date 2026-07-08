from dataclasses import dataclass
from typing import Optional


@dataclass
class ScanResult:
    """
    Represents a single scan result returned by CyberLens.
    """

    id: str
    title: str
    value: str
    status: str
    description: str
    recommendation: Optional[str] = None
    category: str = "System"