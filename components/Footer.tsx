"use client";

import {
  Linkedin,
  Instagram,
  Mail,
  MessageCircle,
  AtSign,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 items-center text-center md:text-left">
        
        <div className="flex justify-center md:justify-start gap-3">
          <SocialLink
            href="https://www.linkedin.com/in/fr%C3%A9juste-bgh"
            icon={<Linkedin size={22} />}
          />
          <SocialLink
            href="https://www.instagram.com/joachimvideo?igsh=MTFxcDBhY3VzbTJsdA=="
            icon={<Instagram size={22} />}
          />
          <SocialLink
            href="mailto:bghfrejus@gmail.com"
            icon={<Mail size={22} />}
          />
          <SocialLink
            href="https://www.threads.net/@joachimbgh"
            icon={<AtSign size={22} />}
          />
          <SocialLink
            href="https://wa.me/+22961633682"
            icon={<MessageCircle size={22} />}
          />
        </div>

        
        <div>
          <p className="text-gray-700 text-sm font-medium">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-pink-600">Fréjuste</span>. Tous droits réservés.
          </p>
          
        </div>

        
        <div className="flex justify-center md:justify-end">
          <p className="text-sm text-gray-600">
            Développé par{" "}
            <a
              href="https://www.linkedin.com/in/RégisT"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 font-semibold hover:underline"
            >
              Régis
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}


function SocialLink({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 bg-gray-100 rounded-full hover:bg-pink-100 hover:text-pink-600 transition-all"
    >
      {icon}
    </a>
  );
}
