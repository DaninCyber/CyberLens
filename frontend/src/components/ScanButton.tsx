type ScanButtonProps = {
    onClick: () => void;
    loading: boolean;
};

export default function ScanButton({
    onClick,
    loading,
}: ScanButtonProps) {
    return (
        <button
            onClick={onClick}
            disabled={loading}
            className="
                bg-blue-600
                hover:bg-blue-700
                text-white
                font-semibold
                px-6
                py-3
                rounded-xl
                transition
                disabled:opacity-50
            "
        >
            {loading ? "Scanning..." : "Scan My Computer"}
        </button>
    );
}