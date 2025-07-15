import React from 'react'

const Curve = ({ reverse }: { reverse?: boolean }) => {
    return (
        <div className={`hidden lg:block absolute  left-0 w-full h-full  ${reverse ? 'top-0' : '-bottom-2'}`}>
            <svg className={`absolute left-0 w-full h-[30%] ${reverse ? 'rotate-180 top-0' : 'bottom-0'}`} version="1.1" id="circle" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 500 250" enableBackground="new 0 0 500 250" preserveAspectRatio="none">
                <path fill="#1d1d1d" d="M250,246.5c-97.85,0-186.344-40.044-250-104.633V250h500V141.867C436.344,206.456,347.85,246.5,250,246.5z">
                </path>
            </svg>
        </div>
    )
}

export default Curve
