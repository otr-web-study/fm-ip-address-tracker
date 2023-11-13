import { type NextRequest } from 'next/server';

const IPIFY_API_KEY = process.env.IPIFY_API_KEY ?? '';

const ipifyAPI = (query: string) => query;

export function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('query');
  // query is "hello" for /api/search?query=hello
}
