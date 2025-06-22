import { BrainCircuit } from 'lucide-react'
import Link from 'next/link'

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="MindHaven Home">
      <BrainCircuit className="h-8 w-8 text-primary" />
      <span className="text-2xl font-bold tracking-tight text-foreground">
        MindHaven
      </span>
    </Link>
  )
}
