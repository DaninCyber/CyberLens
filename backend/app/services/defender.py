import subprocess
import json
from app.models.scan_result import ScanResult
from app.checks.base_check import BaseCheck

class DefenderService(BaseCheck):
    """Checks the status of Microsoft Defender."""

    def run(self) -> list[ScanResult]:
        try:
            result = subprocess.run(
                [
                    "powershell",
                    "-Command",
                    "Get-MpComputerStatus | Select-Object AntivirusEnabled, RealTimeProtectionEnabled | ConvertTo-Json"
                ],
                capture_output=True,
                text=True,
                check=True,
            )

            status = json.loads(result.stdout)

            if status.get("AntivirusEnabled") is True:

                return [
                    ScanResult(
                        id="windows-defender",
                        title="Microsoft Defender",
                        value="Enabled",
                        status="Healthy",
                        description="Microsoft Defender Antivirus is enabled.",
                        category="Security",
                    )
                ]

            return [
                ScanResult(
                    id="windows-defender",
                    title="Microsoft Defender",
                    value="Disabled",
                    status="Critical",
                    description="Microsoft Defender Antivirus appears to be disabled.",
                    recommendation="Enable Microsoft Defender or install another antivirus.",
                    category="Security",
                )
            ]

        except Exception:
            return [
                ScanResult(
                    id="windows-defender",
                    title="Microsoft Defender",
                    value="Unknown",
                    status="Warning",
                    description="Unable to determine Defender status.",
                    recommendation="Verify Defender is installed and PowerShell is available.",
                    category="Security",
                )
            ]