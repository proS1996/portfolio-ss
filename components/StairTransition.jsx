"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

//components
import Stairs from "./Stairs";

const StairTransition = () => {
  const pathname = usePathname();

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(true);

    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 800);

    return () => clearTimeout(timeout);
  }, [pathname]);
  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <div className="fixed inset-0 z-50 pointer-events-none flex">
          <Stairs key={pathname} />
        </div>
      )}
    </AnimatePresence>
  );
};

export default StairTransition;
