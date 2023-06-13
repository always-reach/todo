'use client';

import TaskCard from '@/components/card/TaskCard';
import { Task } from '@prisma/client';
import { use } from 'react';

async function getData(){
  const res = await fetch('http://localhost:3000/api/tasks');
  return res.json()
}

export default function Home() {
  const initTask:Task[] = use(getData())
  console.log({initTask})
  return (
    <div className='flex min-h-screen flex-col items-center justify-betwee mx-4'>
      <div className='w-full'>
        {initTask.map((task) => (
          <TaskCard key={task.title} title={task.title} description={task.description??""} />
        ))}
      </div>
    </div>
  );
}
