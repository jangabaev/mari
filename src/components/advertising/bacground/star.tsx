import "./star.css";
export const Stars = () => {
    const stars = Array.from({ length: 6 }, (_, i) => i);
  return (
    <div className="star-wrapper">
      <div className="glow"></div>
      <svg width="500" height="500" viewBox="0 0 100 100">
        {stars.map((i) => (
          <polygon
            key={i}
            className="star"
            points="50,5 61,39 98,39 68,59 79,91 50,72 21,91 32,59 2,39 39,39"
            style={{
              transform: `scale(${0.2 + i * 0.15})`,
              opacity: 1 - i * 0.1,
              transformOrigin: "center",
            }}
          />
        ))}
      </svg>
    </div>
  )
}
