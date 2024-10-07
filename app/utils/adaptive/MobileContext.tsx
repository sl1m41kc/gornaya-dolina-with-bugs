'use client';
import { createContext, useContext, useState, useEffect } from 'react';

interface IProps {
  children: React.ReactNode;
  initialIsMobile: boolean;
}

interface MobileContextProps {
  isMobile: boolean;
}

const MobileContext = createContext<MobileContextProps | undefined>(undefined);

export const MobileProvider: React.FC<IProps> = ({
  children,
  initialIsMobile,
}) => {
  const [isMobile, setIsMobile] = useState<boolean>(initialIsMobile);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <MobileContext.Provider value={{ isMobile }}>
      {children}
    </MobileContext.Provider>
  );
};

export const useMobileContext = () => {
  const context = useContext(MobileContext);
  if (context === undefined)
    return {
      isMobile: false,
      error: 'useMobileContext must be used within a MobileProvider',
    };
  return context;
};
