import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center space-y-6 max-w-md">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-foreground">404</h1>
          <p className="text-xl text-muted-foreground">Page not found</p>
        </div>

        <p className="text-muted-foreground">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link href="/">
            <Button className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back Home
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline">
              Get Help
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
