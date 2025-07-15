import clsx from 'clsx';
import React, { useState, useEffect } from 'react';

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [cursorStyle, setCursorStyle] = useState('default');

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);


    useEffect(() => {
        const handleMouseEnter = (e: MouseEvent) => {
            if (e.target instanceof HTMLElement) {
                const tag = e.target.tagName
                if (e.target.tagName === 'A') {
                    setCursorStyle('hovered');
                } else if (tag === 'IMG' || tag === 'P' || tag === 'H4' || tag === 'H1') {
                    setCursorStyle('blend')

                }
                else {
                    setCursorStyle('default')
                }
            }
        };

        const handleMouseLeave = (e: MouseEvent) => {
            setCursorStyle('default');
        };

        document.addEventListener('mouseover', handleMouseEnter);
        document.addEventListener('mouseout', handleMouseLeave);

        return () => {
            document.removeEventListener('mouseover', handleMouseEnter);
            document.removeEventListener('mouseout', handleMouseLeave);
        };
    }, []);



    return (
        <div
            className={clsx(
                'pointer-events-none fixed p-[0.3rem] bg-white rounded-full mix-blend-difference transition-[opacity,transform] duration-400 ease-[ease] z-[99999]',
                cursorStyle === 'hovered' && 'transform -translate-x-1/2 -translate-y-1/2 scale-[8] opacity-10'
            )}
            style={{
                left: position.x,
                top: position.y,
            }}
        />
    );
};

export default Cursor;
