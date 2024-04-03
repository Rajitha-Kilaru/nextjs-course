"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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

    const [inputVal, setInputVal] = useState('')

    return (
        <>
        <input value={inputVal} onChange={e => setInputVal(e.target.value)} />
        <h1>Inner auth layout</h1>
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
  