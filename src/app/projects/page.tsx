"use client";

import { useState } from "react";
import { ProjectCard, ProjectModal } from "@/components/ProjectModal";
import type { Project } from "@/components/ProjectModal";

const projects: Project[] = [
  {
    title:
      "Balancing Culture, Nutrition, and Budget: The Design & Implementation of a Cost-Optimized Meal Plan for Pediatric Cancer Patients in Tanzania",
    shortDescription:
      "For my master's thesis I led a mixed-methods implementation science study designing, implementing, and evaluating a cost-optimized meal plan for pediatric cancer patients in Mwanza, Tanzania",
    fullDescription:
      "For my master's thesis I led a mixed-methods implementation science study designing, implementing, and evaluating a cost-optimized meal plan for pediatric cancer patients in Mwanza, Tanzania. Used linear programming (R/lpSolve) and stakeholder co-creation to create a program that not only improved nutrition within the budget, but was also feasible, sustainable, and acceptable to everyone involved.",
    tags: [
      "R",
      "Implementation Science",
      "Mixed Methods",
      "lpSolve",
      "Program Design",
      "Program Evaluation",
      "Project Management",
    ],
    link: "https://globalhealth.duke.edu/student-showcases/balancing-culture-nutrition-budget-design-implementation-cost-optimized-meal-plan",
    linkLabel: "View on Duke Global Health",
    images: [
      "/images/thesis-defense.jpg",
      "/images/graduation.jpg",
    ],
  },
  {
    title: "EPI Data Dashboard",
    shortDescription:
      "I built an interactive dashboard for Empower Playgrounds Inc. that consolidates all field data into one place, allowing the team to see day-to-day activities, up-to-date profiles on all 70+ of their schools, and organization overall impact",
    fullDescription:
      "I built an interactive dashboard for Empower Playgrounds Inc. that consolidates all field data into one place, allowing the team to see day-to-day activities, up-to-date profiles on all 70+ of their schools, and organization overall impact.\n\nA full-stack automated data dashboard using R, Quarto, JavaScript, and Vercel, with a GitHub Actions ETL pipeline pulling live Qualtrics survey data into an interactive web application with serverless API endpoints.",
    tags: [
      "R",
      "Data Visualization",
      "Qualtrics",
      "Quarto",
      "GitHub Actions",
      "ETL/Data Pipeline",
      "JavaScript",
      "Google Sheets API",
      "Vercel",
      "Monitoring & Evaluation (M&E)",
    ],
    caption: "Built with Claude Code as my pair programmer",
    images: [
      "/images/epi-ghana.jpg",
    ],
  },
{
    title: "Comparing Refugee Camps Across Greece, Türkiye, and Chad",
    shortDescription:
      "I was part of a team researching select topics on refugee camp management globally. I contributed to an article comparing and contrasting refugee camps between Greece, Türkiye, and Chad",
    fullDescription:
      "I was part of a team researching select topics on refugee camp management globally. I contributed to an article comparing and contrasting refugee camps between Greece, Türkiye, and Chad.",
    tags: ["Literature Reviews", "Academic Writing"],
    link: "https://www.tandfonline.com/doi/full/10.1080/09332480.2025.2575730",
    linkLabel: "Read the publication",
  },
  {
    title: "Mom's Meals",
    shortDescription:
      "This is a family recipe app I made for my mom. The \"Help me decide\" feature walks through a quick decision tree to narrow down what to make",
    fullDescription:
      "This is a family recipe app I made for my mom. The \"Help me decide\" feature walks through a quick decision tree (who's home, preferred cuisines, ingredients she wants to use up, how much time she has, etc) to narrow down what to make. A swipeable \"Try Something New\" mode pulls fresh ideas from Spoonacular when she wants inspiration. To add recipes to the library, she can snap a photo of a recipe card or paste a link, and AI extracts the title, ingredients, and steps automatically. She can also plan out weekly meals and generate a one-click grocery list that merges ingredients across every planned recipe.",
    tags: ["Next.js", "Supabase", "TypeScript", "Claude API"],
    caption: "Built with Claude Code as my pair programmer",
  },
];

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-2 animate-fade-in-up">Projects</h1>
      <p className="text-muted mb-12 animate-fade-in-up stagger-1">
        Research, builds, and passion projects.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.title}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
