import { type NextRequest } from 'next/server';
import fs from 'fs';
import readline from 'readline';

export const GET = async (req: NextRequest) => {
  const searchParams = req.nextUrl.searchParams;
  const page = parseInt(searchParams.get("page") || '1');
  const pageSize = 60;
  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  const fileStream = fs.createReadStream('./public/json/registry.csv');
  const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity
  });

  let result = [];
  let count = 0;
  for await (const line of rl) {
      if (count >= start && count < end) {
          result.push([line]);
      } else if (count >= end) {
          break;
      }
      count++;
  }
  return Response.json(result);
}