import { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { SkillCategory } from '@/components/skill-category';
import { ExperienceItem } from '@/components/experience-item';
import { profileData, skills, experience } from '@/lib/data';

export const metadata: Metadata = {
  title: 'About | Abdulbasit Makinde',
  description: 'Learn more about my background, skills, and experience as a frontend developer.',
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Me"
        description="Crafting beautiful and accessible web experiences for over 5 years"
      />

      <div className="grid gap-12 md:grid-cols-3">
        {/* Bio Section */}
        <div className="md:col-span-2 space-y-6">
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-foreground">My Story</h2>
            <p className="text-muted-foreground leading-relaxed">
              I&apos;m a frontend developer passionate about creating intuitive, performant, and accessible web applications.
              With over 5 years of experience working on diverse projects, I&apos;ve developed a deep appreciation for clean code,
              thoughtful design, and excellent user experiences.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My journey into web development began during my studies when I realized the power of building things for the web.
              Since then, I&apos;ve had the privilege of working with talented teams at various companies, from startups to established tech firms.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I&apos;m not coding, you can find me reading about web technologies, contributing to open-source projects,
              or sharing knowledge with the community through writing and mentoring.
            </p>
          </div>
        </div>

        {/* Quick Facts */}
        <div className="space-y-6">
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">
              Quick Facts
            </h3>
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="font-medium text-foreground">Location</dt>
                <dd className="text-muted-foreground">{profileData.location}</dd>
              </div>
              <div>
                <dt className="font-medium text-foreground">Experience</dt>
                <dd className="text-muted-foreground">5+ Years</dd>
              </div>
              <div>
                <dt className="font-medium text-foreground">Focus</dt>
                <dd className="text-muted-foreground">Accessibility & Performance</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <section className="mt-16 space-y-8">
        <h2 className="text-2xl font-bold text-foreground">Skills & Expertise</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {skills.map((skillGroup) => (
            <SkillCategory
              key={skillGroup.category}
              category={skillGroup.category}
              skills={skillGroup.skills}
            />
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="mt-16 space-y-8">
        <h2 className="text-2xl font-bold text-foreground">Experience</h2>
        <div className="max-w-2xl">
          {experience.map((exp, index) => (
            <ExperienceItem
              key={index}
              title={exp.title}
              company={exp.company}
              period={exp.period}
              description={exp.description}
            />
          ))}
        </div>
      </section>
    </>
  );
}
