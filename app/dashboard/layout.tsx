import { PropsWithChildren } from "react";

function DashBoardLayout({ children }: PropsWithChildren) {
  return (
    <section className="select-none">
      <p>dashboard nav</p>
      {children}
      <p>dashboard footer</p>
    </section>
  );
}

export default DashBoardLayout;
