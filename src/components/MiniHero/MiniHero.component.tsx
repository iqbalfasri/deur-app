import { MiniHeroComponentProps } from "./types";

const MiniHeroComponent = ({ title, description }: MiniHeroComponentProps) => {
  return (
    <div className="text-center py-16">
      <h1 className="text-4xl font-bold">{title}</h1>
      <span className="text-sm mt-4 text-slate-600">{description}</span>
    </div>
  );
};

export default MiniHeroComponent;
