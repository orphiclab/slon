export interface StorySection {
  title: string;
  subtitle: string;
}

export interface ProductSpec {
  title: string;
  value: string;
  description: string;
}

export interface SLongProductData {
  name: string;
  tagline: string;
  primaryColor: string;
  secondaryColor: string;
  staticPipe: string;
  specs: ProductSpec[];
  storySections: StorySection[];
  sections: {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    details: string[];
    alignment: "left" | "right";
  }[];
}

export const sLonData: SLongProductData = {
  name: "S-lon Lanka",
  tagline: "WATER FOR LIFE. PIONEERING SINCE 1957.",
  primaryColor: "#FFD400", // S-lon Gold
  secondaryColor: "#112753", // S-lon Blue
  staticPipe: "/images/slon-pipe-static.png",
  specs: [
    {
      title: "Lead-Free Formula",
      value: "100%",
      description: "Non-lead stabilizers ensuring completely safe, non-toxic potable water supply.",
    },
    {
      title: "Manufacturing Legacy",
      value: "1957",
      description: "Over 65 years of pioneering thermoplastic piping and water systems in Sri Lanka.",
    },
    {
      title: "Pipes & Fittings Range",
      value: "15,000+",
      description: "Comprehensive catalog spanning uPVC, cPVC, HDPE, pumps, and rainwater gutters.",
    },
    {
      title: "Durability Standard",
      value: "50+ Yrs",
      description: "Engineered to withstand extreme soil pressures, temperatures, and corrosion.",
    },
  ],
  storySections: [
    {
      title: "WATER FOR LIFE.",
      subtitle: "The life force that drives our nation. Pioneering safe water management since 1957.",
    },
    {
      title: "S-LON INSIDE.",
      subtitle: "The core strength of every Sri Lankan home. Quality that runs deep inside your walls.",
    },
    {
      title: "LEAD-FREE PURITY.",
      subtitle: "S-lon uPVC is formulated lead-free, ensuring pure water for generations to come.",
    },
  ],
  sections: [
    {
      id: "upvc",
      title: "Lead-Free uPVC Systems",
      subtitle: "THE MARKET LEADER FOR PLUMBING",
      description:
        "S-lon is the pioneer and undisputed leader of uPVC piping systems in Sri Lanka. Engineered with advanced non-lead compounds, our pipes conform to SLS 147 and ISO standards, securing high mechanical strength and absolute safety for drinking water.",
      details: [
        "100% Lead-Free stabilizers",
        "Corrosion and rust resistant",
        "High flow velocity with smooth interior",
        "Easy installation with S-lon solvent cement",
      ],
      alignment: "right", // Text on the left, pipe on the right
    },
    {
      id: "cpvc",
      title: "Quickflow cPVC Solutions",
      subtitle: "HOT & COLD WATER ENGINEERING",
      description:
        "Designed to withstand high temperatures and pressures, S-lon 'Quickflow' cPVC is the premium choice for modern hot and cold water plumbing. Extremely durable, it eliminates scale buildup and guarantees a maintenance-free piping network.",
      details: [
        "Tested up to 82°C (180°F)",
        "Zero scaling and minimal heat loss",
        "Exceptional flame and smoke resistance",
        "Ideal for residential, hotel, and industrial builds",
      ],
      alignment: "left", // Text on the right, pipe on the left
    },
    {
      id: "rainwater-pumps",
      title: "Water Management Systems",
      subtitle: "RAINWATER HARVESTING & HIGH-EFFICIENCY PUMPS",
      description:
        "From high-capacity, rust-free PVC rainwater gutters to heavy-duty water pumps (domestic, booster, and deep-well submersibles), S-lon provides complete, integrated systems to harness, filter, and distribute water.",
      details: [
        "High-capacity gutters with leak-proof seals",
        "Pumps with 100% copper winding & thermal overload protection",
        "Submersibles with stainless steel casings for tube wells",
        "Taps, faucets, and garden hoses for total control",
      ],
      alignment: "right", // Text on the left, pipe on the right
    },
  ],
};
