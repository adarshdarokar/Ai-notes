import React, { useState } from "react";
import { motion } from "framer-motion";

const TopicForm = ({ setResult, setLoading, loading, setError }) => {
  const [topic, setTopic] = useState("");
  const [Classlevel, setClasslevel] = useState("");
  const [examType, setexamType] = useState("");
  const [revisionMode, setrevisionMode] = useState(false);
  const [includedDiagram, setincludedDiagram] = useState(false);
  const [includeChart, setincludeChart] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="
      rounded-2xl
      bg-gradient-to-br
      from-black/90 
      via-black/80
      to-black/90
      backdrop-blur-2xl
      border border-white/10
      shadow-[0_25px_60px_rgba(0,0,0,0.75)]
      p-8
      space-y-6
      text-white
      "
    >
      <input
        type="text"
        className="w-full p-3 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 placeholder-gray-400 text-white focus:outline-none focus:ring-white/30"
        placeholder="Enter topic (e.g. Web Development)"
        onChange={(e) => setTopic(e.target.value)}
        value={topic}
      />

      <input
        type="text"
        className="w-full p-3 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 placeholder-gray-400 text-white focus:outline-none focus:ring-white/30"
        placeholder="Enter class level (e.g. Class 10th)"
        onChange={(e) => setClasslevel(e.target.value)}
        value={Classlevel}
      />

      <input
        type="text"
        className="w-full p-3 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 placeholder-gray-400 text-white focus:outline-none focus:ring-white/30"
        placeholder="Enter exam type (e.g. CBSE, JEE, NEET)"
        onChange={(e) => setexamType(e.target.value)}
        value={examType}
      />

      <div className="flex flex-col md:flex-row gap-6">
        <Toggle
          label="Revision Mode"
          checked={revisionMode}
          onChange={() => setrevisionMode(!revisionMode)}
        />
        <Toggle
          label="Include Diagram"
          checked={includedDiagram}
          onChange={() => setincludedDiagram(!includedDiagram)}
        />
        <Toggle
          label="Incluede Charts"
          checked={includeChart}
          onChange={() => setincludeChart(!includeChart)}
        />
      </div>
      <motion.button
        whileHover={!loading ? { scale: 1.02, y: -2 } : {}}
        whileTap={!loading ? { scale: 0.95 } : {}}
        disabled={loading}
        className={`
            w-full py-3 rounded-xl
            font-semibold
            flex items-center justify-center
            gap-3 transition
             ${
               loading
                 ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                 : "bg-gradient-to-br from-white to-gray-200 text-black shadow-[0_15px_35px_rgba(0,0,0,0.4)]"
             }`}
      >
        {loading ? "Generating Notes..." : "Generate Notes"}
      </motion.button>
    </motion.div>
  );
};

function Toggle({ label, checked, onChange }) {
  return (
    <div
      className="flex items-center gap-4 cursor-pointer select-none"
      onClick={onChange}
    >
      <motion.div
        animate={{
          backgroundColor: checked
            ? "rgba(34,197,94,0.35)"
            : "rgba(255,255,255,0.35)",
        }}
        transition={{ duration: 0.25 }}
        className="relative w-12 h-6 rounded-full border border-white/20 backdrop-blur-lg"
      >
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className="absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-[0_5px_15px_rgba(0,0,0,0.5)]"
          style={{
            left: checked ? "1.6rem" : "0.25rem",
          }}
        />
      </motion.div>

      <span
        className={`text-sm transition-colors ${
          checked ? "text-green-300" : "text-gray-300"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

export default TopicForm;
