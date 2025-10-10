export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div className="h-vh m-10">{children}</div>
    )
}