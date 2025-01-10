import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign, verify } from 'hono/jwt'

export const expensesRouter = new Hono<{
    Bindings :{
      DATABASE_URL: string
      JWT_SECRET: string
    }
    Variables:{
      userid: string
    }
  }
  >()

expensesRouter.use('/*',async(c,next)=>{
const token= c.req.header("Authorization")
if(!token){
  return c.json({message:"An error occured in authorisation"})
}
  const payload=await verify(token,c.env.JWT_SECRET)
  if (!payload){
    return c.json({message:"An error occured in middleware"})
  }
  c.set("userid",payload.id as string)
  await next()
})

expensesRouter.post('/addExpense',async (c) => {
  const prisma = new PrismaClient({
  datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
    const userid=c.get("userid")
    const body= await c.req.json()
  try{
    const expense= await prisma.expenses.create({
      data:{
        food :0,
        travel : 0,
        study :0,
        rent :0,
        other : 0,
        budget :body.budget ?? 0,
        total:0,
        userId: Number(userid)
      }
    })
    return c.json({
      id :expense.id,
      total: expense.total
    })
  }
  catch(e){
    c.status(404)
    return c.json({message:"An error occured"})
  }
  })

expensesRouter.post('/updateExpense',async (c) => {
 const prisma = new PrismaClient({
  datasourceUrl: c.env.DATABASE_URL,
 }).$extends(withAccelerate())
  const userid=c.get("userid")
  const body= await c.req.json()
 try{
  const expenseUser= await prisma.expenses.findFirst({
       where:{
         userId: Number(userid)
       }
     })
      if(!expenseUser){
        return c.json({message:"An error occured in finding user"})
      }
      const prevFood= expenseUser.food
      const prevTravel= expenseUser.travel
      const prevStudy= expenseUser.study
      const prevRent= expenseUser.rent
      const prevOther= expenseUser.other
      const expense= await prisma.expenses.update({
        where:{ 
          userId:Number(userid)
        },
        data:{
          food :prevFood+(body.food || 0),
          travel :prevTravel+(body.travel || 0),
          study :prevStudy+(body.study || 0),
          rent :prevRent+(body.rent || 0),
          other :prevOther+(body.other || 0),
        }
      })
      const total = (expense.food ?? 0) + (expense.travel ?? 0) + (expense.study ?? 0) +
    (expense.rent ?? 0) + (expense.other ?? 0);
    const udpatedExpense=await prisma.expenses.update({
      where:{
        userId: Number(userid)
      },
      data:{
        total: total
      }
    })
      return c.json({
        id :expense.id,
        id2:udpatedExpense.id,
        total: expense.total
      })
    }
    catch(e){
      return c.json({message:"An error occured in updatting"})
    }
    })

  expensesRouter.get('/getTotal', async (c)=>{
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())
        const userid=c.get("userid")
        console.log("Retrieved User ID:", userid);
      try{
          const expense= await prisma.expenses.findFirst({
            where:{
              userId: Number(userid)
            }
          })

          if(!expense){
            c.status(404)
            return c.json({message:"An error occured in expense"})
          }
          return c.json({
            expense,
            total: expense.total
          })
      }
      catch(e){
        c.status(404)
        return c.json({message:"An error occured in catch"})
      }
})



