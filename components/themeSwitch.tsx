'use client'
import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";

export default function ThemeSwithcer() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <Button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="m-4 p-4"
      >
        Dark Mode
      </Button>
    </>
  );
};
