import React from 'react'

const Curve = ({ reverse }: { reverse?: boolean }) => {
    return (
        <div className={`hidden lg:block absolute left-0 w-full h-full ${reverse ? 'top-0' : '-bottom-2'}`}>
            <svg 
                className={`absolute left-0 w-full h-[30%] ${reverse ? 'rotate-180 top-0' : 'bottom-0'}`} 
                viewBox="0 0 500 250" 
                preserveAspectRatio="none"
            >
                <path 
                    fill="#030712" 
                    d="M250,246.5c-97.85,0-186.344-40.044-250-104.633V250h500V141.867C436.344,206.456,347.85,246.5,250,246.5z"
                />
            </svg>
        </div>
    );
};

export default Curve;