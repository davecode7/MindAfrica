import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/logo'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Logo />
        
        <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-6 text-sm font-medium">
                <Link href="#features" className="text-foreground/60 transition-colors hover:text-foreground/80">Features</Link>
                <Link href="#how-it-works" className="text-foreground/60 transition-colors hover:text-foreground/80">How It Works</Link>
                <Link href="#testimonials" className="text-foreground/60 transition-colors hover:text-foreground/80">Testimonials</Link>
            </nav>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link href="/login">Log In</Link>
          </Button>
          <Button asChild>
            <Link href="/register">Sign Up</Link>
          </Button>
        </div>

        <div className="md:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Toggle Menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background">
                    <div className="flex flex-col h-full">
                        <div className="p-4 border-b">
                            <Logo />
                        </div>
                        <nav className="flex flex-col gap-4 p-4 text-lg font-medium">
                            <Link href="#features" className="text-foreground/80 hover:text-foreground">Features</Link>
                            <Link href="#how-it-works" className="text-foreground/80 hover:text-foreground">How It Works</Link>
                            <Link href="#testimonials" className="text-foreground/80 hover:text-foreground">Testimonials</Link>
                        </nav>
                        <div className="mt-auto p-4 border-t flex flex-col gap-2">
                            <Button variant="outline" asChild>
                                <Link href="/login">Log In</Link>
                            </Button>
                            <Button asChild>
                                <Link href="/register">Sign Up</Link>
                            </Button>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  )
}
