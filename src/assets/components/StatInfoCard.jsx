import React from 'react'

const StatInfoCard = ({value, label}) => {
  return (
    <div className='flex-1 flex gap-5 bg-gradient-to-b from-[#10B981] rounded-[14px] p-5'>
        <h4 className='text-4xl md:text-5xl font-medium text-secondary'>{value}</h4>
        <p className='text-sm md:text-[16px] font-normal text-black leading-6 whitespace-pre-line'>{label}</p>
    </div>
  )
}

export default StatInfoCard