import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'

export const userRouter = new Hono<{
  Bindings :{
    DATABASE_URL: string
    JWT_SECRET: string
  }
  Variables:{
    userid: string
  }
}
>()

userRouter.post('/signup', async (c) => {
const prisma = new PrismaClient({
datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())

  const body= await c.req.json()
  try{
    const user= await prisma.user.create({
      data:{
        email:body.email,
        password: body.password,
        username: body.username
      }
    })
    const jwt =await sign({id:user.id},c.env.JWT_SECRET)
    return c.json({
      token: jwt
    })
  }
  catch(e){
    c.status(403)
    return c.text('SignUp failed')
  }

})
userRouter.post('/signin',async (c) => {
const prisma = new PrismaClient({
datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())
  const body= await c.req.json()
  try{
      const user = await prisma.user.findUnique({
        where:{
          email: body.email
        }
      })
      if(!user){
        c.status(403)
        return c.text("user does not exist")
      }
      const jwt= await sign({id:user.id},c.env.JWT_SECRET)
      
      return c.json({
        token:jwt
      })
  }
  catch(e){
    c.status(403)
    return c.text('SignIn failed')
  }
})