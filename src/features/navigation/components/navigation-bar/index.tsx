import { NavigationLogo } from "../navigation-logo";
import {NavigationLink } from "../navigation-link";

export default function NavigationBar() {
    return(
        <div className="w-full">
            <nav className="max-w-main min-h-24 mx-auto flex items-center justify-between">
                {/* Logo Container */}
                <div className="flex items-center">
                    <NavigationLogo />
                </div>
                {/* Navigation Links */}
                <div className="flex items-center gap-x-4">
                    <NavigationLink href="#">About</NavigationLink>
                    <NavigationLink href="#">Services</NavigationLink>
                    <NavigationLink href="#">Contact</NavigationLink>
                </div>
            </nav>
        </div>
    );
}