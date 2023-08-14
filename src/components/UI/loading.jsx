import React from "react";
import { BeatLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <BeatLoader color="#36d7b7" />
    </div>
  );
};

export default Loading;
