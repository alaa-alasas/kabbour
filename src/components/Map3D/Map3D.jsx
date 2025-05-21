import React, { useEffect, useRef } from "react";
import { GoogleMap, LoadScript, OverlayView } from "@react-google-maps/api";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";

const containerStyle = {
  width: "100%",
  height: "600px",
};

const center = {
  lat: 33.315,
  lng: 44.4, // Center of Iraq
};

const IraqMapWithGoogleMaps = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    if (svgRef.current) {
      // Add tooltips using tippy.js
      const cities = svgRef.current.querySelectorAll(".iq-map path");
      cities.forEach((city) => {
        tippy(city, {
          content: `${city.getAttribute("name")} \n ${city.getAttribute("count")} مستخدما `,
          placement: "top",
        });
      });
    }
  }, []);

  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={6}>
        {/* Overlay the SVG map */}
        <OverlayView
          position={center}
          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
        >
          <div ref={svgRef}>
            {/* Include your SVG map here */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 800 600"
              width="800"
              height="600"
              className="iq-map"
            >
              {/* Example paths for regions */}
              <path
                d="M100 100 L200 200 Z"
                name="Baghdad"
                count="1000"
                fill="#FF5733"
                stroke="#000"
              />
              <path
                d="M300 300 L400 400 Z"
                name="Basra"
                count="500"
                fill="#33FF57"
                stroke="#000"
              />
            </svg>
          </div>
        </OverlayView>
      </GoogleMap>
    </LoadScript>
  );
};

export default IraqMapWithGoogleMaps;