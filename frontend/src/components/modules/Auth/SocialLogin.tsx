import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { signIn } from "next-auth/react";
export default function SocialLogin() {
  const handleSocialLogin = async () => {
    try {
      // Option 1: if have already have custom login API
      // (window.location.href="") better for browser redirect. axios/redux toolkit fetch won't work
      // window.location.href = "http://localhost:5000/api/v1/auth/google";

      // Option 2: using NExtAuth
      await signIn("google", {
        callbackUrl: "/",
      });

    } catch (error) {
      console.error("Social login failed:", error);
    }
  };
 
;
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-center gap-3">
        {/* Google */}
        <button
          onClick={handleSocialLogin}
          className="flex items-center gap-3 border px-4 py-2 rounded hover:bg-gray-100 transition cursor-pointer"
        >
          <FcGoogle size={24} />
        </button>

        {/* GitHub */}
        <button className="flex items-center gap-3 border px-4 py-2 rounded hover:bg-gray-100 transition cursor-pointer">
          <FaGithub size={24} className="text-gray-800" />
        </button>

        {/* Facebook */}
        <button className="flex items-center gap-3 border px-4 py-2 rounded hover:bg-gray-100 transition cursor-pointer">
          <FaFacebook size={24} className="text-blue-600" />
        </button>
      </div>
    </div>
  );
}
