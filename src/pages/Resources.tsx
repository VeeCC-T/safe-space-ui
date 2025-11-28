import { LifeBuoy, Phone, ExternalLink } from 'lucide-react';

const hotlines = [
  { name: 'National Domestic Violence Hotline', number: '1-800-799-7233', description: '24/7 confidential support for anyone experiencing domestic violence.' },
  { name: 'Cyber Civil Rights Initiative Crisis Hotline', number: '844-878-2274', description: 'Support for victims of online harassment and nonconsensual image sharing.' },
    { name: 'The Trevor Project', number: '1-866-488-7386', description: 'Crisis intervention and suicide prevention for LGBTQ youth.' },
];

const links = [
  { name: 'DIY Online Safety Guide', url: '#', description: 'A comprehensive guide to securing your digital life.' },
  { name: 'Legal Resources for Online Abuse', url: '#', description: 'Learn about your legal options and rights.' },
  { name: 'Mental Health Support Directory', url: '#', description: 'Find therapists and counselors specializing in trauma.' },
];

export default function Resources() {
  return (
    <div>
        <div className='mb-6 text-center'>
            <LifeBuoy className='mx-auto text-pink-500' size={40}/>
            <h2 className='mt-2 text-3xl font-bold tracking-tight text-pink-900'>Emergency Resources</h2>
            <p className='mt-2 text-md text-gray-600'>You are not alone. Help is available 24/7.</p>
        </div>

      <div className='mb-8'>
        <h3 className='mb-4 text-xl font-bold text-pink-800'>Immediate Help Hotlines</h3>
        <div className='space-y-4'>
          {hotlines.map(hotline => (
            <div key={hotline.name} className='rounded-xl border border-pink-100 bg-white p-4 shadow-sm'>
              <h4 className='font-bold text-pink-900'>{hotline.name}</h4>
              <p className='text-sm text-gray-600 mt-1'>{hotline.description}</p>
              <a href={`tel:${hotline.number}`} className='mt-3 inline-flex items-center gap-2 rounded-md bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-700 hover:bg-pink-200'>
                <Phone size={16} />
                {hotline.number}
              </a>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className='mb-4 text-xl font-bold text-pink-800'>Helpful Links & Guides</h3>
         <div className='space-y-4'>
          {links.map(link => (
            <div key={link.name} className='rounded-xl border border-pink-100 bg-white p-4 shadow-sm'>
                 <h4 className='font-bold text-pink-900'>{link.name}</h4>
                 <p className='text-sm text-gray-600 mt-1'>{link.description}</p>
                 <a href={link.url} target="_blank" rel="noopener noreferrer" className='mt-3 inline-flex items-center gap-2 rounded-md bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-200'>
                    <ExternalLink size={16} />
                    Visit Site
                </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
