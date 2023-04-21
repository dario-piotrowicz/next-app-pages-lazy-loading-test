import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const config = { runtime: "experimental-edge" };

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className={styles.thirteen}>
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div>
      </div>

      <div className={styles.grid}>
        <Link className={styles.card} href="pageA">
          <h2 className={inter.className}>
            Page A <span>-&gt;</span>
          </h2>
          <p className={inter.className}>zod + slash</p>
        </Link>

        <Link className={styles.card} href="pageB">
          <h2 className={inter.className}>
            Page B <span>-&gt;</span>
          </h2>
          <p className={inter.className}>zod + dinero</p>
        </Link>

        <Link className={styles.card} href="pageC">
          <h2 className={inter.className}>
            Page C <span>-&gt;</span>
          </h2>
          <p className={inter.className}>immutable + dinero</p>
        </Link>

        <Link className={styles.card} href="pageD">
          <h2 className={inter.className}>
            Page D <span>-&gt;</span>
          </h2>
          <p className={inter.className}>zod + slash + marked</p>
        </Link>

        <Link className={styles.card} href="pageE">
          <h2 className={inter.className}>
            Page E <span>-&gt;</span>
          </h2>
          <p className={inter.className}>slash + falso</p>
        </Link>

        <Link className={styles.card} href="pageF">
          <h2 className={inter.className}>
            Page F <span>-&gt;</span>
          </h2>
          <p className={inter.className}>immutable + falso</p>
        </Link>
      </div>
    </main>
  );
}
