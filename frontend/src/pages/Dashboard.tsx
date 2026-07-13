import { useState } from "react";
import Header from "../components/Header";
import ScanButton from "../components/ScanButton";
import InfoCard from "../components/InfoCard";
import SecurityScore from "../components/SecurityScore";

import { runScan } from "../services/api";

import type { ScanResult } from "../types/ScanResult";
import DashboardHeader from "../components/DashboardHeader";

export default function Dashboard() {

    const [results, setResults] = useState<ScanResult[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [score, setScore] = useState<number | null>(null);
    async function handleScan() {

        setLoading(true);

        try {
            const data = await runScan();
            setResults(data.results);
            setScore(data.score);
        } catch (error) {
            console.error(error);
        }

        setLoading(false);
    }

    return (
        <main className="min-h-screen bg-slate-100">
            <div className="max-w-6xl mx-auto px-6 py-10">

</div>
            <DashboardHeader />

<SecurityScore score={score} />

<div className="
bg-gradient-to-r
from-blue-600
to-indigo-700
rounded-3xl
shadow-xl
text-white
p-10
mb-10
text-center
">
    <ScanButton
        onClick={handleScan}
        loading={loading}
    />
</div>
            <section
                className="
bg-blue-600
hover:bg-blue-700
text-white
font-semibold
px-8
py-4
rounded-2xl
shadow-lg
hover:shadow-xl
transition-all
duration-300
disabled:opacity-50
text-blue-100
">

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

