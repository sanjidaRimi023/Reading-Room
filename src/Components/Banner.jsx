import React from "react";
import bannerImg from "../assets/pngwing 1.png"
import { Link } from "react-router";

const Banner = () => {

  return (
    <div className="bg-[#1313130D] border my-10 border-gray-200 rounded-2xl p-10 flex gap-10 justify-around items-center">
      <div>
        <h2 className="text-5xl font-bold playfair">Books to freshen up <br /> your bookshelf</h2>
        <button className="btn bg-[#23BE0A] text-2xl mt-10 text-white rounded-xl p-5">
          <Link>View The List</Link>
        </button>
      </div>
      <div>
        <img src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
