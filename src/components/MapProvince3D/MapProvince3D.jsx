import { useState } from "react";
import "./MapProvince3D.css";

const MapProvince3D = ({ id, d, color = '#e0e0e0', name, x, y}) => {
 const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

   const handleMouseMove = (e) => {
    const svgElement = e.currentTarget.closest('svg');
    const pt = svgElement.createSVGPoint();
    pt.x = e.clientX;
    pt.y = e.clientY;

    // تحويل الإحداثيات إلى نظام SVG
    const svgPoint = pt.matrixTransform(svgElement.getScreenCTM().inverse());

    setPosition({ x: svgPoint.x + 10, y: svgPoint.y - 10 });
  };

  return (
   <>
    <path id={id} d={d} fill={isHovered ? '#D39326' : '#dedede'} stroke="#999" strokeWidth="1" onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)} onMouseMove={handleMouseMove} style={{ cursor: 'pointer' }} />
      {(x & y) && <circle cx={x} cy={y} r="10" fill="#FF5733" stroke="#fff"
         strokeWidth="5" style={{ cursor: 'pointer',zIndex: 10 }} onClick={() => alert(`Clicked on ${name}`)} />
      }
      {isHovered && (
        <foreignObject x={position.x} y={position.y} width="100" height="60">
          <div className="map-tooltip">
            {name}
          </div>
        </foreignObject>
      )}
   </>
  );
};

export default MapProvince3D;