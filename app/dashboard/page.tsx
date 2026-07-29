import Achivement from "@/components/dashboard/Achivement";
import Activitys from "@/components/dashboard/Activitys";
import DashboardTop from "@/components/dashboard/DashboardTop";
import LeaderBoard from "@/components/dashboard/LeaderBoard";
export default function DashboardPage() {
  return (
    <>
      <DashboardTop />
      <Activitys />
      <div className="flex flex-col md:flex-row md:items-center gap-3">
        <LeaderBoard />
        <Achivement />
      </div>
    </>
  );
}
