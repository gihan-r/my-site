import React from 'react';
import { CodeIcon, PaintbrushIcon, UserIcon, MailIcon } from 'lucide-react';

const QuickNav = () => {
  const navItems = [{
    id: 'projects',
    label: 'Projects',
    icon: <CodeIcon className="w-6 h-6 mb-2" />,
    color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
  }, {
    id: 'skills',
    label: 'Skills',
    icon: <PaintbrushIcon className="w-6 h-6 mb-2" />,
    color: 'bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400'
  }, {
    id: 'about',
    label: 'About',
    icon: <UserIcon className="w-6 h-6 mb-2" />,
    color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
  }, {
    id: 'contact',
    label: 'Contact',
    icon: <MailIcon className="w-6 h-6 mb-2" />,
    color: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
  }];

  return (
    <section id="quicknav" className="py-16 w-full bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {navItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`flex flex-col items-center justify-center p-6 rounded-lg ${item.color} transition-transform duration-300 hover:scale-105`}
            >
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickNav;