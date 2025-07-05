import React from 'react'

const Tabs = ({tabList, activeTab ,onChange}) => {

  return (
    <div className='flex items-center justify-center my-10'>
        <div className='bg-[#fff6eb] rounded-full flex'>
            {tabList.map((tab) => {
                <button
                key={tab.id}
                className={`text-xs md:text-[15px] `}>

                </button>
            })}
        </div>
    </div>
  )
}

export default Tabs