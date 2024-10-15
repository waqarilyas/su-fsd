import { Button } from "@headlessui/react";
import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";
import { useTheme } from "next-themes";

export const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="flex items-center justify-center p-1"
    >
      <div className={`flex items-center gap-2 dark:hidden`}>
        <MoonIcon className="h-5 w-5" />
      </div>

      <div className={`flex items-center gap-2 light:hidden`}>
        <SunIcon className="h-5 w-5" />
      </div>
    </Button>
  );
};
