import Image from 'next/image';
import Link from 'next/link';
import {
  BrainCircuit,
  HeartHandshake,
  MessageCircle,
  Smile,
  Users,
  CalendarCheck,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function Home() {
  const wellbeingTechniques = [
    {
      icon: <BrainCircuit className="h-10 w-10 text-primary" />,
      title: 'Cognitive Behavioral Therapy (CBT)',
      description: 'Reframe negative thought patterns to improve emotional regulation and develop healthier coping mechanisms.',
    },
    {
      icon: <Smile className="h-10 w-10 text-primary" />,
      title: 'Mindfulness & Meditation',
      description: 'Practice being present and non-judgmental, reducing stress and increasing self-awareness.',
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: 'Personalized Counseling',
      description: 'One-on-one sessions with licensed therapists tailored to your specific needs and goals.',
    },
    {
      icon: <HeartHandshake className="h-10 w-10 text-primary" />,
      title: 'Emotional Support',
      description: 'A compassionate space to explore your feelings, build resilience, and foster personal growth.',
    },
  ];

  const howItWorksSteps = [
    {
      icon: <Users className="h-8 w-8" />,
      title: '1. Create Your Account',
      description: 'Sign up for free and tell us a bit about what you\'re looking for in a therapist.',
    },
    {
      icon: <CalendarCheck className="h-8 w-8" />,
      title: '2. Match with a Counselor',
      description: 'Our algorithm suggests licensed counselors who fit your needs. Choose the one that feels right.',
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: '3. Start Your Journey',
      description: 'Begin your therapy sessions via secure video calls, phone calls, or messaging at your convenience.',
    },
  ];
  
  const testimonials = [
    {
      name: 'Sarah J.',
      role: 'Marketing Manager',
      avatar: 'https://placehold.co/100x100.png',
      dataAiHint: 'woman portrait',
      text: 'MindHaven has been a game-changer for my anxiety. My counselor is incredibly supportive, and I love the flexibility of the platform.'
    },
    {
      name: 'Michael B.',
      role: 'Software Engineer',
      avatar: 'https://placehold.co/100x100.png',
      dataAiHint: 'man portrait',
      text: 'I was hesitant about therapy, but MindHaven made it so accessible. It\'s helped me navigate a difficult period in my life with more clarity.'
    },
    {
      name: 'Emily R.',
      role: 'Student',
      avatar: 'https://placehold.co/100x100.png',
      dataAiHint: 'woman smiling',
      text: 'The mindfulness techniques have been invaluable. It\'s more than just talk therapy; it\'s a holistic approach to mental wellness.'
    }
  ];

  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container grid lg:grid-cols-2 gap-10 px-4 md:px-6 py-20 md:py-32 items-center">
          <div className="flex flex-col items-start gap-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Your Journey to a Healthier Mind Starts Here.
            </h1>
            <p className="max-w-[600px] text-lg text-foreground/80 md:text-xl">
              MindHaven connects you with compassionate, licensed counselors to help you navigate life's challenges. Find support, develop coping skills, and build a more resilient you.
            </p>
            <div className="flex gap-4">
              <Button asChild size="lg">
                <Link href="/register">Find Your Counselor</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#features">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://placehold.co/600x400.png"
              width={600}
              height={400}
              alt="A person feeling calm and relaxed in nature"
              data-ai-hint="calm nature"
              className="rounded-xl shadow-2xl"
            />
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 md:py-32 bg-card">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-base font-semibold uppercase tracking-wider text-primary">
                Our Approach
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Wellbeing Techniques to Support You
              </h2>
              <p className="mt-4 text-lg text-foreground/70">
                We use evidence-based methods to help you achieve mental and emotional balance.
              </p>
            </div>
            <div className="mt-16 flex flex-wrap justify-center gap-8">
              {wellbeingTechniques.map((tech) => (
                <div key={tech.title} className="basis-72 grow flex flex-col items-center text-center p-6 rounded-lg transition-all hover:bg-background/50 hover:shadow-md">
                  {tech.icon}
                  <h3 className="mt-5 text-lg font-semibold">{tech.title}</h3>
                  <p className="mt-2 text-sm text-foreground/60">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 md:py-32">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How MindHaven Works</h2>
              <p className="mt-4 text-lg text-foreground/70">Getting started is simple, secure, and confidential.</p>
            </div>
            <div className="relative mt-16">
                <div className="absolute left-1/2 top-4 hidden h-full w-px -translate-x-1/2 bg-border/50 md:block" aria-hidden="true"></div>
                <div className="flex flex-col md:flex-row justify-center items-start gap-y-12 md:gap-x-16">
                    {howItWorksSteps.map((step) => (
                        <div key={step.title} className="relative flex flex-col items-center text-center md:max-w-xs">
                            <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 md:hidden h-full w-px bg-border/50" aria-hidden="true"></div>
                            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/20 text-primary mb-6 ring-8 ring-background z-10">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-semibold">{step.title}</h3>
                            <p className="mt-2 text-foreground/60">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 md:py-32 bg-card">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Loved by People Worldwide</h2>
              <p className="mt-4 text-lg text-foreground/70">
                Don't just take our word for it. Here's what our users are saying.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.name} className="flex flex-col justify-between">
                  <CardContent className="pt-6">
                    <p className="italic text-foreground/80">"{testimonial.text}"</p>
                  </CardContent>
                  <CardFooter className="flex items-center gap-4 mt-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.dataAiHint}/>
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-foreground/60">{testimonial.role}</p>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32">
          <div className="container text-center">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Take the First Step?</h2>
              <p className="mt-4 text-lg text-foreground/70">
                Join MindHaven today and begin your path towards a more peaceful and fulfilling life. Your mental wellness journey is just a click away.
              </p>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link href="/register">Get Started For Free</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
