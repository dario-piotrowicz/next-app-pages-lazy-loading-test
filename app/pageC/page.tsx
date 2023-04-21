import dinero from "dinero.js";
import { Map } from "immutable";

export const config = { runtime: "experimental-edge" };

export default function Home() {
  const map = Map({ str: "\\This is a test (immutable + dinero)\\" });
  const oneDinero = dinero({ amount: 0 })
    .add(dinero({ amount: 1 }))
    .multiply(1)
    .toFormat();

  const dineroStr = `${map.get("str")} ${oneDinero}`;

  return (
    <main>
      <h1>immutable + dinero</h1>
      <pre>{dineroStr}</pre>
    </main>
  );
}
