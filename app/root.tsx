import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  Link,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import stylesheet from "~/tailwind.css?url";
import siteLogo from "~/assets/svg/gamelog-logo.svg";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="flex flex-col min-h-screen bg-gray-950 text-gray-50">
          <div className="flex-1">
            <nav className="flex items-center justify-between py-8 px-20">
              <div>
                <Link to="/">
                  <img src={siteLogo} alt="game-logo" />
                </Link>
              </div>

              <div className="flex gap-16">
                <Link to="/games">Games</Link>

                <Link to="/About">About</Link>

                <Link to="/Blog">Blog</Link>
              </div>
            </nav>
            <Outlet />
          </div>
          <ScrollRestoration />
          <Scripts />
        </div>
      </body>
    </html>
  );
}
