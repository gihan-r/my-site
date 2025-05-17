import React from 'react';
interface FooterProps {
  theme: string;
}
const Footer: React.FC<FooterProps> = ({
  theme
}) => {
  return <footer className="w-full bg-white dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold">
              Gihan Samaraweera
            </a>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Computer Science Student & Graphic Designer
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {['Home', 'Projects', 'About', 'Contact'].map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        <div className="h-px bg-gray-200 dark:bg-gray-700 my-8"></div>
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © 2025 Gihan Samaraweera. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;