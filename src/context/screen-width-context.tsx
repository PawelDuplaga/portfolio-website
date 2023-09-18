'use client';

import React, { createContext, useState, useEffect } from 'react';

import { ScreenWidthContextType } from '@/lib/types/ScreenWidthContextType';

export const ScreenWidthContext= createContext<ScreenWidthContextType>({
  screenWidth: undefined,
});

export const ScreenWidthProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [screenWidth, setScreenWidth] = useState<number>();

  useEffect(() => {
    const toogleScreenWidthState = () => {
      setScreenWidth(window.innerWidth);
    };

    toogleScreenWidthState();

    window.addEventListener('resize', () => toogleScreenWidthState());

    return () => {
      window.removeEventListener('resize', () => toogleScreenWidthState());
    };
  }, []);

  return (
    <ScreenWidthContext.Provider
      value={{
        screenWidth,
      }}
    >
      {children}
    </ScreenWidthContext.Provider>
  );
};

export default ScreenWidthProvider