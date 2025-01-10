import { Hono } from "hono";
import {userRouter} from "./routes/user"
import {expensesRouter} from "./routes/expenses"
import { cors } from "hono/cors";

const app= new Hono()
app.use(cors())
app.route("/api/v1/user",userRouter)
app.route("/api/v1/expenses",expensesRouter)

export default app