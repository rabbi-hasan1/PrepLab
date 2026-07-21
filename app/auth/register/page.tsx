import RegisterForm from "@/components/common/RegistrationForm";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

function RegisterPage() {
  return (
    <>
      <Link href="/auth/login" className="absolute top-18 left-6">
        <ArrowLeft />
      </Link>

      <div className="mt-7">
        <RegisterForm />
      </div>
    </>
  );
}

export default RegisterPage;
