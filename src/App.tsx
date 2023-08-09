import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { Dashboard } from "./shared/pages/Dashboard.tsx";
import { MainLayout } from "./shared/components/MainLayout.tsx";
import { Provider } from 'react-redux'
import { sharedStore } from "./shared/sharedStore.ts";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<MainLayout />}>
    <Route index element={<Dashboard />} />
  </Route>,
))

function App() {
  return (
    <Provider store={sharedStore}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
