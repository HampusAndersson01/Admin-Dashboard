import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import LightModeSharpIcon from "@mui/icons-material/LightModeSharp";
import DarkModeSharpIcon from "@mui/icons-material/DarkModeSharp";
import { lightTheme, darkTheme } from "../Styles";

type themeSwitchProps = {
  toggleTheme: () => void;
  theme: any;
};

const ThemeSwitch: React.FC<themeSwitchProps> = ({ toggleTheme, theme }) => {
  const isLightTheme = theme === lightTheme;

  return (
    <motion.div
      className={`toggleSwitch ${isLightTheme ? "on" : "off"}`}
      onClick={toggleTheme}
    >
      <motion.div
        animate={{
          x: isLightTheme ? 25 : 0,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {isLightTheme ? <LightModeSharpIcon /> : <DarkModeSharpIcon />}
      </motion.div>
    </motion.div>
  );
};

export default ThemeSwitch;
