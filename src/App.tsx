import { Navbar } from '@/components/layout/navbar';
import { DashboardPage } from '@/pages/dashboard';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <DashboardPage />
      </main>
      <Toaster />
    </div>
  );
}

export default App;