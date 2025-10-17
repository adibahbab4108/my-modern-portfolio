import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className=" border-t border-gray-700 py-3">
      <div className="flex justify-center gap-4 text-gray-500 pb-5">
        <a href="https://www.facebook.com/bigg.bangg.906" target="_blank">
          {" "}
          <FaFacebook />
        </a>
        <a href="https://www.linkedin.com/in/adib-ahbab4108" target="_blank">
          {" "}
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/adibahbab4108"
          target="_blank"
          aria-label="Visit GitHub profile"
        >
          <FaGithub />
        </a>
      </div>
      <p className="text-gray-500 text-center">
        All right reserved @ Adib Ahbab
      </p>
    </div>
  );
}
