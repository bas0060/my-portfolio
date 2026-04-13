'use client';

interface PageHeaderProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export function PageHeader({ title, description, children }: PageHeaderProps) {
  return (
    <div className="mb-12 space-y-4">
      <h1 className="text-4xl font-bold text-foreground text-balance">
        {title}
      </h1>
      {description && (
        <p className="text-lg text-muted-foreground max-w-2xl text-balance">
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
