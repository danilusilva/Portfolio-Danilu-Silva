import React from 'react'
import { IoIosClose } from "react-icons/io";


const Modal = ({open, onClose, children}) => {
    if (!open) return null

  return (
    <div onClick={onClose} className={`fixed inset-0 flex justify-center
    items-center transition-colors ${open ? "visible bg-black/20" : "invisible"}
    `}
    > 
    <div 
    onClick={(e) => e.stopPropagation()}
    className={`bg-white rounded-xl shadow p-6 transition-all
        ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
    `}
    >
        <button 
        onClick={onClose}
        className='absolute top-2 right-2 p-1 rounded-lg text-gray-400
        bg-white hover:bg-gray-200 hover:text-gray-600 cursor-pointer'>
        <IoIosClose size={26} />
        </button>
        {children}
    </div>
    
    </div>
  )
}

export default Modal