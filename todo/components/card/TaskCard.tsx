import * as React from 'react';

type TaskCardProps = {
  title: string;
  description: string;
};

const TaskCard: React.FC<TaskCardProps> = ({ title, description }) => {
  const [isExpanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div
      className={`border rounded-lg shadow-lg p-4 mb-6 transform duration-300 ease-in-out bg-white text-black ${
        isExpanded ? 'h-80' : 'h-20'
      }`}
      onClick={handleExpandClick}
    >
      <div className='flex flex-col items-start justify-between'>
        <h2 className='font-bold text-xl'>{title}</h2>
        {isExpanded && <p className='mt-2'>{description}</p>}
      </div>
    </div>
  );
};

export default TaskCard;
