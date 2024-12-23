import "./App.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./http";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { IngredientPanel } from "./components/Ingredients/IngredientPanel";
import { NewDrink } from "./components/Drinks/NewDrink";
import { PageTemplate } from "./components/PageTemplate";
import { EditDrink } from "./components/Drinks/EditDrink";
import { CustomDrinks } from "./components/Drinks/CustomDrinks";
import { NewIngredient } from "./components/Ingredients/NewIngredient";
import { IngredientMap } from "./components/Ingredients/IngredientMap";
import { Drink } from "./components/Drinks/Drink";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PageTemplate />,
    },
    { path: "/map/:id", element: <IngredientMap /> },
    {
      path: "/bar",
      element: <IngredientPanel />,
    },
    {
      path: "/addIngredient",
      element: <NewIngredient />,
    },
    {
      path: "/customDrinks",
      element: <CustomDrinks />,
    },
    {
      path: "/drink/:id",
      element: <Drink />,
    },
    {
      path: "/addDrink",
      element: <NewDrink />,
    },
    {
      path: "/editDrink/:id",
      element: <EditDrink />,
    },
  ]);
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
