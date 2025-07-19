import Header from "../components/Adminpanel/Header";
import Sidebar from "../components/Adminpanel/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="bg-white min-h-screen">
          <nav>
            <Header />
          </nav>
          <main className="flex gap-5">
            <div>
              <Sidebar />
            </div>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
