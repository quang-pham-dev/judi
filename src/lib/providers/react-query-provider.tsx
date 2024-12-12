import { PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// TODO config options
export const queryClient = new QueryClient()

export const ReactQueryProvider = ({
  children,
}: Readonly<PropsWithChildren>) => {
  return (
    // Provide the query client to our App
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
