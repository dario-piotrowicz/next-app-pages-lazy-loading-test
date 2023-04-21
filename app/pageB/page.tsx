import { z } from "zod";
import dinero from "dinero.js";

export const config = { runtime: "experimental-edge" };

export default function Home() {
  const zodStr = z.string().parse("\\This is a test (zod + dinero)\\");
  const oneDinero = dinero({ amount: 0 })
    .add(dinero({ amount: 1 }))
    .multiply(1)
    .toFormat();

  const dineroStr = `${zodStr} ${oneDinero}`;

  return (
    <main>
      <h1>dineroStr</h1>
      <pre>{dineroStr}</pre>
    </main>
  );
}
