import type { ScanResult } from "../types/ScanResult";

type Props = {
    result: ScanResult;
};

export default function InfoCard({ result }: Props) {
    return (
        <div className="bg-white rounded-xl shadow p-6">
            <h2 className="font-semibold text-slate-700">
                {result.name}
            </h2>

            <p className="text-2xl mt-2">
                {result.value}
            </p>

            <span className="text-sm text-slate-500">
                {result.status}
            </span>
        </div>
    );
}