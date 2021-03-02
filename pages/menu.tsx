import React, { useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";

const Menu = () => {
  const [activeItem, setActiveItem] = useState<number>(0);

  const handleSelection = (index: number) => {
    setActiveItem(index);
  };

  return (
    <div className="flex items-center justify-center w-screen h-12 px-4 bg-blue-600 shadow">
      <AnimateSharedLayout>
        {new Array(4).fill(0).map((_, index) => (
          <MenuItem
            onClick={() => handleSelection(index)}
            active={index === activeItem}>{`Item ${index}`}</MenuItem>
        ))}
      </AnimateSharedLayout>
    </div>
  );
};

export default Menu;

interface MenuItemProps {
  active?: boolean;
  onClick?(): void;
}

const MenuItem: React.FC<MenuItemProps> = ({
  children,
  active = false,
  onClick = null,
}) => {
  return (
    <div
      className="flex flex-col items-center mx-4 cursor-pointer"
      onClick={onClick}>
      <motion.span
        layout
        className={`text-lg font-bold ${
          active ? "text-white" : "text-blue-300"
        }`}>
        {children}
      </motion.span>
      {active && (
        <motion.div
          layoutId="selector"
          className="w-2 h-2 bg-white rounded-full"
        />
      )}
    </div>
  );
};
