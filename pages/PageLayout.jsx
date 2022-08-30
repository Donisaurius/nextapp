import Head from "next/head";
import Link from "next/link";

export default function PageLayout({ children, title = "App" }) {
  return (
    <div>
      <Head>
        {/* ACÁ SE MODIFCA EL HEAD DEL HTML */}
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <ul>
          <Link href={"/"}>Home</Link>
          <Link href={"/login"}>Login</Link>
          <Link href={"/articles/news"}>News</Link>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
}