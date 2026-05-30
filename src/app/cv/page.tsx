export default function CVPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-2 animate-fade-in-up">
        Curriculum Vitae
      </h1>
      <p className="text-muted mb-12 animate-fade-in-up stagger-1">
        A snapshot of where I&apos;ve been and what I&apos;ve done.
      </p>

      {/* Education */}
      <Section title="Education">
        <CVEntry
          title="Duke University"
          subtitle="MS in Global Health | Certificate in Innovation and Entrepreneurship"
          date="Aug 2024 – May 2026"
          details={[
            "Focus on implementation science, data analysis, and health equity",
            "Thesis: Cost-optimized nutrition intervention for pediatric cancer patients in Mwanza, Tanzania",
          ]}
        />
        <CVEntry
          title="Brigham Young University"
          subtitle="BS in Public Health | Minor in International Development"
          date="Aug 2019 – Jun 2023"
        />
      </Section>

      {/* Work Experience */}
      <Section title="Work Experience">
        <CVEntry
          title="Data Specialist"
          subtitle="Empower Playgrounds Inc | Remote"
          date="Jan 2023 – Present"
          details={[
            "Analyzing operational and outcome data using Qualtrics, Excel, and R to communicate results and recommendations",
            "Visualizing data through interactive dashboards using Google Looker Studio",
            "Co-designed 3 surveys in collaboration with Ghanaian team members and local stakeholders",
            "Trained team members on data collection, improving accuracy and program evaluation",
          ]}
        />
        <CVEntry
          title="Research Assistant"
          subtitle="Duke University | Durham, NC"
          date="Oct 2024 – Aug 2025"
          details={[
            "Collaborated with US and Tanzanian medical staff to design an educational app for caregivers of children with cancer",
            "Created programmer flowcharts to streamline app development",
            "Bridged the gap between the education team and app development team",
          ]}
        />
        <CVEntry
          title="Assistant Executive Director"
          subtitle="2ft Prosthetics | Remote"
          date="Dec 2022 – Aug 2024"
          details={[
            "Led a project in the Dominican Republic building prosthetic legs for 63 patients with a local rehabilitation clinic",
            "Initiated an evaluation process tracking patient outcomes of 80+ individuals",
            "Developed organizational OKRs and a weekly tracking system for performance",
            "Personally raised over $6,000; assisted in raising over $25,000 and procuring 551 prosthetic component donations",
          ]}
        />
        <CVEntry
          title="John R. Lewis Public Health Scholar"
          subtitle="Centers for Disease Control and Prevention | Hybrid"
          date="May 2023 – Jul 2023"
          details={[
            "Mentored research on disparities in amputation rates among American Indians and Alaska Natives",
            "Training in tribal community engagement, racial misclassification, and indigenous evaluation",
          ]}
        />
        <CVEntry
          title="Intern"
          subtitle="Yoga and Sport with Refugees | Mitilini, Greece"
          date="Mar 2023 – Jun 2023"
          details={[
            "Facilitated a safe, welcoming environment for refugees to participate in sports and physical activity",
            "Taught a women's self-defense class",
          ]}
        />
        <CVEntry
          title="Coach"
          subtitle="Agema Jiujitsu and MMA | Provo, UT"
          date="Apr 2021 – Feb 2023"
          details={[
            "Taught kickboxing and jiu jitsu classes to kids ages 4–12",
          ]}
        />
        <CVEntry
          title="Mentor"
          subtitle="STRIC Forward LLC | Orem, UT"
          date="Apr 2022 – Aug 2022"
          details={[
            "Individualized mentorship and life-skills training for young adults with mental health challenges",
            "Collaborated weekly with a multidisciplinary team on personalized treatment plans",
          ]}
        />
      </Section>

      {/* Volunteer */}
      <Section title="Volunteer Work">
        <CVEntry
          title="Disaster Action Team Member"
          subtitle="American Red Cross | Durham, NC"
          date="Aug 2025 – Present"
          details={[
            "Disaster risk assessments, emergency response operations, and household assistance",
          ]}
        />
        <CVEntry
          title="Volunteer"
          subtitle="Know Your Neighbor | Salt Lake City, UT"
          date="Jan 2021 – Feb 2023"
          details={[
            "Taught a science GED class to Iraqi refugee women",
            "Mentored an Afghan refugee family adjusting to life in the US",
          ]}
        />
        <CVEntry
          title="Volunteer"
          subtitle="Bountiful Children's Foundation | Provo, UT"
          date="Sep 2020 – Jun 2021"
          details={[
            "Created online learning modules on child health topics for local leaders in developing countries",
          ]}
        />
      </Section>

      {/* Certifications */}
      <Section title="Certifications">
        <CVEntry
          title="Project Management for Development Professionals (PMD PRO)"
          subtitle="Issued Nov 2025"
          date=""
        />
      </Section>

      {/* Skills */}
      <Section title="Skills">
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-accent mb-3">Technical</h3>
          <div className="flex flex-wrap gap-2">
            {["R", "SAS", "Excel", "Tableau", "Qualtrics", "Google Looker Studio", "Next.js", "TypeScript"].map(
              (skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full text-sm bg-accent/10 text-accent font-medium"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-accent mb-3">Core Competencies</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Project Management",
              "Mixed-Methods Research",
              "Implementation Science",
              "Policy Analysis",
              "Data Visualization",
              "Cross-Cultural Collaboration",
              "Fundraising",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 rounded-full text-sm bg-accent/10 text-accent font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-accent mb-3">Languages</h3>
          <div className="flex flex-wrap gap-2">
            {["English (Native)", "Spanish (C1)", "Swahili (A1)"].map(
              (lang) => (
                <span
                  key={lang}
                  className="px-3 py-1 rounded-full text-sm bg-accent/10 text-accent font-medium"
                >
                  {lang}
                </span>
              )
            )}
          </div>
        </div>
      </Section>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6 text-accent">{title}</h2>
      <div className="space-y-8">{children}</div>
    </section>
  );
}

function CVEntry({
  title,
  subtitle,
  date,
  details,
}: {
  title: string;
  subtitle: string;
  date: string;
  details?: string[];
}) {
  return (
    <div className="relative pl-6 border-l-2 border-card-border hover:border-accent transition-colors">
      <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-accent/30 border-2 border-accent" />
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
        <h3 className="font-semibold text-lg">{title}</h3>
        {date && <span className="text-sm text-muted">{date}</span>}
      </div>
      <p className="text-muted text-sm mb-2">{subtitle}</p>
      {details && (
        <ul className="space-y-1">
          {details.map((d, i) => (
            <li key={i} className="text-sm text-muted flex items-start gap-2">
              <span className="text-accent mt-1">•</span>
              {d}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
