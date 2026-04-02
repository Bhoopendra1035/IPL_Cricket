import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "StreamMax | Premium Cricket Experience",
  description: "Watch the best cricket matches live in ultra HD quality.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var savedTheme = localStorage.getItem('theme');
                  if (savedTheme === 'light') {
                    document.documentElement.setAttribute('data-theme', 'light');
                  } else {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <Navbar />
        {children}
        <footer className="glass-panel main-footer">
          <h2 className="text-gradient">STREAMMAX PRO</h2>
          <p className="footer-desc">
            Experience the adrenaline-pumping action of cricket with
            high-definition streaming.
          </p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Help Center</a>
          </div>
          <p className="footer-copy">© 2026 STREAMMAX. ALL RIGHTS RESERVED.</p>
        </footer>
      </body>
    </html>
  );
}
