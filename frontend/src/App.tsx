import { BrowserRouter,Routes,Route } from "react-router-dom"
import { Signup } from "./pages/signup"
import { Signin } from "./pages/signin"
import { Dashboard } from "./pages/dashboard"
import { Maindashboard } from "./pages/mainDashboard"
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/dashboard" element={<Maindashboard/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
