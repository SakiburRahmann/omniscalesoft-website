import { Container } from "@/components/ui/container"

export function Footer() {
    return (
        <footer className="border-t border-border/40 py-6 md:py-0">
            <Container className="flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                    © 2026 OmniScaleSoft. All rights reserved.
                </p>
                <div className="flex gap-4">
                    <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">Twitter</a>
                    <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">GitHub</a>
                    <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">LinkedIn</a>
                </div>
            </Container>
        </footer>
    )
}
