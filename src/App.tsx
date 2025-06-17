import { createBrowserRouter,RouterProvider } from 'react-router'
import './App.css'
import { Home } from './Pages/Home'
import { Contact } from './Pages/Contact'
import { About } from './Pages/About'

function App() {


  const router = createBrowserRouter([
    
    //index file or page 
    {
      path:'/',
      element:<Home/>
    },
    //contact page
    {
      path:'/contact',
      element:<Contact/>
    },
    //About Page
    {
      path:'/about',
      element:<About/>
    }
    

  ])

  return (
    <>
        <RouterProvider router = {router}/>
    </>
  )
}

export default App
