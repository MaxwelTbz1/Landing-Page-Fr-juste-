import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  icons: {
    icon: "/logo.png" 
  },
  title: "JeqoFx | Monteur vidéo professionnel",
  description:
    "Transformez vos idées en vidéos virales avec un monteur professionnel spécialisé dans les formats courts et YouTube.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="relative bg-white text-gray-900 overflow-x-hidden font-inter">
        {children}
      </body>
    </html>
  );
}


