import { RouterProvider } from "react-router-dom";
import { routers } from "./Routers/Routers";
import './App.css'


function App() {
  return (
    <div className="container">
      <RouterProvider router = {routers}>
      
      </RouterProvider>
    </div>
  );
}

export default App;
