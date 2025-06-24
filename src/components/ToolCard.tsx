
import { LucideIcon } from 'lucide-react';

interface ToolCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  onClick: () => void;
}

const ToolCard = ({ title, description, icon: Icon, onClick }: ToolCardProps) => {
  return (
    <div 
      className="cyber-card cursor-pointer group hover:shadow-lg hover:shadow-cyber-accent/20"
      onClick={onClick}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <Icon className="w-8 h-8 text-cyber-accent group-hover:animate-pulse" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-cyber-accent transition-colors">
            {title}
          </h3>
          <p className="text-cyber-text/70 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <span className="text-cyber-accent text-sm font-mono group-hover:underline">
          Launch Tool →
        </span>
      </div>
    </div>
  );
};

export default ToolCard;
