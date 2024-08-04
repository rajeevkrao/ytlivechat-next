"use client";

import NoSleep from "nosleep.js";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import styles from "./page.module.css";

export default function ChatPage() {
  const [hostname, setHostname] = useState("");
	const [test, setTest] = useState("");

  const searchParams = useSearchParams();
  const videoId = searchParams.get("v");
  useEffect(() => {
    setHostname(window?.location?.hostname);
  }, [hostname]);

  useEffect(() => {
    const noSleep = new NoSleep();

		setInterval(() => {
			if(noSleep.isEnabled) {
				setTest("WL🟢")
			}
			else {
				setTest("WL🔴")
			}
		}, 500)

		document.addEventListener('click', function enableNoSleep() {
			document.removeEventListener('click', enableNoSleep, false);
			noSleep.enable();
		}, false);
		return () => {
			noSleep.disable();
		};
  }, []);

  return (
    <>
		<div className={styles.status}>{test}</div>
      {hostname && (
        <iframe
          className={styles.iframe}
          src={`https://www.youtube.com/live_chat?v=${videoId}&embed_domain=${hostname}`}
        ></iframe>
      )}
    </>
  );
}
