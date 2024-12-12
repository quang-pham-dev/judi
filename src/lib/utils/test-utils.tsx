import { PropsWithChildren, ReactElement } from 'react'
import { render } from '@testing-library/react-native'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const AllTheProviders = ({ children }: PropsWithChildren) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  })
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

const customRender = (
  ui: ReactElement,
  createNodeMock?: (element: React.ReactElement) => any,
) => render(ui, { wrapper: AllTheProviders, createNodeMock })

// re-export everything
export * from '@testing-library/react-native'

// override render method
export { customRender as render }
