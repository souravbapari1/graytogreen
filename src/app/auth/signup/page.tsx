import Navbar from "@/components/sections/Navbar/Navbar";
import { montserrat } from "@/fonts/font";
import SignupView from "./SignupView";

function SignUp() {
  return (
    <div className={montserrat.className}>
      <Navbar />
      <SignupView />
    </div>
  );
}

export default SignUp;
