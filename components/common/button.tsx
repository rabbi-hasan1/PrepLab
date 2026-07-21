function Buttons({ children }: React.PropsWithChildren) {
  return (
    <h1 className="relative w-fit px-4 py-4 uppercase mx-auto select-none dark:bg-[#e8602e21] bg-[#850a0a21] border  dark:text-[#9B9999] text-gray-700 border-[#3a1a0e] md:text-2xl text-xl  font-machina font-light leading-1   inline-block">
      {children}
      <span className="absolute w-0.75 h-0.75 dark:bg-white bg-[#3a1a0e] z-10 top-0 left-0 -translate-x-1/2 -translate-y-1/2"></span>
      <span className="absolute w-0.75 h-0.75 dark:bg-white bg-[#3a1a0e] z-10 top-0 right-0 translate-x-1/2 -translate-y-1/2"></span>
      <span className="corner-dot-bl absolute w-0.75 h-0.75 dark:bg-white bg-[#3a1a0e] z-10 bottom-0 left-0 -translate-x-1/2 translate-y-1/2"></span>
      <span className="corner-dot-br absolute w-0.75 h-0.75 dark:bg-white bg-[#3a1a0e] z-10 bottom-0 right-0 translate-x-1/2 translate-y-1/2"></span>
    </h1>
  );
}

export default Buttons;
