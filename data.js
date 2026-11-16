/* =====================================================================
   SITE CONTENT — the only file you need to edit.
   ---------------------------------------------------------------------
   - Facts come from Sadi_Rabin_Resume.pdf (Nov 2026 version). Lines that
     could not be backed up were reworded here; see the note sent with
     that update. Only add a metric once you can explain how you measured it.
   - Anything written as "[PLACEHOLDER ...]" shows up highlighted on the
     site so it is easy to spot. Replace the text to make it go away.
   - To add a project: copy one { ... } block inside `projects`, change
     the text, save. Layout and numbering update on their own.
   - Privacy rules for this site: no phone number, no client names,
     no nursery pricing.
   ===================================================================== */

window.SITE = {
  meta: {
    name: "Sadi Rabin",
    location: "Rockville, MD",
    email: "sadirabin@gmail.com",
    linkedin: "https://www.linkedin.com/in/sadi-rabin",
    linkedinLabel: "linkedin.com/in/sadi-rabin",
    // Put a photo in assets/ and write its path here, e.g. "assets/headshot.jpg"
    headshot: "assets/headshot.jpg",
    headshotAlt: "Portrait of Sadi Rabin",
    tableau: "https://public.tableau.com/app/profile/sadi.rabin",
    // Your resume PDF. After replacing the file, change the ?v= date so browsers fetch the new copy.
    resumePdf: "assets/Sadi_Rabin_Resume.pdf?v=2026-11-15e"
  },

  hero: {
    eyebrow: "Information Systems & Marketing · UMD Smith School of Business",
    headline: "I turn messy, manual business data into accurate, client-ready reporting systems.",
    intro:
      "Information Systems & Marketing student at the University of Maryland's Robert H. Smith School of Business, working in SQL, Excel and Tableau with a focus on data quality, validation and clear client communication.",
    rolesLabel: "Open to roles in",
    roles: ["Product & business analysis", "Business systems & automation", "Product management"],
    // Three proof points shown beside the headline. All from the resume.
    proof: [
      { value: "99+", label: "plant products consolidated into one validated report" },
      { value: "Fridays back", label: "for the head of sales and marketing, whose weekly tally took the whole day" },
      { value: "8", label: "model-prompt combinations compared: four LLMs under two prompt structures" }
    ]
  },

  /* -------------------------------------------------------------------
     PROJECTS — shown in this order. `demo: "inventory"` attaches the
     interactive sample dashboard to that project.
     ------------------------------------------------------------------- */
  projects: [
    {
      id: "inventory",
      title: "Weekly Inventory & Availability System",
      org: "Living Colors Nursery",
      role: "Business Systems & Data Analytics Intern",
      dates: "Jun 2026 – Aug 2026",
      place: "Homestead, FL",
      summary: "Replacing a 30+ year-old manual tracking method with one validated source of truth.",
      problem:
        "Client-facing reports were inaccurate. Interviews with sales, production and ownership across 5 shade houses and 2 greenhouses traced it to a root-cause data-quality gap: inconsistent handwritten inventory logs.",
      did:
        "Built a company-wide digital inventory tracking system: a two-tier Excel design with SUMIFS- and TEXTJOIN-based automation, automated data-quality checks, and a bilingual English/Spanish entry interface.",
      result:
        "One validated weekly report covering 40,000–50,000 plants across 99+ products. The weekly tally used to take the head of sales and marketing her whole Friday; she said the system eliminated her Fridays. It became a single entry step: counts go in once, the sales-team summary recalculates, and a client-facing availability sheet fills in size, variety, quantity and readiness status automatically. Staff add the remaining columns by hand, then export it to PDF. Presented to ownership and adopted by the head of sales and marketing, with a staff-wide pilot planned.",
      tools: ["Excel", "SUMIFS", "TEXTJOIN", "FILTER", "Data-quality checks", "Stakeholder interviews"],
      stats: [
        { value: "40–50K", label: "plants tracked weekly across 99+ products" },
        { value: "7", label: "growing houses covered (5 shade houses, 2 greenhouses)" }
      ],
      links: [],
      demo: "inventory"
    },
    {
      id: "discounts",
      title: "Deep Discounts Are Erasing Profit",
      org: "SQL + Tableau Public",
      role: "",
      dates: "Nov 2026",
      place: "",
      summary: "SQL and Tableau analysis of 9,994 retail order lines: lines discounted over 20% were 14% of the total but caused 89% of all losses.",
      tools: ["SQL", "Tableau", "Dashboard design", "AI design critique"],
      before: {
        images: [
          { src: "assets/before-dashboard-1.png", alt: "Before, dashboard 1: six charts on profit and quantity by product type, region and state, including two maps and a pie chart." },
          { src: "assets/before-dashboard-2.png", alt: "Before, dashboard 2: bar charts, pie charts and maps of the top five states by discounts and by sales." }
        ],
        caption: "Team class project: 12 charts covering sales, products and regions, with no single takeaway."
      },
      embed: {
        src: "https://public.tableau.com/views/DeepDiscountsAreErasingProfit/DeepDiscountsAreErasingProfit?:embed=y&:showVizHome=no&:display_count=no",
        title: "Interactive Tableau dashboard: Deep Discounts Are Erasing Profit",
        link: { label: "View on Tableau Public", href: "https://public.tableau.com/app/profile/sadi.rabin/viz/DeepDiscountsAreErasingProfit/DeepDiscountsAreErasingProfit" }
      },
      changes: [
        "Analyzed the data with SQL and found the real driver: deep discounts caused 89% of losses",
        "Cut 12 charts down to 4 that each answer part of one question",
        "Replaced pie charts and maps with ranked bar charts that are easier to compare",
        "Wrote titles that state the finding, so the point lands in seconds",
        "Added filters and click-to-filter so viewers can explore by region, category and state",
        "Used AI feedback to critique the design, then decided which changes to make"
      ],
      recommendation:
        "Cap routine discounts at 20%, review Tables and Bookcases pricing, and audit promotions in Texas, Ohio, Pennsylvania and Illinois."
    },
    {
      id: "workbook-market",
      title: "Is the Three-in-One Workbook Gap Real?",
      org: "Python + SQL market analysis",
      role: "",
      dates: "Nov 2026",
      place: "",
      summary: "Testing my own product's market gap against 72,852 Amazon listings instead of a hand-picked sample.",
      problem:
        "My children's workbooks are built on a gap I found by reviewing 50+ competing titles by hand: few books combine coloring, alphabet letter tracing and fun facts. A sample that small can't show how rare the combination really is.",
      did:
        "Built an AI-assisted pipeline: Python streamed the public Amazon Reviews 2023 book metadata (4.4 million records) down to 72,852 children's titles, keyword rules tagged each one for theme coloring, letter tracing, theme fun facts and an early-childhood audience, and SQL compared the segments. I checked the rules against a 75-book review and tightened them when my definitions and theirs disagreed.",
      result:
        "Only 6 of 1,979 early-childhood alphabet workbooks (0.3%) combined all three. 285 already paired coloring with letter tracing, so fun facts is the piece that sets the format apart. Caveats: the data ends in 2023, and three-in-one titles averaged fewer ratings (176 vs 309), so the gap is real but demand is unproven.",
      tools: ["Python", "SQL (SQLite)", "Tableau", "Keyword classification", "Rule validation", "AI-assisted coding"],
      stats: [
        { value: "6 of 1,979", label: "early-childhood alphabet workbooks with all three features" },
        { value: "92%", label: "agreement between the rules and a 75-book review on three-in-one titles" },
        { value: "72,852", label: "children's titles classified" }
      ],
      links: [],
      embed: {
        tag: "Live dashboard",
        phoneHeight: 1530,
        src: "https://public.tableau.com/views/Base_17948034157440/WorkbookMarketGap?:embed=y&:showVizHome=no&:display_count=no",
        title: "Interactive Tableau dashboard: Is the Three-in-One Workbook Gap Real?",
        link: { label: "View on Tableau Public", href: "https://public.tableau.com/app/profile/sadi.rabin/viz/Base_17948034157440/WorkbookMarketGap" }
      }
    },
    {
      id: "llm",
      title: "LLM Reliability Analysis",
      org: "Generative AI · prompt design",
      role: "",
      dates: "Mar 2026 – Apr 2026",
      place: "",
      summary: "Comparing how four LLMs respond to two ways of structuring the same prompt.",
      problem:
        "For a financial-advice assistant, the same request can produce very different output depending on the model and on how the prompt is structured.",
      did:
        "Ran the same financial-advice task through 8 model-prompt combinations: two prompt structures (COSTAR and a 6-step format) on four models (ChatGPT, Gemini, Claude and Perplexity).",
      result:
        "A documented side-by-side comparison of all 8 outputs. In this qualitative review, Claude gave the most structured and readable plan under both prompt structures, and Perplexity the least detailed. No numeric reliability score was measured.",
      tools: ["Prompt engineering", "COSTAR", "ChatGPT", "Gemini", "Claude", "Perplexity"],
      stats: [
        { value: "8", label: "model-prompt combinations compared" },
        { value: "4", label: "LLMs tested" }
      ],
      links: [{ label: "Working notes (PDF)", href: "assets/prompt-engineering-notes.pdf" }]
    },
    {
      id: "n8n",
      title: "Personal Information Hub",
      org: "n8n multi-agent automation",
      role: "",
      dates: "Mar 2026 – Apr 2026",
      place: "",
      summary: "One automated feed of job postings, movie info and local weather, replacing daily checks of three sites.",
      problem:
        "Checking three sites every day for job postings, movie information and the weather is repetitive work, and the same pattern (pulling data from separate systems into one view) is at the core of business systems analysis.",
      did:
        "Engineered a multi-agent workflow in n8n: a main agent coordinates 3 sub-agents to aggregate real-time data from Indeed, IMDb and Weather APIs, then the nested JSON payloads are cleaned and parsed into structured formats.",
      result: "One workflow run returns structured tables from all three sources, with no manual copying or JSON clean-up.",
      tools: ["n8n", "REST APIs", "JSON parsing", "Workflow automation"],
      stats: [
        { value: "1 + 3", label: "main agent coordinating three sub-agents" },
        { value: "3", label: "live API sources aggregated" }
      ],
      links: [{ label: "Watch the demo (video)", href: "assets/ai-agent-demo.mp4" }]
    },
    {
      id: "kdp",
      title: "Children's Workbook Product Line",
      org: "Self-published children's workbooks (Amazon KDP)",
      role: "Founder & Author",
      dates: "Jan 2025 – Present",
      place: "Rockville, MD",
      summary: "Spotting a gap in a crowded market, then shipping the product that fills it.",
      problem:
        "The children's workbook market looked saturated, but in a competitive analysis of 50+ titles, none in that sample combined coloring, tracing and fun facts in one product.",
      did:
        "Combined the three into a single product concept and used keyword search-volume data across three content categories to choose titles and positioning. Generated illustrations with Canva's AI image tools, then reviewed every image and hand-fixed AI errors (distorted hands, missing or excess detail), avoiding the cost of an illustrator.",
      result: "Two published 80-page titles in the ABC Alphabet Adventures series, ABC Alphabet Animals and ABC Alphabet Mythology. Each combines letter tracing, coloring and fun facts for ages 3 and up.",
      tools: ["Competitive analysis", "Keyword research", "Canva AI image tools", "Amazon KDP"],
      stats: [
        { value: "50+", label: "competitor titles analyzed" },
        { value: "2", label: "published titles, 80 pages each" }
      ],
      links: [
        { label: "ABC Alphabet Animals on Amazon", href: "https://www.amazon.com/dp/B0DVT3TDCL" },
        { label: "ABC Alphabet Mythology on Amazon", href: "https://www.amazon.com/dp/B0G1C1TXS4" }
      ]
    }
  ],

  skills: [
    {
      group: "Data & analysis",
      items: [
        { name: "Excel", detail: "SUMIFS, TEXTJOIN, VLOOKUP, pivot tables, Solver" },
        { name: "SQL", detail: "" },
        { name: "Python", detail: "Pandas, NumPy" }
      ]
    },
    {
      group: "Visualization",
      items: [
        { name: "Tableau", detail: "Dashboards, data stories" },
        { name: "Power BI", detail: "" },
        { name: "Looker Studio", detail: "" }
      ]
    },
    {
      group: "Automation & AI",
      items: [
        { name: "n8n", detail: "" },
        { name: "REST APIs", detail: "JSON" },
        { name: "LLM prompt design", detail: "" },
        { name: "Generative AI design tools", detail: "" }
      ]
    }
  ],

  education: {
    school: "University of Maryland, Robert H. Smith School of Business",
    place: "College Park, MD",
    degree: "Bachelor of Business Administration, Information Systems and Marketing (Double Major)",
    date: "Expected May 2028",
    coursework: [
      "Database Management",
      "Business Analytics & Programming",
      "Financial & Managerial Accounting",
      "Finance"
    ],
    activities: ["Black Business Association", "Ethiopian Student Association"]
  },

  /* Used on the site's Experience section and on the resume page. */
  experience: [
    {
      role: "Business Systems & Data Analytics Intern",
      org: "Living Colors Nursery",
      dates: "Jun 2026 – Aug 2026",
      place: "Homestead, FL",
      bullets: [
        "Traced inaccurate client-facing reports to inconsistent handwritten inventory logs by interviewing sales, production and ownership across 5 shade houses and 2 greenhouses",
        "Designed a two-tier Excel system to replace a 30+ year-old paper process, tracking 40,000–50,000 plants across 99+ products weekly in one validated report, freeing the head of sales and marketing's Fridays, which the manual tally had taken up",
        "Automated roll-ups and data-quality checks with SUMIFS and TEXTJOIN, and built a bilingual English/Spanish entry form so Spanish-speaking floor staff could log counts directly",
        "Presented the system to ownership; adopted by the head of sales and marketing, with a staff-wide pilot planned"
      ]
    },
    {
      role: "Founder & Author",
      org: "Self-Published Children's Workbooks (Amazon KDP)",
      dates: "Jan 2025 – Present",
      place: "Rockville, MD",
      bullets: [
        "Spotted a market gap in 50+ titles, then tested it on 72,852 Amazon listings with AI-assisted Python and SQL: only 6 of 1,979 early-childhood alphabet workbooks combined coloring, letter tracing and fun facts",
        "Designed and published 2 workbooks around that concept, using keyword search-volume data across 3 content categories to choose titles and positioning",
        "Generated illustrations with Canva's AI image tools, then reviewed every image and hand-fixed AI errors (distorted hands, missing or excess detail), avoiding the cost of an illustrator"
      ]
    },
    {
      role: "Senior Counselor",
      org: "Camp Ramah in New England",
      dates: "Jun 2025 – Jul 2025",
      place: "Palmer, MA",
      bullets: [
        "Created and led division-wide events for 75+ campers, such as 6-team water capture the flag, delegating roles (captains, referees) so every counselor had a job",
        "Talked with campers and staff to learn what each kid enjoyed, and designed alternative activities for campers who didn't want to compete so everyone could take part",
        "Supervised a 15-camper bunk and turned around low morale: from not wanting to return to 100% committing to come back"
      ]
    }
  ],

  /* Resume-page wording for projects. */
  resumeProjects: [
    {
      title: "Retail Discount & Profitability Dashboard",
      org: "Tableau",
      dates: "Nov 2026",
      place: "",
      link: { label: "View live", href: "https://public.tableau.com/app/profile/sadi.rabin/viz/DeepDiscountsAreErasingProfit/DeepDiscountsAreErasingProfit" },
      bullets: [
        "Wrote SQL queries to clean and analyze 9,994 retail order lines, finding that lines discounted over 20% were 14% of all lines but caused 89% of all losses ($138.5K of $156.1K)",
        "Rebuilt a team class project into a published, interactive Tableau dashboard tracing those losses to specific states and product lines; recommended a 20% discount cap",
        "Used generative AI to critique the design and iterated on it, replacing pie charts and maps with ranked comparisons and a click-to-filter view"
      ]
    },
    {
      title: "LLM Reliability Analysis",
      org: "",
      dates: "Mar 2026 – Apr 2026",
      place: "",
      bullets: [
        "Compared how 4 AI chatbots (ChatGPT, Gemini, Claude, Perplexity) handled the same financial-advice task under 2 prompt structures (COSTAR and a 6-step format), 8 model-and-prompt combinations in all",
        "Reviewed each output for structure and depth; Claude gave the most organized plan under both prompt structures"
      ]
    },
    {
      title: "Personal Information Hub",
      org: "n8n Automation",
      dates: "Mar 2026 – Apr 2026",
      place: "",
      bullets: [
        "Built an n8n workflow pulling job postings (Indeed), movie info (IMDb) and local weather into one automated feed, replacing daily checks of 3 sites",
        "Coordinated a main agent and 3 sub-agents to call each REST API and clean nested JSON into structured tables"
      ]
    }
  ],

  leadership: [
    {
      role: "Founding Member",
      org: "Phi Delta Theta",
      dates: "Sep 2025 – Present",
      place: "College Park, MD",
      bullets: [
        "Helped grow a new chapter from 0 to 67+ members in its first year by running recruitment events, leading outreach and shaping recruitment and brotherhood strategy"
      ],
      stat: { value: "67+", label: "members within one year" }
    }
  ],

  designNotes: {
    intro:
      "The site is a small case study of its own: same habits as the nursery project, applied to a web page.",
    notes: [
      {
        title: "One source of truth",
        body: "Every word on this page comes from a single data file. Adding a project means adding one entry; the layout, numbering and resume page update themselves."
      },
      {
        title: "A ten-second read",
        body: "The first screen answers three questions in order: who I am, what roles I want, and what proof exists. Details sit below for anyone who keeps reading."
      },
      {
        title: "One accent, two typefaces",
        body: "A single botanical green carries every link, number and highlight. Bricolage Grotesque handles headlines; Instrument Sans handles reading text."
      },
      {
        title: "Structure like a greenhouse",
        body: "Thin rules and numbered bays replace boxes and shadows. Case studies alternate sides so the page never settles into a card grid."
      },
      {
        title: "Show, then tell",
        body: "The inventory demo runs on clearly labeled sample data. It shows the idea (messy log in, validated report out) without exposing real stock or pricing."
      },
      {
        title: "Built to be read by everyone",
        body: "Light and dark themes, keyboard-reachable controls, visible focus states, text contrast at WCAG AA, and no motion for visitors who ask for less."
      }
    ],
    stack: "Plain HTML, CSS and JavaScript, with no framework and no build step. Built by directing Claude Code, an AI coding agent: I set the content rules (no invented numbers), reviewed every change, and verified the data claims myself."
  },

  contact: {
    heading: "Have data that needs sorting out?",
    body: "I'm looking for summer 2027 internships in product and business analysis and in business systems and automation. Email is the fastest way to reach me."
  },

  /* -------------------------------------------------------------------
     SAMPLE DATA for the interactive demo. Invented for illustration:
     not real nursery inventory, no pricing. `raw` is what a handwritten
     log might say; `clean` is what a validated entry would hold.
     issue: "" | "duplicate" | "missingSize" | "notNumber" | "missingQty" | "unit"
     mergeInto: index of the row a duplicate folds into.
     ------------------------------------------------------------------- */
  sampleInventory: {
    houses: [
      { id: "SH1", type: "shade", n: 1 },
      { id: "SH2", type: "shade", n: 2 },
      { id: "SH3", type: "shade", n: 3 },
      { id: "SH4", type: "shade", n: 4 },
      { id: "SH5", type: "shade", n: 5 },
      { id: "GH1", type: "green", n: 1 },
      { id: "GH2", type: "green", n: 2 }
    ],
    rows: [
      { house: "SH1", raw: { plant: "Areca Palm", size: '10"', qty: "120" }, clean: { plant: "Areca Palm", size: '10"', qty: 120 }, issue: "" },
      { house: "SH1", raw: { plant: "areca palm", size: '10 in', qty: "30" }, clean: { plant: "Areca Palm", size: '10"', qty: 30 }, issue: "duplicate", mergeInto: 0 },
      { house: "SH1", raw: { plant: "Croton", size: "", qty: "35" }, clean: { plant: "Croton", size: '6"', qty: 35 }, issue: "missingSize" },
      { house: "SH2", raw: { plant: "Bird of Paradise", size: "3 gal", qty: "approx 40" }, clean: { plant: "Bird of Paradise", size: "3 gal", qty: 40 }, issue: "notNumber" },
      { house: "SH2", raw: { plant: "Monstera", size: '10"', qty: "64" }, clean: { plant: "Monstera", size: '10"', qty: 64 }, issue: "" },
      { house: "SH3", raw: { plant: "Philodendron", size: '6"', qty: "210" }, clean: { plant: "Philodendron", size: '6"', qty: 210 }, issue: "" },
      { house: "SH3", raw: { plant: "Bromeliad", size: '6"', qty: "95" }, clean: { plant: "Bromeliad", size: '6"', qty: 95 }, issue: "" },
      { house: "SH3", raw: { plant: "Bromelaid", size: '6"', qty: "15" }, clean: { plant: "Bromeliad", size: '6"', qty: 15 }, issue: "duplicate", mergeInto: 6 },
      { house: "SH4", raw: { plant: "Snake Plant", size: '10"', qty: "80" }, clean: { plant: "Snake Plant", size: '10"', qty: 80 }, issue: "" },
      { house: "SH4", raw: { plant: "Ti Plant", size: "3 gal", qty: "" }, clean: { plant: "Ti Plant", size: "3 gal", qty: 22 }, issue: "missingQty" },
      { house: "SH5", raw: { plant: "Pothos", size: '6"', qty: "180" }, clean: { plant: "Pothos", size: '6"', qty: 180 }, issue: "" },
      { house: "SH5", raw: { plant: "Hibiscus", size: "3 gal", qty: "48" }, clean: { plant: "Hibiscus", size: "3 gal", qty: 48 }, issue: "" },
      { house: "GH1", raw: { plant: "Fiddle Leaf Fig", size: '10"', qty: "56" }, clean: { plant: "Fiddle Leaf Fig", size: '10"', qty: 56 }, issue: "" },
      { house: "GH1", raw: { plant: "Anthurium", size: '6"', qty: "7 doz" }, clean: { plant: "Anthurium", size: '6"', qty: 84 }, issue: "unit" },
      { house: "GH2", raw: { plant: "Orchid", size: '6"', qty: "130" }, clean: { plant: "Orchid", size: '6"', qty: 130 }, issue: "" },
      { house: "GH2", raw: { plant: "Peace Lily", size: '10"', qty: "72" }, clean: { plant: "Peace Lily", size: '10"', qty: 72 }, issue: "" }
    ],
    // Interface labels in both languages (the real system's entry screen was bilingual).
    labels: {
      en: {
        title: "Weekly availability",
        sample: "Sample data for illustration. Not real nursery inventory.",
        house: "House", plant: "Plant", size: "Pot size", qty: "Available", status: "Check",
        all: "All houses", shade: "Shade House", green: "Greenhouse",
        raw: "Handwritten log", clean: "Validated report",
        view: "View", lang: "Labels", filter: "Filter by house",
        products: "Product lines", units: "Units available", flags: "Open data flags",
        unverified: "countable entries only",
        ok: "OK", merged: "merged",
        duplicate: "Duplicate entry", missingSize: "Pot size missing", notNumber: "Quantity is not a number",
        missingQty: "Quantity missing", unit: "Mixed unit (dozens)",
        byHouse: "Units by house",
        rawNote: "Flagged entries cannot be trusted as written. Totals built on this log would be wrong.",
        cleanNote: "Duplicates merged, units converted, blanks blocked at entry. One number per product.",
        empty: "blank"
      },
      es: {
        title: "Disponibilidad semanal",
        sample: "Datos de muestra con fines ilustrativos. No es inventario real del vivero.",
        house: "Casa", plant: "Planta", size: "Tamaño de maceta", qty: "Disponible", status: "Revisión",
        all: "Todas las casas", shade: "Casa de sombra", green: "Invernadero",
        raw: "Registro a mano", clean: "Informe validado",
        view: "Vista", lang: "Etiquetas", filter: "Filtrar por casa",
        products: "Líneas de producto", units: "Unidades disponibles", flags: "Alertas de datos abiertas",
        unverified: "solo entradas contables",
        ok: "OK", merged: "combinado",
        duplicate: "Entrada duplicada", missingSize: "Falta el tamaño", notNumber: "La cantidad no es un número",
        missingQty: "Falta la cantidad", unit: "Unidad mixta (docenas)",
        byHouse: "Unidades por casa",
        rawNote: "Las entradas marcadas no son confiables tal como están escritas. Los totales saldrían mal.",
        cleanNote: "Duplicados combinados, unidades convertidas, espacios en blanco bloqueados. Un número por producto.",
        empty: "en blanco"
      }
    }
  }
};
