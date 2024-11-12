import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import ErrorPage from './error-page'
import SideBar from './routes/sidebar'
import Contact from './routes/contact'

const router = createBrowserRouter([
  {
    path: "/",
    element: <SideBar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/contatos/:id",
        element: <Contact />
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
