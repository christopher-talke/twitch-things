import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/Messages.module.css";
import useMessages from "../api/useMessages";

function Messages() {
  const [messages, setMessages] = useState([]);
  const { status, data, error } = useMessages();

  const messagesContainerRef = useRef(null);

  useEffect(() => {
    if (data !== undefined && messages.length < data.length) {
      setMessages(data);
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
    setInterval(() => {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }, 50);
    return;
  }, [data]);

  const desc = [...messages.reverse()];

  return (
    <div className={styles.chatContainer} ref={messagesContainerRef}>
      <div>
        {status === "loading" ? (
          "Loading..."
        ) : status === "error" ? (
          <span>Error: {error.message}</span>
        ) : (
          <>
            <div>
              {desc.reverse().map((messages) => (
                <article className={styles.chatBubble}>
                  <div className={styles.username}>{messages.username}</div>
                  <div className="messages">{messages.msg}</div>
                </article>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Messages;
