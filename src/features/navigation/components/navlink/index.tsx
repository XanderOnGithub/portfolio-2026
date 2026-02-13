import { NavLinkProps } from "./types";
import { ExternalLinkIcon } from "lucide-react";
import { isExternalURL } from "./utils";

export function NavLink({ href, label, className }: NavLinkProps) {
    return(
        <a href={href} className={`inline-flex gap-2 simple:underline not-simple:underline-offset-2 p-2 hover:underline ${className || ""}`}>
            {label} 
            {isExternalURL(href) && <ExternalLinkIcon className="w-4 h-4" />}
        </a>
    );
}