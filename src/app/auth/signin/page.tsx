import Navbar from "@/components/sections/Navbar/Navbar";
import AuthForm from "./AuthForm";

export const revalidate = 0;
function SignIn() {
  return (
    <>
      <div className="md:hidden">
        <Navbar />
      </div>
      <AuthForm />
    </>
  );
}

export default SignIn;
