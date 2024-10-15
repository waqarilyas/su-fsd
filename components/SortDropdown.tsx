import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

interface SortDropdownProps {
  onSortChange: (sortMethod: string) => void;
  selectedOption: string;
}

const sortOptions = [
  { label: "Sort by Created Date (Asc)", value: "createdAt-asc" },
  { label: "Sort by Filename (Asc)", value: "filename-asc" },
  { label: "Sort by Filename (Desc)", value: "filename-desc" },
];

const SortDropdown: React.FC<SortDropdownProps> = ({
  onSortChange,
  selectedOption,
}) => {
  const renderMenuItem = (option: { label: string; value: string }) => (
    <MenuItem key={option.value}>
      {({ active }) => (
        <button
          className={`
            ${active ? "bg-gray-100 dark:bg-muted/20" : ""}
            block w-full px-4 py-2 text-sm text-gray-700 dark:text-muted-foreground
          `}
          onClick={() => onSortChange(option.value)}
        >
          {option.label}
        </button>
      )}
    </MenuItem>
  );

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton
          className="
            inline-flex w-full justify-center gap-x-1.5 rounded-md
            bg-white dark:bg-muted px-3 py-2 text-sm font-semibold
            text-gray-900 dark:text-muted-foreground shadow-sm
            ring-1 ring-inset ring-gray-300 dark:ring-muted
            hover:bg-gray-200 dark:hover:bg-muted/10
            focus:outline-none
          "
        >
          {selectedOption ?? "Sort Options"}
          <ChevronDownIcon
            aria-hidden="true"
            className="-mr-1 h-5 w-5 text-gray-400 dark:text-muted-foreground"
          />
        </MenuButton>
      </div>

      <MenuItems
        className="
          absolute right-0 z-10 mt-2 w-56 origin-top-right
          divide-y divide-gray-100 dark:divide-muted rounded-md
          bg-white dark:bg-card shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none
        "
      >
        {sortOptions.map(renderMenuItem)}
      </MenuItems>
    </Menu>
  );
};

export default SortDropdown;
