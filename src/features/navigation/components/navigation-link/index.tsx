import { ExternalLinkIcon } from "lucide-react";
import { isExternalURL } from "../../utils";

export function NavigationLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={isExternalURL(href) ? "_blank" : undefined}
      rel={isExternalURL(href) ? "noopener noreferrer" : undefined}
      className="flex items-center font-semibold gap-1 text-md text-secondary dark:text-primary hover:text-primary dark:hover:text-accent transition-colors duration-200"
    >
      {children}
      {isExternalURL(href) && <ExternalLinkIcon size={16} />}
    </a>
  );
}