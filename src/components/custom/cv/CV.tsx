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
  Briefcase,
  CheckIcon,
  ExternalLinkIcon,
  FolderCodeIcon,
  GlobeIcon,
  GraduationCap,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  NotebookPenIcon,
  PhoneIcon,
  UniversityIcon,
  User2Icon,
} from "lucide-react";
import { siGithub } from "simple-icons";

import { Badge } from "@/components/ui/badge";
import clsx from "clsx";
import { CVPageSectionTitle } from "./cv-page-section-title";
import { CVPageContentBackground } from "./cv-page-content-background";
import { SkillBadgeIcon } from "../skill-badge-icon";

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
          "relative z-1 flex flex-[1_0_auto] break-after-page justify-center gap-4 p-4 md:p-6 lg:p-8 print:gap-0 print:p-0 print:[data-cv-type='interactive']:hidden!",
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
              <p className="text-muted-foreground mt-[2.1166666667mm] block w-full text-[7pt] text-balance">
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
                    <i title="Location">
                      <MapPinIcon className="size-[4.2333333333mm] shrink-0" />
                    </i>
                    <span
                      title="Bloemfontein, Free State, South Africa, 9301 🇿🇦"
                      className="text-muted-foreground cursor-help text-[7pt]"
                    >
                      Bloemfontein, Free State{" "}
                      <i className="text-[7.5pt] not-italic">🇿🇦</i>
                    </span>
                  </li>
                  <li className="mt-[2.1166666667mm] flex items-center justify-between">
                    <i title="Phone number">
                      <PhoneIcon className="size-[4.2333333333mm] shrink-0" />
                    </i>
                    <a
                      href="tel:+27738782766"
                      rel="noopener noreferrer nofollow"
                      className="text-muted-foreground hover:text-primary text-[7pt] transition-all hover:underline"
                    >
                      +27738782766
                    </a>
                  </li>
                  <li className="mt-[2.1166666667mm] flex items-center justify-between">
                    <i title="Email">
                      <MailIcon className="size-[4.2333333333mm] shrink-0" />
                    </i>
                    <a
                      href="mailto:luke.dekiewit@yahoo.com"
                      rel="noopener noreferrer nofollow"
                      title="Bloemfontein, Free State, South Africa, 9301 🇿🇦"
                      className="text-muted-foreground hover:text-primary text-[7pt] hover:underline"
                    >
                      luke.dekiewit@yahoo.com
                    </a>
                  </li>
                  <li className="mt-[2.1166666667mm] flex items-center justify-between">
                    <SkillBadgeIcon
                      title="GitHub"
                      hex="var(--sidebar-foreground)"
                      path={siGithub.path}
                      className="size-[4.2333333333mm] shrink-0"
                    />
                    <a
                      href="https://github.com/lukedekiewit"
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                      className="text-muted-foreground hover:text-primary text-[7pt] hover:underline"
                    >
                      @lukedekiewit
                    </a>
                  </li>
                  <li className="mt-[2.1166666667mm] flex items-center justify-between">
                    <i title="LinkedIn">
                      <LinkedinIcon className="size-[4.2333333333mm] shrink-0" />
                    </i>
                    <a
                      href="https://lukedekiewit.co.za/"
                      rel="noopener noreferrer nofollow"
                      className="text-muted-foreground hover:text-primary text-[7pt] hover:underline"
                    >
                      @lukedekiewit
                    </a>
                  </li>
                  <li className="mt-[2.1166666667mm] flex items-center justify-between">
                    <i title="Website">
                      <GlobeIcon className="size-[4.2333333333mm] shrink-0" />
                    </i>
                    <a
                      href="https://lukedekiewit.co.za/"
                      rel="noopener noreferrer nofollow"
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
                    <span>Age</span>
                    <span className="text-muted-foreground">25</span>
                  </li>
                  <li className="mt-[2.1166666667mm] flex items-center justify-between text-[7pt]">
                    <span>Languages</span>
                    <span className="text-muted-foreground">
                      English, Afrikaans
                    </span>
                  </li>
                  <li className="mt-[2.1166666667mm] flex items-center justify-between text-[7pt]">
                    <span>Driving License</span>
                    <span className="text-muted-foreground">Code B</span>
                  </li>
                  <li className="mt-[2.1166666667mm] flex items-center justify-between text-[7pt]">
                    <span>Own transport</span>
                    <CheckIcon className="text-muted-foreground size-[9.5pt]" />
                  </li>
                  <li className="mt-[2.1166666667mm] flex items-center justify-between text-[7pt]">
                    <span>Willing to relocate</span>
                    <CheckIcon className="text-muted-foreground size-[9.5pt]" />
                  </li>
                  <li className="mt-[2.1166666667mm] flex items-center justify-between text-[7pt]">
                    <span>Open to remote work</span>
                    <CheckIcon className="text-muted-foreground size-[9.5pt]" />
                  </li>
                </ul>
              </div>
            </CVPageSection>
            <CVSeparator className="mt-[4.2333333333mm]" />
            <CVPageSection>
              <CVPageSectionTitle className="text-sm">
                Core tech stack
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
          <CVPageContent className="text-card-foreground">
            <CVPageHeader
              titleNode={
                <h1 className="text-primary text-4xl uppercase">
                  <EncryptedText
                    text={"Luke De Kiewit"}
                    className="motion-reduce:hidden"
                    encryptedClassName="text-muted-foreground select-none"
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
                    text={"Front-End Engineer"}
                    className="motion-reduce:hidden"
                    encryptedClassName="text-muted-foreground select-none text-lg"
                    revealedClassName="text-muted-foreground select-text text-lg"
                    revealDelayMs={10}
                    flipDelayMs={0}
                  />
                  <h2 className="text-muted-foreground hidden text-lg motion-reduce:block">
                    Front-End Engineer
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
              <div>
                <h3 className="flex items-center gap-2 text-sm uppercase">
                  <i title="Professional experience">
                    <Briefcase className="size-[13pt]" />
                  </i>
                  <span>Professional experience</span>
                </h3>
                <ol className="text-foreground/80 mt-[2.1166666667mm] flex flex-col gap-[2pt] text-[7pt]">
                  <li>
                    <div>
                      <h4 className="mb-[0.5pt] uppercase">
                        Junior Developer • Bitcube • Remote
                      </h4>
                      <span className="text-foreground/60">
                        May 2024 - Present
                      </span>
                      <div className="mb-[0.5pt]">
                        <h5 className="uppercase">
                          Engineering Department • July 2025 - Present
                        </h5>
                        <p className="text-muted-foreground text-[7pt] text-balance">
                          My most ambitious project to date, due for completion
                          in 2026. Atomwave is a rewrite of shadcn/ui without a
                          Tailwind dependency, offering additional components,
                          greater flexibility, and built-in support for multiple
                          themes.
                        </p>
                        <h5 className="uppercase">
                          Ecommerce Department • May 2024 - July 2025
                        </h5>
                        <p className="text-muted-foreground text-[7pt] text-balance">
                          My most ambitious project to date, due for completion
                          in 2026. Atomwave is a rewrite of shadcn/ui without a
                          Tailwind dependency, offering additional components,
                          greater flexibility, and built-in support for multiple
                          themes.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="mt-[1mm]">
                    <div>
                      <h4 className="mb-[0.5pt] uppercase">
                        Junior Front-End Developer • SOCO_ED • Remote
                      </h4>
                      <span className="text-foreground/60">
                        January 2023 - March 2024
                      </span>
                      <div></div>
                    </div>
                  </li>
                  <li className="mt-[1mm]">
                    <div>
                      <h4 className="mb-[0.5pt] uppercase">
                        Development Intern • Condensation • Remote
                      </h4>
                      <span className="text-foreground/60">
                        September 2022 - October 2022
                      </span>
                      <div></div>
                    </div>
                  </li>
                </ol>
              </div>
            </CVPageSection>
            <CVSeparator className="mt-[4.2333333333mm]" />
            <CVPageSection className="mt-[4.2333333333mm]">
              <div>
                <h3 className="text-sm uppercase"></h3>
                <h3 className="flex items-center gap-2 text-sm uppercase">
                  <i title="Projects">
                    <FolderCodeIcon className="size-[13pt]" />
                  </i>
                  <span>Public Projects</span>
                </h3>
                <ul className="text-foreground/80 mt-[2.1166666667mm] flex flex-col gap-[2pt] text-[7pt]">
                  <li>
                    <div>
                      <h4 className="mb-[0.5pt] flex items-center gap-2 uppercase">
                        <span>Atomwave Component Library • 2025/26</span>
                      </h4>
                      <p className="text-muted-foreground text-[7pt] text-balance">
                        My most ambitious project to date, due for completion in
                        2026. Atomwave is a rewrite of shadcn/ui without a
                        Tailwind dependency, offering additional components,
                        greater flexibility, and built-in support for multiple
                        themes.
                      </p>
                    </div>
                  </li>
                  <li className="mt-[1mm]">
                    <div>
                      <h4 className="mb-[0.5pt] flex items-center gap-2 uppercase">
                        <span>Marlin Brokers • 2024</span>
                        <a
                          target="_blank"
                          href="https://marlinbrokers.co.za/"
                          rel="noopener noreferrer nofollow"
                          className="text-muted-foreground hover:text-primary text-[7pt]"
                          title="Marlin Brokers Website Link"
                        >
                          <ExternalLinkIcon className="size-[10pt]" />
                        </a>
                      </h4>
                      <p className="text-muted-foreground text-[7pt] text-balance">
                        A complete rebuild of the Marlin Brokers website from
                        scratch, transforming an outdated and slow WordPress
                        site into a clean, fast, SEO-optimised website built
                        with Astro, React, and Tailwind.
                      </p>
                    </div>
                  </li>
                  <li className="mt-[1mm]">
                    <div>
                      <h4 className="mb-[0.5pt] flex items-center gap-2 uppercase">
                        <span>Topic LMS • 2023</span>
                        <a
                          target="_blank"
                          href="https://topic.co.za/"
                          rel="noopener noreferrer nofollow"
                          className="text-muted-foreground hover:text-primary text-[7pt]"
                          title="Topic LMS Link"
                        >
                          <ExternalLinkIcon className="size-[10pt]" />
                        </a>
                      </h4>
                      <p className="text-muted-foreground text-[7pt] text-balance">
                        An educational platform for high school students in
                        Grades 10-12, supporting the education of over 200,000
                        learners across South Africa. Built with Next.js, React,
                        Tailwind, and Strapi.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </CVPageSection>
            <CVSeparator className="mt-[4.2333333333mm]" />
            <CVPageSection className="mt-[4.2333333333mm]">
              <div>
                <h3 className="flex items-center gap-2 text-sm uppercase">
                  <i title="Education">
                    <GraduationCap className="size-[13pt]" />
                  </i>
                  <span>Education</span>
                </h3>
                <ol className="text-foreground/80 mt-[2.1166666667mm] flex flex-col gap-[2pt] text-[7pt]">
                  <li>
                    <div>
                      <h4 className="mb-[0.5pt] uppercase">
                        CTU Training Solutions • 2022
                      </h4>
                      <a
                        target="_blank"
                        href="https://allqs.saqa.org.za/showQualification.php?id=48872"
                        rel="noopener noreferrer nofollow"
                        className="text-muted-foreground hover:text-primary text-[7pt] hover:underline"
                      >
                        National Certificate: IT Systems Development (NQF 6)
                      </a>
                    </div>
                  </li>
                  <li className="mt-[1mm]">
                    <div>
                      <h4 className="mb-[0.5pt] uppercase">
                        CTU Training Solutions • 2021
                      </h4>
                      <a
                        target="_blank"
                        href="https://regqs.saqa.org.za/viewQualification.php?id=78965"
                        rel="noopener noreferrer nofollow"
                        className="text-muted-foreground hover:text-primary text-[7pt] hover:underline"
                      >
                        FET Certificate: IT Systems Development (NQF 5)
                      </a>
                    </div>
                  </li>
                  <li className="mt-[1mm]">
                    <div>
                      <h4 className="mb-[0.5pt] uppercase">
                        CTU Training Solutions • 2020
                      </h4>
                      <a
                        target="_blank"
                        href="https://regqs.saqa.org.za/viewQualification.php?id=71850"
                        rel="noopener noreferrer nofollow"
                        className="text-muted-foreground hover:text-primary text-[7pt] hover:underline"
                      >
                        FET Certificate: IT Database Development (NQF 4)
                      </a>
                    </div>
                  </li>
                  <li className="mt-[1mm]">
                    <div>
                      <h4 className="mb-[0.5pt] uppercase">
                        Grey College Secondary • 2019
                      </h4>
                      <p className="text-muted-foreground">
                        National Senior Certificate
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
            </CVPageSection>
            <CVSeparator className="mt-[4.2333333333mm]" />
            <CVPageSection className="mt-[4.2333333333mm]">
              <div>
                <h3 className="flex items-center gap-2 text-sm uppercase">
                  <i title="References">
                    <User2Icon className="size-[13pt]" />
                  </i>
                  <span>References</span>
                </h3>
                <p className="text-muted-foreground mt-[2.1166666667mm] text-[7pt] text-balance">
                  For privacy reasons, references are available upon request.
                </p>
              </div>
            </CVPageSection>

            <CVPageContentBackground
              className="opacity-0 grayscale dark:opacity-5"
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
