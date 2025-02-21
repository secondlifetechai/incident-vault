import { ReportTracker } from "@/components/report/ReportTracker";

export default function TrackReportPage() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <main className="relative px-6 pt-8">
                <div className="mx-auto max-w-3xl">

                    <div className="mt-8 bg-zinc-900/50 rounded-2xl border border-white/5 p-6">
                        <ReportTracker />
                    </div>
                </div>
            </main>
        </div>
    )
}