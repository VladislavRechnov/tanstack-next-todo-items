'use client'

import './global.css'

import TanstackProvider from '@/lib/queryClient'
import { Container } from '@mui/material'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        style={{
          margin: '0',
          background: '#2D3748',
        }}
      >
        <TanstackProvider>
          <Container
            sx={{
              minHeight: '100vh',
              display: 'grid',
              gridTemplateRows: '10vh 80vh 10vh',
            }}
          >
            <header>Todos</header>
            <main>{children}</main>
            <footer>footer</footer>
          </Container>
        </TanstackProvider>
      </body>
    </html>
  )
}
