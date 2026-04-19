import React from "react";

const Hookform = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-red-700 to-indigo-300">
      <form className="flex flex-col gap-5 bg-white/10 backdrop-blur-md p-8 rounded-2xl w-80 shadow-2xl border border-white/20">
        <h1 className="text-white text-2xl font-semibold text-center mb-2">
          🌿 Hook Form
        </h1>

        <input
          type="text"
          placeholder="Enter your name"
          className="border border-white/30 bg-white/20 text-white placeholder-white/70 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-white"
        />

        <input
          type="password"
          placeholder="Enter password"
          className="border border-white/30 bg-white/20 text-white placeholder-white/70 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-white"
        />

        <input
          type="email"
          placeholder="Enter email"
          className="border border-white/30 bg-white/20 text-white placeholder-white/70 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-white"
        />

        <button
          type="submit"
          className="bg-white text-red-700  font-semibold rounded-md p-2 hover:bg-emerald-100 transition-all"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Hookform;
