import { PrismaClient, Task } from "@prisma/client"
import { NextApiRequest, NextApiResponse } from "next"

type Todo={
  title:string
  description:string
}

export default async(requ:NextApiRequest,res:NextApiResponse<Task[]>)=>{
  const prisma = new PrismaClient()
  const todos = await prisma.task.findMany()
  prisma.$disconnect()
  res.status(200).json(todos)
}