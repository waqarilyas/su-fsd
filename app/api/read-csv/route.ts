// read
import csv from "csv-parser";
import * as fs from "fs";
import { NextResponse } from "next/server";
import path from "path";

export async function GET() {
  const csvPath = path.join(process.cwd(), "data", "data.csv");

  return new Promise((resolve, reject) => {
    const results = [];
    fs.createReadStream(csvPath)
      .pipe(csv())
      .on("data", (data) => results.push(data))
      .on("end", () => {
        console.log(results);
        resolve(NextResponse.json({ data: results }));
      });
  });
}
