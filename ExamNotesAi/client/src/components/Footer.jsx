import React from "react";
import { motion } from "motion/react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { serverUrl } from "../App";
import { setUserData } from "../redux/userSlice";

const Footer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = async () => {
    try {
      await axios.get(serverUrl + "/api/auth/logout", {
        withCredentials: true,
      });
      dispatch(setUserData(null));
      navigate("/auth");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="z-10 mx-6 mb-4 mt-14
      rounded-2xl
      bg-gradient-to-br from-black/90 via-black/80 to-black/90
      backdrop-blur-2xl 
      border border-white/10
      px-8 py-5
      shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {/* Left Column */}
        <motion.div
          whileHover={{ rotateX: 6, rotateY: -6 }}
          className="flex flex-col gap-3 transform-gpu"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div
            onClick={() => navigate("/")}
            className="flex items-center gap-3 cursor-pointer"
            style={{ transform: "translateZ(20px)" }}
          >
            <img src={logo} alt="logo" className="h-8 w-8 object-contain" />
            <span
              className="text-lg font-semibold bg-gradient-to-br from-white via-gray-300 to-white bg-clip-text text-transparent"
              style={{ textShadow: "0 6px 10px rgba(0,0,0,0.4)" }}
            >
              ExamNotes <span className="text-gray-400">Ai</span>
            </span>
          </div>

          <p className="text-sm text-gray-300 max-w-sm">
            ExamNotes Ai helps students exam-focused notes, revision material,
            diagram, and printable PDFs using Ai.
          </p>
        </motion.div>

        {/* Center Column - Quick Links */}
        <div className="flex flex-col items-center text-center">
          <h1 className="text-sm font-semibold text-white mb-4">Quick Links</h1>

          <ul className="space-y-2 text-sm">
            <li>
              <button
                onClick={() => navigate("/notes")}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Notes
              </button>
            </li>

            <li>
              <button
                onClick={() => navigate("/history")}
                className="text-gray-300 hover:text-white transition-colors"
              >
                History
              </button>
            </li>

            <li>
              <button
                onClick={() => navigate("/pricing")}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Add Credits
              </button>
            </li>
          </ul>
        </div>

        {/* Right Column (Empty for balance) */}
        <div className="flex flex-col items-center text-center">
          <h1 className="text-sm font-semibold text-white mb-4">
            Support & Account
          </h1>

          <ul className="space-y-2 text-sm">
            <li>
              <button
                onClick={() => navigate("/auth")}
                className="text-gray-300 hover:text-white transition-colors"
              >
                SignIn
              </button>
            </li>

            <li>
              <button
                onClick={handleSignOut}
                className="text-red-400 hover:text-red transition-colors"
              >
                SignOut
              </button>
            </li>

            <li>
              <button
                className="text-gray-300 hover:text-white transition-colors"
              >support@examnotes.com</button>
            </li>
          </ul>
        </div>
      </div>


      <div className="my-6 h-px bg-white/10 mt-8">
      <p className="text-center text-xs text-gray-600 ">
        © {new Date().getFullYear()} ExamNotes Ai. All rights reserved.
      </p>
      
      </div>
    </motion.div>
  );
};

export default Footer;
