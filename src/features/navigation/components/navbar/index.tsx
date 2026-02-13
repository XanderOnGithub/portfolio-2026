import Link from "next/link";
import { NavLink } from "../navlink";

export function NavBar() {
    return(
        <nav className="w-full min-h-16 flex flex-row justify-between items-center py-2 border-b light:border-black/50 warm:border-zinc-500/50 dark:border-white/30 ">
            {/* Logo Container (Left) */}
            <div className="">
                <Link href="/" className="font-bold text-lg">
                    Xander Reyes
                </Link>
            </div>
            {/* Nav Links Container (Right) */}
            <div className="flex gap-4">
                <NavLink href="/about" label="About" className=" font-medium text-sm"/>
                <NavLink href="/projects" label="Projects" className="font-medium text-sm"/>
                <NavLink href="/contact" label="Contact" className="font-medium text-sm"/>
            </div>
        </nav>
    );
}