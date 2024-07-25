import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-violet-400 w-full h-20 font-bold text-white flex items-center justify-center gap-5">
      <div>&copy; 2024-2025 Rahul Kumar</div>
      <a href="https://github.com/rahulkumarpahwa">
        <FaGithub />
      </a>
      <a href="https://linkedin.com/in/rahulkumarpahwa">
        <FaLinkedin />
      </a>
    </div>
  );
};
export default Footer;
