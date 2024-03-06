import './index.css'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Header from './components/Header/Header'
// pages
// import HomePage from './pages/HomePage'
const queryClient = new QueryClient()

const rootElement = document.getElementById('root')
if (rootElement !== null) {
  ReactDOM.createRoot(rootElement).render(
    <QueryClientProvider client={queryClient}>
      <div id='contacts' className='flex flex-col h-full'>
        <Header />
        <aside className='bg-amber-200 flex-grow'>
          <ul>
            <li>
              <a href='/'>aside</a>
            </li>
          </ul>
        </aside>
      </div>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  )
}
