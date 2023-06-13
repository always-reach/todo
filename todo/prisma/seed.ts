import { PrismaClient } from '@prisma/client'

const prisma= new PrismaClient()

async function main(){
  await prisma.task.create({
    data: {
      title: 'Learn Prisma',
      description: 'Learn how to use Prisma',
      completed: false,
    },
  })
  await prisma.task.create({
    data: {
      title: 'Learn GraphQL',
      description: 'Learn how to use GraphQL',
      completed: false,
    },
  })
  await prisma.task.create({
    data: {
      title: 'Learn TypeScript',
      description: 'Learn how to use TypeScript',
      completed: false,
    },
  })
  await prisma.task.create({
    data: {
      title: 'Learn React',
      description: 'Learn how to use React',
      completed: false,
    },
  })
}

main()
.then(async()=>{
  await prisma.$disconnect()
})
.catch(async(e)=>{
  console.error(e)
  await prisma.$disconnect()
  process.exit(1)
})
