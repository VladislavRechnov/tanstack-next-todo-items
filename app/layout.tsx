import StatsFooter from '@/components/StatsFooter'
import './globals.css'
import TanstackProvider from '@/lib/queryClient'
import FilterTabs from '@/components/FilterTabs'
import { TodoInput } from '@/components/TodoInput'
import { Box, Container } from '@mui/material'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="m-0 bg-gray-700 text-amber-50">
        <TanstackProvider>
          <Container className="mx-auto my-0 flex min-h-screen flex-col justify-between gap-6">
            <Box className="flex flex-col gap-4">
              <FilterTabs />
              <TodoInput />
            </Box>
            {children}
            <StatsFooter />
          </Container>
        </TanstackProvider>
      </body>
    </html>
  )
}
