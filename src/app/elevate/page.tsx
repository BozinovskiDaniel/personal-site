import { FunctionComponent, memo } from "react";

const ElevatePage: FunctionComponent = memo(() => (
    <div className="h-screen flex flex-col bg-white text-neutral-900 overflow-hidden">
        <main className="flex-1 flex flex-col items-center justify-center text-center px-8">
            <p className="text-xs tracking-widest uppercase text-neutral-400 mb-10">Workout Tracking</p>
            <h1 className="text-6xl md:text-8xl font-extralight tracking-tight text-neutral-900 mb-5">Elevate</h1>
            <p className="text-neutral-400 text-sm max-w-xs leading-relaxed">
                Log your workouts, track your progress, and see how far you&apos;ve come.
            </p>

            <div className="grid md:grid-cols-3 gap-10 mt-24 max-w-2xl text-left">
                <div className="space-y-2">
                    <h3 className="text-xs font-medium uppercase tracking-wider text-neutral-900">Workout Logging</h3>
                    <p className="text-neutral-400 text-xs leading-relaxed">
                        Log every set, rep, and weight with an interface built for the gym floor.
                    </p>
                </div>
                <div className="space-y-2">
                    <h3 className="text-xs font-medium uppercase tracking-wider text-neutral-900">Progress Analytics</h3>
                    <p className="text-neutral-400 text-xs leading-relaxed">
                        Visualise your strength trends and see exactly how far you&apos;ve come.
                    </p>
                </div>
                <div className="space-y-2">
                    <h3 className="text-xs font-medium uppercase tracking-wider text-neutral-900">Exercise Library</h3>
                    <p className="text-neutral-400 text-xs leading-relaxed">
                        Browse a comprehensive exercise library or create your own movements.
                    </p>
                </div>
            </div>
        </main>

        <footer className="border-t border-neutral-100 py-6">
            <div className="container mx-auto px-8 max-w-3xl flex flex-col md:flex-row items-center justify-between gap-4">
                <span className="text-neutral-300 text-xs">© {new Date().getFullYear()} Elevate</span>
                <div className="flex gap-8">
                    <a href="/elevate/privacy" className="text-neutral-300 text-xs hover:text-neutral-600 transition-colors">
                        Privacy Policy
                    </a>
                    <a href="/elevate/terms" className="text-neutral-300 text-xs hover:text-neutral-600 transition-colors">
                        Terms of Use
                    </a>
                </div>
            </div>
        </footer>
    </div>
));

export default ElevatePage;
