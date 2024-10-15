import * as fs from "fs";
import { NextResponse } from "next/server";
import path from "path";

interface Item {
  createdAt: string;
  filename: string;
}

export async function GET() {
  const csvPath = path.join(process.cwd(), "data", "data.csv");

  try {
    const data = await fs.promises.readFile(csvPath, "utf-8");
    const results: Item[] = [];

    const lines = data.split("\n");
    for (const line of lines) {
      const [createdAt, filename] = line.trim().split(";");

      if (createdAt && filename) {
        results.push({ createdAt, filename });
      }
    }

    return NextResponse.json({ data: results });
  } catch (error) {
    console.error("Error reading CSV file:", error);
    return NextResponse.json(
      { error: "Error reading CSV file" },
      { status: 500 }
    );
  }
}
