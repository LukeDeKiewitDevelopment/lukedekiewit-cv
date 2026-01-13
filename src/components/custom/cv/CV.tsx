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
  PhoneIcon,
  User2Icon,
} from "lucide-react";
import { siGithub } from "simple-icons";

import { Badge } from "@/components/ui/badge";
import clsx from "clsx";
import { CVPageSectionTitle } from "./cv-page-section-title";
import { CVPageContentBackground } from "./cv-page-content-background";
import { SkillBadgeIcon } from "../skill-badge-icon";
import { SkillBadge } from "../skill-badge";

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
              <CVPageSectionTitle>Summary</CVPageSectionTitle>
              <p className="text-muted-foreground mt-[2.1166666667mm] block w-full text-[7pt]">
                I specialise in engineering high-quality front-end systems,
                websites, and UI libraries. I'm committed to the highest
                standards of performance, accessibility, and code quality.
                Working alongside a team of passionate professionals, I ensure
                every project follows modern best practices and delivers an
                exceptional user experience.
              </p>
            </CVPageSection>
            <CVSeparator className="bg-border mt-[2.1166666667mm]" />
            <CVPageSection>
              <CVPageSectionTitle>Contact information</CVPageSectionTitle>
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
              <CVPageSectionTitle>Personal information</CVPageSectionTitle>
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
                    <i title="Yes">
                      <CheckIcon className="text-muted-foreground size-[9.5pt]" />
                    </i>
                  </li>
                  <li className="mt-[2.1166666667mm] flex items-center justify-between text-[7pt]">
                    <span>Willing to relocate</span>
                    <i title="Yes">
                      <CheckIcon className="text-muted-foreground size-[9.5pt]" />
                    </i>
                  </li>
                  <li className="mt-[2.1166666667mm] flex items-center justify-between text-[7pt]">
                    <span>Open to remote work</span>
                    <i title="Yes">
                      <CheckIcon className="text-muted-foreground size-[9.5pt]" />
                    </i>
                  </li>
                </ul>
              </div>
            </CVPageSection>
            <CVSeparator className="mt-[4.2333333333mm]" />
            <CVPageSection>
              <CVPageSectionTitle>Tech stack</CVPageSectionTitle>
              <div className="mt-[2.1166666667mm]">
                <legend className="flex flex-wrap">
                  <SkillBadge skill="HTML" />
                </legend>
              </div>
            </CVPageSection>
            <CVSeparator className="mt-[4.2333333333mm]" />
            <CVPageSection>
              <CVPageSectionTitle>Skills</CVPageSectionTitle>
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
                  <EncryptedText
                    text={"Front-End Engineer"}
                    className="motion-reduce:hidden"
                    encryptedClassName="text-muted-foreground select-none text-xl"
                    revealedClassName="text-muted-foreground select-text text-xl"
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
                <CVPageSectionTitle className="flex items-center gap-2">
                  <Briefcase className="size-[13pt]" />
                  <span>Professional experience</span>
                </CVPageSectionTitle>
                <ol className="text-foreground/80 mt-[2.1166666667mm] flex flex-col gap-[2pt] text-[7pt]">
                  <li>
                    <div>
                      <h4 className="mb-[0.5pt] uppercase">
                        <span>
                          {"Junior Developer • "}
                          <a
                            target="_blank"
                            href="https://bitcube.tech/"
                            rel="noopener noreferrer nofollow"
                            className="hover:text-primary"
                            title="Bitcube website link"
                          >
                            Bitcube
                          </a>
                        </span>
                      </h4>
                      <span className="text-foreground/60">
                        On-site • May 2024 - Present
                      </span>
                      <div className="mb-[0.5pt]">
                        <p className="text-muted-foreground text-[7pt] text-balance">
                          I began my career at Bitcube in the Ecommerce
                          department in May 2024, specialising in Shopify theme
                          and storefront development. Focusing on responsive
                          design, performance, and accessibility standards, I
                          collaborated with a team of developers, designers and
                          quality-assurance engineers to build, maintain and
                          deliver bespoke solutions for prominent high-end
                          luxury and contemporary fashion clients across the UK,
                          EU, and US.
                        </p>
                        <br />
                        <p className="text-muted-foreground text-[7pt] text-balance">
                          I transferred to the Engineering department in July
                          2025, moving from Ecommerce into more technical
                          development work. I collaborate with different teams
                          to build and maintain front-end systems for UK- and
                          EU-based clients, primarily in the renewable energy
                          and maritime logistics sectors, as well as internal
                          projects at Bitcube.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="mt-[1mm]">
                    <div>
                      <h4 className="mb-[0.5pt] uppercase">
                        <span>
                          {"Junior Front-End Developer • "}
                          <a
                            target="_blank"
                            href="https://www.socoed.com/"
                            rel="noopener noreferrer nofollow"
                            className="hover:text-primary"
                            title="SOCO_ED website link"
                          >
                            SOCO_ED
                          </a>
                        </span>
                      </h4>
                      <span className="text-foreground/60">
                        Remote • January 2023 - March 2024
                      </span>
                      <div>
                        <p className="text-muted-foreground text-[7pt] text-balance">
                          I worked on a range of SaaS projects, building,
                          maintaining, and extending custom systems for several
                          clients, including leading universities in South
                          Africa. I led front-end development for numerous UI/UX
                          features and improvements on the Topic LMS and similar
                          platforms.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="mt-[1mm]">
                    <div>
                      <h4 className="mb-[0.5pt] uppercase">
                        <span>
                          {"Web Development Intern • "}
                          <a
                            target="_blank"
                            href="https://www.condensation.co.za/"
                            rel="noopener noreferrer nofollow"
                            className="hover:text-primary"
                            title="Condensation ERP24 website link"
                          >
                            Condensation ERP24
                          </a>
                        </span>
                      </h4>
                      <span className="text-foreground/60">
                        Remote • September 2022 - October 2022
                      </span>
                      <div></div>
                    </div>
                  </li>
                </ol>
              </div>
            </CVPageSection>
            <CVSeparator className="mt-[4.2333333333mm]" />
            <CVPageSection className="mt-[4.2333333333mm]">
              <CVPageSectionTitle className="flex items-center gap-2">
                <FolderCodeIcon className="size-[13pt]" />
                <span>Public Projects</span>
              </CVPageSectionTitle>
              <div>
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
                          title="Marlin Brokers website link"
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
                <CVPageSectionTitle className="flex items-center gap-2">
                  <GraduationCap className="size-[13pt]" />
                  <span>Education</span>
                </CVPageSectionTitle>
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
              <CVPageSectionTitle className="flex items-center gap-2">
                <User2Icon className="size-[13pt]" />
                <span>References</span>
              </CVPageSectionTitle>
              <div>
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
