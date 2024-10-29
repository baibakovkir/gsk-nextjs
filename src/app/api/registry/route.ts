import { type NextRequest } from 'next/server';


export const GET = (req: NextRequest) => {
  const searchParams = req.nextUrl.searchParams
  const query = searchParams.get("query")
  return Response.json(query);
}
