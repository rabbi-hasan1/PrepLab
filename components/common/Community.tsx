import Link from "next/link";
import Buttons from "./button";

function Community() {
  return (
    <section className="w-full pb-7 pt-5 select-none">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col justify-center items-center">
          <Buttons>Community</Buttons>
          <div className="text-3xl font-semibold text-center mt-4 md:text-6xl">
            You&apos;re Not Studying Alone. <Buttons>10,000 +</Buttons> Diploma
            Students Preparing Smarter with PrepLab.
          </div>

          <div className="flex flex-row gap-4 my-5">
            <Link
              href="/"
              className="border bg-amber-700 px-3 py-2 rounded-md "
            >
              Facebook Group
            </Link>
            <Link href="/" className="border bg-blue-500 px-3 py-2 rounded-md">
              Discord Server
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Community;
