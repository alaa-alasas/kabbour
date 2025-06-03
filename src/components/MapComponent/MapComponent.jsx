import './MapComponent.css'
import React, { useRef, useEffect , useState } from 'react';


const MapComponent = () => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      mapInstance.current = new jsVectorMap({
        zoomButtons: false,
        lineStyle: {
          stroke: "#676767",
          strokeWidth: 1.5,
          fill: '#ff5566',
          fillOpacity: 1,
          strokeDasharray: '6 3 6', // OR: [6, 2, 6]
          animation: true, // Enables animation
          showTooltip: false,

        },
        selector: '#world-map',
        map: 'world',
        markers: [
          {
            name: 'Canada',
            coords: [56.1304, -106.3468]
          }, {
            name: 'Egypt',
            coords: [26.8, 30.8]
          },
          {
            name: 'Palestine',
            coords: [50.1304, -99.3468]
          }, {
            name: 'Ukraine',
            coords: [30.58, 30.8]
          }
        ],
        onRegionTooltipShow(event, tooltip, code) {
          tooltip.text(
            `<h5>${tooltip.text()} - Country</h5>` +
            `<p class="text-xs">This message is gonna appear when hovering over every single region.</p>`,
            true // Enables HTML
          )
        },
        regionStyle: {
          initial: {
            fill: '#B9D3EE',
          },
          hover: {
            fill: '#FFC0CB',
          },
        },
      });
      // Avoid this in the future versions.
      mapInstance.current.addLine('Egypt', 'Canada')

      // Use `addLines` method to add a line or multiple lines.
      mapInstance.current.addLines({ from: 'Palestine', to: 'Ukraine' })

      mapInstance.current.addLines([
        { from: 'United States', to: 'Egypt' },
        { from: 'Palestine', to: 'Ukraine' },
      ])

    // Cleanup on unmount
    return () => {
      // window.removeEventListener('resize', updateMapDimensions);
      mapInstance.current?.destroy();
    };
  }
  }, []);

  return (
    <section className='px-64 mb-64'>
      <div id="world-map" ref={mapRef} style={{ width: '100%', height: '500px' }}></div>
    </section>
  );
}

export default MapComponent
