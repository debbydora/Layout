import { RouterProvider } from "react-router-dom"
import { Router } from "./routes/Router"
import { AuthProvider } from "./context/AuthContext"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <AuthProvider>
      <RouterProvider router={Router} />
      <ToastContainer/>
    </AuthProvider>
  );
}

export default App
