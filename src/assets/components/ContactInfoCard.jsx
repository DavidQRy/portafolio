import React from 'react'

const ContactInfoCard = ({icon, text}) => {
  return (
    <div className='flex items-center bg-green-50 rounded border border-green-100 px-4 py-3 gap-5 mb-4'>
        <div className='w-10 h-10 text-xl text-white flex items-center justify-center bg-gradient-primary rounded-lg'>
            {icon}
        </div>
        <p className="text-secondary text-sm md:text-sm">
            {text}
        </p>
    </div>
  )
}

export default ContactInfoCard