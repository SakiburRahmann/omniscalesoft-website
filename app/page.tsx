import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32">
        <Container className="flex flex-col items-center text-center gap-6">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-blue-200 backdrop-blur-xl">
            <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
            Accepting New Clients for 2026
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground bg-clip-text">
            Forging Digital <br className="hidden md:block" />
            Excellence.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            OmniScaleSoft architects "Zero-Defect" software solutions.
            We blend Silicon Valley engineering with elite design aesthetics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button size="lg" variant="glow">
              View Capabilities
            </Button>
            <Button size="lg" variant="outline">
              Our Vision
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
