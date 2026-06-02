import Polaroid, { PolaroidPlaceholder } from "@/components/Polaroid";

export default function CVPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-12 animate-fade-in-up">
        Curriculum Vitae
      </h1>

      {/* Education */}
      <Section title="Education">
        <CVEntry
          title="Duke University"
          subtitle="MS in Global Health | Certificate in Innovation and Entrepreneurship"
          date="Aug 2024 – May 2026"
        >
          <p>Focus on implementation science, data analysis and visualization, and global health policy</p>
          <p>Thesis: Balancing Culture, Nutrition, and Budget: The Design &amp; Implementation of a Cost-Optimized Nutrition Program for Pediatric Cancer Patients in Tanzania</p>
          <div className="flex gap-3 mt-3 flex-wrap">
            <Polaroid src="/images/graduation.jpg" caption="Graduation" rotate="left" />
            <Polaroid src="/images/thesis-defense.jpg" caption="Thesis defense" rotate="right" />
          </div>
        </CVEntry>
        <CVEntry
          title="Brigham Young University"
          subtitle="BS in Public Health, Health Science emphasis | Minor in International Development"
          date="Aug 2016 – Jun 2023"
        />
      </Section>

      {/* Work Experience */}
      <Section title="Work Experience">
        <CVEntry
          title="Data Specialist"
          subtitle="Empower Playgrounds Inc | Remote"
          date="Jan 2023 – Present"
        >
          <p>
            I spent most of my time at EPI trying to figure out how we could better collect and utilize our data. I built a custom, interactive data dashboard powered by an automated data pipeline that delivers live updates from our field surveys, giving staff in Ghana and the U.S. real-time visibility into every school we serve. I also co-designed better surveys with our team in Ghana and the University of Ghana, trained staff on stronger data collection practices, and helped with fundraising campaigns to show donors the real impact of our work.
          </p>
        </CVEntry>
        <CVEntry
          title="Research Assistant"
          subtitle="Duke University | Durham, NC"
          date="Oct 2024 – Aug 2025"
        >
          <p>
            I helped build an educational app for caregivers of kids with cancer, working with US and Tanzanian medical staff, education specialists, and app developers. I created programmer flowcharts of the app structure, helped create videos, and generally served as the go-between for the education and tech teams to make sure both sides stayed aligned.
          </p>
        </CVEntry>
        <CVEntry
          title="Housekeeper"
          subtitle="Holland America and Princess Cruise Lines | Denali National Park, AK"
          date="Mar 2024 – Jul 2024"
        >
          <p>
            I spent a season working as a housekeeper in Denali, AK for Holland America/Princess Cruise Lines as part of their land-cruise operation.
          </p>
          <div className="flex gap-3 mt-3 flex-wrap">
            <PolaroidPlaceholder caption="Denali" rotate="left" />
          </div>
        </CVEntry>
        <CVEntry
          title="Assistant Executive Director"
          subtitle="2ft Prosthetics | Remote"
          date="Dec 2022 – Aug 2024"
        >
          <p>
            This was one of those roles where I got to do a bit of everything. I started the organization&apos;s first real monitoring and evaluation process, tracked outcomes for 80+ patients, and matched people with partner clinics around the world so they could get care. I helped lead a project in the Dominican Republic building prosthetic legs for 63 patients, built out our OKRs and weekly tracking system, and raised money while helping bring in hundreds of donated components. I also took on social media and fundraising campaigns and spent a lot of time figuring out how to make our impact and operations a lot sharper.
          </p>
          <div className="flex gap-3 mt-3 flex-wrap">
            <PolaroidPlaceholder caption="Dominican Republic" rotate="right" />
            <PolaroidPlaceholder caption="2ft team" rotate="left" />
          </div>
        </CVEntry>
        <CVEntry
          title="John R. Lewis Public Health Scholar"
          subtitle="CDC John R. Lewis Public Health Scholars Program | Hybrid"
          date="May 2023 – Jul 2023"
        >
          <p>
            I was selected for this competitive, 8-week summer internship through the CDC. I received public health training, with a focus on tribal health in the US. I also worked with a mentor on a project examining disparities in amputation rates among American Indian and Alaska Native communities. We finished the program presenting our findings at the CDC.
          </p>
          <div className="flex gap-3 mt-3 flex-wrap">
            <PolaroidPlaceholder caption="CDC poster" rotate="right" />
          </div>
        </CVEntry>
        <CVEntry
          title="Intern"
          subtitle="Yoga and Sport with Refugees | Lesvos, Greece"
          date="Mar 2023 – Jun 2023"
        >
          <p>
            I worked with Yoga and Sport with Refugees in Lesvos, Greece, helping run their gym and facilitating a welcoming environment. I taught a women&apos;s self-defense class, updated the website, and took trainings on EU refugee policy/current events. This was such a meaningful experience to me and taught me firsthand the power of sports for community-building and resilience.
          </p>
          <div className="flex gap-3 mt-3 flex-wrap">
            <PolaroidPlaceholder caption="Lesvos" rotate="left" />
            <PolaroidPlaceholder caption="The gym" rotate="right" />
          </div>
        </CVEntry>
        <CVEntry
          title="Coach"
          subtitle="Agema Jiujitsu and MMA | Provo, UT"
          date="Apr 2021 – Feb 2023"
        >
          <p>I taught kickboxing and jiujitsu to kids ages 4–12.</p>
        </CVEntry>
        <CVEntry
          title="Mentor"
          subtitle="STRIV Forward LLC | Orem, UT"
          date="Apr 2022 – Aug 2022"
        >
          <p>
            I was a support mentor for young adults with mental health disorders, helping them navigate tough situations, teaching life skills, and supporting their transition to more independent living.
          </p>
        </CVEntry>
        <CVEntry
          title="Nanny and English Teacher"
          subtitle="Heraklion, Greece"
          date="Jun 2019 – Aug 2019"
        >
          <p>
            I worked as a live-in nanny for a French family living in Greece to help their children learn English.
          </p>
          <div className="flex gap-3 mt-3 flex-wrap">
            <PolaroidPlaceholder caption="Crete" rotate="right" />
          </div>
        </CVEntry>
      </Section>

      {/* Volunteer */}
      <Section title="Volunteer Work">
        <CVEntry
          title="Mentor"
          subtitle="CDC John R. Lewis Scholar's Program"
          date="2025 – Present"
        >
          <p>
            I am currently serving as an undergraduate mentor for an 8-week CDC-funded program focused on Tribal public health research and workforce development. I provide weekly one-on-one mentorship on research development, project presentation, and career exploration.
          </p>
        </CVEntry>
        <CVEntry
          title="Disaster Action Team Member"
          subtitle="American Red Cross | Durham, NC"
          date="Aug 2025 – Present"
        >
          <p>
            I am being trained with the American Red Cross Disaster Action Team to conduct disaster risk assessments, support emergency response operations, and assist affected households.
          </p>
        </CVEntry>
        <CVEntry
          title="Proyecto Casa"
          subtitle=""
          date="Oct 2024 – Dec 2024"
        >
          <p>
            I launched a grassroots fundraising campaign for Christmas to help rebuild a friend&apos;s family home in Venezuela, raising over $5,000 in under two months. I built a custom donation website that offered a &ldquo;shopping cart&rdquo; experience, allowing donors to &ldquo;purchase&rdquo; specific items needed.
          </p>
        </CVEntry>
        <CVEntry
          title="Volunteer"
          subtitle="Know Your Neighbor | Salt Lake City, UT"
          date="Jan 2021 – Feb 2023"
        >
          <p>
            I drafted policies and procedures for a refugee-owned business, acted as a mentor to a family from Afghanistan, and taught a science GED class to Iraqi refugee women.
          </p>
        </CVEntry>
        <CVEntry
          title="Volunteer"
          subtitle="Anatomy Academy | Provo, UT"
          date="Sep 2019 – Jun 2022"
        >
          <p>
            I prepared and taught fun, interactive lessons for elementary school kids about the human body and healthy behaviors.
          </p>
        </CVEntry>
        <CVEntry
          title="Volunteer"
          subtitle="Bountiful Children's Foundation | Provo, UT"
          date="Sep 2020 – Jun 2021"
        >
          <p>
            I helped create online learning modules on child health topics including breastfeeding, nutrition, and cognitive development.
          </p>
        </CVEntry>
        <CVEntry
          title="Volunteer Service"
          subtitle="Church of Jesus Christ of Latter-day Saints | Fort Collins, CO"
          date="Aug 2017 – Mar 2019"
        >
          <p>
            I spent 18 months talking to strangers, helping with local service projects, and sharing the message of Jesus Christ across Colorado, Wyoming, and Nebraska. It was exhausting, humbling, and one of the most rewarding experiences of my life.
          </p>
          <div className="flex gap-3 mt-3 flex-wrap">
            <PolaroidPlaceholder caption="Colorado" rotate="left" />
          </div>
        </CVEntry>
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
  children,
}: {
  title: string;
  subtitle: string;
  date: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="relative pl-6 border-l-2 border-card-border hover:border-accent transition-colors">
      <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-accent/30 border-2 border-accent" />
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
        <h3 className="font-semibold text-lg">{title}</h3>
        {date && <span className="text-sm text-muted">{date}</span>}
      </div>
      {subtitle && <p className="text-muted text-sm mb-2">{subtitle}</p>}
      {children && (
        <div className="text-sm text-muted space-y-2 leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}
