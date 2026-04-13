import { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { ProjectCard } from '@/components/project-card';
import { projects } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Projects | Abdulbasit Makinde',
  description: 'Explore my portfolio of projects showcasing web development expertise.',
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="My Projects"
        description="A selection of projects I&apos;ve built and contributed to, showcasing my skills in frontend development and full-stack applications."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            tags={project.tags}
            link={project.link}
            featured={project.featured}
          />
        ))}
      </div>
    </>
  );
}
