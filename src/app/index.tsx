import ErrorBoundary from '@/shared/ui/error-boundary/ui'
import { ModeToggle } from '@/widgets/mode-toggle/mode-toggle'

function App() {
  return (
    <>
      <ErrorBoundary>
        <ModeToggle />
      </ErrorBoundary>
    </>
  )
}

export default App
