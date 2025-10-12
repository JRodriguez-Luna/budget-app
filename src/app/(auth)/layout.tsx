export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div className="m-10">{children}</div>
    )
}