import React from 'react';

interface SkillsProps {
  theme: string;
}

const Skills: React.FC<SkillsProps> = ({ theme }) => {
  const skills = {
    'Development': [
      { name: 'React ', level: 90 },
      { name: 'Java ', level: 85 },
      { name: 'Node.js ', level: 80 },
      { name: 'Python ', level: 75 },
      { name: 'SQL ', level: 85 }
    ],
    'Design': [
      { name: 'UI/UX Design ', level: 85 },
      { name: 'Figma ', level: 90 },
      { name: 'Adobe After Effects ', level: 80 },
      { name: 'Adobe Photoshop', level: 75 },
      { name: 'Adobe Illustrator', level: 70 }
    ]
  };

  const additionalSkills = [
    { name: 'Git', icon: '🚀', color: 'from-blue-500 to-cyan-500' },
    { name: 'Docker', icon: '🐳', color: 'from-blue-600 to-indigo-600' },
    { name: 'AWS', icon: '☁️', color: 'from-orange-500 to-yellow-500' },
    { name: 'CI/CD', icon: '⚡', color: 'from-purple-500 to-pink-500' },
    { name: 'REST APIs', icon: '🔌', color: 'from-green-500 to-emerald-500' },
    { name: 'GraphQL', icon: '📊', color: 'from-pink-500 to-rose-500' },
    { name: 'MongoDB', icon: '🍃', color: 'from-green-600 to-teal-600' },
    { name: 'PostgreSQL', icon: '🐘', color: 'from-blue-700 to-indigo-700' }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-blue-900/20 bg-[length:200%_200%] animate-gradient" />
      
      {/* Animated tech pattern */}
      <div className="absolute inset-0">
        {/* Hexagonal grid */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(59,130,246,0.1)_100%)] animate-pulse" />
        <div className="absolute inset-0 bg-[linear-gradient(60deg,transparent_0%,rgba(59,130,246,0.1)_50%,transparent_100%)] animate-tech-shine" />
        <div className="absolute inset-0 bg-[linear-gradient(-60deg,transparent_0%,rgba(59,130,246,0.1)_50%,transparent_100%)] animate-tech-shine" style={{ animationDelay: '1s' }} />
      </div>

      {/* Moving particles */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-500/30 dark:bg-blue-400/30 rounded-full animate-particle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 dark:bg-blue-500/30 rounded-full blur-3xl animate-float" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 dark:bg-purple-500/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s', animationDuration: '8s' }} />
      
      {/* Tech circuit lines */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(59,130,246,0.1)_1px,transparent_2px)] bg-[size:40px_40px] animate-grid-move" style={{ animationDuration: '20s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_0%,rgba(59,130,246,0.1)_1px,transparent_2px)] bg-[size:40px_40px] animate-grid-move" style={{ animationDuration: '20s' }} />
      </div>

      <div className="container mx-auto px-4 relative">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-title-glow">
          Technical Expertise
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <div key={category} className="space-y-6 animate-slide-in" style={{ animationDelay: `${categoryIndex * 200}ms` }}>
              <h3 className="text-2xl font-semibold mb-8 text-gray-800 dark:text-gray-200 animate-text-glow">
                {category}
              </h3>
              <div className="space-y-6">
                {items.map((skill, index) => (
                  <div key={skill.name} className="relative animate-fade-in group" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden group-hover:shadow-lg transition-shadow duration-300">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-skillBarFill relative"
                        style={{ width: `${skill.level}%` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-semibold mb-8 text-center text-gray-800 dark:text-gray-200 animate-text-glow">
            Additional Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {additionalSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="group relative p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg`}></div>
                <div className="relative flex flex-col items-center space-y-2">
                  <span className="text-2xl transform group-hover:scale-110 transition-transform duration-300">{skill.icon}</span>
                  <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {skill.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;