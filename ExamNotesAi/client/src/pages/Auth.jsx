import React from "react";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";

function Auth() {
  return (
    <div className="min-h-screen overflow-hidden bg-white text-black px-4 sm:px-6 lg:px-8">
      <motion.header
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="
          max-w-7xl mx-auto mt-6 sm:mt-8
          bg-black/80 backdrop-blur-xl
          border border-white/10
          px-4 sm:px-6 lg:px-8
          py-4 sm:py-6
          rounded-2xl
          shadow-[0_20px_45px_rgba(0,0,0,0.6)]
        "
      >
        <h1 className="text-2xl font-bold bg-linear-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
          ExamNotes Ai
        </h1>
        <p className="text-sm text-gray-300 mt-1">
          Ai-powered exam-oriented notes & revision
        </p>
      </motion.header>

      <main className="max-w-7xl mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }} // left se aayega
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1
            className="
      text-4xl lg:text-5xl   /* size chhota */
      font-extrabold leading-tight
      bg-gradient-to-br from-black/90
      via-black/60 to-black/90
      bg-clip-text text-transparent
    "
          >
            Unlock Smart <br /> Ai Notes
          </h1>

          <motion.button
            whileHover={{
              y: -10,
              rotateX: 8,
              rotateY: -8,
              scale: 1.07,
            }}
            whileTap={{
              scale: 0.97,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="mt-10 px-10 py-3 rounded-xl
   flex items-center gap-3 bg-gradient-to-br
   from-black/90 via-black-80 to-black/90 text-white font-semibold text-lg
   shadow-[0_25px_60px_rgba(0,0,0,0.7)]"
          >
            <FcGoogle size={22} />
            Continue with Google
          </motion.button>
          <p className="mt-6 max-w-xl text-lg bg-gradient-to-br  from-gray-500/80 to-gray-700
          bg-clip-text text-transparent">
            You ge <span className="font-semibold ">Free</span>
          </p>
        </motion.div>

        {/* RIGHT CONTENT */}
        <div>{/* future form / image */}</div>
      </main>
    </div>
  );
}

export default Auth;
