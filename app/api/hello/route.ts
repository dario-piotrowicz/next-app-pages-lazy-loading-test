export const config = { runtime: "edge" };

export async function GET() {
  return new Response("Hello API world!");
}
