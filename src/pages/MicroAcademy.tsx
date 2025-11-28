import { BookOpen } from 'lucide-react';

const lessons = [
  {
    title: 'Spotting Online Harassment',
    description: 'Learn to identify different forms of online abuse.',
    progress: 75,
  },
  {
    title: 'Securing Your Social Media',
    description: 'Actionable steps to protect your accounts.',
    progress: 40,
  },
  {
    title: 'Understanding Digital Footprints',
    description: 'How your online activity can be tracked and managed.',
    progress: 0,
  },
    {
    title: 'Dealing with Impersonation',
    description: 'What to do when someone creates a fake profile of you.',
    progress: 0,
  },
];

const LessonCard = ({ title, description, progress }) => (
  <div className='mb-4 rounded-xl border border-pink-100 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-pink-200'>
    <div className='flex items-start justify-between'>
        <div>
            <h3 className='text-lg font-bold text-pink-900'>{title}</h3>
            <p className='mt-1 text-sm text-gray-600'>{description}</p>
        </div>
        <div className='hidden sm:block ml-4 flex-shrink-0'>
            <BookOpen className='text-pink-400' size={24}/>
        </div>
    </div>
    <div className='mt-4'>
      <div className='h-2.5 w-full rounded-full bg-gray-200'>
        <div
          className='h-2.5 rounded-full bg-pink-500'
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className='mt-1 text-right text-xs font-medium text-pink-800'>{progress}% complete</p>
    </div>
  </div>
);

export default function MicroAcademy() {
  return (
    <div>
      <div className='mb-6 text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-pink-900'>Welcome to the Academy</h2>
          <p className='mt-2 text-md text-gray-600'>Empower yourself with knowledge. Start a lesson below.</p>
      </div>
      <div>
        {lessons.map((lesson, index) => (
          <LessonCard key={index} {...lesson} />
        ))}
      </div>
    </div>
  );
}
