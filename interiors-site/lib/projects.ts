export interface ProjectTimelineItem {
  phase: string;
  detail: string;
}

export interface Project {
  id: number;
  title: string;
  slug: string;
  category: string;
  location: string;
  area: string;
  summary: string;
  palette: string;
  highlights: string[];
  image: string;
  gallery: string[];
  client: string;
  duration: string;
  budget: string;
  year: string;
  challenge: string;
  solution: string;
  services: string[];
  outcomes: string[];
  timeline: ProjectTimelineItem[];
}

const fallbackProjects: Project[] = [
  {
    id: 1,
    title: "Serene Urban Apartment",
    slug: "serene-urban-apartment",
    category: "Residential",
    location: "Indiranagar, Bangalore",
    area: "1,950 sq ft",
    summary:
      "A calm, family-friendly apartment with layered lighting, custom storage, and soft natural textures.",
    palette: "Beige, teak, muted olive",
    highlights: ["Custom media wall", "Integrated study nook", "Acoustic paneling"],
    image:
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600",
    gallery: [
      "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1400",
      "https://images.pexels.com/photos/6489127/pexels-photo-6489127.jpeg?auto=compress&cs=tinysrgb&w=1400",
      "https://images.pexels.com/photos/6032419/pexels-photo-6032419.jpeg?auto=compress&cs=tinysrgb&w=1400",
    ],
    client: "Young family of four",
    duration: "14 weeks",
    budget: "INR 46L",
    year: "2025",
    challenge:
      "Create a storage-rich layout without making the apartment feel heavy, while preserving natural light in every room.",
    solution:
      "We integrated wall-to-wall concealed joinery, soft reflective finishes, and layered lighting zones to keep the home open and calming.",
    services: ["Space planning", "Custom furniture", "Lighting design", "Styling and decor"],
    outcomes: [
      "32% increase in usable storage",
      "Dedicated work-from-home zone added",
      "Low-maintenance family-friendly finishes",
    ],
    timeline: [
      { phase: "Discovery", detail: "Lifestyle mapping, mood references, and measured site audit." },
      { phase: "Design", detail: "Layout planning, 3D views, and final material + lighting selections." },
      { phase: "Execution", detail: "Joinery production, site coordination, and final styling handover." },
    ],
  },
  {
    id: 2,
    title: "Boutique Fashion Studio",
    slug: "boutique-fashion-studio",
    category: "Retail",
    location: "Koramangala, Bangalore",
    area: "1,200 sq ft",
    summary:
      "A boutique format focused on premium display zones, smooth circulation, and statement mirrors.",
    palette: "Terracotta, brass, ivory",
    highlights: ["Curved trial suites", "Window storytelling", "POS zoning"],
    image:
      "https://images.pexels.com/photos/6585750/pexels-photo-6585750.jpeg?auto=compress&cs=tinysrgb&w=1600",
    gallery: [
      "https://images.pexels.com/photos/6312352/pexels-photo-6312352.jpeg?auto=compress&cs=tinysrgb&w=1400",
      "https://images.pexels.com/photos/6312075/pexels-photo-6312075.jpeg?auto=compress&cs=tinysrgb&w=1400",
      "https://images.pexels.com/photos/7679880/pexels-photo-7679880.jpeg?auto=compress&cs=tinysrgb&w=1400",
    ],
    client: "Independent fashion label",
    duration: "9 weeks",
    budget: "INR 28L",
    year: "2024",
    challenge:
      "Maximize product visibility and trial-room comfort inside a narrow retail footprint.",
    solution:
      "Introduced curved fixtures, mirrored side walls, and guided circulation to create a premium, spacious feel.",
    services: ["Retail zoning", "Fixture detailing", "Lighting strategy", "Brand styling"],
    outcomes: [
      "Higher in-store dwell time",
      "Improved sightlines to feature collections",
      "Efficient queue management at POS",
    ],
    timeline: [
      { phase: "Concept", detail: "Brand story workshop and customer movement mapping." },
      { phase: "Development", detail: "Fixture design package, material specifications, and BOQ." },
      { phase: "Fit-out", detail: "On-site supervision, VM setup, and opening-day readiness." },
    ],
  },
  {
    id: 3,
    title: "Contemporary Villa Lounge",
    slug: "contemporary-villa-lounge",
    category: "Hospitality",
    location: "Whitefield, Bangalore",
    area: "3,400 sq ft",
    summary:
      "A versatile social lounge with rich material contrast and modular seating for hosting.",
    palette: "Walnut, charcoal, copper",
    highlights: ["Modular lounge seating", "Layered cove lighting", "Material-led wayfinding"],
    image:
      "https://images.pexels.com/photos/6707634/pexels-photo-6707634.jpeg?auto=compress&cs=tinysrgb&w=1600",
    gallery: [
      "https://images.pexels.com/photos/5998138/pexels-photo-5998138.jpeg?auto=compress&cs=tinysrgb&w=1400",
      "https://images.pexels.com/photos/6032420/pexels-photo-6032420.jpeg?auto=compress&cs=tinysrgb&w=1400",
      "https://images.pexels.com/photos/3935350/pexels-photo-3935350.jpeg?auto=compress&cs=tinysrgb&w=1400",
    ],
    client: "Private villa owner",
    duration: "16 weeks",
    budget: "INR 72L",
    year: "2025",
    challenge:
      "Design a high-impact entertainment lounge that could adapt to intimate evenings and large social events.",
    solution:
      "Used reconfigurable furniture clusters, layered acoustic treatment, and scene-based smart lighting presets.",
    services: ["Hospitality planning", "Custom seating", "Acoustic strategy", "Smart lighting"],
    outcomes: [
      "Flexible seating for 12 to 40 guests",
      "Acoustic comfort improved for events",
      "Distinct mood presets for day and night use",
    ],
    timeline: [
      { phase: "Planning", detail: "Event-use analysis, adjacency mapping, and user personas." },
      { phase: "Design", detail: "Furniture prototyping, ceiling studies, and lighting simulations." },
      { phase: "Delivery", detail: "Vendor coordination, QA checks, and final experience styling." },
    ],
  },
];

interface StrapiResponse {
  data?: Array<{
    id: number;
    attributes?: {
      title?: string;
      slug?: string;
      category?: string;
      location?: string;
      area?: string;
      summary?: string;
      palette?: string;
      highlights?: string[];
      image?: string;
      gallery?: string[];
      client?: string;
      duration?: string;
      budget?: string;
      year?: string;
      challenge?: string;
      solution?: string;
      services?: string[];
      outcomes?: string[];
      timeline?: ProjectTimelineItem[];
    };
  }>;
}

const cmsUrl = process.env.STRAPI_URL || "http://localhost:1337";

export async function getProjects(): Promise<Project[]> {
  try {
    const response = await fetch(`${cmsUrl}/api/projects`, {
      next: { revalidate: 300 },
      headers: { Accept: "application/json" },
    });

    if (!response.ok) {
      return fallbackProjects;
    }

    const payload = (await response.json()) as StrapiResponse;
    const items = payload.data ?? [];

    if (!items.length) {
      return fallbackProjects;
    }

    return items
      .map((project, index) => {
        const fallback = fallbackProjects[index % fallbackProjects.length];
        return {
          id: project.id,
          title: project.attributes?.title || fallback.title,
          slug: project.attributes?.slug || `project-${project.id}`,
          category: project.attributes?.category || fallback.category,
          location: project.attributes?.location || fallback.location,
          area: project.attributes?.area || fallback.area,
          summary: project.attributes?.summary || fallback.summary,
          palette: project.attributes?.palette || fallback.palette,
          highlights: project.attributes?.highlights || fallback.highlights,
          image: project.attributes?.image || fallback.image,
          gallery: project.attributes?.gallery || fallback.gallery,
          client: project.attributes?.client || fallback.client,
          duration: project.attributes?.duration || fallback.duration,
          budget: project.attributes?.budget || fallback.budget,
          year: project.attributes?.year || fallback.year,
          challenge: project.attributes?.challenge || fallback.challenge,
          solution: project.attributes?.solution || fallback.solution,
          services: project.attributes?.services || fallback.services,
          outcomes: project.attributes?.outcomes || fallback.outcomes,
          timeline: project.attributes?.timeline || fallback.timeline,
        };
      })
      .sort((a, b) => a.id - b.id);
  } catch {
    return fallbackProjects;
  }
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  const projects = await getProjects();
  return projects.find((project) => project.slug === slug);
}
