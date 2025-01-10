import './TypingAnimation.css';

export const TypingAnimation = ({ text }: any) => {
  return (
    <div className="w-full md:w-max text-center">
      <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-3 sm:pr-5 text-2xl sm:text-4xl md:text-5xl text-cyan-600 font-bold pb-2">
        {text}
      </h1>
    </div>
  );
};
