'use client'

import StatsFooter from '@/components/StatsFooter'
import './globals.css'
import TanstackProvider from '@/lib/queryClient'
import FilterTabs from '@/components/FilterTabs'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="m-0 bg-gray-700 text-amber-50">
        <TanstackProvider>
          <section className="grid-rows-(10vh 80vh 10vh) mx-auto my-0 grid h-screen max-w-4/6">
            <FilterTabs />
            <main>{children}</main>
            <StatsFooter />
          </section>
        </TanstackProvider>
      </body>
    </html>
  )
}
