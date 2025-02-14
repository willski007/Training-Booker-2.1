import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu, User } from 'lucide-react';

export function Navbar() {
  const [isAuthenticated] = useState(false);

  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <div className="flex items-center space-x-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col space-y-4 mt-4">
                <Button variant="ghost" className="justify-start">Dashboard</Button>
                <Button variant="ghost" className="justify-start">Projects</Button>
                <Button variant="ghost" className="justify-start">Settings</Button>
              </div>
            </SheetContent>
          </Sheet>
          <span className="text-xl font-bold">MyApp</span>
        </div>

        <div className="hidden md:flex items-center space-x-4 mx-6">
          <Button variant="ghost">Dashboard</Button>
          <Button variant="ghost">Projects</Button>
          <Button variant="ghost">Settings</Button>
        </div>

        <div className="ml-auto flex items-center space-x-4">
          {isAuthenticated ? (
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">User menu</span>
            </Button>
          ) : (
            <>
              <Button variant="ghost">Sign In</Button>
              <Button>Sign Up</Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}