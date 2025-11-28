import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import { Navbar } from '@/components/Navbar';
import { HomePage } from '@/pages/HomePage';
import { DashboardPage } from '@/pages/DashboardPage';
import { UsersPage } from '@/pages/UsersPage';
import { SettingsPage } from '@/pages/SettingsPage';
import { ComponentShowcase } from '@/pages/ComponentShowcase';

function App() {
  return (
    <Router>
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <AppSidebar />
          <div className="flex flex-1 flex-col">
            <Navbar />
            <main className="flex-1 p-6">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/users" element={<UsersPage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/settings/:tab" element={<SettingsPage />} />
                <Route path="/components" element={<ComponentShowcase />} />
                <Route path="/products" element={<div className="text-2xl font-bold">Products Page (Coming Soon)</div>} />
                <Route path="/orders" element={<div className="text-2xl font-bold">Orders Page (Coming Soon)</div>} />
                <Route path="/documents" element={<div className="text-2xl font-bold">Documents Page (Coming Soon)</div>} />
                <Route path="/analytics" element={<div className="text-2xl font-bold">Analytics Page (Coming Soon)</div>} />
                <Route path="/calendar" element={<div className="text-2xl font-bold">Calendar Page (Coming Soon)</div>} />
                <Route path="/messages" element={<div className="text-2xl font-bold">Messages Page (Coming Soon)</div>} />
                <Route path="/help" element={<div className="text-2xl font-bold">Help Page (Coming Soon)</div>} />
                <Route path="/profile" element={<div className="text-2xl font-bold">Profile Page (Coming Soon)</div>} />
              </Routes>
            </main>
          </div>
        </div>
      </SidebarProvider>
    </Router>
  );
}

export default App;
