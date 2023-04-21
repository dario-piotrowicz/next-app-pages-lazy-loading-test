import { Map } from "immutable";
import { randNumber } from "@ngneat/falso";

export const config = { runtime: "experimental-edge" };

export default function Home() {
  const map = Map({ str: "\\This is a test (immutable + falso)\\" });

  const num = randNumber({ min: 0, max: 100 });

  const immutableStr = `${map.get("str")} ${num}`;

  return (
    <main>
      <h1>immutable + falso</h1>
      <pre>{immutableStr}</pre>
    </main>
  );
}
