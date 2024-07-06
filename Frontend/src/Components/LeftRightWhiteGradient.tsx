const LeftRightWhiteGradient = () => {
  return (
    <div className="absolute pointer-events-none inset-0 z-20 before:absolute after:absolute before:left-0 after:right-0 before:w-1/4 after:w-1/4 before:h-full after:h-full before:bg-gradient-to-r after:bg-gradient-to-l before:from-white before:to-transparent after:from-white after:to-transparent before:filter after:filter before:blur-[3] after:blur-[3]" />
  );
};

export default LeftRightWhiteGradient;