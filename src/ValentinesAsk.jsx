import { useState, useRef } from "react";

const TAUNTS = [
  "Nice try. HEHE",
  "Nope, not there either.",
  "The 'No' button is camera-shy.",
  "It's playing hard to get.",
  "You're getting warmer... or colder. Hard to say.",
  "This button believes in second chances for you, not for itself.",
];

export default function ValentinesAsk() {
  const [answered, setAnswered] = useState(false);
  const [noStyle, setNoStyle] = useState({});
  const [tauntIndex, setTauntIndex] = useState(-1);
  const dodgeCount = useRef(0);
  const noBtnRef = useRef(null);

  const moveNoButton = (e) => {
    e.preventDefault();
    const margin = 20;
    const btn = noBtnRef.current;
    const btnW = btn ? btn.offsetWidth : 90;
    const btnH = btn ? btn.offsetHeight : 54;
    const maxX = window.innerWidth - btnW - margin;
    const maxY = window.innerHeight - btnH - margin;
    const newX = Math.max(margin, Math.random() * maxX);
    const newY = Math.max(margin, Math.random() * maxY);

    setNoStyle({
      position: "fixed",
      left: `${newX}px`,
      top: `${newY}px`,
      zIndex: 5,
    });

    dodgeCount.current += 1;
    setTauntIndex(Math.min(dodgeCount.current - 1, TAUNTS.length - 1));
  };

  const styles = {
    page: {
      minHeight: "100vh",
      width: "100%",
      background: "#FBF1E8",
      color: "#3A1F1C",
      fontFamily: "Georgia, 'Fraunces', serif",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "24px 20px",
      boxSizing: "border-box",
    },
    scene: {
      width: "100%",
      maxWidth: 520,
      textAlign: "center",
    },
    heart: { fontSize: 40, marginBottom: 6 },
    h1: {
      fontSize: "clamp(26px, 6vw, 36px)",
      lineHeight: 1.25,
      fontWeight: 600,
      color: "#8E2E27",
      margin: "0 0 10px",
    },
    sub: {
      fontSize: 16,
      opacity: 0.75,
      fontStyle: "italic",
      margin: "0 0 40px",
    },
    buttons: {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: 20,
      height: 70,
      marginBottom: 10,
    },
    yesBtn: {
      fontFamily: "inherit",
      fontWeight: 600,
      fontSize: 18,
      borderRadius: 999,
      padding: "16px 34px",
      cursor: "pointer",
      border: "none",
      background: "#C4453B",
      color: "#FBF1E8",
      boxShadow: "0 3px 0 #8E2E27",
    },
    noBtn: {
      fontFamily: "inherit",
      fontWeight: 600,
      fontSize: 18,
      borderRadius: 999,
      padding: "16px 34px",
      cursor: "pointer",
      background: "transparent",
      color: "#3A1F1C",
      border: "1.5px solid rgba(58,31,28,0.2)",
    },
    taunt: { fontSize: 14, opacity: 0.6, minHeight: 20 },
    result: {
      background: "#FBF1E8",
      border: "1.5px solid rgba(58,31,28,0.2)",
      padding: "34px 30px",
      maxWidth: 520,
      margin: "0 auto",
      textAlign: "center",
    },
    resultH2: {
      fontSize: "clamp(24px, 5.5vw, 30px)",
      color: "#8E2E27",
      margin: "0 0 14px",
      fontWeight: 700,
    },
    resultP: { fontSize: 17, lineHeight: 1.6, margin: "0 0 10px" },
    datetime: {
      marginTop: 20,
      padding: "14px 18px",
      borderLeft: "2px solid #C4453B",
      background: "rgba(196,69,59,0.06)",
      fontSize: 16,
      textAlign: "left",
    },
    sign: {
      marginTop: 26,
      fontFamily: "'Caveat', cursive",
      fontSize: 28,
      color: "#8E2E27",
    },
  };

  if (answered) {
    return (
      <div style={styles.page}>
        <div style={styles.result}>
          <h2 style={styles.resultH2}>Thank you for accepting! 🎉</h2>
          <p style={styles.resultP}>
            I knew you'd say yes eventually — the "no" button never stood a chance.
          </p>
          <div style={styles.datetime}>
            Please be ready on <strong>Feb. 14,2027 at 7:00 PM</strong> — I'll pick you up. 🚗🌹
          </div>
          <div style={styles.sign}>Can't wait,<br />Your Valentine</div>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <div style={styles.scene}>
        <div style={styles.heart}>💘</div>
        <h1 style={styles.h1}>Will you be my Valentine?</h1>
        <p style={styles.sub}>
          Choose carefully. One of these buttons is more cooperative than the other.
        </p>
        <div style={styles.buttons}>
          <button style={styles.yesBtn} onClick={() => setAnswered(true)}>
            Yes 💕
          </button>
          <button
            ref={noBtnRef}
            style={{ ...styles.noBtn, ...noStyle }}
            onMouseEnter={moveNoButton}
            onClick={moveNoButton}
            onTouchStart={moveNoButton}
          >
            No
          </button>
        </div>
        <div style={styles.taunt}>{tauntIndex >= 0 ? TAUNTS[tauntIndex] : ""}</div>
      </div>
    </div>
  );
}
