import Head from "next/head";
import styles from "../styles/Home.module.css";

import OverlayLayout from "../modules/OverlayLayout";
import Messages from "../modules/Messages";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ekkys Twitch App</title>
        <meta name="description" content="Ekkys Twitch App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <OverlayLayout>
        <div className="main">
          <h1>Main Screen</h1>
        </div>
        <Messages />
        <div className="announcements">
          <h1>Announcements</h1>
        </div>
      </OverlayLayout>
    </div>
  );
}
