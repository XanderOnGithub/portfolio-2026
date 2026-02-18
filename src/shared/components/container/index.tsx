export function Container({ children, className }: { children: React.ReactNode; className?: string }) {
    return(
        <div className={`py-12 my-4  ${className || ''}`}>{children}</div>
    );
}