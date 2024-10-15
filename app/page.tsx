"use client";

import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  console.log("🚀 ~ Home ~ data:", data);

  const fetchCsvData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/read-csv");
      const data = await response.json();

      setData(data?.data);
    } catch (err) {
      console.log("🚀 ~ fetchCsvData ~ err:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCsvData();
  }, [fetchCsvData]);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"></div>
  );
}
