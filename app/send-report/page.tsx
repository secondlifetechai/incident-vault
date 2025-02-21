import { ReportWizard } from "@/components/report/ReportWizard";
import { cookies } from "next/headers";

async function getCookieData() {
    const cookieData = cookies().getAll()
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve(cookieData)
      }, 1000)
    )
}

export default async function SendReport() {
    const cookieData = await getCookieData()

    return (
        <div className="relative min-h-screen overflow-hidden">
            <main className="relative px-6 pt-8">
                <div className="mx-auto max-w-3xl">
                    <div className="flex flex-col items-center text-center"> 
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center tracking-wide">
                            <span className="bg-gradient-to-r from-yellow-500 via-white to-blue-800 text-transparent bg-clip-text">
                                Submit Anonymous Report
                            </span>
                        </h1>
                    </div>

                    <div className="mt-8 bg-zinc-900/50 rounded-2xl border border-white/5 p-6">
                        <ReportWizard />
                    </div>
                </div>
            </main>
        </div>
    )
}