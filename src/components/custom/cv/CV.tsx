"use client";

import { useEffect, useState, type ComponentPropsWithoutRef } from "react";
import { CVAvatar, CVAvatarFallback, CVAvatarImage } from "./cv-avatar";
import { CVPage } from "./cv-page";
import { CVPageContent } from "./cv-page-content";
import { CVPageHeader } from "./cv-page-header";
import { CVSeparator } from "./cv-separator";
import { CVSidebar } from "./cv-sidebar";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { CVPageSection } from "./cv-page-section";
import {
  CheckIcon,
  GithubIcon,
  GlobeIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  Youtube,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import clsx from "clsx";
import { CVPageSectionTitle } from "./cv-page-section-title";
import { CVPageContentBackground } from "./cv-page-content-background";

export type CVProps = ComponentPropsWithoutRef<"main">;

export const CV = ({ className, ...props }: CVProps) => {
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
    <>
      <main
        {...props}
        data-slot="cv-interactive"
        data-cv-type="interactive"
        className={clsx(
          "flex break-after-page justify-center gap-4 p-4 md:p-6 lg:p-8 print:gap-0 print:p-0 print:[data-cv-type='interactive']:hidden!",
          className,
        )}
      >
        <CVPage>
          <CVSidebar>
            <CVPageSection className="flex items-center justify-center">
              <CVAvatar
                className="bg-primary hidden-in-darkmode border-2 border-transparent shadow-sm shadow-black/20 select-none"
                title="Luke De Kiewit profile picture"
              >
                <CVAvatarImage
                  className="animate-in fade-in blur-in duration-200"
                  src="/images/ldk_selfie_pfp.jpg"
                  alt="Profile picture"
                  height={128}
                  width={128}
                  loading="eager"
                />
                <CVAvatarFallback />
              </CVAvatar>
              <CVAvatar
                className="border-primary bg-primary hidden-in-lightmode hover:shadow-primary/60 border-2 shadow-black transition-shadow duration-500 ease-in-out select-none hover:shadow-[0px_0px_2px_2px]"
                title="Welcome to the Matrix, Neo."
              >
                <CVAvatarImage
                  className="animate-in fade-in blur-in duration-200"
                  src="/images/ldk_matrix_avatar_1024px.png"
                  alt="Profile picture"
                  height={128}
                  width={128}
                  loading="eager"
                />
                <CVAvatarFallback />
              </CVAvatar>
            </CVPageSection>
            <CVSeparator className="mt-[4.2333333333mm]" />
            <CVPageSection>
              <CVPageSectionTitle className="text-sm">
                Summary
              </CVPageSectionTitle>
              <p className="text-muted-foreground mt-[2.1166666667mm] block w-full text-[7pt] text-pretty">
                Highly motivated and passionate web developer from Bloemfontein.
                Eager and willing to learn new things and find my place in the
                industry, working with technologies that I am passionate about.
                I aim to provide flexible, dynamic, stylish and responsive
                solutions for my clients, while adhering to industry standards,
                including accessibility and best practices. I'm a
                problem-solving enthusiast with a knack for creating sleek and
                user-friendly websites and UI components.
              </p>
            </CVPageSection>
            <CVSeparator className="bg-border mt-[2.1166666667mm]" />
            <CVPageSection>
              <CVPageSectionTitle className="text-sm">
                Contact information
              </CVPageSectionTitle>
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
                    <SimpleIcon
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
              <CVPageSectionTitle className="text-sm">
                Personal information
              </CVPageSectionTitle>
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
                    <CheckIcon className="text-muted-foreground size-[9.5pt]" />
                  </li>
                  <li className="mt-[2.1166666667mm] flex items-center justify-between text-[7pt]">
                    <span className="text-foreground/90">
                      Willing to relocate
                    </span>
                    <CheckIcon className="text-muted-foreground size-[9.5pt]" />
                  </li>
                  <li className="mt-[2.1166666667mm] flex items-center justify-between text-[7pt]">
                    <span className="text-foreground/90">
                      Open to remote work
                    </span>
                    <CheckIcon className="text-muted-foreground size-[9.5pt]" />
                  </li>
                </ul>
              </div>
            </CVPageSection>
            <CVSeparator className="mt-[4.2333333333mm]" />
            <CVPageSection>
              <CVPageSectionTitle className="text-sm">
                Tech stack
              </CVPageSectionTitle>
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
                    className="motion-reduce:hidden"
                    encryptedClassName="text-muted-foreground/80 select-none"
                    revealedClassName="text-primary select-text"
                    revealDelayMs={0}
                    flipDelayMs={0}
                  />
                  <span className="hidden motion-reduce:inline">
                    Luke De Kiewit
                  </span>
                </h1>
              }
              subtitleNode={
                <div className="text-muted-foreground flex items-center gap-[1.0583333333mm] font-mono uppercase">
                  <span
                    className="text-muted-foreground pointer-events-none text-lg not-italic select-none"
                    aria-hidden="true"
                  >
                    {"<"}
                  </span>
                  <i className="inline size-0.5 bg-transparent text-lg print:hidden"></i>
                  <EncryptedText
                    text={"Front-End Developer"}
                    className="motion-reduce:hidden"
                    encryptedClassName="text-muted-foreground/60 select-none text-lg"
                    revealedClassName="text-muted-foreground select-text text-lg"
                    revealDelayMs={10}
                    flipDelayMs={0}
                  />
                  <h2 className="text-muted-foreground hidden text-lg motion-reduce:block">
                    Front-End Developer
                  </h2>
                  <i
                    className={clsx(
                      "bg-primary inline h-4.5 w-0.5 motion-reduce:hidden print:hidden",
                      !caretBlink && "invisible",
                    )}
                    style={{
                      animation: !caretBlink
                        ? "none"
                        : "caretBlink 1.4s steps(1, end) infinite",
                    }}
                  ></i>

                  <span
                    className="text-muted-foreground pointer-events-none text-lg not-italic select-none"
                    aria-hidden="true"
                  >
                    {"/>"}
                  </span>
                </div>
              }
            ></CVPageHeader>
            <CVSeparator className="mt-[4.2333333333mm]" />
            <CVPageSection className="mt-[4.2333333333mm]">
              <div className="relative w-full overflow-clip">
                <h3 className="uppercase">Professional experience</h3>
              </div>
            </CVPageSection>
            <CVPageContentBackground
              className="opacity-10 grayscale"
              src="/images/backgrounds/laptop_code_3.jpg"
            />
          </CVPageContent>
        </CVPage>
      </main>
      <main
        data-slot="cv-print"
        data-cv-type="print"
        className="hidden break-after-page justify-center gap-4 p-4 md:p-6 lg:p-8 print:flex print:gap-0 print:p-0 print:[data-cv-type='print']:hidden!"
      >
        <CVPage></CVPage>
      </main>
    </>
  );
};
