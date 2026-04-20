import React from 'react'

export const App = () => {
  return (<div className="w-full h-full p-5 overflow-y-auto">

      {/* TOP BANNER */}
      <div className="w-full h-48 rounded-2xl bg-gradient-to-r from-red-900 via-black to-red-950 shadow-[0_18px_45px_rgba(0,0,0,0.6)] mb-6 flex items-center justify-center text-white text-3xl font-bold tracking-wide">
        Welcome to <span className="text-red-400 ml-2">SastaKart 😈🔥</span>
      </div>

      {/* CATEGORY STRIP */}
      <div className="flex gap-3 overflow-x-auto py-3 mb-7 scrollbar-hide">
        {["Mobiles", "Electronics", "Fashion", "Grocery", "Beauty", "Shoes", "Kitchen"].map(
          (cat, i) => (
            <button
              key={i}
              className="whitespace-nowrap px-4 py-2 rounded-full border border-red-900/40 bg-black/40 text-slate-200 text-sm font-medium hover:bg-red-900/40 hover:text-white transition"
            >
              {cat}
            </button>
          )
        )}
      </div>

      {/* PRODUCT SECTION */}
      <h2 className="text-xl font-semibold text-slate-100 mb-4">
        🔥 Best Deals For You
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {homeData?.map((item, index) => (
          <div
            key={index}
            className="border border-red-900/40 bg-[#070811] rounded-xl p-3 shadow-[0_10px_25px_rgba(0,0,0,0.5)] hover:shadow-[0_10px_35px_rgba(220,38,38,0.4)] hover:border-red-700 transition group"
          >
            {/* IMAGE */}
            <div className="h-32 bg-black/40 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="h-full object-contain group-hover:scale-105 transition"
              />
            </div>

            {/* TITLE */}
            <h3 className="text-sm font-medium text-slate-200 line-clamp-2 min-h-[40px]">
              {item.title}
            </h3>

            {/* PRICE */}
            <p className="text-red-400 font-semibold mt-2">₹{item.price}</p>

            {/* BUTTON */}
            <button onClick={(e)=>{addCartFN(item)}} className="mt-3 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold text-sm shadow-[0_10px_25px_rgba(220,38,38,0.4)] transition  active:scale-95 
    hover:shadow-[0_10px_35px_rgba(220,38,38,0.7)] ">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
