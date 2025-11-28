import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { Home, ShieldAlert, LifeBuoy, Bot, Heart, X, Info } from 'lucide-react';
import { cn } from '../lib/utils';

const navItems = [
  { href: '/', icon: Home, label: 'Academy' },
  { href: '/report', icon: ShieldAlert, label: 'Report' },
  { href: '/resources', icon: LifeBuoy, label: 'Resources' },
  { href: '/assistant', icon: Bot, label: 'Assistant' },
  { href: '/donate', icon: Heart, label: 'Donate' },
];

const Header = () => {
  const navigate = useNavigate();

  const handleQuickEscape = () => {
    // This should navigate to a safe, unrelated website.
    // For demonstration, it navigates home, but in production, this would be an external link.
    window.location.href = 'https://www.google.com';
  };

  return (
    <header className='sticky top-0 z-10 flex items-center justify-between bg-white/80 px-4 py-3 backdrop-blur-sm shadow-sm'>
      <div className='flex items-center gap-2'>
        <div className='rounded-full bg-pink-500 p-2 text-white'>
          <ShieldAlert size={20} />
        </div>
        <h1 className='text-xl font-bold text-pink-900'>ShieldHer</h1>
      </div>
      <div className='flex items-center gap-4'>
         <button onClick={() => alert('ShieldHer is a privacy-focused platform. Your data is handled with the utmost care and anonymity.')} className='text-gray-500 hover:text-pink-600'>
            <Info size={22} />
         </button>
        <button 
          onClick={handleQuickEscape}
          className='flex items-center gap-2 rounded-full bg-red-500 px-4 py-2 text-sm font-bold text-white shadow-md transition-transform hover:scale-105 active:scale-95'
        >
          <X size={16} />
          Quick Escape
        </button>
      </div>
    </header>
  );
};

const BottomNav = () => {
  return (
    <nav className='fixed bottom-0 z-10 w-full border-t border-gray-200 bg-white/90 backdrop-blur-sm'>
      <div className='mx-auto flex max-w-lg justify-around'>
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.href}
            className={({ isActive }) =>
              cn(
                'flex flex-1 flex-col items-center gap-1 py-2 text-center text-xs font-medium text-gray-500 transition-colors hover:bg-pink-50/50 hover:text-pink-600',
                { 'text-pink-600': isActive }
              )
            }
          >
            <item.icon size={22} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};


export default function Layout() {
  return (
    <div className="min-h-screen bg-pink-50/20">
      <Header />
      <main className="pb-24 pt-4 sm:pb-8">
        <div className="mx-auto max-w-lg px-4">
            <Outlet />
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
