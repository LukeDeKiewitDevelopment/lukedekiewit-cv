"use client";

import { useEffect, useState } from "react";
import { CVAvatar, CVAvatarFallback, CVAvatarImage } from "./CVAvatar";
import { CVPage } from "./CVPage";
import { CVPageContent } from "./CVPageContent";
import { CVPageHeader } from "./CVPageHeader";
import { CVSeparator } from "./CVSeperator";
import { CVSidebar } from "./CVSidebar";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { CVPageSection } from "./CVPageSection";
import {
  GithubIcon,
  Globe2Icon,
  GlobeIcon,
  LinkedinIcon,
  Mail,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  Youtube,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const CV = () => {
  const [caretBlink, setCaretBlink] = useState(false);

  const startCaretBlinking = () => {
    const timeout = setTimeout(() => {
      setCaretBlink(true);
    }, 2000);
    return () => clearTimeout(timeout);
  };

  useEffect(() => {
    startCaretBlinking();
  }, []);

  return (
    <main
      data-slot="cv"
      className="flex break-after-page justify-center gap-4 p-4 md:p-6 lg:p-8 print:gap-0 print:p-0"
    >
      <CVPage>
        <CVSidebar>
          <CVPageSection className="flex items-center justify-center">
            <CVAvatar
              className="border-primary bg-primary hidden-in-lightmode hover:shadow-primary/60 border-2 shadow-black transition-shadow duration-500 ease-in-out select-none hover:shadow-[0px_0px_2px_2px]"
              title="Welcome to the Matrix, Neo."
            >
              <CVAvatarImage
                className="animate-in zoom-in fade-in duration-200"
                src="/images/ldk_matrix_avatar_1024px.png"
                alt="Profile picture"
                height={128}
                width={128}
                loading="eager"
              />
              <CVAvatarFallback className="animate-pulse" />
            </CVAvatar>
            <CVAvatar
              className="border-primary bg-primary hidden-in-darkmode border-2 shadow-sm shadow-black/40 select-none"
              title="Luke De Kiewit profile picture"
            >
              <CVAvatarImage
                className="animate-in zoom-in fade-in duration-200"
                src="/images/ldk_matrix_avatar_1024px.png"
                alt="Profile picture"
                height={128}
                width={128}
                loading="eager"
              />
              <CVAvatarFallback className="animate-pulse" />
            </CVAvatar>
          </CVPageSection>
          <CVSeparator className="mt-[4.2333333333mm]" />
          <CVPageSection>
            <h3 className="mt-[2.1166666667mm] text-sm uppercase">SUMMARY</h3>
            <CVSeparator className="bg-border mt-[2.1166666667mm]" />
            <p className="text-muted-foreground mt-[2.1166666667mm] block w-full text-[7pt] text-pretty">
              Highly motivated and passionate web developer from Bloemfontein.
              Eager and willing to learn new things and find my place in the
              industry, working with technologies that I am passionate about. I
              aim to provide flexible, dynamic, stylish and responsive solutions
              for my clients, while adhering to industry standards, including
              accessibility and best practices. I'm a problem-solving enthusiast
              with a knack for creating sleek and user-friendly websites and UI
              components.
            </p>
          </CVPageSection>
          <CVSeparator className="mt-[4.2333333333mm]" />
          <CVPageSection>
            <h3 className="mt-[2.1166666667mm] text-sm uppercase">
              Contact Information
            </h3>
            <CVSeparator className="bg-border mt-[2.1166666667mm]" />
            <address className="mt-[2.1166666667mm] not-italic">
              <ul>
                <li className="flex items-center justify-between">
                  <MapPinIcon className="text-foreground/90 size-[4.2333333333mm] shrink-0" />
                  <span
                    title="Bloemfontein, Free State, South Africa, 9301 🇿🇦"
                    className="text-muted-foreground cursor-help text-[7pt]"
                  >
                    Bloemfontein, FS
                  </span>
                </li>
                <li className="mt-[2.1166666667mm] flex items-center justify-between">
                  <PhoneIcon className="text-foreground/90 size-[4.2333333333mm] shrink-0" />
                  <a
                    href="tel:+27738782766"
                    className="text-muted-foreground hover:text-primary text-[7pt] transition-all duration-200"
                  >
                    +27738782766
                  </a>
                </li>
                <li className="mt-[2.1166666667mm] flex items-center justify-between">
                  <MailIcon className="text-foreground/90 size-[4.2333333333mm] shrink-0" />
                  <a
                    href="mailto:luke.dekiewit@yahoo.com"
                    title="Bloemfontein, Free State, South Africa, 9301 🇿🇦"
                    className="text-muted-foreground hover:text-primary text-[7pt] hover:underline"
                  >
                    luke.dekiewit@yahoo.com
                  </a>
                </li>
                <li className="mt-[2.1166666667mm] flex items-center justify-between">
                  <GithubIcon className="text-foreground/90 size-[4.2333333333mm] shrink-0" />
                  <a
                    href="https://github.com/lukedekiewit"
                    target="_blank"
                    className="text-muted-foreground hover:text-primary text-[7pt] hover:underline"
                  >
                    @lukedekiewit
                  </a>
                </li>
                <li className="mt-[2.1166666667mm] flex items-center justify-between">
                  <LinkedinIcon className="text-foreground/90 size-[4.2333333333mm] shrink-0" />
                  <a
                    href="https://lukedekiewit.co.za/"
                    className="text-muted-foreground hover:text-primary text-[7pt] hover:underline"
                  >
                    @lukedekiewit
                  </a>
                </li>
                <li className="mt-[2.1166666667mm] flex items-center justify-between">
                  <GlobeIcon className="text-foreground/90 size-[4.2333333333mm] shrink-0" />
                  <a
                    href="https://lukedekiewit.co.za/"
                    className="text-muted-foreground hover:text-primary text-[7pt] hover:underline"
                  >
                    lukedekiewit.co.za
                  </a>
                </li>
              </ul>
            </address>
          </CVPageSection>
          <CVSeparator className="mt-[4.2333333333mm]" />
          <CVPageSection>
            <h3 className="mt-[2.1166666667mm] text-sm uppercase">
              Personal Information
            </h3>
            <CVSeparator className="bg-border mt-[2.1166666667mm]" />
            <div className="mt-[2.1166666667mm]">
              <ul>
                <li className="flex items-center justify-between text-[7pt]">
                  <span className="text-foreground/90">Age</span>
                  <span className="text-muted-foreground">25</span>
                </li>
                <li className="mt-[2.1166666667mm] flex items-center justify-between text-[7pt]">
                  <span className="text-foreground/90">Languages</span>
                  <span className="text-muted-foreground">
                    English, Afrikaans
                  </span>
                </li>
                <li className="mt-[2.1166666667mm] flex items-center justify-between text-[7pt]">
                  <span className="text-foreground/90">Driving License</span>
                  <span className="text-muted-foreground">Code B</span>
                </li>
                <li className="mt-[2.1166666667mm] flex items-center justify-between text-[7pt]">
                  <span className="text-foreground/90">Own transport</span>
                  <span className="text-muted-foreground">Yes</span>
                </li>
                <li className="mt-[2.1166666667mm] flex items-center justify-between text-[7pt]">
                  <span className="text-foreground/90">
                    Willing to relocate
                  </span>
                  <span className="text-muted-foreground">Yes</span>
                </li>
                <li className="mt-[2.1166666667mm] flex items-center justify-between text-[7pt]">
                  <span className="text-foreground/90">
                    Open to remote work
                  </span>
                  <span className="text-muted-foreground">Yes</span>
                </li>
              </ul>
            </div>
          </CVPageSection>
          <CVSeparator className="mt-[4.2333333333mm]" />
          <CVPageSection>
            <h3 className="mt-[2.1166666667mm] text-sm uppercase">
              Core Tech Stack
            </h3>
            <CVSeparator className="bg-border mt-[2.1166666667mm]" />
            <div className="mt-[2.1166666667mm]">
              <legend className="flex flex-wrap gap-[1.0583333333mm]">
                <Badge>HTML</Badge>
                <Badge>CSS</Badge>
                <Badge>JavaScript</Badge>
                <Badge>TypeScript</Badge>
                <Badge>React</Badge>
                <Badge>Astro</Badge>
                <Badge>Shopify</Badge>
              </legend>
            </div>
          </CVPageSection>
        </CVSidebar>
        <CVPageContent>
          <CVPageHeader
            titleNode={
              <h1 className="text-primary text-4xl uppercase">
                <EncryptedText
                  text={"Luke De Kiewit"}
                  encryptedClassName="text-muted-foreground/80 select-none"
                  revealedClassName="text-primary select-text"
                  revealDelayMs={30}
                  flipDelayMs={0}
                />
              </h1>
            }
            subtitleNode={
              <div className="text-muted-foreground flex items-center gap-[1.0583333333mm] font-mono text-lg uppercase">
                <span
                  className="text-muted-foreground pointer-events-none text-lg not-italic select-none"
                  aria-hidden="true"
                >
                  {"<"}
                </span>
                <i className="inline h-5 w-0.5 bg-transparent print:hidden"></i>
                <EncryptedText
                  text={"Front-End Developer"}
                  encryptedClassName="text-muted-foreground/60 select-none text-lg"
                  revealedClassName="text-muted-foreground select-text text-lg"
                  revealDelayMs={40}
                  flipDelayMs={10}
                />

                {caretBlink && (
                  <i
                    className="bg-primary inline h-5 w-0.5 print:hidden"
                    aria-hidden="true"
                    style={{
                      animation: "caretBlink 1.4s steps(1, end) infinite",
                    }}
                  ></i>
                )}
                <span
                  className="text-muted-foreground pointer-events-none text-lg not-italic select-none"
                  aria-hidden="true"
                >
                  {"/>"}
                </span>
              </div>
            }
            lightModeLogo={{
              src: "/images/logos/ldk_logo_black_tilted_724px.png",
              alt: "",
              height: 200,
              width: 200,
              loading: "lazy",
              "aria-hidden": "true",
              className: "opacity-20 shrink-0",
            }}
            darkModeLogo={{
              src: "/images/logos/ldk_logo_white_tilted_724px.png",
              alt: "",
              height: 300,
              width: 3200,
              loading: "lazy",
              "aria-hidden": "true",
              className: "opacity-20 shrink-0",
            }}
          ></CVPageHeader>
          <CVSeparator className="mt-[4.2333333333mm]" />
          <CVPageSection></CVPageSection>
        </CVPageContent>
      </CVPage>
    </main>
  );
};
