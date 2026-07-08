type StatusBadgeProps = {
    status: string;
};

export default function StatusBadge({ status }: StatusBadgeProps) {
    let badgeClasses =
        "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold";

    let icon = "ℹ️";

    switch (status.toLowerCase()) {
        case "healthy":
            badgeClasses += " bg-green-100 text-green-800";
            icon = "🟢";
            break;

        case "warning":
            badgeClasses += " bg-yellow-100 text-yellow-800";
            icon = "🟡";
            break;

        case "critical":
            badgeClasses += " bg-red-100 text-red-800";
            icon = "🔴";
            break;

        default:
            badgeClasses += " bg-slate-100 text-slate-700";
    }

    return (
        <span className={badgeClasses}>
            <span>{icon}</span>
            <span>{status}</span>
        </span>
    );
}