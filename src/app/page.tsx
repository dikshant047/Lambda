import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">My App</h1>
        <ThemeToggle />
      </div>
      <Button>Click me</Button>
    </div>
  );
}
