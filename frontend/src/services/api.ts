import type { ScanResult } from '../types/ScanResult';

const API_BASE_URL = "http://127.0.0.1:8000";

export async function runScan(): Promise<ScanResult[]> {
    const response = await fetch(`${API_BASE_URL}/scan`);

    if (!response.ok) {
        throw new Error('Failed to run scan');
    }

    return response.json();
}