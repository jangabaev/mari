import "./triangle.css";

export const BackgroundTriangle = () => {
  const count = 10; // nechta uchburchak
  const triangles = Array.from({ length: count }, (_, i) => i);

  return (
       <div className="triangle-wrapper">
      <div className="triangle-blur"></div>
      {triangles.map((i) => (
        <div
          key={i}
          className="triangle"
          style={{
            transform: `scale(${0.3 + i * 0.07})`,
            opacity: 1 - i * 0.08,
          }}
        />
      ))}
    </div>
  );
};
