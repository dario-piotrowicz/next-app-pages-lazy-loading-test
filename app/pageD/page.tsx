import { z } from "zod";
import slash from "slash";
import { marked } from "marked";

export const config = { runtime: "experimental-edge" };

export default function Home() {
  const markedStr = marked.parse("\\This is a test (zod + slash + marked)\\");
  const zodStr = z.string().parse(markedStr);
  const slashStr = slash(marked.parse(zodStr));

  return (
    <main>
      <h1>zod + slash + marked</h1>
      <pre>{slashStr}</pre>
    </main>
  );
}
