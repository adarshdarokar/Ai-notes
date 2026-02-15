import React from "react";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../utils/Firebase";
import { serverUrl } from "../App";
import axios from "axios";

 // sirf syntax ke liye define kiya

function Auth() {
  const handleGoogelAuth = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      const User = response.user;
      const name = User.displayName;
      const email = User.email;

      const result = await axios.post(
        serverUrl + "/api/auth/google",
        { name, email },
        {
          withCredentials: true, // spelling fix
        }
      );

      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen overflow-hidden bg-white text-black px-4 sm:px-6 lg:px-8">
      <motion.header
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="max-w-7xl mx-auto mt-6 sm:mt-8 bg-black/80 backdrop-blur-xl border border-white/10 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 rounded-2xl shadow-[0_20px_45px_rgba(0,0,0,0.6)] text-center lg:text-left"
      >
        <h1 className="text-2xl font-bold bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
          ExamNotes Ai
        </h1>
        <p className="text-sm text-gray-300 mt-1">
          Ai-powered exam-oriented notes & revision
        </p>
      </motion.header>

      <main className="max-w-7xl mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center lg:text-left flex flex-col items-center lg:items-start"
        >
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight bg-gradient-to-br from-black/90 via-black/60 to-black/90 bg-clip-text text-transparent">
            Unlock Smart <br /> Ai Notes
          </h1>

          <motion.button
            onClick={handleGoogelAuth}
            whileHover={{ y: -10, rotateX: 8, rotateY: -8, scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="mt-10 px-10 py-3 rounded-xl flex items-center gap-3 bg-gradient-to-br from-black/90 via-black/80 to-black/90 text-white font-semibold text-lg shadow-[0_25px_60px_rgba(0,0,0,0.7)]"
          >
            <FcGoogle size={22} />
            Continue with Google
          </motion.button>

          <p className="mt-6 max-w-xl text-lg bg-gradient-to-br from-gray-500/80 to-gray-700 bg-clip-text text-transparent text-center lg:text-left">
            You get <span className="font-semibold">50 Free credits</span> to
            create exam notes, projects notes, charts, graphs and download clean
            PDF's _ instantly using AI.
          </p>

          <p className="mt-4 text-sm text-gray-500 text-center lg:text-left">
            Start with 50 free credits - Upgrade anytime for more credits -
            Instant access
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 place-items-center">
          <Feature icon="🎁" title="50 Free Credits" des="Start with 50 free credits to generate notes without paying." />
          <Feature icon="📁" title="Project Notes" des="Well-Structured documentation for assignments & projects." />
          <Feature icon="📝" title="Exam Notes" des="Gigh-yield, revision-ready exam-oriented notes." />
          <Feature icon="📊" title="Charts & Graphs" des="Auto-generated diagrams, Charts and flow graphs." />
          <Feature icon="📄" title="Free PDF Download" des="Download clean, printable PDF's instantly." />
        </div>
      </main>
    </div>
  );
}

function Feature({ icon, title, des }) {
  return (
    <motion.div
      whileHover={{ y: -10, rotateX: 8, rotateY: -8, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className="relative rounded-xl p-4 w-[95%] sm:w-full max-w-[260px] bg-gradient-to-br from-black/90 via-black/80 to-black/90 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] text-white text-center sm:text-left"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity pointer-events-none" />

      <div className="relative z-10" style={{ transform: "translateZ(30px)" }}>
        <div className="text-3xl mb-2">{icon}</div>
        <h3 className="text-base font-semibold mb-1">{title}</h3>
        <p className="text-gray-300 text-xs leading-relaxed">{des}</p>
      </div>
    </motion.div>
  );
}

export default Auth;
