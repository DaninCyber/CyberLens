from dataclasses import dataclass

@dataclass
class ScanResult:
    """Represents a single piece of information returned by a scan."""


    name: str
    value: str
    status: str = "INFO"
    recommendation: str | None = None