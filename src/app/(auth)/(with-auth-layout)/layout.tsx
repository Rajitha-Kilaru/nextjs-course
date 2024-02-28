export default function authLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
        Inner auth layout
          {children}
        </>
    )
  }
  