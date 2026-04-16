import Link from "next/link";
import content from "@/data/content-mock.json";

const footerLinks = {
  "Quick Links": [
    { href: "/about", label: "About Us" },
    { href: "/courses", label: "Courses" },
    { href: "/faculty", label: "Faculty" },
    { href: "/results", label: "Results" },
    { href: "/gallery", label: "Gallery" },
  ],
  Support: [
    { href: "/admissions", label: "Admissions" },
    { href: "/faqs", label: "FAQs" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
};

export default function Footer() {
  const { name, established } = content.instituteInfo;
  const { headOffice } = content.contactDetails;

  return (
    <footer className="bg-indigo-950 text-indigo-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-indigo-500 flex items-center justify-center text-white font-bold text-sm">
                {content.instituteInfo.logoText}
              </div>
              <span className="font-bold text-lg text-white">{name}</span>
            </div>
            <p className="text-sm leading-relaxed text-indigo-300 mb-4">
              {content.instituteInfo.tagline}
            </p>
            <p className="text-xs text-indigo-400">
              Established {established} · Trusted by 15,000+ students
            </p>

            {/* Social Links */}
            <div className="flex gap-3 mt-5">
              {["Facebook", "Instagram", "YouTube", "LinkedIn"].map(
                (social) => (
                  <Link
                    key={social}
                    href="#"
                    aria-label={social}
                    className="w-8 h-8 rounded-full bg-indigo-800 hover:bg-indigo-600 flex items-center justify-center transition-colors text-xs font-bold text-white"
                  >
                    {social[0]}
                  </Link>
                ),
              )}
            </div>
          </div>

          {/* Navigation Columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
                {heading}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-indigo-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Contact
            </h3>
            <address className="not-italic space-y-2 text-sm text-indigo-300">
              <p>{headOffice.address}</p>
              <p>
                <a
                  href={`tel:${headOffice.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {headOffice.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${headOffice.email}`}
                  className="hover:text-white transition-colors"
                >
                  {headOffice.email}
                </a>
              </p>
              <p className="text-indigo-400 text-xs">{headOffice.hours}</p>
            </address>
            <Link
              href="/apply"
              className="mt-5 inline-block px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-lg transition-colors"
            >
              Apply Now →
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-indigo-900 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-indigo-500">
          <p>
            © {new Date().getFullYear()} {name}. All rights reserved.
          </p>
          <p>Built with ❤️ for student success.</p>
        </div>
      </div>
    </footer>
  );
}
