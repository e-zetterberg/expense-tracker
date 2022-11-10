import React from "react";
import Link from "next/link";
import Image from "next/image";
import "../styles/globals.css";
import "../styles/style.css";

export default function RootLayout({ children }) {
  return (
      <html>
        <head />
        <body>
          <header className="header">
            <div className="header--navbar-container">
              <h3 className="logo">logo</h3>
              
              <nav className="navbar">
                <Link href={""}>Home</Link>
                <Link href={"/overview"}>Overview</Link>
                <Link href={"/expense-tracker"}>Expense Tracker</Link>
                <Link href={"/about"}>About</Link>
              </nav>
            </div>
          </header>
          {children}
          <footer className="footer"> Made by Erik</footer>
        </body>
      </html>
  );
}
