import React from 'react';

const ProgressBar = ({ totalFracttions, soldFracttions }) => {
  const percentage = (soldFracttions / totalFracttions) * 100;

  return (
    <div className="relative w-[409px] h-[16px] rounded-[17px] border-[1px] border-[#181F39] overflow-hidden">
      <div className="absolute left-0 top-0 h-full bg-[#4459A5] rounded-[17px]" style={{ width: `${percentage}%` }}>
        <div className="text-center text-[10px] text-[#FFFFFF] w-full">
          {percentage.toFixed(2)}%
        </div>
      </div>
      <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-center">
      </div>
    </div>
  );
};

export default ProgressBar;