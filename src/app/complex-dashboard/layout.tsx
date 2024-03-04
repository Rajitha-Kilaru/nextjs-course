interface ComplexDashboardLayoutProps {
    children: React.ReactNode;
    users: React.ReactNode;
    revenue: React.ReactNode;
    notifications: React.ReactNode;
}

export default function ComplexDashboardLayout({ children, users, revenue, notifications }: ComplexDashboardLayoutProps) {
    return (
        <>
            <div>{children}</div>
            <div style={{ display: "flex" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    {users}
                    {revenue}
                </div>
                <div style={{ display: "flex", flex: 1 }}>
                    {notifications}
                </div>
            </div>
        </>
    )

}