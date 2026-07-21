import LoginForm from "@/components/common/LoginForm";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

function LoginPage() {
  return (
    <>
      <Link href="/" className="absolute top-18 left-6">
        <ArrowLeft />
      </Link>

      <div className="mt-20">
        <LoginForm />
      </div>
    </>
  );
}

export default LoginPage;
