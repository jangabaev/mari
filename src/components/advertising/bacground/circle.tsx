import "./style.css"

export const BackgroundCircle = ({ className = "" }:{className?:string}) => {
  const count = 50; // nechta doira bo'lishi
  const rings = Array.from({ length: count }, (_, i) => i);

  return (
    <div className={`cc-page ${className}`}>
      <div className="cc-stage">
        <div className={`cc-glow ${className}`}/>
        <div className={`cc-smear ${className}`} />
        {rings.map((i) => {
          const sizeVmin = (i + 1) * 7;
          const style = {
            width: `${sizeVmin * 8+20}px`,
            height: `${sizeVmin * 8+20}px`,
            opacity: 1 - i * 0.02,
            filter: i > -1 ? "blur(4px)" : "none",
          };
          return (
            <div key={i} className="cc-ring" style={style}>
            </div>
          );
        })}
      </div>
    </div>
  );
};
