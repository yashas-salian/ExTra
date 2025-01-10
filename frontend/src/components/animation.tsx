
import './TypingAnimation.css';

export const TypingAnimation = ({text}:any) => {
  return (
      <div className="w-max">
        <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-cyan-600 font-bold pb-2">
          {text}
        </h1>
      </div>
  );
};

