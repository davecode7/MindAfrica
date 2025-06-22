import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function RegisterPage() {
  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Create an account</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
            <Label htmlFor="full-name">Full Name</Label>
            <Input id="full-name" placeholder="John Doe" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="confirm-password">Confirm Password</Label>
          <Input id="confirm-password" type="password" required />
        </div>
        <div className="grid gap-2">
          <Label>I am registering as a...</Label>
          <RadioGroup defaultValue="seeking-therapy" className="flex pt-2 space-x-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="seeking-therapy" id="role-seeking-therapy" />
              <Label htmlFor="role-seeking-therapy">Seeking Therapy</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="counselor" id="role-counselor" />
              <Label htmlFor="role-counselor">Counselor</Label>
            </div>
          </RadioGroup>
        </div>
        <Button type="submit" className="w-full">
          Create account
        </Button>
      </CardContent>
      <CardFooter>
        <div className="w-full text-center text-sm">
          Already have an account?{" "}
          <Link href="/login" className="underline text-primary">
            Login
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}
