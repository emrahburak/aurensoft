function EmailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const socialLinks = [
  {
    name: "Email",
    href: "mailto:gemrahburak@gmail.com",
    icon: EmailIcon,
    label: "Send an email to Emrah Burak Gürbüz",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/emrahburak",
    icon: LinkedInIcon,
    label: "Visit Emrah Burak Gürbüz on LinkedIn",
  },
  {
    name: "X",
    href: "https://x.com/Emrahburakdev",
    icon: XIcon,
    label: "Visit Emrah Burak Gürbüz on X",
  },
];

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-16 text-center">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(122,162,247,0.12),transparent_50%)]" />

      <div className="relative z-10 flex max-w-2xl flex-col items-center gap-8">
        <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl">
          Aurensoft
        </h1>

        <div className="flex flex-col items-center gap-3">
          <p className="bg-gradient-to-r from-cyan via-blue to-purple bg-clip-text text-2xl font-semibold text-transparent sm:text-3xl">
            Coming Soon
          </p>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            AI-native, self-hosted, autonomous dijital ekosistemler inşa
            ediyoruz. Şimdilik sadece sessizce büyüyoruz.
          </p>
        </div>

        <nav aria-label="Social links">
          <ul className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    aria-label={link.label}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-muted text-foreground transition-all hover:border-blue hover:text-blue hover:shadow-[0_0_20px_rgba(122,162,247,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    <Icon />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <footer className="absolute bottom-6 text-xs text-muted-foreground">
        Bursa, Turkey · Aurensoft
      </footer>
    </main>
  );
}
