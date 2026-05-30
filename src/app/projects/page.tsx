import Image from "next/image";

const projects = [
  {
    title: "Master's Thesis: Pediatric Nutrition in Tanzania",
    description:
      "Led a mixed-methods implementation science study designing a cost-optimized meal plan for pediatric cancer patients in Mwanza, Tanzania. Used linear programming (R/lpSolve) and stakeholder co-creation to achieve 88–94% approval rates.",
    tags: ["R", "Implementation Science", "Mixed Methods", "lpSolve"],
    emoji: "🇹🇿",
    image: "/images/tanzania-poster.jpg",
    hasImage: false,
  },
  {
    title: "EPI Impact Dashboard",
    description:
      "Interactive dashboard tracking Empower Playgrounds Inc.'s impact across Ghana — built with R, Quarto, and automated GitHub Actions pipelines.",
    tags: ["R", "Quarto", "GitHub Actions", "Data Viz"],
    emoji: "🇬🇭",
    hasImage: false,
  },
  {
    title: "Proyecto Casa",
    description:
      "Launched a grassroots fundraising campaign to rebuild a friend's family home in Venezuela, raising over $5,000 in under two months. Built a custom donation website with a 'shopping cart' experience for donors.",
    tags: ["Fundraising", "Web Design", "Community"],
    emoji: "🏠",
    hasImage: false,
  },
  {
    title: "CDC Amputation Disparities Research",
    description:
      "Conducted a literature review on disparities in lower-leg amputation rates among American Indians and Alaska Natives as a John R. Lewis Public Health Scholar. Presented research poster at the CDC Lewis-Ferguson showcase in Atlanta.",
    tags: ["Epidemiology", "Health Equity", "CDC"],
    emoji: "🔬",
    image: "/images/cdc-poster.jpg",
    hasImage: false,
  },
  {
    title: "Refugee Camps Comparison",
    description:
      "Published article comparing refugee camps across Greece, Turkiye, and Chad in Chance magazine (Vol. 38, 2025).",
    tags: ["Publication", "Refugee Health", "Research"],
    emoji: "📄",
    hasImage: false,
  },
  {
    title: "Mom's Meal Planner",
    description:
      "A recipe and meal planning app built for my mom — featuring a 'help me decide' randomizer, grocery list generation, and a growing recipe collection.",
    tags: ["Next.js", "React", "Supabase", "TypeScript"],
    emoji: "🍳",
    hasImage: false,
  },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-2 animate-fade-in-up">Projects</h1>
      <p className="text-muted mb-12 animate-fade-in-up stagger-1">
        Research, builds, and passion projects — from implementation science in
        East Africa to fundraising campaigns for friends.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <div
            key={project.title}
            className={`group rounded-2xl border border-card-border bg-card-bg p-6 transition-all hover:shadow-lg hover:-translate-y-1 hover:border-accent/30 animate-fade-in-up stagger-${Math.min(i + 2, 5)}`}
          >
            {project.hasImage && project.image ? (
              <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden bg-card-border">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform">
                {project.emoji}
              </span>
            )}
            <h2 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
              {project.title}
            </h2>
            <p className="text-muted text-sm leading-relaxed mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded-full text-xs bg-accent/10 text-accent font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
