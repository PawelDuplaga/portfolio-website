

import React from 'react'
import { FaRegPaperPlane } from 'react-icons/fa'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'

const ButtonSumbit = () => {
    const { pending } = useFormStatus();

  return (
    <button 
        type="submit"
        disabled={pending}
        className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] 
        bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 
        hover:scale-110 hover:bg-gray-950 active:scale-105 disabled:scale-100 disabled:bg-opacity-70"
    >
        {pending ? <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div> : (
            <React.Fragment>
                Sumbit{" "}
                <FaRegPaperPlane className="text-xs opacity-70 transition-all 
                group-hover:translate-x-1 group-hover:-translate-y-1"/>
            </React.Fragment>
        )}
    </button>
  )
}

export default ButtonSumbit