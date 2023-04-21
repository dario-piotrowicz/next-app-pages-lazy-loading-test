import { z } from "zod";
import slash from "slash";

export const config = { runtime: "experimental-edge" };

export default function Home() {
  const zodStr = z.string().parse("\\This is a test (zod + slash)\\");
  const slashStr = slash(zodStr);

  return (
    <main>
      <h1>slashStr</h1>
      <pre>{slashStr}</pre>
    </main>
  );
}
