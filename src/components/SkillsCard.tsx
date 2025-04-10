import React from 'react';

interface SkillCardProps {
  title: string;       
  skills: string[];    
}


const SkillCard: React.FC<SkillCardProps> = ({ title, skills }) => {
  return (
    <div className="border-2 border-border rounded-lg p-6"> 
      <h2 className="text-2xl font-semibold text-white text-center">
        {title} 
      </h2>
      <div className="flex flex-wrap gap-2 gap-y-2 mt-4"> 
        {skills.map((tech, index) => (
          <span
            key={index} 
            className="bg-white text-black px-2 py-[2px] rounded-xl text-sm"
          >
            {tech} 
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCard; 