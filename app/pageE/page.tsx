import slash from "slash";
import { randNumber } from "@ngneat/falso";

export const config = { runtime: "experimental-edge" };

export default function Home() {
  const num = randNumber({ min: 0, max: 100 });

  const slashStr = slash(`\\This is a test (slash + falso)\\ ${num}`);

  return (
    <main>
      <h1>slash + falso</h1>
      <pre>{slashStr}</pre>
    </main>
  );
}
