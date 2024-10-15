"use client";

import { useCallback, useEffect, useState } from "react";
import GridList from "@/components/GridList";
import SortDropdown from "@/components/SortDropdown";
import { compareFilenames } from "@/utils/helpers.utils";
import { ToggleTheme } from "@/components/ToggleTheme";

type DataItem = {
  createdAt: string;
  filename: string;
};

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<DataItem[]>([]);
  const [sortMethod, setSortMethod] = useState("createdAt-asc");

  // Define sort methods
  const sortMethods: { [key: string]: (a: DataItem, b: DataItem) => number } = {
    "createdAt-asc": (a, b) =>
      new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
    "filename-asc": (a, b) => compareFilenames(a.filename, b.filename, "asc"),
    "filename-desc": (a, b) => compareFilenames(a.filename, b.filename, "desc"),
  };

  // Fetch CSV data
  const fetchCsvData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/read-csv");
      const fetchedData = await response.json();
      setData(fetchedData?.data || []);
    } catch (error) {
      console.error("Error fetching CSV data:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCsvData();
  }, [fetchCsvData]);

  const sortedData = data.sort(sortMethods[sortMethod]);

  return (
    <div className=" grid items-center justify-items-center min-h-screen p-8 gap-16 sm:p-20">
      <ToggleTheme />
      <SortDropdown onSortChange={setSortMethod} selectedOption={sortMethod} />
      <GridList data={sortedData} loading={loading} />
    </div>
  );
}
