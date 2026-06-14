import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import { ShieldAlert } from "lucide-react";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

interface LocationData {
  id: string;
  name: string;
  coordinates: [number, number];
  description: string;
  category: string;
}

const locations: LocationData[] = [
  {
    id: "wdc",
    name: "Washington, D.C., USA",
    coordinates: [-77.0369, 38.9072],
    description:
      "Location for simulated avian photoreconnaissance operations around the Navy Yard and Andrews Air Force Base, where camera-equipped birds actively photographhed unsuspecting workers.",
    category: "Avian Ops",
  },
  {
    id: "sevastopol",
    name: "Sevastopol, Crimea",
    coordinates: [33.5224, 44.6166],
    description:
      "Location of marine mammal pens first established by the Soviet Union and now used by the Russian military for operations in the Black Sea.",
    category: "Aquatic Ops",
  },
  {
    id: "hartlepool",
    name: "Hartlepool, England",
    coordinates: [-1.2062, 54.6896],
    description:
      "A seaside town where, during the Napoleonic Wars, locals allegedly hanged a monkey on the beach because they believed it was a French spy.",
    category: "Historical Incident",
  },
  {
    id: "iran",
    name: "Iran",
    coordinates: [53.688, 32.4279],
    description:
      "The Iranian regime arrested 14 squirrels for alleged espionage and later detained environmentalists claiming their pet lizards were 'nuclear spies'.",
    category: "Counter-Espionage",
  },
  {
    id: "japan",
    name: "Japan",
    coordinates: [139.6917, 35.6895],
    description:
      "The intended target of Project X-Ray, a WWII-era U.S. plan to drop bats strapped with incendiary bombs over wooden buildings to cause mass damage.",
    category: "Biological Weapons",
  },
  {
    id: "vietnam",
    name: "Vietnam",
    coordinates: [105.8342, 21.0278],
    description:
      "The CIA used seismic detectors disguised as tiger scat to monitor for enemy troop movement during the Vietnam War, and the U.S. military deployed 'dog doo' transmitters to clandestinely mark enemy targets.",
    category: "Concealed Sensors",
  },
  {
    id: "australia",
    name: "Western Australia",
    coordinates: [117.8485, -31.3411],
    description:
      "The site of the 1932 Great Emu War, where the Australian military fruitlessly deployed a handful of soldiers to fight off an overpowering force of emus that were destroying farmland.",
    category: "Wildlife Conflict",
  },
  {
    id: "norway",
    name: "Norway & Sweden",
    coordinates: [23.0049, 70.9756],
    description:
      "Waters where Hvaldimir, the suspected Russian 'spy whale' equipped with a camera harness, had been spotted.",
    category: "Aquatic Ops",
  },
  {
    id: "key-west",
    name: "Key West, Florida, USA",
    coordinates: [-81.78, 24.5551],
    description:
      "Location of the U.S. Naval Base, where the CIA bankrolled the construction of a secure dolphin training facility.",
    category: "Aquatic Ops",
  },
  {
    id: "area-51",
    name: "Area 51, Nevada, USA",
    coordinates: [-115.793, 37.2431],
    description:
      "The highly classified testing site for CIA's Project AQUILINE, which developed UAVs disguised as birds.",
    category: "Recon Robots",
  },
  {
    id: "mexico-city",
    name: "Mexico City, Mexico",
    coordinates: [-99.1332, 19.4326],
    description:
      "The new U.S. Embassy facility employs live falcons to ward off pesty pigeons from the compound.",
    category: "Counter-Espionage",
  },
  {
    id: "panama-canal",
    name: "Panama Canal, Panama",
    coordinates: [-79.9224, 9.1448],
    description:
      "One of the testing sites for the U.S. military's attempt to use mosquitoes to detect nearby personnel.",
    category: "Biological Sensors",
  },
  {
    id: "moscow",
    name: "Moscow, Russia",
    coordinates: [37.6173, 55.7558],
    description:
      "The site of several espionage events, including the CIA deploying rats carcasses for dead drops, the Soviets installing so many electronic bugs in the under-construction U.S. embassy building that it was deemed unusable, and Russian school children delivering a hidden listening device to the American Ambassador.",
    category: "Concealments",
  },
  {
    id: "berlin",
    name: "Berlin, Germany",
    coordinates: [13.405, 52.52],
    description:
      "The origin of an offline, peer-to-peer file-sharing art movement utilizing USB dead drops in public spaces.",
    category: "Dead Drops",
  },
  {
    id: "saudi-arabia",
    name: "Saudi Arabia",
    coordinates: [45.0792, 23.8859],
    description:
      "Where locals captured griffon vultures tagged by Israeli universities and accused them of being spies.",
    category: "Paranoia & Misconceptions",
  },
  {
    id: "shanghai",
    name: "Shanghai, China",
    coordinates: [121.4737, 31.2304],
    description:
      "IT staff for the African Union has witnessed unusual connections from their facilities to Shanghai, resulting in mass data transfers at weird hours.",
    category: "Surveillance",
  },
  {
    id: "falaise",
    name: "Falaise, France",
    coordinates: [-0.1982, 48.8953],
    description:
      "The site of a 1386 trial, where a pig was dressed in human clothes and hanged for the murder of a child.",
    category: "Historical Incident",
  },
];

export default function MapSection() {
  const [activeLocation, setActiveLocation] = useState<LocationData>(
    locations[0],
  );

  return (
    <section
      id="map"
      className="py-12 md:py-24 px-4 sm:px-6 md:px-12 bg-primary-dark relative z-10 border-t border-white/10 mt-6 md:mt-12 block"
    >
      <div className="max-w-[1200px] mx-auto w-full">
        <div className="mb-10 md:mb-14 flex items-center justify-between">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            <span className="text-accent-amber mr-2 sm:mr-4 block sm:inline">
              Spotted:
            </span>
            Animal Activity
          </h2>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-0 xl:gap-8 border border-white/10 bg-secondary-dark relative">
          {/* Map Display */}
          <div className="xl:col-span-8 p-1 sm:p-4 md:p-8 border-b xl:border-b-0 xl:border-r border-white/10 relative min-h-[300px] sm:min-h-[400px]">
            {/* Map Background grid */}
            <div
              className="absolute inset-0 opacity-5 pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(var(--color-text-muted) 1px, transparent 1px), linear-gradient(90deg, var(--color-text-muted) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            ></div>

            <ComposableMap
              projection="geoMercator"
              projectionConfig={{
                scale: 140,
                center: [0, 20],
              }}
              className="w-full h-full max-h-[500px]"
            >
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#2d3d52"
                      stroke="#4a5b73"
                      strokeWidth={0.75}
                      style={{
                        default: { outline: "none" },
                        hover: { fill: "#3c4e68", outline: "none" },
                        pressed: { outline: "none" },
                      }}
                    />
                  ))
                }
              </Geographies>

              {locations.map((loc) => (
                <Marker
                  key={loc.id}
                  coordinates={loc.coordinates}
                  onClick={() => setActiveLocation(loc)}
                  className="cursor-pointer group"
                  style={{
                    default: { outline: "none" },
                    hover: { outline: "none" },
                    pressed: { outline: "none" },
                  }}
                >
                  {/* Dark backing aura to guarantee contrast against the map fill for mobile/low brightness */}
                  <circle r={7} fill="#0a0c10" opacity={0.75} className="transition-opacity duration-300" />
                  <circle
                    r={5}
                    fill={
                      activeLocation.id === loc.id
                        ? "var(--color-accent-amber)"
                        : "#ffffff"
                    }
                    className="transition-colors duration-300"
                  />
                  <circle
                    r={12}
                    fill="transparent"
                    stroke={
                      activeLocation.id === loc.id
                        ? "var(--color-accent-amber)"
                        : "transparent"
                    }
                    strokeWidth={1.5}
                    className={
                      activeLocation.id === loc.id ? "animate-pulse" : ""
                    }
                  />
                </Marker>
              ))}
            </ComposableMap>
          </div>

          {/* Location Dossier Panel */}
          <div className="xl:col-span-4 p-6 sm:p-8 md:p-10 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <ShieldAlert className="w-5 h-5 text-accent-amber" />
              <span className="text-[12px] font-mono text-white uppercase tracking-[0.2em] border-b border-accent-amber/30 pb-1 w-full">
                Incident Report
              </span>
            </div>

            <h3 className="text-2xl font-bold tracking-tight text-white mb-2 leading-tight">
              {activeLocation.name}
            </h3>

            <div className="mb-6 flex space-x-2">
              <span className="inline-block px-2 py-1 bg-white/5 border border-white/10 text-[9px] font-mono text-accent-amber uppercase tracking-wider">
                {activeLocation.category}
              </span>
            </div>

            <p className="text-sm font-light text-text-muted leading-relaxed flex-1">
              {activeLocation.description}
            </p>

            <div className="mt-8 pt-4 border-t border-white/10">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-[9px] font-mono text-text-muted opacity-60 uppercase mb-1">
                    LATITUDE
                  </div>
                  <div className="text-xs font-mono text-white">
                    {activeLocation.coordinates[1].toFixed(4)}° N
                  </div>
                </div>
                <div>
                  <div className="text-[9px] font-mono text-text-muted opacity-60 uppercase mb-1">
                    LONGITUDE
                  </div>
                  <div className="text-xs font-mono text-white">
                    {activeLocation.coordinates[0].toFixed(4)}° E
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
