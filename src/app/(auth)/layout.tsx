"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function authLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    const pathname = usePathname();
    const navLinks = [
      {name: "Register", href: "/register"},
      {name: "Login", href: "/login"},
      {name: "Forget Password", href: "/forget-password"}
    ]
    return (
        <>
        Inner auth layout
        {navLinks.map((item, index) => {
          const isActive = pathname.startsWith(item.href)
          return (
            <p key={index}><Link style={{color: isActive ? "blue": "green"}}  href={item.href}>{item.name}</Link></p>
          )
        })}
          {children}
        </>
    )
  }
  