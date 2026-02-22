interface PlaceholderProps {
    title: string;
    description?: string;
    className?: string;
}

export default function Placeholder({ title, description, className = "h-64 md:h-96" }: PlaceholderProps) {
    return (
        <div className={`flex flex-col items-center justify-center bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center ${className}`}>
            <div className="w-12 h-12 mb-4 text-[#00C8E0]">
                {/* Simple image icon placeholder */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
            </div>
            <h3 className="text-lg font-bold text-[#1E2D6E]">{title}</h3>
            {description && <p className="text-sm text-gray-500 mt-2 max-w-sm">{description}</p>}
            <div className="mt-4 px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded-full uppercase tracking-wide">
                Pending Asset
            </div>
        </div>
    );
}
