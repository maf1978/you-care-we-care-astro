export const site = {
  name: 'You Care We Care Tree Service',
  shortName: 'You Care We Care',
  tagline: 'You Care, We Care — for every tree',
  url: 'https://youcarewecaretreeservice.com',
  phone: '813-393-6106',
  phoneTel: '+18133936106',
  email: 'YOUcareWEcareCJ@gmail.com',
  address: {
    street: '5311 Ike Smith Rd',
    city: 'Plant City',
    state: 'FL',
    zip: '33565',
    country: 'US',
  },
  mapsUrl: 'https://maps.app.goo.gl/xmg8yMPmHp88rKEu6',
  googleBusinessUrl: 'https://maps.app.goo.gl/xmg8yMPmHp88rKEu6',
  facebookUrl: 'https://facebook.com/YOUcareWEcare.TreeService',
  priceRange: '$$',
  rating: {
    value: '5.0',
    count: 10,
  },
  /** Mock credentials for design preview — replace before launch */
  credentials: {
    license: 'FL License #MOCK-TREE-0001',
    insurance: 'Fully Insured & Bonded — Policy #MOCK-INS-0001',
    note: 'Mock credentials for website preview only',
  },
  hours: {
    label: 'Open 24/7 for Emergency Tree Service',
    schema: {
      opens: '00:00',
      closes: '23:59',
      days: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
    },
  },
  logo: 'https://vibe.filesafe.space/1783471532929655026/attachments/3ccd02d0-b456-4d60-8fc8-71e1c980c614.png',
  ogImage:
    'https://vibe.filesafe.space/1783471532929655026/assets/dc7dc9ec-5dbf-47b5-8614-66e93b152f17.png',
  teamImage:
    'https://vibe.filesafe.space/1783471532929655026/assets/4f20d7d6-044e-48e8-9802-e1406d840896.png',
  heroImage:
    'https://vibe.filesafe.space/1783471532929655026/assets/a3ac6a0f-304a-41f6-97ff-5c2b7b219927.png',
  leadCapture: {
    type: 'webhook' as const,
    /** Set PUBLIC_GHL_WEBHOOK_URL in Netlify / .env when ready */
    webhookEnvKey: 'PUBLIC_GHL_WEBHOOK_URL',
  },
  defaultSeo: {
    title: 'You Care We Care Tree Service — Top-Rated Tree Removal in Plant City',
    description:
      'Professional tree removal, trimming, and 24/7 emergency storm cleanup in Plant City, FL and Tampa Bay. Call today for a FREE ESTIMATE.',
  },
} as const;

export const services = [
  {
    slug: 'tree-removal',
    title: 'Tree Removal',
    shortDescription:
      'Safe, efficient removal of dead, dangerous, or unwanted trees from your property.',
    hook: 'Safe, efficient removal of dead, dangerous, or unwanted trees.',
    description:
      "Whether a tree is dead, diseased, leaning dangerously, or simply in the way of your next landscaping project, our expert team can remove it safely. We handle massive oaks, towering pines, and complex removals near structures with precision.",
    signs: [
      'Visible decay or large dead branches',
      'Leaning suddenly or roots lifting',
      'Storm damage compromising the trunk',
      'Too close to power lines or your home',
    ],
    process: [
      {
        title: 'Assessment',
        text: "We evaluate the tree's health and surroundings to determine the safest removal method.",
      },
      {
        title: 'Preparation',
        text: 'We secure the area and bring in the right equipment, from bucket trucks to rigging gear.',
      },
      {
        title: 'Removal',
        text: 'We carefully dismantle the tree piece by piece to protect your property.',
      },
      {
        title: 'Cleanup',
        text: 'We haul away the debris and rake the area clean.',
      },
    ],
    priceFactors:
      "The cost of tree removal depends on the tree's size, location, accessibility, and complexity. A small, easily accessible tree costs less than a massive oak hanging over a roof. We always provide a clear, upfront free estimate before starting.",
    image:
      'https://vibe.filesafe.space/1783471532929655026/assets/a3ac6a0f-304a-41f6-97ff-5c2b7b219927.png',
    featured: true,
    order: 1,
  },
  {
    slug: 'tree-trimming',
    title: 'Tree Trimming & Pruning',
    shortDescription:
      'Expert pruning to promote healthy growth, improve appearance, and remove hazards.',
    hook: 'Expert pruning for healthier, safer, and better-looking trees.',
    description:
      "Regular trimming is essential for the health and structural integrity of your trees. We expertly prune oaks, palms, and other Florida species to remove deadwood, improve canopy airflow, and enhance the overall aesthetic of your property.",
    signs: [
      'Branches rubbing against each other or your roof',
      'Too much shade preventing grass growth',
      'Dead or hanging branches (widow-makers)',
      'Overgrown, messy appearance',
    ],
    process: [
      {
        title: 'Evaluation',
        text: 'We identify which branches need removal for health and structure.',
      },
      {
        title: 'Pruning',
        text: 'Using proper techniques, we make clean cuts that heal quickly.',
      },
      {
        title: 'Shaping',
        text: 'We balance the canopy for wind resistance and visual appeal.',
      },
      {
        title: 'Cleanup',
        text: 'All trimmings are chipped and hauled away.',
      },
    ],
    priceFactors:
      'Pricing is based on the size of the tree, the amount of pruning required, and accessibility. Regular maintenance is often more cost-effective than waiting for a tree to become overgrown or dangerous.',
    image:
      'https://vibe.filesafe.space/1783471532929655026/assets/bb6ce611-464a-4882-bcf7-8828e9728da5.png',
    featured: true,
    order: 2,
  },
  {
    slug: 'emergency-storm-damage',
    title: 'Emergency & Storm Damage',
    shortDescription:
      '24/7 fast response to safely clear fallen trees and storm debris from your property.',
    hook: '24/7 fast response for fallen trees and storm cleanup.',
    description:
      "Florida storms can wreak havoc on your property. When a tree falls on your house, driveway, or fence, you need immediate help. Our 24/7 emergency response team is ready to safely remove fallen trees and secure your property.",
    signs: [
      'Tree fallen on structures or vehicles',
      'Uprooted trees blocking access',
      'Large broken branches hanging dangerously',
      'Post-hurricane debris clearing',
    ],
    process: [
      {
        title: 'Emergency Call',
        text: 'You call us 24/7, and we dispatch a crew as quickly as possible.',
      },
      {
        title: 'Securing the Site',
        text: 'We assess the danger and stabilize the situation.',
      },
      {
        title: 'Safe Removal',
        text: 'We use specialized equipment to lift and remove heavy debris without causing further damage.',
      },
      {
        title: 'Tarping & Cleanup',
        text: 'We clear the debris and can help coordinate with your insurance.',
      },
    ],
    priceFactors:
      'Emergency services depend on the severity of the situation, time of day, and equipment needed. We provide honest, on-the-spot estimates even in emergencies.',
    image:
      'https://vibe.filesafe.space/1783471532929655026/assets/f942995f-eea5-4fd5-8cb7-e3f4261fdb89.png',
    featured: true,
    order: 3,
  },
  {
    slug: 'stump-grinding',
    title: 'Stump Grinding & Removal',
    shortDescription:
      'Complete removal of unsightly stumps to reclaim your yard and prevent pests.',
    hook: 'Complete removal of unsightly stumps to reclaim your yard.',
    description:
      "Don't let an ugly stump ruin your landscape or attract termites. Our heavy-duty stump grinders can obliterate stumps of any size, grinding them well below the surface so you can replant, sod, or build over the area.",
    signs: [
      'Tripping hazards in your yard',
      'Termites or ants nesting in the stump',
      'Difficulty mowing around it',
      'Planning new landscaping or construction',
    ],
    process: [
      {
        title: 'Utility Check',
        text: 'We ensure the area is clear of underground utilities.',
      },
      {
        title: 'Grinding',
        text: 'Our machine grinds the stump and major surface roots into mulch.',
      },
      {
        title: 'Backfilling',
        text: 'We fill the hole with the resulting wood chips and soil.',
      },
      {
        title: 'Cleanup',
        text: 'We leave the area level and tidy.',
      },
    ],
    priceFactors:
      'Stump grinding is usually priced by the diameter of the stump. Multiple stumps often qualify for a better per-stump rate.',
    image:
      'https://vibe.filesafe.space/1783471532929655026/assets/c716f5c4-8264-4fdb-8181-08541bcf11ea.png',
    featured: true,
    order: 4,
  },
  {
    slug: 'dead-wooding',
    title: 'Dead Wooding & Tree Health',
    shortDescription:
      'Protect your property by removing dead and dangerous branches.',
    hook: 'Protect your property by removing dead and dangerous branches.',
    description:
      'Dead branches are a liability—they can fall at any time, causing injury or property damage. Dead wooding involves carefully climbing or using a bucket truck to remove these hazards, which also prevents disease from spreading to the rest of the tree.',
    signs: [
      'Branches without leaves during growing season',
      'Fungus growing on branches',
      'Bark peeling off limbs',
      'Brittle wood that breaks easily',
    ],
    process: [
      {
        title: 'Inspection',
        text: 'We identify all dead, dying, or diseased wood.',
      },
      {
        title: 'Safe Removal',
        text: 'We carefully cut and lower dead branches without damaging healthy ones.',
      },
      {
        title: 'Health Assessment',
        text: "We check the overall health of the tree to ensure it's structurally sound.",
      },
      {
        title: 'Cleanup',
        text: 'All debris is removed from your property.',
      },
    ],
    priceFactors:
      'Cost depends on the height of the tree, the amount of dead wood, and how difficult it is to access the branches safely.',
    image:
      'https://vibe.filesafe.space/1783471532929655026/assets/bb6ce611-464a-4882-bcf7-8828e9728da5.png',
    featured: false,
    order: 5,
  },
  {
    slug: 'hedge-shrub-trimming',
    title: 'Hedge & Shrub Trimming',
    shortDescription: 'Keep your landscape looking sharp and well-maintained.',
    hook: 'Keep your landscape looking sharp and well-maintained.',
    description:
      'Overgrown hedges can make a property look neglected. We provide professional shaping and trimming for hedges and shrubs of all sizes, ensuring clean lines and promoting thick, healthy growth.',
    signs: [
      'Hedges encroaching on walkways or driveways',
      'Uneven, messy growth',
      'Thinning at the bottom due to lack of sunlight',
      'Blocking windows or views',
    ],
    process: [
      {
        title: 'Consultation',
        text: 'We discuss the desired shape and height.',
      },
      {
        title: 'Trimming',
        text: 'Using professional shears, we create clean, even lines.',
      },
      {
        title: 'Detailing',
        text: 'We hand-prune where necessary for optimal health.',
      },
      {
        title: 'Cleanup',
        text: 'We rake up every clipping, leaving your yard immaculate.',
      },
    ],
    priceFactors:
      'Pricing is based on the total linear footage and height of the hedges, as well as the time since their last trim.',
    image:
      'https://vibe.filesafe.space/1783471532929655026/assets/bb6ce611-464a-4882-bcf7-8828e9728da5.png',
    featured: false,
    order: 6,
  },
] as const;

export const locations = [
  {
    slug: 'plant-city',
    city: 'Plant City',
    hook: 'Our hometown base for fast, reliable tree service.',
    zipCodes: ['33563', '33565', '33566', '33567'],
    neighborhoods: ['Walden Lake', 'Country Club Estates', 'Cork', 'Trapnell'],
    nearby: ['tampa', 'brandon', 'valrico', 'lakeland'],
    isHq: true,
  },
  {
    slug: 'tampa',
    city: 'Tampa',
    hook: 'Expert tree removal and trimming across the Tampa area.',
    zipCodes: ['33602', '33606', '33609', '33629', '33647'],
    neighborhoods: ['South Tampa', 'Westchase', 'New Tampa', 'Seminole Heights'],
    nearby: ['plant-city', 'brandon', 'carrollwood', 'temple-terrace'],
    isHq: false,
  },
  {
    slug: 'brandon',
    city: 'Brandon',
    hook: 'Professional tree care for Brandon homes and businesses.',
    zipCodes: ['33510', '33511'],
    neighborhoods: ['Bloomingdale', 'Limona', 'Providence'],
    nearby: ['plant-city', 'riverview', 'valrico', 'tampa'],
    isHq: false,
  },
  {
    slug: 'riverview',
    city: 'Riverview',
    hook: 'Safe, efficient tree services in Riverview.',
    zipCodes: ['33569', '33578', '33579'],
    neighborhoods: ['Apollo Beach nearby', 'Balm', 'FishHawk adjacent'],
    nearby: ['brandon', 'tampa', 'valrico'],
    isHq: false,
  },
  {
    slug: 'valrico',
    city: 'Valrico',
    hook: 'Top-rated tree removal and pruning in Valrico.',
    zipCodes: ['33594', '33596'],
    neighborhoods: ['Bloomingdale East', 'Lithia nearby'],
    nearby: ['brandon', 'plant-city', 'riverview'],
    isHq: false,
  },
  {
    slug: 'lutz',
    city: 'Lutz',
    hook: 'Trusted tree service professionals serving Lutz.',
    zipCodes: ['33548', '33549', '33558', '33559'],
    neighborhoods: ['Cheval', 'Keystone nearby'],
    nearby: ['land-o-lakes', 'wesley-chapel', 'carrollwood'],
    isHq: false,
  },
  {
    slug: 'land-o-lakes',
    city: "Land O' Lakes",
    hook: "Expert tree care for Land O' Lakes properties.",
    zipCodes: ['34637', '34638', '34639'],
    neighborhoods: ['Connerton', 'Lake Padgett'],
    nearby: ['lutz', 'wesley-chapel'],
    isHq: false,
  },
  {
    slug: 'wesley-chapel',
    city: 'Wesley Chapel',
    hook: 'Fast response tree services in Wesley Chapel.',
    zipCodes: ['33543', '33544', '33545'],
    neighborhoods: ['Wiregrass', 'Saddlebrook nearby'],
    nearby: ['lutz', 'land-o-lakes', 'tampa'],
    isHq: false,
  },
  {
    slug: 'carrollwood',
    city: 'Carrollwood',
    hook: 'Professional tree trimming and removal in Carrollwood.',
    zipCodes: ['33612', '33618', '33624'],
    neighborhoods: ['Northdale', 'Lake Magdalene'],
    nearby: ['tampa', 'lutz', 'temple-terrace'],
    isHq: false,
  },
  {
    slug: 'temple-terrace',
    city: 'Temple Terrace',
    hook: 'Your local tree service experts in Temple Terrace.',
    zipCodes: ['33617', '33637'],
    neighborhoods: ['Terrace Park', 'Riverhills'],
    nearby: ['tampa', 'carrollwood', 'brandon'],
    isHq: false,
  },
] as const;

export const reviews = [
  {
    name: 'Kyle C.',
    city: 'Plant City',
    text: 'Unbelievably fast, efficient and 100% professional. Removed our massive oak tree before lunch, and it\'s like it was never there!',
  },
  {
    name: 'Tim K.',
    city: 'Tampa',
    text: 'The most experienced group of guys that do all things trees! Quick, extremely clean, reasonably priced. I have hired them three times.',
  },
  {
    name: 'Traditions Rentals',
    city: 'Brandon',
    text: 'We needed some trees trimmed around our storage units and it was a quick and easy process! Will be calling again.',
  },
  {
    name: 'Rocky G.',
    city: 'Valrico',
    text: 'CJ was very professional and kind. Did exactly everything he said he would do in the time he said.',
  },
  {
    name: 'Melissa P.',
    city: 'Riverview',
    text: 'Really quick and efficient, and they cleaned everything up when they were done!',
  },
  {
    name: 'Scott V.',
    city: 'Lutz',
    text: 'Fast and professional. Did a great job taking 2 giant trees down.',
  },
] as const;

export const faqs = [
  {
    question: 'Do you offer free estimates?',
    answer:
      "Yes, we provide free, no-obligation estimates for all tree services. We'll assess the job and give you a clear price on the spot.",
  },
  {
    question: 'Are you available for emergencies?',
    answer:
      'Absolutely. We offer 24/7 emergency tree removal and storm damage cleanup. When a tree falls, you can count on us to respond fast.',
  },
  {
    question: 'Do you clean up after the job?',
    answer:
      "Yes! Thorough cleanup is one of our top priorities. We leave your property looking better than we found it.",
  },
  {
    question: 'Do you serve commercial properties?',
    answer:
      'Yes, we handle both residential and commercial tree care needs across Plant City and the Tampa Bay area.',
  },
  {
    question: 'Are you licensed and insured?',
    answer:
      'Yes. We carry licensing and insurance for tree work (mock numbers shown on this preview site — real credentials will replace them before launch). Ask for proof on any estimate.',
  },
] as const;

export const recentJobs = [
  {
    title: 'Storm-damaged oak removal',
    city: 'Plant City',
    neighborhood: 'Walden Lake',
    response: 'Same-day',
    service: 'Emergency & Storm Damage',
  },
  {
    title: 'Canopy thinning on live oaks',
    city: 'Brandon',
    neighborhood: 'Bloomingdale',
    response: '48 hours',
    service: 'Tree Trimming & Pruning',
  },
  {
    title: 'Two pine removals near driveway',
    city: 'Riverview',
    neighborhood: 'FishHawk adjacent',
    response: 'Next-day',
    service: 'Tree Removal',
  },
  {
    title: 'Stump grind after removal',
    city: 'Valrico',
    neighborhood: 'Lithia nearby',
    response: 'Same visit',
    service: 'Stump Grinding & Removal',
  },
] as const;

export type Service = (typeof services)[number];
export type Location = (typeof locations)[number];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getLocation(slug: string) {
  return locations.find((l) => l.slug === slug);
}
