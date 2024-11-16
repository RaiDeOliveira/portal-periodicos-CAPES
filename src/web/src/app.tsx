import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/home'
import { Publication } from './pages/publication'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/publication',
    element: <Publication />
  }
])  

export function App() {
  return <RouterProvider router={router} />
}

