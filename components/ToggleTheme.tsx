import { Button } from "@headlessui/react";
import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="flex items-center justify-center p-1"
    >
      <div
        className={`flex items-center gap-2 ${
          theme === "dark" ? "hidden" : "flex"
        }`}
      >
        <MoonIcon className="h-5 w-5" />
      </div>

      <div
        className={`flex items-center gap-2 ${
          theme === "light" ? "hidden" : "flex"
        }`}
      >
        <SunIcon className="h-5 w-5" />
      </div>
    </Button>
  );
};
