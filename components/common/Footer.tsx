import { ArrowRight, Layers } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t ">
      <div className="mx-auto max-w-7xl px-6 pt-8 pb-4">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex gap-2 items-center ">
              <Layers color="green" size={27} />
              <h2 className="text-3xl font-bold ">PrepLab</h2>
            </div>

            <p className="mt-2 text-sm font-mono font-semibold leading-5 ">
              Your complete preparation platform for DUET admission. Practice
              previous year question banks, take realistic mock tests, analyze
              your performance, and improve your ranking.
            </p>

            <div className="mt-3 flex gap-3">
              {[
                {
                  icon: "/facebook.png",
                  href: "https://www.facebook.com/share/1CGbHZc1WM/",
                  id: 1,
                },
                {
                  icon: "/whatsapp.png",
                  href: "https://wa.me/+8801988847216",
                  id: 2,
                },

                {
                  icon: "/email.png",
                  href: "mailto:rabbi.builds@gmail.com",
                  id: 3,
                },
                { icon: "/youtube.png", href: "#", id: 4 },
              ].map(({ icon, href, id }) => (
                <Link
                  key={id}
                  href={href}
                  target="_blank"
                  className="flex h-8 w-8 items-center  justify-center rounded-full border "
                >
                  <Image
                    src={icon}
                    alt="no image"
                    width={40}
                    height={40}
                    className="w-auto h-auto"
                  />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold ">Features</h3>

            <ul className="space-y-3 text-sm">
              {[
                "Question Bank",
                "Mock Tests",
                "Performance Analytics",
                "Leaderboard",
                "Daily Practice",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/"
                    className="transition hover:text-orange-500 font-mono font-semibold"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold ">Resources</h3>

            <ul className="space-y-3 text-sm">
              {[
                "About",
                "FAQ",
                "Privacy Policy",
                "Terms & Conditions",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/"
                    className="transition hover:text-orange-500 font-mono font-semibold"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold ">Stay Updated</h3>

            <p className="mb-4 text-sm font-mono font-semibold ">
              Receive new mock tests, exam updates, and preparation tips.
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-l-lg border  px-4 py-3 text-sm outline-none focus:border-orange-700"
              />

              <button className="flex items-center gap-2 rounded-r-lg bg-amber-600 px-4 transition cursor-pointer ">
                <ArrowRight size={18} />
              </button>
            </div>

            <p className="mt-3 text-xs font-mono font-semibold ">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t  pt-6 text-sm md:flex-row">
          <p className="font-sans">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold">PrepLab</span>. All rights reserved.
          </p>

          <div className="flex gap-6 font-mono font-semibold">
            <Link
              href="/privacy"
              className=" hover:text-orange-500  transition-colors "
            >
              Privacy
            </Link>
            <Link
              href="/terms-condition"
              className="transition hover:text-orange-500"
            >
              Terms
            </Link>
            <Link href="/support" className="transition hover:text-orange-500">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
