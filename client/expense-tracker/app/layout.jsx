import React from 'react';
import Link from 'next/link';
import '../styles/globals.css';
/* eslint-disable @next/next/no-head-element */

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
      <nav className='navbar'>
        <Link href={'/'}></Link>
        <Link href={'/about'}></Link>
        <Link href={'/expense-tracker'}></Link>

      </nav>
        {children}

      </body>
    </html>
  );
}