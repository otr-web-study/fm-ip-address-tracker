import { type NextRequest } from 'next/server';

const IPIFY_API_KEY = process.env.IPIFY_API_KEY ?? '';
const BASE_URL = 'https://geo.ipify.org/api/v2/country,city';

const ipifyAPI = (query: string) => {
  const url = new URL(BASE_URL);
  url.searchParams.set('apiKey', IPIFY_API_KEY);
  if (
    /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
      query,
    )
  ) {
    url.searchParams.set('ipAddress', query);
  } else if (query) {
    url.searchParams.set('domain', query);
  }

  return url.toString();
};

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('query') || '';

  let res;

  try {
    res = await fetch(ipifyAPI(query));
  } catch (e) {
    return new Response('', { status: 500 });
  }

  const data = await res.json();

  return Response.json(data, { status: res.status });
}
