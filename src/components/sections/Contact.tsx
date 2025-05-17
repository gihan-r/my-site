import React, { useState } from 'react';
import { MailIcon, PhoneIcon, MapPinIcon, GithubIcon, LinkedinIcon, InstagramIcon, MessageCircleIcon } from 'lucide-react';

interface ContactProps {
  theme: string;
}

const Contact: React.FC<ContactProps> = ({
  theme
}) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formState;
    
    // Create mailto link with subject and body
    const subject = `Contact from ${name}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    const mailtoLink = `mailto:kavimcg03@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    // Reset form
    setFormState({
      name: '',
      email: '',
      message: ''
    });
  };

  return <section id="contact" className="py-20 w-full bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In Touch
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-center mb-12">
          Have a project in mind or just want to connect? I'd love to hear from
          you!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formState.name} 
                  onChange={handleChange} 
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 border-gray-300 dark:border-gray-600 focus:ring-blue-200 dark:focus:ring-blue-800 bg-white dark:bg-gray-700" 
                  placeholder="Your Name" 
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formState.email} 
                  onChange={handleChange} 
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 border-gray-300 dark:border-gray-600 focus:ring-blue-200 dark:focus:ring-blue-800 bg-white dark:bg-gray-700" 
                  placeholder="example@example.com" 
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formState.message} 
                  onChange={handleChange} 
                  rows={5} 
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 border-gray-300 dark:border-gray-600 focus:ring-blue-200 dark:focus:ring-blue-800 bg-white dark:bg-gray-700" 
                  placeholder="Hi there, I'd like to talk about..."
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
              >
                <MailIcon className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
          {/* Contact Info */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 gap-8">
              <div className="flex">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center">
                  <MailIcon className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium mb-1">Email</h3>
                  <a 
                    href="mailto:kavimcg03@gmail.com" 
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    kavimcg03@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg flex items-center justify-center">
                  <PhoneIcon className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium mb-1">Phone</h3>
                  <a 
                    href="tel:+94716032171" 
                    className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300"
                  >
                    +94-71-603-2171
                  </a>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg flex items-center justify-center">
                  <MapPinIcon className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium mb-1">Location</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Galle, Sri Lanka
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/gihan-r" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors duration-300" 
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/gihan-samaraweera-8aa604333/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors duration-300" 
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.instagram.com/_gihan_cer_/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-pink-600 hover:text-white dark:hover:bg-pink-600 transition-colors duration-300" 
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>
                <a 
                  href="https://wa.me/94716032171" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-green-600 hover:text-white dark:hover:bg-green-600 transition-colors duration-300" 
                  aria-label="WhatsApp"
                >
                  <MessageCircleIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default Contact;