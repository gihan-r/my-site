import React from 'react';

interface AboutProps {
    theme: string;
}

const About: React.FC<AboutProps> = ({ theme }) => {
    return (
        <section id="about" className="py-20 w-full">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">About Me</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-center mb-12">
                    Where technology meets creativity
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Code-inspired column */}
                    <div className="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-lg">
                        <div className="flex items-center mb-6">
                            <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <h3 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400">The Technical Side</h3>
                        <div className="font-mono text-sm mb-6">
                            <div className="text-gray-500">// My technical background</div>
                            <div><span className="text-purple-600 dark:text-purple-400">const</span> <span className="text-blue-600 dark:text-blue-400">education</span> = {`{`}</div>
                            <div className="ml-4"><span className="text-green-600 dark:text-green-400">degree</span>: <span className="text-orange-600 dark:text-orange-400">"BSc (Hons) Computer Science"</span>,</div>
                            <div className="ml-4"><span className="text-green-600 dark:text-green-400">university</span>: <span className="text-orange-600 dark:text-orange-400">"University of Westminster"</span>,</div>
                            <div className="ml-4"><span className="text-green-600 dark:text-green-400">graduation</span>: <span className="text-blue-600 dark:text-blue-400">Present</span></div>
                            <div>{`}`};</div>
                            <div className="mt-4"><span className="text-purple-600 dark:text-purple-400">function</span> <span className="text-yellow-600 dark:text-yellow-400">myApproach</span>() {`{`}</div>
                            <div className="ml-4"><span className="text-purple-600 dark:text-purple-400">return</span> <span className="text-orange-600 dark:text-orange-400">"Analytical problem-solving with creative solutions"</span>;</div>
                            <div>{`}`}</div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            I approach problems with both analytical rigor and creative thinking. My computer science background has equipped me with strong algorithmic thinking and software development skills.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">
                            I'm passionate about creating efficient, elegant code that not only works flawlessly but is also maintainable and scalable. I constantly explore new technologies and methodologies to expand my technical toolkit.
                        </p>
                    </div>
                    {/* Design-inspired column */}
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
                        <div className="flex mb-6">
                            <div className="w-16 h-1 bg-pink-500 mr-2"></div>
                            <div className="w-8 h-1 bg-purple-500 mr-2"></div>
                            <div className="w-4 h-1 bg-blue-500"></div>
                        </div>
                        <h3 className="text-2xl font-bold mb-6 text-pink-600 dark:text-pink-400">The Creative Side</h3>
                        <div className="mb-6 flex flex-wrap gap-2">
                            <span className="inline-block px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded-full text-sm">Visual Design</span>
                            <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm">UI/UX</span>
                            <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm">Typography</span>
                            <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm">Color Theory</span>
                            <span className="inline-block px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-full text-sm">Brand Identity</span>
                        </div>
                        <div className="grid grid-cols-5 gap-2 mb-6">
                            <div className="h-4 bg-blue-500 rounded"></div>
                            <div className="h-4 bg-pink-500 rounded"></div>
                            <div className="h-4 bg-purple-500 rounded"></div>
                            <div className="h-4 bg-green-500 rounded"></div>
                            <div className="h-4 bg-yellow-500 rounded"></div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            My passion for design complements my technical skills, allowing me to create experiences that are not only functional but also aesthetically pleasing and intuitive to use.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">
                            I believe that great design is invisible—it should enhance the user experience without drawing attention to itself. My goal is to create digital products that seamlessly blend form and function.
                        </p>
                    </div>
                </div>
                <div className="mt-16 max-w-3xl mx-auto text-center">
                    <h3 className="text-2xl font-bold mb-6">Where Code Meets Creativity</h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                        My unique perspective comes from standing at the intersection of logical programming and creative design. This dual expertise allows me to bridge the gap between technical requirements and user-centered design, creating digital experiences that are both powerful and beautiful.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="#contact" className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 transition-colors duration-300">
                            Let's Work Together
                            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                            </svg>
                        </a>
                        <a
                            href="Gihan Samaraweera .pdf"
                            download="Gihan Samaraweera .pdf"
                            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-md hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                        >
                            <svg
                                className="w-5 h-5 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                            </svg>
                            Download CV
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
