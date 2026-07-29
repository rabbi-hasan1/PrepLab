import { ArrowRight, Podium } from "lucide-react";
import Link from "next/link";

type leaderBoards = {
  id: number;
  name: string;
  point: number;
};

const members: leaderBoards[] = [
  {
    id: 1,
    name: "বঙ্গ বল্টু",
    point: 300,
  },
  {
    id: 2,
    name: "Rabbi Hasan",
    point: 250,
  },
  {
    id: 3,
    name: "শেখ হাসু আপা",
    point: 200,
  },
];

export default function LeaderBoard() {
  return (
    <section className="md:w-1/2">
      <h2 className="pb-1 text-xl font-mono font-medium md:text-2xl">
        Leaderboard
      </h2>

      <div className="overflow-hidden rounded-md border">
        <div className="flex items-center justify-between border-b px-4 py-3">
          <div className="flex items-center gap-2">
            <Podium size={20} className="text-orange-600" />
            <span className="font-bangla text-orange-500">বল্টুলীগ</span>
          </div>

          <Link
            href="/dashboard/leader-board"
            aria-label="View full leaderboard"
            className="rounded p-1 transition hover:bg-muted"
          >
            <ArrowRight size={20} strokeWidth={1.5} />
          </Link>
        </div>

        {members.map((member, index) => {
          const badgeColor =
            index === 0
              ? "bg-amber-400"
              : index === 1
                ? "bg-slate-400"
                : "bg-gray-400";

          return (
            <div
              key={member.id}
              className="flex items-center justify-between border-b last:border-b-0 px-4 py-3"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-md text-sm font-semibold text-white shadow ${badgeColor}`}
                >
                  #{member.id}
                </span>

                <p className="font-bangla font-medium">{member.name}</p>
              </div>

              <span className="font-semibold text-muted-foreground">
                {member.point} XP
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
