type Props = {
    score: number | null;
};

export default function SecurityScore({ score }: Props) {
    if (score === null) {
        return null;
    }

    let message = "Needs Attention";

    if (score >= 90) {
        message = "Excellent";
    } else if (score >= 70) {
        message = "Good";
    } else if (score >= 50) {
        message = "Fair";
    }

    return (
        <div className="bg-white rounded-xl shadow p-8 text-center mb-10">
            <h2 className="text-xl font-semibold text-slate-700">
                CyberLens Security Score
            </h2>

            <p className="text-6xl font-bold mt-4 text-blue-600">
                {score}
            </p>

            <p className="mt-3 text-slate-500">
                {message}
            </p>
        </div>
    );
}