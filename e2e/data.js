import { parse } from "csv-parse/sync";
import fs from "fs";
import path from "path";

/* 
This is function that fetach all test data from CSV file and it will be supplied to sample test and polling function.
We are using it stub for presentation.
 */
export const cases = parse(
  fs.readFileSync(
    path.join(process.cwd(), "e2e", "csv", "medicines_addresses.csv")
  ),
  {
    columns: true,
    skip_empty_lines: true,
  }
);
