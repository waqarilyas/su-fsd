import * as fs from "fs";
import { NextResponse } from "next/server";
import path from "path";

interface Item {
  createdAt: string;
  filename: string;
}

export async function GET() {
  const csvPath = path.join(process.cwd(), "data", "data.csv");

  return new Promise((resolve, reject) => {
    const results: Item[] = [];

    fs.createReadStream(csvPath)
      .on("data", (chunk) => {
        const lines = chunk.toString().split("\n");

        for (const line of lines) {
          const [createdAt, filename] = line.trim().split(";");

          if (createdAt && filename) {
            results.push({ createdAt, filename });
          }
        }
      })
      .on("end", () => {
        resolve(NextResponse.json({ data: results }));
      })
      .on("error", (error) => reject(error));
  });
}
