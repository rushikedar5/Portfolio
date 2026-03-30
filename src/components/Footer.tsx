import SocialLinks from "./SocialLinks";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Rushi. Built with Next.js.
        </p>
        <div className="flex items-center gap-6">
          <SocialLinks />
          <Link href="/resume.pdf" target="_blank" download>
            <Button size="sm" variant="outline">
              Resume
            </Button>
          </Link>
        </div>
      </div>
    </footer>
  );
}