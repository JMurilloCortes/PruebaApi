import React from 'react'

const CardButtom = ({param}) => {
  return (
    <div className="w-[134px] h-[34px] bg-[#181F39] font-bold text-[#FBFBFE] text-[16px] text-center rounded-[7px] flex items-center justify-center hover:bg-[#2d3c72] hover:cursor-pointer">
      {param}
    </div>
  )
}

export default CardButtom