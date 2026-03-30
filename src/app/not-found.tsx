import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-6 items-start pt-8">
      <div className="flex flex-col gap-2">
        <p className="text-muted-foreground text-sm font-medium tracking-widest uppercase">
          404
        </p>
        <h1 className="text-4xl font-bold tracking-tight">Page not found</h1>
        <p className="text-muted-foreground">
          This page doesn't exist or was moved.
        </p>
      </div>
      <Link href="/">
        <Button>Go Home</Button>
      </Link>
    </div>
  );
}