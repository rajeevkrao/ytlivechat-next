"use client";

import NoSleep from "nosleep.js";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import styles from "./page.module.css";

export default function ChatPage() {
  const [hostname, setHostname] = useState("");

  const searchParams = useSearchParams();
  const videoId = searchParams.get("v");
  useEffect(() => {
    setHostname(window?.location?.hostname);
  }, [hostname]);

  useEffect(() => {
    const noSleep = new NoSleep();
    noSleep.enable();
    return () => {
      noSleep.disable();
    };
  });

  return (
    <>
      {hostname && (
        <iframe
          className={styles.iframe}
          src={`https://www.youtube.com/live_chat?v=${videoId}&embed_domain=${hostname}`}
        ></iframe>
      )}
    </>
  );
}
