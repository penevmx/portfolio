import React from "react";

interface DividerProps {
  animated?: boolean;
}

export const Divider: React.FC<DividerProps> = ({ animated = false }) => {
  return (
    <div className="w-fit mx-auto">
      <hr
        className={`${
          animated ? "animate-slideInFromLeft" : ""
        } mb-1 ml-36 h-1 w-52 bg-primary mt-10`}
      />
      <hr
        className={`${
          animated ? "animate-slideInFromRight" : ""
        } mb-10 h-1 w-52 bg-primary`}
      />
    </div>
  );
};

export default Divider;
