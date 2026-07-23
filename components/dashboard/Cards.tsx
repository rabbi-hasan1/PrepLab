import Image from "next/image";

function Cards() {
  return (
    <div className="w-24 border bg-emerald-900 rounded-2xl p-3 flex flex-col dark:bg-emerald-950 text-white items-center">
      <Image
        src="/question-banks.png"
        alt="no image"
        width={60}
        height={60}
        className="w-auto h-auto"
      />
      <p className=" font-semibold md:font-bold pt-1.5 px-1">Questions</p>
    </div>
  );
}

export default Cards;
