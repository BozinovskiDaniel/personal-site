import Link from "next/link";
import { FunctionComponent, ReactNode } from "react";

const ElevateLayout: FunctionComponent<{ children: ReactNode }> = ({ children }) => (
    <>
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-100">
            <div className="container mx-auto px-8 h-14 flex items-center justify-between max-w-5xl">
                <Link href="/elevate" className="text-neutral-900 font-medium text-xs tracking-widest uppercase hover:text-neutral-400 transition-colors">
                    Elevate
                </Link>
                <div className="flex items-center gap-8">
                    <Link href="/elevate/privacy" className="text-neutral-400 text-xs hover:text-neutral-900 transition-colors">
                        Privacy Policy
                    </Link>
                    <Link href="/elevate/terms" className="text-neutral-400 text-xs hover:text-neutral-900 transition-colors">
                        Terms of Use
                    </Link>
                </div>
            </div>
        </nav>
        {children}
    </>
);

export default ElevateLayout;
