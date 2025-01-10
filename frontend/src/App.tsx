import { BrowserRouter,Routes,Route } from "react-router-dom"
import { Signup } from "./pages/signup"
import { Signin } from "./pages/signin"
import { Dashboard } from "./pages/dashboard"
import { Maindashboard } from "./pages/mainDashboard"
import { UpdateExpense } from "./pages/updateExpense"
import { AddExpense } from "./pages/addExpense"
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/dashboard" element={<Maindashboard/>}/>
        <Route path="/update" element={<UpdateExpense/>}/>
        <Route path="/addExpense" element={<AddExpense/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
