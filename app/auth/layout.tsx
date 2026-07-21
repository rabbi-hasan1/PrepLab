import { PropsWithChildren } from "react";

function AuthLayout({ children }: PropsWithChildren) {
  return <section>{children}</section>;
}

export default AuthLayout;
