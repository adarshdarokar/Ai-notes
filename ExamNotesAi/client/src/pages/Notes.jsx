import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import TopicForm from "../components/TopicForm";
import SideBar from "../components/SideBar";
import FinalResult from "../components/FinalResult";

function Notes() {
  const navigate = useNavigate();
  const { userData } = useSelector((state) => state.user);
  const credits = userData?.credits;

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 px-4 sm:px-6 py-6 sm:py-8">
      <motion.header
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="
          mb-8 sm:mb-10
          rounded-2xl
          bg-black/80
          backdrop-blur-xl
          border border-white/10
          shadow-[0_20px_45px_rgba(0,0,0,0.6)]
          px-5 sm:px-8
          py-6
          flex flex-col md:flex-row
          items-center md:items-center
          justify-between
          gap-6
          text-center md:text-left
        "
      >
        {/* Left Section */}
        <div onClick={() => navigate("/")} className="cursor-pointer">
          <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-br from-white via-gray-300 to-white bg-clip-text text-transparent">
            ExamNotes Ai
          </h1>

          <p className="text-xs sm:text-sm text-gray-300 mt-1">
            Ai-powered exam-oriented notes & revision
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
          {/* Credits Button */}
          <button
            onClick={() => navigate("/pricing")}
            className="
              flex items-center justify-center gap-3
              w-full sm:w-auto
              px-5 py-2
              rounded-full
              bg-white/10
              border border-white/20
              text-white text-sm
              transition-all duration-200
              hover:bg-white/20
            "
          >
            <span className="text-lg">💎</span>

            <span className="font-medium">{credits ?? 0}</span>

            <motion.span
              whileTap={{ scale: 0.95 }}
              className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-purple-600 text-sm font-bold"
            >
              ➕
            </motion.span>
          </button>

          {/* History Button */}
          <button
            onClick={() => navigate("/history")}
            className="
              flex items-center justify-center gap-2
              w-full sm:w-auto
              px-4 py-2
              rounded-full
              text-sm font-medium
              border border-white/20
              text-white
              transition-all duration-200
              hover:bg-white/20
            "
          >
            📚 Your Notes
          </button>
        </div>
      </motion.header>

      <motion.div className="mb-12">
        <TopicForm
          loading={loading}
          setResult={setResult}
          setLoading={setLoading}
          setError={setError}
        />




{ loading && (
    <motion.div
    animate ={{opacity: [0.4,1,0.4]}}
    transition={{repeat: Infinity, duration: 1.2}}
    className="text-center text-black font-medium mb-6"
    >
      Generating exam-focused notes...
      </motion.div>
  )}
{error && (
  <div className="mb-6 text-center text-red-600 font-medium">
    {error}
  </div>
)}

        {!result && (
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="
              h-64 rounded-2xl
              flex flex-col items-center justify-center
              bg-white/60 backdrop-blur-lg
              border border-dashed border-gray-300
              text-gray-500
              shadow-inner
            "
          >
            <span className="text-4xl mb-3">📘</span>
            <p className="text-sm">Generated notes will appear here!</p>
          </motion.div>
        )}
      </motion.div>

      {result && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col lg:grid lg:grid-cols-4 gap-6"
        >
          <div className="lg:col-span-1">
            <SideBar result={result} />
          </div>

          <div
            className="lg:col-span-3
        rounded-2xl
        bg-white
        shadow-[0_15px_40px_rgba(0,0,0,0.15)] p-6"
          >
            <FinalResult result={result} />
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default Notes;
