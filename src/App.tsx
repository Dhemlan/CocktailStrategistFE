import './App.css'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './http'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { IngredientPanel } from './components/Ingredients/IngredientPanel'
import { NewDrink } from './components/Drinks/NewDrink'
import { PageTemplate } from './components/PageTemplate'
import { EditDrink } from './components/Drinks/EditDrink'
import { CustomDrinks } from './components/Drinks/CustomDrinks'

function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element: <PageTemplate />
    },
    {
      path:"/bar",
      element: <IngredientPanel />
    },
    {
      path:"/addIngredient"
    },
    {
      path:"/customDrinks",
      element: <CustomDrinks />
    },
    {
      path:"/addDrink",
      element: <NewDrink />
    },
    {
      path:"/editDrink/:id",
      element: <EditDrink />
    }

  ])
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App
