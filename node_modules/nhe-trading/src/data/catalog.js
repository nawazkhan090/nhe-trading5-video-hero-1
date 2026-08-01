// NHE Trading — catalog data extracted directly from the company profile PDF.
// Every product photo below is cropped from its exact labeled box in the source
// document, so name / brand / photo are guaranteed to match.

export const company = {
  name: "Nasir Hussain Equipment Trading LLC",
  shortName: "NHE Trading",
  arabicName: "ناصر حسين لتجارة المهدات ش.ذ.م.م",
  founded: 2011,
  location: "Dubai, U.A.E.",
  poBox: "378145",
  phones: ["+971 52 104 2736", "+971 4 250 3751", "+971 4 299 2818", "+971 4 299 2636"],
  email: "sales@nhetrading.com",
  website: "www.nhetrading.com",
  about:
    "The leading name throughout Dubai for construction supplies and materials. Since 2011, we've supplied builders, contractors, repairmen, and private homeowners with quality products and reliable service — with hands-on project assistance available on request.",
};

const P = "/products/";

export const categoriesMeta = [
  { id: "bandsaw-machines", code: "01", name: "Bandsaw Machines", blurb: "Fully automatic to manual bandsaws for small shops through heavy industrial cutting.", brands: ["Amada", "Cosen", "Imet", "Everising", "Dextra", "Tfico"] },
  { id: "bandsaw-blades", code: "02", name: "Bandsaw Blades", blurb: "For steel, mild steel, wood, aluminium, and food-industry cutting applications.", brands: ["Amada", "Bipico", "Eberle", "Hakkansson", "Honsberg", "Leitz", "Lenox", "Rontgen", "Wikus"] },
  { id: "bonesaw-blades", code: "03", name: "Bonesaw Blades", blurb: "Precision blades for cutting bones, meat, and fish — made in Italy.", brands: ["Lamestar", "Salvador"] },
  { id: "bathroom-fittings", code: "04", name: "Bathroom Fittings", blurb: "Classic and contemporary fittings for residential and hospitality projects.", brands: ["Boosini", "Brimix", "Dikalan", "Grohe", "Geberit", "Rak", "Sanit"] },
  { id: "building-construction", code: "05", name: "Building & Construction Requisites", blurb: "Branded products for varied construction uses — hoses, instruments, pumps, ladders.", brands: ["Anchor", "Eaton Aeroquip", "Extech", "Fluke", "Mimosa", "Move It", "Prakash", "Prestar", "Werner"] },
  { id: "castor-wheels", code: "06", name: "Castor Wheels", blurb: "Rubber and PU wheels suitable for hospitals, hospitality, and multiple industries.", brands: ["Bickle", "Rhombus", "MMA"] },
  { id: "chemical-sealants", code: "07", name: "Chemical Products & Sealants", blurb: "Sealants, adhesives, primers, and hand-care chemicals for professional use.", brands: ["Corroseal", "Dowsil", "Dr. Fixit", "Fosroc", "Gojo", "Goop", "GP Wacker", "Jet-Lube", "Molykote", "Swarfega", "Soudal", "V-Tech", "Wurth"] },
  { id: "cutting-grinding", code: "08", name: "Cutting & Grinding Discs", blurb: "Precision discs for metal, stone, and stainless steel fabrication work.", brands: ["Gazelle", "Pferd", "Rhodius", "Tailin", "Tyrolit"] },
  { id: "drill-bits-taps", code: "09", name: "Drill Bits & Hand Taps", blurb: "Precision-ground bits and taps for metalworking and general trade use.", brands: ["Dormer", "Presto", "Skole", "Totem", "Volkel"] },
  { id: "fasteners", code: "10", name: "Fasteners", blurb: "Anchors, screws, and fixing systems for structural and drywall applications.", brands: ["Fischer", "Hilti", "Kohl", "Mungo", "Patta", "Rawl Fixing", "Sympafix", "Torq"] },
  { id: "hotel-requisites", code: "11", name: "Hotel Requisites", blurb: "Access control, locking systems, and lighting solutions for hospitality projects.", brands: ["Elock", "Hotek", "ID-Vision", "Jafled", "V-Tac"] },
  { id: "iron-mongery", code: "12", name: "Iron Mongery", blurb: "Door hardware, closers, and hinges for aluminium, glass, and timber doors.", brands: ["Assa Abloy", "Blum", "Briton", "Dorma", "Dormate", "Euroart", "Giesse", "Hafele", "Kason", "Union"] },
  { id: "power-tools", code: "13", name: "Power Tools, Spares & Services", blurb: "Leading power tool brands with genuine spares and servicing support.", brands: ["AEG", "Bosch", "Fuji", "Fujita", "Hitachi", "Makita", "Metabo", "Milwaukee", "Kohl"] },
  { id: "rockwool", code: "14", name: "Rockwool Insulation", blurb: "Thermal and acoustic insulation with a full range of installation accessories.", brands: ["Rockwool", "Torq", "FRF", "Vaultex"] },
  { id: "safety-products", code: "15", name: "Safety Products", blurb: "PPE and site safety equipment — coveralls, helmets, gloves, and barriers.", brands: ["Vaultex", "Hunter"] },
  { id: "welding", code: "16", name: "Welding Machines & Consumables", blurb: "Machines, gas equipment, and consumables for professional welding work.", brands: ["Esab", "Victor", "Kiswel", "Techweld", "Grote", "Electroheat", "Gasiq", "Weldman"] },
];

// Every product: name, brand, exact-matching image filename, price (demo), description.
const rawProducts = {
  "bandsaw-machines": [
    { name: "HFA Series Horizontal Bandsaw", brand: "Amada", img: "bandsaw-machines_amada-hfa.png", price: 18500, desc: "Fully automatic, NC-controlled horizontal band saw." },
    { name: "MH-460M Swivel Frame Bandsaw", brand: "Cosen", img: "bandsaw-machines_cosen-mh460m.png", price: 15200, desc: "Heavy-duty swivel center frame design for easier miter cut setup." },
    { name: "BS 300 Manual Bandsaw", brand: "Imet", img: "bandsaw-machines_imet-bs300.png", price: 6400, desc: "Designed for small to medium-sized operations." },
    { name: "S-46335A Heavy-Duty Bandsaw", brand: "Everising", img: "bandsaw-machines_everising-s46335a.png", price: 21000, desc: "Premier Taiwanese heavy-duty mid-to-large industrial band saw." },
    { name: "BMSY-230 DGH Pivot Bandsaw", brand: "Dextra", img: "bandsaw-machines_dextra-bmsy230.png", price: 24500, desc: "Heavy-duty semi-automatic pivot-type bandsaw for high-precision miter and straight cuts." },
    { name: "Metalworking Bandsaw System", brand: "Tfico", img: "bandsaw-machines_tfico.png", price: 19800, desc: "High-precision sawing equipment engineered for industrial metalworking needs." },
  ],
  "bandsaw-blades": [
    { name: "Bandsaw Blade Range", brand: "Amada / Bipico / Eberle / Hakkansson / Honsberg / Leitz / Lenox / Rontgen / Wikus", img: "bandsaw-blades_group.png", price: 210, desc: "For steel, MS, wood, aluminium, and food-industry cutting applications." },
  ],
  "bonesaw-blades": [
    { name: "Lamestar Bone, Meat & Fish Saw Blade", brand: "Lamestar", img: "bonesaw-blades_lamestar.png", price: 95, desc: "Anelli Segaossi blade for meat, bones and fish — made in Italy." },
    { name: "Salvador Bone, Meat & Fish Saw Blade", brand: "Salvador", img: "bonesaw-blades_salvador.png", price: 98, desc: "Anelli Segaossi blade for meat, bones and fish — made in Italy." },
  ],
  "bathroom-fittings": [
    { name: "Bathroom Fittings Showroom Range", brand: "Boosini / Brimix / Dikalan / Grohe / Geberit / Rak / Sanit", img: "bathroom-fittings_group.png", price: 340, desc: "Classic and contemporary bathroom fitting designs." },
  ],
  "building-construction": [
    { name: "Cork Sheets — Insulation Grade", brand: "Anchor", img: "building-construction_anchor-cork.png", price: 85, desc: "Anchor cork sheets for construction insulation use." },
    { name: "Hydraulic Hose 25m", brand: "Eaton Aeroquip", img: "building-construction_eaton-aeroquip.png", price: 650, desc: "Heavy-duty hydraulic hose for industrial applications." },
    { name: "Test Instrument Range", brand: "Extech", img: "building-construction_extech.png", price: 480, desc: "Extech Instruments precision testing devices." },
    { name: "Digital Multimeter", brand: "Fluke", img: "building-construction_fluke.png", price: 720, desc: "Fluke Instruments professional-grade multimeter." },
    { name: "Mimosa Hose 25m", brand: "Mimosa", img: "building-construction_mimosa.png", price: 195, desc: "Fitt Mimosa flexible hose, 25m." },
    { name: "Lifting Equipment", brand: "Move It", img: "building-construction_moveit.png", price: 1450, desc: "Move It Holland lifting equipment for site use." },
    { name: "Submersible Pump Range", brand: "Prakash", img: "building-construction_prakash.png", price: 980, desc: "Prakash Pumps submersible water pumps." },
    { name: "Site Utility Trolley", brand: "Prestar", img: "building-construction_prestar.png", price: 340, desc: "Prestar Japan-made site trolley." },
    { name: "Ladders — Aluminium & Fibreglass", brand: "Werner", img: "building-construction_werner.png", price: 520, desc: "Werner ladders in aluminium and fibreglass." },
  ],
  "castor-wheels": [
    { name: "Rubber/PU Castor with Rotating & Brakes", brand: "Bickle", img: "castor-wheels_bickle.png", price: 45, desc: "Available in rubber and PU with rotating and brakes." },
    { name: "Rubberised Hospital Castor", brand: "Rhombus", img: "castor-wheels_rhombus.png", price: 38, desc: "Rubberised wheel popularly used in hospitals." },
    { name: "Scaffold Castor Wheel", brand: "MMA", img: "castor-wheels_mma.png", price: 32, desc: "Widely used in scaffolding and industrial applications." },
  ],
  "chemical-sealants": [
    { name: "Rust Converting Metal Primer", brand: "Corroseal", img: "chemical-sealants_corroseal.png", price: 145, desc: "Automotive, household, marine and industrial rust primer." },
    { name: "High-Modulus Silicone Sealant", brand: "Dowsil", img: "chemical-sealants_dowsil.png", price: 65, desc: "By Dow Corning — high-modulus construction silicone." },
    { name: "Waterproofing Compound", brand: "Dr. Fixit", img: "chemical-sealants_drfixit.png", price: 180, desc: "Leading waterproofing expert product line." },
    { name: "Construction Chemical Range", brand: "Fosroc", img: "chemical-sealants_fosroc.png", price: 210, desc: "Fosroc branded construction chemicals." },
    { name: "Natural Orange Hand Cleaner", brand: "Gojo", img: "chemical-sealants_gojo.png", price: 55, desc: "Industrial-strength hand cleaner." },
    { name: "Orange Hand Cleaner", brand: "Goop", img: "chemical-sealants_goop.png", price: 58, desc: "Heavy-duty orange hand cleaner." },
    { name: "GP Construction Sealant", brand: "GP Wacker", img: "chemical-sealants_gpwacker.png", price: 42, desc: "Wacker — creating tomorrow's solutions." },
    { name: "Thread Sealant & Lubricant", brand: "Jet-Lube", img: "chemical-sealants_jetlube.png", price: 95, desc: "Industrial thread sealant and pipe lubricant." },
    { name: "Molykote 1000 Paste & Swarfega Cleaner", brand: "Molykote / Swarfega", img: "chemical-sealants_molykote-swarfega.png", price: 120, desc: "DuPont anti-seize threading paste and Swarfega hand cleaner." },
    { name: "Multipurpose Sealant Range", brand: "Soudal", img: "chemical-sealants_soudal.png", price: 38, desc: "Full range of sealants and adhesives." },
    { name: "Weather Sealant Range", brand: "V-Tech", img: "chemical-sealants_vtech.png", price: 45, desc: "V-Tech multipurpose construction sealant." },
    { name: "Weather Sealant Tube", brand: "Wurth", img: "chemical-sealants_wurth.png", price: 48, desc: "Wurth professional-grade sealant." },
  ],
  "cutting-grinding": [
    { name: "Cutting Disc 115mm", brand: "Gazelle", img: "cutting-grinding_gazelle.png", price: 8, desc: "General-purpose metal cutting disc." },
    { name: "Alumaster Cutting Disc", brand: "Pferd", img: "cutting-grinding_pferd.png", price: 22, desc: "HSF Disco Alumaster — German engineering." },
    { name: "XTKG Exact Cutting Disc", brand: "Rhodius", img: "cutting-grinding_rhodius.png", price: 18, desc: "Premium cutting disc, made in Germany." },
    { name: "Extra Speed Cutting Wheel", brand: "Tailin", img: "cutting-grinding_tailin.png", price: 12, desc: "Extra-speed rated cutting wheel." },
    { name: "Ceramic Grinding Disc 2-in-1", brand: "Tyrolit", img: "cutting-grinding_tyrolit.png", price: 26, desc: "Premium ceramic disc, +40% performance rating." },
  ],
  "drill-bits-taps": [
    { name: "HSS Drill Bit", brand: "Dormer", img: "drill-bits-taps_dormer.png", price: 65, desc: "Professional-grade HSS drill bit." },
    { name: "Precision Drill Bit", brand: "Presto", img: "drill-bits-taps_presto.png", price: 28, desc: "General-purpose precision drill bit." },
    { name: "13-Piece Drill Bit Kit", brand: "Skole", img: "drill-bits-taps_skole.png", price: 55, desc: "HSS twist drill bit kit, 13 pieces." },
    { name: "Razorcut Carbide End Mill Set", brand: "Totem", img: "drill-bits-taps_totem.png", price: 145, desc: "High-performance cutting tools for aerospace and automotive." },
    { name: "Hand Tap Set", brand: "Volkel", img: "drill-bits-taps_volkel.png", price: 78, desc: "Precision hand tap set for metalworking." },
  ],
  fasteners: [
    { name: "Chemical Anchor & Fixing Range", brand: "Fischer", img: "fasteners_fischer.png", price: 85, desc: "Chemical anchoring system for structural fixing." },
    { name: "Mechanical Anchor & Applicator", brand: "Hilti", img: "fasteners_hilti.png", price: 95, desc: "Heavy-duty mechanical anchor bolt and applicator gun." },
    { name: "Fastener Range", brand: "Kohl", img: "fasteners_kohl.png", price: 15, desc: "Kohl Fasteners general-purpose range." },
    { name: "Chemical Fixing System", brand: "Mungo", img: "fasteners_mungo.png", price: 110, desc: "Mungo chemical fixing system." },
    { name: "General Purpose Screw Box", brand: "Patta", img: "fasteners_patta.png", price: 22, desc: "Patta Fasteners & Fixings screw box." },
    { name: "Rawlplug Fixing System", brand: "Rawl Fixing", img: "fasteners_rawlfixing.png", price: 90, desc: "Rawlplug branded fixing system." },
    { name: "Fuelcell Fixing System", brand: "Sympafix", img: "fasteners_sympafix.png", price: 105, desc: "Sympafix professional fixing tool and cartridge." },
    { name: "Fastener & Screw Range", brand: "Torq", img: "fasteners_torq-general.png", price: 14, desc: "Torq general fastener range." },
    { name: "Concrete Screw 8x90", brand: "Torq", img: "fasteners_torq-concrete-screw.png", price: 14, desc: "Torq concrete screw, size 8x90." },
    { name: "Chipboard Screw", brand: "Torq", img: "fasteners_torq-chipboard-screw.png", price: 9, desc: "Torq chipboard screw." },
    { name: "Drywall Screw Box", brand: "Torq", img: "fasteners_torq-drywall-screw.png", price: 11, desc: "Torq drywall screw, box pack." },
  ],
  "hotel-requisites": [
    { name: "Magnetic Door Lock", brand: "Elock", img: "hotel-requisites_elock.png", price: 240, desc: "Electromagnetic door lock for hospitality access control." },
    { name: "Smart Door Handle System", brand: "Hotek", img: "hotel-requisites_hotek.png", price: 380, desc: "Hotek smart hotel door handle and lock." },
    { name: "Access Control Reader", brand: "ID-Vision", img: "hotel-requisites_idvision.png", price: 290, desc: "ID-Vision keycard and access reader." },
    { name: "Lighting & Fixtures Set", brand: "Jafled", img: "hotel-requisites_jafled.png", price: 165, desc: "Jafled — less energy, more light." },
    { name: "LED Lighting Range", brand: "V-Tac", img: "hotel-requisites_vtac.png", price: 45, desc: "V-Tac meaningful innovation lighting products." },
  ],
  "iron-mongery": [
    { name: "Door Closer System", brand: "Assa Abloy", img: "iron-mongery_assa-abloy.png", price: 320, desc: "Premium door closer and access hardware." },
    { name: "Hardware Fitting Kit", brand: "Blum", img: "iron-mongery_blum.png", price: 145, desc: "Blum hinge and fitting hardware kit." },
    { name: "Door Closer #1 Choice", brand: "Briton", img: "iron-mongery_briton.png", price: 210, desc: "Briton — the #1 door hardware choice." },
    { name: "Glass Door Handle Set", brand: "Dorma", img: "iron-mongery_dorma.png", price: 380, desc: "Dorma glass and aluminium door hardware." },
    { name: "Floor Spring Hinge", brand: "Dormate", img: "iron-mongery_dormate.png", price: 260, desc: "Dormate floor spring for heavy doors." },
    { name: "Door Hardware Set", brand: "Euroart", img: "iron-mongery_euroart.png", price: 195, desc: "Euroart classic mortise and handle set." },
    { name: "Aluminium Door & Window Hardware", brand: "Giesse", img: "iron-mongery_giesse.png", price: 175, desc: "Hardware for aluminium windows and doors." },
    { name: "Pull Handle Set", brand: "Hafele", img: "iron-mongery_hafele.png", price: 88, desc: "Hafele designer pull handle range." },
    { name: "Door Hardware Fitting", brand: "Kason", img: "iron-mongery_kason.png", price: 145, desc: "Kason commercial door hardware." },
    { name: "Lever Handle & Pull Handle Set", brand: "Union", img: "iron-mongery_union.png", price: 95, desc: "Union classic lever handle and pull handle set." },
  ],
  "power-tools": [
    { name: "Cordless Power Tool Kit", brand: "AEG", img: "power-tools_aeg.png", price: 890, desc: "AEG professional cordless tool kit." },
    { name: "Precision Power Tool", brand: "Fujita", img: "power-tools_fujita.png", price: 380, desc: "Where international standards meet Japanese precision." },
    { name: "Power Tools Range", brand: "Hitachi", img: "power-tools_hitachi.png", price: 340, desc: "Hitachi inspire-the-next power tools range." },
    { name: "18V Lithium-Ion Cordless Range", brand: "Makita", img: "power-tools_makita.png", price: 460, desc: "Makita 18V lithium-ion cordless tool line-up." },
    { name: "Cordless Power Tool Range", brand: "Metabo", img: "power-tools_metabo.png", price: 520, desc: "Metabo LiHD amplified cordless power solutions." },
    { name: "M18 Professional Range", brand: "Milwaukee", img: "power-tools_milwaukee.png", price: 980, desc: "Milwaukee M18 professional power tool range." },
    { name: "Armature for Power Tools", brand: "Kohl", img: "power-tools_kohl-armature.png", price: 65, desc: "Kohl armature suitable for power tools." },
    { name: "Carbon Brush for Generators & Machines", brand: "Kohl", img: "power-tools_kohl-carbonbrush.png", price: 45, desc: "Kohl carbon brush suitable for generators and industrial machines." },
    { name: "Power Transmission & Ship Machine Brush", brand: "Kohl", img: "power-tools_kohl-transmission.png", price: 55, desc: "Kohl suitable for power transmission and ship machines." },
  ],
  rockwool: [
    { name: "Rockwool Insulation Roll & Board", brand: "Rockwool", img: "rockwool_insulation.png", price: 95, desc: "50mm 50-density and 100mm 100-density thermal rockwool insulation." },
    { name: "Rockwool Insulation Pins (8x90–8x200)", brand: "Torq", img: "rockwool_pins.png", price: 7, desc: "Torq rockwool insulation pins, sizes 8x90 through 8x200." },
    { name: "N95 Dust Mask", brand: "Vaultex", img: "rockwool_n95mask.png", price: 12, desc: "KN95 protective dust mask for insulation work." },
    { name: "Protective Gloves", brand: "Vaultex", img: "rockwool_gloves.png", price: 16, desc: "Protective gloves for rockwool installation." },
    { name: "Safety Gloves", brand: "Vaultex", img: "rockwool_safetygloves.png", price: 18, desc: "Cut-resistant safety gloves for insulation handling." },
    { name: "Protective Long Sleeve", brand: "Vaultex", img: "rockwool_longsleeve.png", price: 22, desc: "Protective long sleeve for rockwool installation." },
    { name: "Fire Resistant Adhesive", brand: "V-Tech", img: "rockwool_fireadhesive.png", price: 48, desc: "Fire-resistant adhesive range for insulation sealing." },
    { name: "Expanding Foam", brand: "V-Tech", img: "rockwool_expandingfoam.png", price: 35, desc: "Expanding foam for gap-filling and insulation work." },
  ],
  "safety-products": [
    { name: "Coverall (Cotton, Polyester Mix & Disposable)", brand: "Vaultex", img: "safety-products_coverall.png", price: 85, desc: "Cotton, polyester mix and disposable coverall range." },
    { name: "Dotted Grip Gloves", brand: "Vaultex", img: "safety-products_dottedgloves.png", price: 15, desc: "Dotted-palm safety work gloves." },
    { name: "Face Mask Range", brand: "Vaultex", img: "safety-products_facemask.png", price: 8, desc: "Disposable and reusable face mask range." },
    { name: "Safety Helmet", brand: "Vaultex", img: "safety-products_helmets.png", price: 32, desc: "Available in red, blue, orange, yellow, white." },
    { name: "Safety Cone Set", brand: "Vaultex", img: "safety-products_cones.png", price: 45, desc: "Traffic and site safety cone set." },
    { name: "Safety Barrier", brand: "Vaultex", img: "safety-products_barriers.png", price: 120, desc: "Site safety barrier, modular design." },
    { name: "Safety Shoes", brand: "Vaultex", img: "safety-products_shoes.png", price: 145, desc: "Your safety is in safe hands — Vaultex safety footwear." },
    { name: "Site Water Bottle", brand: "Hunter", img: "safety-products_waterbottles.png", price: 28, desc: "Insulated site water bottle/canteen." },
    { name: "Multipurpose Work Gloves", brand: "Vaultex", img: "safety-products_multipurpose.png", price: 14, desc: "Leather-palm multipurpose work gloves." },
  ],
  welding: [
    { name: "Welding Machine & Consumables Range", brand: "Esab", img: "welding_esab.png", price: 3200, desc: "Esab professional welding machines and consumables." },
    { name: "Medalist 350 Gas Cutting Set", brand: "Victor", img: "welding_victor.png", price: 1450, desc: "Victor gas cutting and welding regulator set." },
    { name: "MIG Welding Wire & Consumables", brand: "Kiswel", img: "welding_kiswel.png", price: 240, desc: "Kiswel welding wire and consumables." },
    { name: "Inverter Welding Machine Range", brand: "Techweld", img: "welding_techweld.png", price: 1850, desc: "Ready-for-welding inverter machine range." },
    { name: "Industrial Welding System", brand: "Grote", img: "welding_grote.png", price: 4200, desc: "Grote industrial welding equipment." },
    { name: "Portable Welding Unit", brand: "Electroheat", img: "welding_electroheat.png", price: 2100, desc: "Electroheat portable welding machine." },
    { name: "Gas Equipment Regulator", brand: "Gasiq", img: "welding_gasiq.png", price: 380, desc: "Gasiq Optimator gas regulator equipment." },
    { name: "Inverter Welding Machine", brand: "Weldman", img: "welding_weldman.png", price: 1650, desc: "Weldman compact inverter welder." },
    { name: "Leather Welding Gloves (Red)", brand: "Vaultex", img: "welding_gloves.png", price: 35, desc: "Red leather welding gloves, heat-resistant." },
  ],
};

// Build categories with a real thumbnail (first product photo in that category)
export const categories = categoriesMeta.map((c) => ({
  ...c,
  image: P + rawProducts[c.id][0].img,
}));

let idCounter = 1;
export const products = categories.flatMap((cat) =>
  rawProducts[cat.id].map((p, i) => ({
    id: `P${String(idCounter++).padStart(4, "0")}`,
    categoryId: cat.id,
    categoryName: cat.name,
    name: p.name,
    brand: p.brand,
    price: p.price,
    image: P + p.img,
    sku: `NHE-${cat.code}-${String(i + 1).padStart(3, "0")}`,
    inStock: true,
    description: `${p.desc} Part of our ${cat.name.toLowerCase()} range, distributed by NHE Trading across Dubai.`,
  }))
);

export const getProductsByCategory = (categoryId) => products.filter((p) => p.categoryId === categoryId);
export const getCategoryById = (id) => categories.find((c) => c.id === id);
export const getProductById = (id) => products.find((p) => p.id === id);
