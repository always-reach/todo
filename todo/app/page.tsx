'use client';

import TaskCard from '@/components/card/TaskCard';

export default function Home() {
  const initTask = [
    { title: 'タスク1', description: 'タスク1の説明' },
    { title: 'タスク2', description: 'タスク2の説明' },
    { title: 'タスク3', description: 'タスク3の説明' },
  ];
  return (
    <div className='flex min-h-screen flex-col items-center justify-betwee mx-4'>
      <div className='w-full'>
        {initTask.map((task) => (
          <TaskCard key={task.title} title={task.title} description={task.description} />
        ))}
      </div>
    </div>
  );
}
