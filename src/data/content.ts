export interface CarItem {
  id: string;
  title: string;
  make: string;
  model: string;
  year: number;
  category: 'all' | 'suv' | 'sedan' | 'van';
  categoryLabel: string;
  type: string;
  condition: 'Foreign Used (Tokunbo)' | 'Brand New' | 'Custom Upgraded';
  transmission: string;
  engine: string;
  drivetrain: string;
  fuel: 'Petrol' | 'Diesel' | 'Hybrid';
  horsepower: string;
  mileage: string;
  color: string;
  interior: string;
  ribbon: string;
  priceDisplay: string;
  priceEstimate?: string;
  images: string[];
  features: string[];
  description: string;
  customsStatus: string;
}

export interface DealershipService {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  description: string;
  icon: string;
  highlights: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  vehiclePurchased: string;
  rating: number;
  date: string;
  quote: string;
  verified: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const SITE_DATA = {
  dealership: {
    name: "IFYADE AUTOS",
    legalName: "Ify Ade Motors",
    tagline: "Nigeria's Premier Automobile Hub in Akure",
    headline: "Verified Tokunbo & Luxury Vehicles.",
    subheadline: "Clean titles, authentic customs duty, zero odometer tampering, and comprehensive pre-delivery inspection on all cars in Akure, Ondo State.",
    logoUrl: "https://images.cdn-files-a.com/uploads/4901520/400_filter_nobg_6035cbf426b09.jpg",
    showroomImages: [
      "https://images.cdn-files-a.com/uploads/4901520/400_60388c1c6c15d.png",
      "https://images.cdn-files-a.com/uploads/4901520/400_60388c3bd94fb.jpg"
    ],
    address: {
      primary: "Beside Old Diamond Bank (Access Bank), Oyemekun Road, Akure, Ondo State",
      annex: "14 Gbogi Street, Akure, Ondo State, Nigeria",
      city: "Akure",
      state: "Ondo State",
      country: "Nigeria",
      googleMapsUrl: "https://maps.google.com/?q=Beside+Diamond+Bank,+Oyemekun+Road,+Akure,+Ondo+State",
    },
    contact: {
      phone: "08037763627",
      phoneFormatted: "+234 803 776 3627",
      phoneRaw: "+2348037763627",
      email: "ifyademotors@gmail.com",
      whatsappUrl: "https://wa.me/2348037763627?text=Hello%20Ifyade%20Autos,%20I%20am%20interested%20in%20inquiring%20about%20a%20vehicle%20from%20your%20inventory.",
      instagramHandle: "@ifyade.autos",
      instagramUrl: "https://www.instagram.com/ifyade.autos/",
      tiktokHandle: "@ifyade.autos",
      tiktokUrl: "https://www.tiktok.com/@ifyade.autos",
    },
    hours: {
      weekdays: "Monday – Friday: 8:00 AM – 6:30 PM",
      saturday: "Saturday: 8:30 AM – 6:00 PM",
      sunday: "Sunday: By Prior Appointment",
    },
    stats: [
      { label: "Inspected Vehicles", value: "100%" },
      { label: "Verified Customs Papers", value: "Genuine" },
      { label: "Customer Satisfaction", value: "4.9 / 5" },
      { label: "Nationwide Delivery", value: "36 States" },
    ]
  },

  categories: [
    { id: 'all', label: 'All Inventory', count: 9 },
    { id: 'suv', label: 'Luxury SUVs', count: 4 },
    { id: 'sedan', label: 'Executive Sedans', count: 4 },
    { id: 'van', label: 'Family Vans', count: 1 },
  ],

  // Full 9 Real Cars directly scraped from https://6035a32ac6d05.site123.me/
  inventory: [
    {
      id: "lexus-is250-2008",
      title: "Lexus 08 I.S 250",
      make: "Lexus",
      model: "IS 250",
      year: 2008,
      category: "sedan" as const,
      categoryLabel: "Executive Sports Sedan",
      type: "Compact Executive Sedan",
      condition: "Foreign Used (Tokunbo)" as const,
      transmission: "6-Speed Automatic with Paddle Shifters",
      engine: "2.5L V6 DOHC 24-Valve",
      drivetrain: "Rear-Wheel Drive (RWD)",
      fuel: "Petrol" as const,
      horsepower: "204 HP",
      mileage: "88,400 miles",
      color: "Metallic Silver / Granite Grey",
      interior: "Charcoal Black Leather",
      ribbon: "New Arrival",
      priceDisplay: "Contact for Best Price",
      priceEstimate: "₦8,500,000",
      images: [
        "https://images.cdn-files-a.com/uploads/4901520/800_603846c5db219.jpg",
        "https://images.cdn-files-a.com/uploads/4901520/800_603846ceae4f8.jpg"
      ],
      features: [
        "Push Button Start with Smart Key",
        "Power Glass Tilt & Slide Sunroof",
        "Steering-Wheel Paddle Shifters",
        "Dual-Zone Automatic Climate Control",
        "Original Factory Alloy Wheels",
        "Dual Sport Chrome Exhaust Outlets",
        "Heated & Ventilated Front Seats",
        "Tincan Port Customs Duty Paid"
      ],
      description: "Direct foreign-used (Tokunbo) Lexus IS 250 in pristine mechanical condition. Features the reliable 2.5L V6 engine, smooth shifting automatic transmission, pristine interior leather, and chilled air conditioning.",
      customsStatus: "100% Fully Cleared at Tincan Port"
    },
    {
      id: "mercedes-e250-2014",
      title: "Mercedes-Benz E250 2014 BlueTEC",
      make: "Mercedes-Benz",
      model: "E250 BlueTEC",
      year: 2014,
      category: "sedan" as const,
      categoryLabel: "Executive Luxury Sedan",
      type: "Full Executive Sedan",
      condition: "Foreign Used (Tokunbo)" as const,
      transmission: "7G-TRONIC PLUS 7-Speed Automatic",
      engine: "2.1L Turbocharged Diesel I4 (High Torque)",
      drivetrain: "Rear-Wheel Drive",
      fuel: "Diesel" as const,
      horsepower: "195 HP / 369 lb-ft Torque",
      mileage: "74,200 miles",
      color: "Obsidian Black Metallic",
      interior: "Black Nappa Leather with Wood Trim",
      ribbon: "Executive Choice",
      priceDisplay: "Contact for Best Price",
      priceEstimate: "₦18,500,000",
      images: [
        "https://images.cdn-files-a.com/uploads/4901520/800_603846625d00c.jpg",
        "https://images.cdn-files-a.com/uploads/4901520/800_6038466b95142.jpg"
      ],
      features: [
        "Ultra Fuel-Efficient BlueTEC Diesel",
        "Panoramic Dual Glass Sunroof",
        "Full LED Intelligent Light System",
        "Harman Kardon Logic 7 Surround Audio",
        "Active Parking & Blind Spot Assist",
        "Multi-Contour Memory Driver Seat",
        "Original Mercedes Alloy Wheels",
        "Factory Ambient Cabin Lighting"
      ],
      description: "Class-leading executive luxury sedan. Exceptionally low fuel consumption paired with relentless torque. Impeccable German engineering, zero dash warnings, clean undercarriage, and showroom finish.",
      customsStatus: "Verified Customs Paperwork Ready"
    },
    {
      id: "mercedes-c300-2013",
      title: "Mercedes-Benz C300 2013 4MATIC",
      make: "Mercedes-Benz",
      model: "C300 4MATIC",
      year: 2013,
      category: "sedan" as const,
      categoryLabel: "Sport Luxury Sedan",
      type: "Compact Executive Sports Sedan",
      condition: "Foreign Used (Tokunbo)" as const,
      transmission: "7-Speed Automatic with Sport & Eco Modes",
      engine: "3.5L Direct-Injection V6",
      drivetrain: "All-Wheel Drive (4MATIC)",
      fuel: "Petrol" as const,
      horsepower: "248 HP",
      mileage: "79,100 miles",
      color: "Polar White",
      interior: "Black MB-Tex Sport Leather",
      ribbon: "Hot Seller",
      priceDisplay: "Contact for Best Price",
      priceEstimate: "₦14,200,000",
      images: [
        "https://images.cdn-files-a.com/uploads/4901520/800_603845d284cb1.jpg",
        "https://images.cdn-files-a.com/uploads/4901520/800_603845e4820be.jpg"
      ],
      features: [
        "All-Wheel Drive 4MATIC Traction",
        "Sport Front Grille with Center Star",
        "One-Touch Power Glass Sunroof",
        "Sport-Tuned Agility Control Suspension",
        "Bluetooth Hands-Free & Media Streaming",
        "Dual Zone Climate Control",
        "Rain-Sensing Windshield Wipers",
        "Genuine Tokunbo Paperwork"
      ],
      description: "One of Nigeria's favorite executive rides. The 2013 C300 4MATIC delivers confident grip on all road surfaces, sharp steering response, and prestige styling that never goes out of fashion.",
      customsStatus: "Original Customs Duty Documents Available"
    },
    {
      id: "acura-mdx-2011",
      title: "Acura MDX 2011 SH-AWD",
      make: "Acura",
      model: "MDX SH-AWD",
      year: 2011,
      category: "suv" as const,
      categoryLabel: "3-Row Luxury SUV",
      type: "Full 7-Passenger Luxury SUV",
      condition: "Foreign Used (Tokunbo)" as const,
      transmission: "6-Speed Automatic Sequential SportShift",
      engine: "3.7L VTEC V6 (300 HP)",
      drivetrain: "Super Handling All-Wheel Drive (SH-AWD)",
      fuel: "Petrol" as const,
      horsepower: "300 HP",
      mileage: "92,000 miles",
      color: "Crystal Black Pearl",
      interior: "Tan/Beige Perforated Luxury Leather",
      ribbon: "7-Seater Luxury",
      priceDisplay: "Contact for Best Price",
      priceEstimate: "₦12,000,000",
      images: [
        "https://images.cdn-files-a.com/uploads/4901520/800_6038442124bf6.jpg",
        "https://images.cdn-files-a.com/uploads/4901520/800_6038448c5e77d.jpg"
      ],
      features: [
        "Full 3-Row 7-Passenger Seating",
        "Advanced SH-AWD Torque Vectoring",
        "Rear Entertainment Flip-Down Screen",
        "Power Tailgate with Remote Open",
        "ELS Studio Surround Sound System",
        "Reverse Camera with Guide Lines",
        "Rear Passenger Independent Airflow",
        "Rugged High Ground Clearance"
      ],
      description: "High-power 300HP V6 family luxury. The MDX combines the legendary reliability of Honda engineering with executive Acura comforts. Strong suspension built for inter-state Nigerian highway cruising.",
      customsStatus: "Fully Documented Tokunbo"
    },
    {
      id: "toyota-highlander-2015",
      title: "Toyota Highlander 2015 XLE",
      make: "Toyota",
      model: "Highlander XLE",
      year: 2015,
      category: "suv" as const,
      categoryLabel: "Family Luxury SUV",
      type: "Midsize 3-Row SUV",
      condition: "Foreign Used (Tokunbo)" as const,
      transmission: "6-Speed Electronically Controlled Automatic",
      engine: "3.5L V6 Dual VVT-i",
      drivetrain: "All-Wheel Drive / FWD",
      fuel: "Petrol" as const,
      horsepower: "270 HP",
      mileage: "81,500 miles",
      color: "Magnetic Gray Metallic",
      interior: "Ash Grey Soft Leather",
      ribbon: "Nigerian Favorite",
      priceDisplay: "Contact for Best Price",
      priceEstimate: "₦26,500,000",
      images: [
        "https://images.cdn-files-a.com/uploads/4901520/800_60383c5e9da66.jpg",
        "https://images.cdn-files-a.com/uploads/4901520/800_60383c78b0562.jpg"
      ],
      features: [
        "7-Seater Cabin with 2nd Row Captain Chairs",
        "Power Glass Tilt/Slide Sunroof",
        "Power Liftgate with Separate Glass Hatch",
        "Keyless Smart Entry & Push Start",
        "Blind Spot Monitor & Cross Traffic Alert",
        "Tri-Zone Automatic Climate Control",
        "Integrated Roof Rails & Chrome Accents",
        "Top Resale Value in Nigerian Market"
      ],
      description: "The undisputed king of Nigerian family SUVs. High resale value, readily accessible spare parts, supreme passenger comfort, and unyielding durability on our roads.",
      customsStatus: "Authentic Customs Clearances Verified"
    },
    {
      id: "lexus-rx350-2013-upgraded",
      title: "Lexus RX 350 2013 (Upgraded to 2017 Facelift)",
      make: "Lexus",
      model: "RX 350 (2017 Spindle Grille Conversion)",
      year: 2013,
      category: "suv" as const,
      categoryLabel: "Upgraded Luxury Crossover",
      type: "Custom Upgraded Luxury SUV",
      condition: "Custom Upgraded" as const,
      transmission: "6-Speed Multi-Mode Automatic",
      engine: "3.5L V6 24-Valve DOHC",
      drivetrain: "All-Wheel Drive",
      fuel: "Petrol" as const,
      horsepower: "275 HP",
      mileage: "76,800 miles",
      color: "Eminence White Pearl",
      interior: "Black & Wine Two-Tone Custom Leather",
      ribbon: "2017 Facelift Upgrade",
      priceDisplay: "Contact for Best Price",
      priceEstimate: "₦22,800,000",
      images: [
        "https://images.cdn-files-a.com/uploads/4901520/800_60383acc02932.jpg",
        "https://images.cdn-files-a.com/uploads/4901520/800_60383ae2a7df3.jpg"
      ],
      features: [
        "Full 2017 F-Sport Style Spindle Grille",
        "Sequential Triple-Beam LED Headlamps",
        "Custom Front Bumper with Fog DRLs",
        "Keyless Smart Entry & Push Start",
        "Power Tailgate with Remote Sensor",
        "Premium Leather with Memory Seating",
        "Reverse Camera with Rear Sensor Alert",
        "Modernized Styling with Proven 2013 Reliability"
      ],
      description: "Get the bold, head-turning looks of a 2017 Lexus RX with the rock-solid affordability and lower maintenance profile of the 2013 platform. Professionally fitted and road-tested by Ifyade Autos.",
      customsStatus: "100% Genuine Port Papers"
    },
    {
      id: "toyota-camry-2016",
      title: "Toyota Camry 2016 SE 'Muscle'",
      make: "Toyota",
      model: "Camry SE",
      year: 2016,
      category: "sedan" as const,
      categoryLabel: "Sport Daily Sedan",
      type: "Midsize Sport Sedan",
      condition: "Foreign Used (Tokunbo)" as const,
      transmission: "6-Speed Automatic with Sport Paddle Shifter",
      engine: "2.5L 4-Cylinder DOHC 16-Valve",
      drivetrain: "Front-Wheel Drive",
      fuel: "Petrol" as const,
      horsepower: "178 HP",
      mileage: "68,400 miles",
      color: "Celestial Silver Metallic",
      interior: "Sport Black SofTex with Red Contrast Stitching",
      ribbon: "Daily Driver Choice",
      priceDisplay: "Contact for Best Price",
      priceEstimate: "₦14,500,000",
      images: [
        "https://images.cdn-files-a.com/uploads/4901520/800_603839ae5bc2f.jpg",
        "https://images.cdn-files-a.com/uploads/4901520/800_603839c42e6cd.jpg"
      ],
      features: [
        "Sport-Tuned Suspension System",
        "17-Inch Machined Alloy Wheels",
        "Steering Paddle Shifters",
        "High-Resolution Touchscreen Media Hub",
        "Integrated Rearview Camera",
        "Impressive Low Fuel Consumption",
        "Chilled Dual-Zone Climate A/C",
        "Direct Foreign Import"
      ],
      description: "Clean, sharp, and bulletproof reliable. The 2016 Camry SE combines athletic sport styling with low maintenance costs. Perfect for daily commutes in Akure, Lagos, or highway journeys.",
      customsStatus: "Direct Tokunbo Duty Paid"
    },
    {
      id: "mercedes-gle350-2016",
      title: "Mercedes-Benz GLE 350 2016 4MATIC",
      make: "Mercedes-Benz",
      model: "GLE 350 4MATIC",
      year: 2016,
      category: "suv" as const,
      categoryLabel: "Flagship Luxury SUV",
      type: "Executive Luxury Midsize SUV",
      condition: "Foreign Used (Tokunbo)" as const,
      transmission: "7G-TRONIC 7-Speed Automatic",
      engine: "3.5L V6 (302 HP)",
      drivetrain: "4MATIC Permanent All-Wheel Drive",
      fuel: "Petrol" as const,
      horsepower: "302 HP",
      mileage: "62,300 miles",
      color: "Iridium Silver Metallic",
      interior: "Espresso Brown / Black Luxury Leather",
      ribbon: "Flagship Luxury",
      priceDisplay: "Contact for Best Price",
      priceEstimate: "₦38,500,000",
      images: [
        "https://images.cdn-files-a.com/uploads/4901520/800_603836ef82f4f.jpg",
        "https://images.cdn-files-a.com/uploads/4901520/800_60383a470fd48.jpg"
      ],
      features: [
        "Full LED Active Intelligent Headlights",
        "Harman Kardon Logic 7 Premium Sound",
        "360-Degree Surround View Cameras",
        "Panoramic Power Sliding Moonroof",
        "Power Liftgate with Sensor Control",
        "Ambient Cabin Illumination",
        "Dynamic Drive Mode Select (Sport/Comfort/Slippery)",
        "Pristine Import from North America"
      ],
      description: "The pinnacle of executive SUV luxury. Unmatched road presence, sublime suspension damping, commanding elevated driving position, and immaculate interior craftmanship.",
      customsStatus: "Full Duty Paid & Documented"
    },
    {
      id: "toyota-sienna-2013",
      title: "Toyota Sienna 2013 XLE",
      make: "Toyota",
      model: "Sienna XLE",
      year: 2013,
      category: "van" as const,
      categoryLabel: "Premium Family Van",
      type: "Luxury Multi-Passenger Van",
      condition: "Foreign Used (Tokunbo)" as const,
      transmission: "6-Speed Automatic",
      engine: "3.5L V6 DOHC 24-Valve",
      drivetrain: "Front-Wheel Drive",
      fuel: "Petrol" as const,
      horsepower: "266 HP",
      mileage: "89,000 miles",
      color: "Sky Blue / Metallic Silver",
      interior: "Grey Perforated Leather",
      ribbon: "8-Passenger Van",
      priceDisplay: "Contact for Best Price",
      priceEstimate: "₦16,000,000",
      images: [
        "https://images.cdn-files-a.com/uploads/4901520/800_60383652d01f4.jpg",
        "https://images.cdn-files-a.com/uploads/4901520/800_6038366a0fc3f.jpg",
        "https://images.cdn-files-a.com/uploads/4901520/800_6035af22234a7.jpg"
      ],
      features: [
        "Dual Power Sliding Side Passenger Doors",
        "Power Tailgate with Remote Operation",
        "Generous 8-Passenger Seat Configuration",
        "Factory Power Moonroof",
        "Tri-Zone Independent Climate Control",
        "Roof Rail Crossbars for Luggage",
        "Fold-Flat Third-Row Stow 'n Go Seats",
        "Supreme Highway Cruising Comfort"
      ],
      description: "The ultimate long-distance family transporter and VIP business shuttle. Immense interior capacity, whisper-quiet V6 engine, power doors for easy school runs and family vacations.",
      customsStatus: "Clean Foreign Used Title & Port Clearance"
    }
  ],

  services: [
    {
      id: "tokunbo-sales",
      number: "01",
      title: "Direct Tokunbo & Brand New Car Sales",
      shortDesc: "Carefully selected clean-title foreign-used and brand new vehicles from USA, Canada & Europe.",
      description: "Every car in our Akure showroom undergoes rigorous pre-purchase vetting before shipment. We specialize in accident-free cars with authentic mileage and verifiable Carfax/Autocheck backgrounds.",
      icon: "Car",
      highlights: ["Direct North American imports", "Verified low mileage", "No flood damage guarantee", "Genuine customs paperwork"]
    },
    {
      id: "car-upgrades",
      number: "02",
      title: "Vehicle Upgrades & Modernization Facelifts",
      shortDesc: "Transform older models with modern spindle grilles, LED headlights, Android screens, and custom trims.",
      description: "Love your car's mechanical reliability but want 2026 aesthetics? Our expert technicians carry out factory-grade body kit installations, spindle grille conversions, and interior upgrades with flawless finish.",
      icon: "Sparkles",
      highlights: ["Lexus 2013-to-2017+ spindle grilles", "Mercedes AMG styling conversions", "Full LED & sequential light upgrades", "Plug-and-play fitment"]
    },
    {
      id: "swap-trade-in",
      number: "03",
      title: "Car Swap & Trade-In Evaluation",
      shortDesc: "Upgrade your current vehicle seamlessly with transparent valuation and fast completion.",
      description: "Bring your registered Nigerian-used car for an honest on-site inspection. We value your vehicle at real fair market rates, allow you to pay the difference, and drive away in your dream car the same day.",
      icon: "RefreshCw",
      highlights: ["Instant on-site appraisal", "Fair market value deduction", "Straightforward top-up calculation", "Zero stress or delayed paperwork"]
    },
    {
      id: "pre-purchase-diagnostic",
      number: "04",
      title: "Diagnostic Inspection & Health Checks",
      shortDesc: "Comprehensive computerized OBD2 scanning, transmission tests, and chassis examination.",
      description: "Never buy blind. Our technicians put every vehicle through a thorough multi-point checklist: computerized engine diagnostics, gearbox pressure tests, suspension checks, and structural chassis integrity.",
      icon: "Wrench",
      highlights: ["Full OBD2 computer diagnosis", "Air conditioning pressure check", "Chassis alignment inspection", "Pre-delivery road test certification"]
    },
    {
      id: "custom-orders",
      number: "05",
      title: "Special Importation & Custom Orders",
      shortDesc: "Looking for a specific color, trim, or exotic model? We procure and deliver directly to you.",
      description: "If the exact model you want is not currently on our showroom floor, we source it directly from licensed US and Canadian dealer auctions, handle all international logistics, shipping, and port clearance to your doorstep.",
      icon: "Ship",
      highlights: ["Direct bidding access at Copart/Manheim", "Full auction condition report", "Custom clearing handling", "Nationwide doorstep delivery"]
    },
    {
      id: "customs-paperwork",
      number: "06",
      title: "Genuine Customs Documentation & Registration",
      shortDesc: "Complete peace of mind with verifiable Federal Customs duty papers and state licensing.",
      description: "In Nigeria, peace of mind means driving without fear of impoundment. All vehicles from Ifyade Autos come with 100% authentic, verifiable Nigeria Customs Service duty payments and vehicle license support.",
      icon: "ShieldCheck",
      highlights: ["100% authentic Customs Single Goods Declaration (SGD)", "Original assessment notices", "VIN verification assistance", "Federal road safety support"]
    }
  ],

  whyChooseUs: [
    {
      title: "Zero Odometer Tampering",
      desc: "We strictly condemn digital mileage rollbacks. What you see on the dashboard is the verified authentic odometer reading.",
      icon: "Gauge"
    },
    {
      title: "100% Genuine Customs Duty",
      desc: "Every foreign-used car is fully paid and cleared through official Nigerian ports. Never worry about customs seizures.",
      icon: "ShieldAlert"
    },
    {
      title: "Inspected & Road-Tested",
      desc: "Chilled AC, smooth transmission, strong engines, and road-ready suspensions before any car leaves our lot.",
      icon: "CheckCircle2"
    },
    {
      title: "Prime Akure Showroom Location",
      desc: "Visit us beside Old Diamond Bank, Oyemekun Road. Transparent physically inspected deals with reputable local standing.",
      icon: "MapPin"
    },
    {
      title: "Fast Nationwide Delivery",
      desc: "Need your car in Lagos, Abuja, Ibadan, Benin, or Port Harcourt? We provide tracked and fully insured transit across Nigeria.",
      icon: "Truck"
    },
    {
      title: "Active Social Community",
      desc: "Follow our daily vehicle arrivals and delivery videos on TikTok and Instagram @ifyade.autos.",
      icon: "Video"
    }
  ],

  testimonials: [
    {
      id: "1",
      name: "Engr. Tunde Adeleke",
      location: "Akure, Ondo State",
      vehiclePurchased: "Toyota Highlander 2015 XLE",
      rating: 5,
      date: "3 weeks ago",
      quote: "Buying my Highlander from Ifyade Autos was the smoothest car transaction I've had in Nigeria. The AC was ice cold, the engine sounded untouched, and all customs papers were verified authentic. Ifyade is the real deal on Oyemekun road!",
      verified: true
    },
    {
      id: "2",
      name: "Dr. Bukola Fashola",
      location: "Ibadan, Oyo State",
      vehiclePurchased: "Mercedes-Benz C300 4MATIC",
      rating: 5,
      date: "1 month ago",
      quote: "I traveled from Ibadan after seeing their TikTok video showing the C300. The car was exactly as described on video — spotless interior, crisp gear shifts, and genuine Tokunbo papers. Highly recommended!",
      verified: true
    },
    {
      id: "3",
      name: "Chief Femi Ogundipe",
      location: "Ondo Town",
      vehiclePurchased: "Mercedes-Benz GLE 350",
      rating: 5,
      date: "2 months ago",
      quote: "The team at Ifyade Autos understands luxury. When you spend tens of millions on a GLE 350, you want total honesty. No hidden faults, clean CARFAX, and prompt delivery right to my compound in Ondo.",
      verified: true
    },
    {
      id: "4",
      name: "Mrs. Ifeoma Nnamdi",
      location: "Lagos / Akure",
      vehiclePurchased: "Toyota Sienna 2013 XLE",
      rating: 5,
      date: "2 months ago",
      quote: "Needed an 8-seater Sienna for our family and inter-state logistics. The dual power doors and leather seats were immaculate. My husband was thoroughly impressed with the pricing compared to Lagos car dealers.",
      verified: true
    },
    {
      id: "5",
      name: "Barrister Kayode Alabi",
      location: "Akure, Ondo State",
      vehiclePurchased: "Lexus RX 350 (2017 Facelift)",
      rating: 5,
      date: "3 months ago",
      quote: "Their facelift conversion work on the Lexus RX is first-class. The spindle grille and LED lights make heads turn everywhere I drive in Alagbaka, yet it drives with 2013 peace of mind and cheap maintenance.",
      verified: true
    }
  ],

  faqs: [
    {
      question: "Are your vehicles physically available for inspection in Akure?",
      answer: "Yes! All vehicles featured in our inventory are physically parked at our showroom beside Old Diamond Bank (now Access Bank), Oyemekun Road, Akure, Ondo State. You are welcome to inspect, bring your personal mechanic, and test-drive during working hours."
    },
    {
      question: "How do I verify the Nigeria Customs Duty papers for a car?",
      answer: "We provide complete transparency. You will receive the original C-number, SGD (Single Goods Declaration), and assessment papers. We encourage every client to verify the VIN directly via the official Nigeria Customs helpdesk or portal before making full payment."
    },
    {
      question: "Can I swap or trade in my current car for another vehicle?",
      answer: "Absolutely. We run a straightforward car swap program. Bring your vehicle to our Oyemekun Road showroom for a 20-minute physical appraisal. Once valued, the agreed amount is deducted from your desired car's purchase price."
    },
    {
      question: "Do you deliver cars to buyers in other states?",
      answer: "Yes, we regularly deliver cars to clients in Lagos, Abuja, Ibadan, Benin City, Osogbo, Ilorin, and Port Harcourt. We utilize vetted, fully insured vehicle transit trucks or professional escort drivers."
    },
    {
      question: "What is your consultation and purchase process?",
      answer: "You can click any car to inquire instantly via WhatsApp or call us at 08037763627. We share HD walkaround videos, provide price negotiation, schedule physical inspection, verify documents, and conclude payment via secure bank transfer."
    }
  ]
};
