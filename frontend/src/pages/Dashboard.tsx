import { useState } from "react";
import Header from "../components/Header";
import ScanButton from "../components/ScanButton";
import InfoCard from "../components/InfoCard";

import { runScan } from "../services/api";

import type { ScanResult } from "../types/ScanResult";

export default function Dashboard() {

    const [results, setResults] = useState<ScanResult[]>([]);
    const [loading, setLoading] = useState(false);

    async function handleScan() {

        setLoading(true);

        try {
            const data = await runScan();

            setResults(data);
        } catch (error) {
            console.error(error);
        }

        setLoading(false);
    }

    return (
        <main className="min-h-screen bg-slate-100 p-10">

            <Header />

            <div className="flex justify-center mb-10">

                <ScanButton
                    onClick={handleScan}
                    loading={loading}
                />

            </div>

            <section
                className="
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    lg:grid-cols-3
                    gap-6
                "
            >

                {results.map((result) => (

                    <InfoCard
                        key={result.id}
                        result={result}
                    />

                ))}

            </section>

        </main>
    );
}