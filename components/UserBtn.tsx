import React from "react";

const UserBtn = ({ user }: any) => {
  return (
    <div
      className="w-5/6 active:w-4/6 text-center
           bg-white py-4 rounded-full text-black font-semibold
           hover:bg-gray-800
           active:bg-slate-200
           active:text-gray-900
             transition-all
             duration-200"
    >
      UserBtn
    </div>
  );
};

export default UserBtn;
