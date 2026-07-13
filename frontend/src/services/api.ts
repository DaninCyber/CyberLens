import type { ScanResponse } from '../types/scanresponse';

const API_BASE_URL = "http://127.0.0.1:8000";

export async function runScan(): Promise<ScanResponse> {
    const response = await fetch(`${API_BASE_URL}/scan`);

    if (!response.ok) {
        throw new Error('Failed to run scan');
    }

    return response.json();
}