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
  GraduationCap,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  User2Icon,
} from "lucide-react";
import { siGithub } from "simple-icons";
import clsx from "clsx";
import { CVPageSectionTitle } from "./cv-page-section-title";
import { CVPageContentBackground } from "./cv-page-content-background";
import { SkillBadge, SkillBadgeIcon } from "../skill-badge";

export type CVProps = ComponentPropsWithoutRef<"main"> & {
  optimizedBg?: string;
};

export const CV = ({ className, optimizedBg, ...props }: CVProps) => {
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
        data-slot="cv"
        className={clsx(
          "scrollbar-gutter-stable relative z-1 flex w-full gap-4 overflow-auto scroll-smooth p-4 md:p-6 lg:p-8 print:block print:h-[297mm] print:max-h-[297mm] print:min-h-[297mm] print:max-w-none print:min-w-[210mm] print:gap-0! print:overflow-hidden print:p-0!",
          className,
        )}
        style={{ scrollbarGutter: "stable" }}
      >
        <CVPage className="mx-auto flex-row-reverse print:m-0!">
          <CVPageContent className="relative">
            <CVPageHeader
              className="relative"
              titleNode={
                <h1 className="text-primary mb-[1mm] text-[26pt] leading-none uppercase">
                  <EncryptedText
                    text={"Luke De Kiewit"}
                    className="motion-reduce:hidden"
                    encryptedClassName="select-none"
                    revealedClassName="select-text"
                    revealDelayMs={0}
                    flipDelayMs={0}
                  />
                  <span className="hidden motion-reduce:inline">
                    Luke De Kiewit
                  </span>
                </h1>
              }
              subtitleNode={
                <h2 className="text-13pt! flex items-center gap-[1.25mm] leading-6 uppercase">
                  <span
                    className="pointer-events-none not-italic select-none"
                    aria-hidden="true"
                  >
                    {"<"}
                  </span>
                  <EncryptedText
                    text={"Front-End Engineer"}
                    className="motion-reduce:hidden"
                    encryptedClassName="select-none"
                    revealedClassName="select-text"
                    revealDelayMs={10}
                    flipDelayMs={0}
                  />
                  <span className="hidden motion-reduce:inline">
                    Front-End Engineer
                  </span>
                  <i
                    className={clsx(
                      "bg-primary inline h-4.5 w-0.5 motion-reduce:hidden print:hidden!",
                      !caretBlink && "invisible",
                    )}
                    style={{
                      animation: !caretBlink
                        ? "none"
                        : "caretBlink 1.4s steps(1, end) infinite",
                    }}
                  ></i>
                  <span
                    className="pointer-events-none not-italic select-none"
                    aria-hidden="true"
                  >
                    {"/>"}
                  </span>
                </h2>
              }
            >
              <a
                target="_blank"
                href="https://lukedekiewit-cv.vercel.app/"
                className="hover:text-primary text-foreground absolute top-0 right-0 hidden print:block"
                title="Interactive web version link"
              >
                <ExternalLinkIcon className="size-[4.5mm]" />
              </a>
            </CVPageHeader>
            <CVSeparator className="my-[2.125mm]" />
            <CVPageSection>
              <CVPageSectionTitle
                id="professional-experience"
                className="mb-[2mm] flex items-center gap-[1.75mm]"
              >
                <Briefcase className="size-[4.5mm] shrink-0" />
                <span>Professional experience</span>
              </CVPageSectionTitle>
              <ol className="text-7pt">
                <li className="mb-[1.25mm]">
                  <div>
                    <h3 className="text-foreground/90 mb-[1.25mm]">
                      {"> "}
                      <span className="uppercase">
                        {"Front-End Engineer • "}
                        <a
                          target="_blank"
                          href="https://bitcube.tech/"
                          className="hover:text-primary hover:underline"
                          title="Bitcube website link"
                        >
                          Bitcube
                        </a>
                        {" • "} <span>May 2024 - Mar 2026</span>
                      </span>
                    </h3>
                    <div className="text-foreground/70">
                      <h4 className="text-foreground/65 mb-[1mm]">
                        Engineering Department{" "}
                        <span>(Apr 2025 - Mar 2026)</span>
                      </h4>
                      <ul className="text-foreground/60 mb-[1.25mm] list-disc pl-[6mm] text-balance break-keep">
                        <li className="my-[2mm]">
                          Engineered front-end systems for UK and EU-based
                          clients in the maritime logistics and renewable energy
                          sectors.
                        </li>
                        <li className="my-[2mm]">
                          Developed and maintained high-performance internal
                          React and Next.js web applications. Utilised
                          AI-augmented workflows to automate boilerplate and
                          testing, significantly reducing delivery timelines.
                        </li>
                      </ul>
                      <h4 className="text-foreground/65 mb-[1mm]">
                        Ecommerce Department <span>(May 2024 - Mar 2025)</span>
                      </h4>
                      <ul className="text-foreground/60 mb-[1.25mm] list-disc pl-[6mm] text-balance break-keep">
                        <li className="my-[2mm]">
                          Built and maintained bespoke Shopify storefronts for
                          high-end luxury and fashion brands across the UK, EU,
                          and US.
                        </li>
                        <li className="my-[2mm]">
                          Optimised storefronts for performance, W3C
                          accessibility standards, and conversion rate growth.
                        </li>
                        <li className="my-[2mm]">
                          Implemented responsive design, semantic UI and
                          SEO-optimisation across diverse international
                          e-commerce platforms.
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>

                <li className="mb-[1.25mm]">
                  <div>
                    <h3 className="text-foreground/90 mb-[1.25mm] uppercase">
                      {"> "}
                      <span>
                        {"Front-End Engineer • "}
                        <a
                          target="_blank"
                          href="https://www.socoed.com/"
                          className="hover:text-primary uppercase hover:underline"
                          title="SOCO_ED website link"
                        >
                          SOCO_ED
                        </a>
                        {" • "}
                        <span>Jan 2023 - Mar 2024</span>
                      </span>
                    </h3>
                    <ul className="text-foreground/60 list-disc pl-[6mm] text-balance break-keep">
                      <li className="my-[2mm]">
                        Led front-end development for the Topic LMS platform,
                        supporting over 200,000 learners across South Africa.
                      </li>
                      <li className="my-[2mm]">
                        Engineered custom SaaS solutions and UI/UX features for
                        high-profile educational institutions and universities.
                      </li>
                      <li className="my-[2mm]">
                        Built and extended scalable front-end systems using
                        Next.js, React, and Tailwind CSS.
                      </li>
                      <li className="my-[2mm]">
                        Integrated complex CMS architectures with Strapi to
                        manage large-scale educational content delivery.
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div>
                    <h3 className="text-foreground/90 mb-[1.25mm] uppercase">
                      {"> "}
                      <span>
                        {"Front-End Developer (Intern) • "}
                        <a
                          target="_blank"
                          href="https://www.condensation.co.za/"
                          className="hover:text-primary hover:underline"
                          title="Condensation website link"
                        >
                          Condensation
                        </a>
                        {" • "} Sep 2022 - Oct 2022
                      </span>
                    </h3>

                    <ul className="text-foreground/60 list-disc pl-[6mm] text-balance break-keep">
                      <li className="my-[2mm]">
                        Engineered front-end UI components for PHP-based
                        platforms and static websites.
                      </li>
                      <li className="my-[2mm]">
                        Collaborated on the maintenance and scaling of web
                        interfaces.
                      </li>
                    </ul>
                  </div>
                </li>
              </ol>
            </CVPageSection>
            <CVSeparator className="my-[2.125mm]" />
            <CVPageSection>
              <CVPageSectionTitle
                id="public-projects"
                className="mb-[2mm] flex items-center gap-[1.75mm]"
              >
                <FolderCodeIcon className="size-[4.5mm] shrink-0" />
                <span>Public Projects</span>
              </CVPageSectionTitle>
              <ul className="text-7pt">
                <li className="mb-[1.25mm]">
                  <div>
                    <h3 className="text-foreground/90 mb-[1.25mm] flex items-center uppercase">
                      <span>
                        {"> "}
                        <a
                          target="_blank"
                          href="https://atomwave.lukedekiewit.co.za/"
                          className="hover:text-primary hover:underline"
                          title="Atomwave website link"
                        >
                          Atomwave Component Library
                        </a>{" "}
                        • 2025/26
                      </span>
                    </h3>
                    <p className="text-foreground/60 pl-[6mm] text-balance">
                      My most ambitious project to date, due for completion in
                      late 2026. Atomwave is a rewrite of shadcn/ui without a
                      Tailwind dependency, offering additional components,
                      greater flexibility, and built-in support for multiple
                      themes.
                    </p>
                  </div>
                </li>
                <li className="mb-[1.25mm]">
                  <div>
                    <h3 className="text-foreground/90 mb-[1.25mm] flex items-center uppercase">
                      <span>
                        {"> "}
                        <a
                          target="_blank"
                          href="https://marlinbrokers.co.za/"
                          className="hover:text-primary hover:underline"
                          title="Marlin Brokers website link"
                        >
                          Marlin Brokers
                        </a>{" "}
                        • 2024
                      </span>
                    </h3>
                    <p className="text-foreground/60 pl-[6mm] text-balance">
                      A complete rebuild of the Marlin Brokers website from
                      scratch, transforming an outdated and slow WordPress site
                      into a clean, fast, SEO-optimised website built with
                      Astro, React, and Tailwind.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3 className="text-foreground/90 mb-[1.25mm] flex items-center uppercase">
                      <span>
                        {"> "}
                        <a
                          target="_blank"
                          href="https://topic.co.za/"
                          className="hover:text-primary hover:underline"
                          title="Topic LMS Link"
                        >
                          Topic LMS
                        </a>{" "}
                        • 2023
                      </span>
                    </h3>
                    <p className="text-foreground/60 pl-[6mm] text-balance">
                      An educational platform for high school students in Grades
                      10-12, supporting the education of over 200,000 learners
                      across South Africa. Built with Next.js, React, Tailwind,
                      and Strapi.
                    </p>
                  </div>
                </li>
              </ul>
            </CVPageSection>
            <CVSeparator className="my-[2.125mm]" />
            <CVPageSection>
              <CVPageSectionTitle
                id="education"
                className="mb-[2mm] flex items-center gap-[1.75mm]"
              >
                <GraduationCap className="size-[4.5mm] shrink-0" />
                <span>Education</span>
              </CVPageSectionTitle>
              <ol className="text-7pt">
                <li className="mb-[1.25mm]">
                  <div>
                    <h3 className="text-foreground/70 mb-[1.25mm] uppercase">
                      <span>{"> "}</span>
                      CTU Training Solutions • 2022
                    </h3>
                    <a
                      target="_blank"
                      href="https://allqs.saqa.org.za/showQualification.php?id=48872"
                      className="hover:text-primary text-foreground/60 ml-[6mm] hover:underline"
                    >
                      National Certificate: IT Systems Development (NQF 6)
                    </a>
                  </div>
                </li>
                <li className="mb-[1.25mm]">
                  <div>
                    <h3 className="text-foreground/70 mb-[1.25mm] uppercase">
                      <span>{"> "}</span>CTU Training Solutions • 2021
                    </h3>
                    <a
                      target="_blank"
                      href="https://regqs.saqa.org.za/viewQualification.php?id=78965"
                      className="hover:text-primary text-foreground/60 ml-[6mm] hover:underline"
                    >
                      FET Certificate: IT Systems Development (NQF 5)
                    </a>
                  </div>
                </li>
                <li className="mb-[1.25mm]">
                  <div>
                    <h3 className="text-foreground/70 mb-[1.25mm] uppercase">
                      <span>{"> "}</span>CTU Training Solutions • 2020
                    </h3>
                    <a
                      target="_blank"
                      href="https://regqs.saqa.org.za/viewQualification.php?id=71850"
                      className="hover:text-primary text-foreground/60 ml-[6mm] hover:underline"
                    >
                      FET Certificate: IT Database Development (NQF 4)
                    </a>
                  </div>
                </li>
                <li className="mb-[1.25mm]">
                  <div>
                    <h3 className="text-foreground/70 mb-[1.25mm] uppercase">
                      <span>{"> "}</span>Grey College Secondary • 2019
                    </h3>
                    <p className="text-foreground/60 ml-[6mm]">
                      National Senior Certificate
                    </p>
                  </div>
                </li>
              </ol>
            </CVPageSection>
            <CVSeparator className="my-[2.125mm]" />
            <CVPageSection>
              <CVPageSectionTitle
                id="references"
                className="mb-[2mm] flex items-center gap-[1.75mm]"
              >
                <User2Icon className="size-[4.5mm] shrink-0" />
                <span>References</span>
              </CVPageSectionTitle>
              <p className="text-7pt text-foreground/60 max-w-prose pl-[6mm] text-balance">
                <span>For privacy reasons, references are available</span>{" "}
                <a
                  href="#contact-information"
                  className="hover:text-primary text-foreground/60 text-right underline transition-all hover:underline"
                >
                  upon request
                </a>
                .
              </p>
            </CVPageSection>

            <CVPageContentBackground
              className="opacity-0 grayscale dark:opacity-5"
              src={optimizedBg ?? "/images/backgrounds/laptop_code_3.jpg"}
            />
          </CVPageContent>
          <CVSidebar>
            <CVPageSection className="flex items-center justify-center">
              <CVAvatar
                className="border-border size-[38mm] border-2 shadow-sm dark:shadow-md"
                title="Luke De Kiewit profile picture"
              >
                <CVAvatarImage
                  className="animate-in fade-in blur-in duration-200 select-none"
                  src="/images/ldk_selfie_pfp_filter_200px.webp"
                  alt="Profile picture"
                  height={128}
                  width={128}
                  loading="eager"
                />
                <CVAvatarFallback />
              </CVAvatar>
            </CVPageSection>
            <CVSeparator className="mt-[4mm] mb-[2mm]" />
            <CVPageSection>
              <CVPageSectionTitle id="summary" className="mb-[2mm]">
                Summary
              </CVPageSectionTitle>
              <p className="text-7pt text-foreground/65 block w-full max-w-prose text-balance">
                I specialise in engineering front-end systems and UI libraries
                with a commitment to accessibility and code quality. I have a
                proven track record of building at scale, including platforms
                for 200,000+ users, front-end solutions for the maritime and
                renewable energy sectors, and storefronts for high-profile UK,
                EU and US clients. I integrate AI-augmented workflows into my
                development process to accelerate delivery while maintaining
                strict engineering standards.
              </p>
            </CVPageSection>
            <CVSeparator className="my-[2.125mm]" />
            <CVPageSection>
              <CVPageSectionTitle id="contact-information" className="mb-[2mm]">
                Contact information
              </CVPageSectionTitle>
              <address className="text-7pt not-italic">
                <ul className="flex flex-col justify-center">
                  <li className="mb-[1.25mm] flex items-center justify-between">
                    <i title="Location">
                      <MapPinIcon className="text-foreground/90 size-[4mm] shrink-0" />
                    </i>
                    <span
                      title="Bloemfontein, Free State, South Africa, 9301 🇿🇦"
                      className="text-foreground/65 cursor-help text-right"
                    >
                      Bloemfontein, Free State <i className="not-italic">🇿🇦</i>
                    </span>
                  </li>
                  {/* <li className="mb-[1.25mm] flex items-center justify-between">
                    <i title="Phone number">
                      <PhoneIcon className="text-foreground/90 size-[4mm] shrink-0" />
                    </i>
                    <a
                      href="tel:+27738782766"
                      
                      className="hover:text-primary text-foreground/70 text-right transition-all hover:underline"
                    >
                      +27738782766
                    </a>
                  </li> */}
                  <li className="mb-[1.25mm] flex items-center justify-between">
                    <i title="Email">
                      <MailIcon className="text-foreground/90 size-[4mm] shrink-0" />
                    </i>
                    <a
                      href="mailto:luke.dekiewit@yahoo.com"
                      title="Bloemfontein, Free State, South Africa, 9301 🇿🇦"
                      className="hover:text-primary text-foreground/65 text-right hover:underline"
                    >
                      luke.dekiewit@yahoo.com
                    </a>
                  </li>
                  <li className="mb-[1.25mm] flex items-center justify-between">
                    <SkillBadgeIcon
                      title="GitHub"
                      hex="color-mix(in oklab, var(--foreground) 90%, transparent)"
                      path={siGithub.path}
                      className="size-[4mm] shrink-0"
                    />
                    <a
                      href="https://github.com/lukedekiewit"
                      target="_blank"
                      className="hover:text-primary text-foreground/65 text-right hover:underline"
                    >
                      @lukedekiewit
                    </a>
                  </li>
                  <li className="mb-[1.25mm] flex items-center justify-between">
                    <i title="LinkedIn">
                      <LinkedinIcon className="text-foreground/90 size-[4mm] shrink-0" />
                    </i>
                    <a
                      href="https://www.linkedin.com/in/lukedekiewit/"
                      className="hover:text-primary text-foreground/65 text-right hover:underline"
                    >
                      @lukedekiewit
                    </a>
                  </li>
                  {/* <li className="flex items-center justify-between">
                    <i title="Website">
                      <GlobeIcon className="text-foreground/90 size-[4mm] shrink-0" />
                    </i>
                    <a
                      href="https://lukedekiewit.co.za/"
                      
                      className="hover:text-primary text-foreground/70 text-right hover:underline"
                    >
                      lukedekiewit.co.za
                    </a>
                  </li> */}
                </ul>
              </address>
            </CVPageSection>
            <CVSeparator className="my-[2.125mm]" />
            <CVPageSection>
              <CVPageSectionTitle
                id="personal-information"
                className="mb-[2mm]"
              >
                Personal information
              </CVPageSectionTitle>
              <div className="text-7pt">
                <ul>
                  {/* <li className="mb-[1.25mm] flex items-center justify-between">
                    <span className="text-foreground/90">Age</span>
                    <span className="text-foreground/70 text-right">25</span>
                  </li> */}
                  <li className="mb-[1.25mm] flex items-center justify-between">
                    <span className="text-foreground/90">Languages</span>
                    <span className="text-foreground/65 text-right">
                      English, Afrikaans
                    </span>
                  </li>
                  <li className="mb-[1.25mm] flex items-center justify-between">
                    <span className="text-foreground/90">
                      Open to remote work
                    </span>
                    <span className="text-foreground/65 text-right">Yes</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-foreground/90">Timezone</span>
                    <span className="text-foreground/65 text-right">
                      GMT +2
                    </span>
                  </li>
                </ul>
              </div>
            </CVPageSection>
            <CVSeparator className="my-[2.125mm]" />
            <CVPageSection>
              <CVPageSectionTitle id="tech-stack" className="mb-[2mm]">
                Tech stack
              </CVPageSectionTitle>
              <legend className="flex flex-wrap items-center gap-[1.5mm]">
                <SkillBadge skill="HTML" />
                <SkillBadge skill="CSS" />
                <SkillBadge skill="JavaScript" />
                <SkillBadge skill="TypeScript" />
                <SkillBadge skill="React" />
                <SkillBadge skill="Preact" />
                <SkillBadge skill="Node.js" />
                <SkillBadge className="hidden-in-lightmode" skill="Next.js" />
                <SkillBadge
                  className="hidden-in-darkmode bg-black! text-white! [&_svg]:fill-white!"
                  skill="Next.js"
                />
                <SkillBadge skill="Astro" />
                <SkillBadge skill="Sass" />
                <SkillBadge skill="Tailwind CSS" />
                <SkillBadge skill="Shopify" />
                <SkillBadge skill="Shopify Liquid" />
                <SkillBadge
                  className="hidden-in-lightmode bg-white! text-black! [&_svg]:fill-black!"
                  skill="shadcn/ui"
                />
                <SkillBadge className="hidden-in-darkmode" skill="shadcn/ui" />
                <SkillBadge skill="Prismic" />
                <SkillBadge skill="Wordpress" />
                <SkillBadge skill="Git" />
                <SkillBadge className="hidden-in-darkmode" skill="GitHub" />
                <SkillBadge
                  className="hidden-in-lightmode bg-[#7c007a]!"
                  skill="GitHub"
                />
              </legend>
            </CVPageSection>
            <CVSeparator className="my-[2.125mm]" />
            <CVPageSection>
              <CVPageSectionTitle className="mb-[2mm]">
                Additional Skills
              </CVPageSectionTitle>
              <ul className="text-7pt text-foreground/65 list-inside list-disc text-balance break-keep">
                <li>Design System Implementation</li>
                <li>Headless CMS & Architecture</li>
                <li>Performance Optimisation</li>
                <li>E2E & Unit Testing (Playwright)</li>
                <li>Conversion Rate Optimisation</li>
                <li>Component-Driven Development</li>
                <li>State Management</li>
                <li>API Integration</li>
                <li>W3C & WCAG Web Standards</li>
                <li>SEO & GEO Optimisation</li>
                <li>CI/CD & Deployment Workflows</li>
                <li>Version Control & Branching</li>
                <li>Remote-First Collaboration</li>
                <li>Semantic HTML</li>
                <li>Responsive Web Design</li>
                <li>Cross-Browser Compatibility</li>
              </ul>
            </CVPageSection>
          </CVSidebar>
        </CVPage>
      </main>
    </>
  );
};
