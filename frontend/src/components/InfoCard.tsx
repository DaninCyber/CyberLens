import type { ScanResult } from "../types/ScanResult";
import StatusBadge from "./statusbadge";
import { useState } from "react";

type InfoCardProps = {
    result: ScanResult;
};

export default function InfoCard({ result }: InfoCardProps) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold text-slate-800">{result.title}</h2>

            <p className="text-2xl mt-2">{result.value}</p>

            <p className="text-sm text-slate-500 mt-2">{result.description}</p>

            <div className="mt-4">
                <StatusBadge status={result.status} />
            </div>

            <button
                onClick={() => setExpanded(!expanded)}
                className="mt-4 text-blue-600 hover:underline text-sm"
            >
                {expanded ? "Hide Details" : "Learn More"}
            </button>

            {expanded && (
                <div className="mt-4 border-t pt-4">
                    <p className="text-sm text-slate-600">{result.description}</p>

                    {result.recommendation && (
                        <div className="mt-3">
                            <h3 className="font-semibold">Recommendation</h3>
                            <p className="text-sm text-slate-500">{result.recommendation}</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}