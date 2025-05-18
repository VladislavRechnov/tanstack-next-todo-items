'use client'

import './globals.css'
import TanstackProvider from '@/lib/queryClient'
import { Container } from '@mui/material'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="m-0 bg-gray-700">
        <TanstackProvider>
          <Container className="grid-rows-(10vh 80vh 10vh) grid h-screen">
            <header>Todos</header>
            <main>{children}</main>
            <footer>footer</footer>
          </Container>
        </TanstackProvider>
      </body>
    </html>
  )
}
