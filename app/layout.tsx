import TanstackProvider from '@/lib/queryClient'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Todo List',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <TanstackProvider>
          <header>header</header>
          <main>{children}</main>
          <footer>footer</footer>
        </TanstackProvider>
      </body>
    </html>
  )
}
