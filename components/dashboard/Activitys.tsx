import { ArrowUpRight, Clock11, NotebookText } from "lucide-react";
import { ChartBarDefault } from "./Chart";

function Activities() {
  return (
    <div className="my-6">
      <h2 className="mb-3 text-[18px] md:text-2xl font-bold font-mono">
        Your Activities (Last 7 Days)
      </h2>

      <div>
        <div className="flex gap-3">
          <div className="flex flex-col gap-3 flex-1">
            <div className="border rounded-lg p-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold">Study Time</h3>
                <Clock11 size={18} strokeWidth={1.5} />
              </div>

              <p className="mt-2 text-2xl font-bold">1 H</p>
            </div>

            <div className="border rounded-lg p-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold">Total Exams</h3>
                <NotebookText size={18} strokeWidth={1.5} />
              </div>

              <p className="mt-2 text-2xl font-bold">1 P</p>
            </div>
          </div>

          <div className="flex-1 border rounded-lg p-3">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">Accuracy</p>
              <ArrowUpRight size={18} strokeWidth={1.5} />
            </div>

            <div className="mt-6 flex justify-center">
              <div className="relative h-28 w-28 rounded-full border-8 border-blue-500 border-t-zinc-200 flex items-center justify-center">
                <span className="text-xl font-bold">85%</span>
              </div>
            </div>
          </div>
        </div>
        <div className=" h-fit my-3 ">
          <ChartBarDefault />
        </div>
      </div>
    </div>
  );
}

export default Activities;
