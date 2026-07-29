import DashboardItems from "./DashboardItems";

function DashboardTop() {
  return (
    <div className="w-full flex flex-col  md:flex-row gap-4 ">
      <DashboardItems />
      <div className="w-full h-auto sm:w-1/3 border bg-[#FFF4D1] border-zinc-200 dark:border-zinc-700 dark:bg-yellow-900/20 font-semibold rounded-md p-2 ">
        <h1>Daily streake</h1>
      </div>
    </div>
  );
}

export default DashboardTop;
