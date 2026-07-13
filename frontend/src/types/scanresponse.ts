import type { ScanResult } from "./ScanResult";

export interface ScanResponse {
    score: number;
    results: ScanResult[];
}