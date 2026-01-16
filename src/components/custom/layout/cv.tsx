"use client";

import { useEffect, useState, type ComponentPropsWithoutRef } from "react";
import { CVAvatar, CVAvatarFallback, CVAvatarImage } from "../cv/cv-avatar";
import { CVPage } from "../cv/cv-page";
import { CVPageContent } from "../cv/cv-page-content";
import { CVPageHeader } from "../cv/cv-page-header";
import { CVSeparator } from "../cv/cv-separator";
import { CVSidebar } from "../cv/cv-sidebar";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { CVPageSection } from "../cv/cv-page-section";
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
import clsx from "clsx";
import { CVPageSectionTitle } from "../cv/cv-page-section-title";
import { CVPageContentBackground } from "../cv/cv-page-content-background";
import { SkillBadge, SkillBadgeIcon } from "../skill-badge";

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
        data-slot="cv"
        className={clsx(
          "relative z-1 flex w-full max-w-screen min-w-[210mm] gap-4 overflow-auto p-4 md:p-6 lg:p-8 print:block print:h-[297mm] print:max-h-[297mm] print:min-h-[297mm] print:max-w-none print:gap-0! print:overflow-hidden print:p-0!",
          className,
        )}
      >
        <CVPage className="mx-auto print:m-0!">
          <CVSidebar>
            <CVPageSection className="flex items-center justify-center">
              <CVAvatar
                className="bg-primary hidden-in-darkmode border-2 border-transparent shadow-md shadow-black/20 select-none"
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
            <CVSeparator className="mt-[4mm] mb-[2mm]" />
            <CVPageSection>
              <CVPageSectionTitle id="summary" className="mb-[2mm]">
                Summary
              </CVPageSectionTitle>
              <p className="text-8pt text-foreground/70 block w-full max-w-prose text-balance">
                I specialise in engineering high-quality front-end systems,
                websites, and UI libraries. I'm committed to the highest
                standards of performance, accessibility, and code quality.
                Working alongside a team of passionate professionals, I ensure
                every project follows modern best practices and delivers an
                exceptional user experience.
              </p>
            </CVPageSection>
            <CVSeparator className="my-[2mm]" />
            <CVPageSection>
              <CVPageSectionTitle id="contact-information" className="mb-[2mm]">
                Contact information
              </CVPageSectionTitle>
              <address className="text-8pt not-italic">
                <ul className="flex flex-col justify-center">
                  <li className="mb-[1.25mm] flex items-center justify-between">
                    <i title="Location">
                      <MapPinIcon className="text-foreground/90 size-[4mm] shrink-0" />
                    </i>
                    <span
                      title="Bloemfontein, Free State, South Africa, 9301 🇿🇦"
                      className="text-foreground/70 cursor-help text-right"
                    >
                      Bloemfontein, Free State <i className="not-italic">🇿🇦</i>
                    </span>
                  </li>
                  <li className="mb-[1.25mm] flex items-center justify-between">
                    <i title="Phone number">
                      <PhoneIcon className="text-foreground/90 size-[4mm] shrink-0" />
                    </i>
                    <a
                      href="tel:+27738782766"
                      rel="noopener noreferrer nofollow"
                      className="hover:text-primary text-foreground/70 text-right transition-all hover:underline"
                    >
                      +27738782766
                    </a>
                  </li>
                  <li className="mb-[1.25mm] flex items-center justify-between">
                    <i title="Email">
                      <MailIcon className="text-foreground/90 size-[4mm] shrink-0" />
                    </i>
                    <a
                      href="mailto:luke.dekiewit@yahoo.com"
                      rel="noopener noreferrer nofollow"
                      title="Bloemfontein, Free State, South Africa, 9301 🇿🇦"
                      className="hover:text-primary text-foreground/70 text-right hover:underline"
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
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                      className="hover:text-primary text-foreground/70 text-right hover:underline"
                    >
                      @lukedekiewit
                    </a>
                  </li>
                  <li className="mb-[1.25mm] flex items-center justify-between">
                    <i title="LinkedIn">
                      <LinkedinIcon className="text-foreground/90 size-[4mm] shrink-0" />
                    </i>
                    <a
                      href="https://lukedekiewit.co.za/"
                      rel="noopener noreferrer nofollow"
                      className="hover:text-primary text-foreground/70 text-right hover:underline"
                    >
                      @lukedekiewit
                    </a>
                  </li>
                  <li className="flex items-center justify-between">
                    <i title="Website">
                      <GlobeIcon className="text-foreground/90 size-[4mm] shrink-0" />
                    </i>
                    <a
                      href="https://lukedekiewit.co.za/"
                      rel="noopener noreferrer nofollow"
                      className="hover:text-primary text-foreground/70 text-right hover:underline"
                    >
                      lukedekiewit.co.za
                    </a>
                  </li>
                </ul>
              </address>
            </CVPageSection>
            <CVSeparator className="my-[2mm]" />
            <CVPageSection>
              <CVPageSectionTitle
                id="personal-information"
                className="mb-[2mm]"
              >
                Personal information
              </CVPageSectionTitle>
              <div className="text-8pt">
                <ul>
                  <li className="mb-[1.25mm] flex items-center justify-between">
                    <span className="text-foreground/90">Age</span>
                    <span className="text-foreground/70 text-right">25</span>
                  </li>
                  <li className="mb-[1.25mm] flex items-center justify-between">
                    <span className="text-foreground/90">Languages</span>
                    <span className="text-foreground/70 text-right">
                      English, Afrikaans
                    </span>
                  </li>
                  <li className="mb-[1.25mm] flex items-center justify-between">
                    <span className="text-foreground/90">Driving License</span>
                    <span className="text-foreground/70 text-right">
                      Code B
                    </span>
                  </li>
                  <li className="mb-[1.25mm] flex items-center justify-between">
                    <span className="text-foreground/90">Own transport</span>
                    <i title="Yes">
                      <CheckIcon className="text-foreground/70 size-[4mm] shrink-0" />
                    </i>
                  </li>
                  <li className="mb-[1.25mm] flex items-center justify-between">
                    <span className="text-foreground/90">
                      Willing to relocate
                    </span>
                    <i title="Yes">
                      <CheckIcon className="text-foreground/70 size-[4mm] shrink-0" />
                    </i>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-foreground/90">
                      Open to remote work
                    </span>
                    <i title="Yes">
                      <CheckIcon className="text-foreground/70 size-[4mm] shrink-0" />
                    </i>
                  </li>
                </ul>
              </div>
            </CVPageSection>
            <CVSeparator className="my-[2mm]" />
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
                <SkillBadge skill="Next.js" />
                <SkillBadge skill="Astro" />
                <SkillBadge skill="Preact" />
                <SkillBadge skill="shadcn/ui" />
                <SkillBadge skill="Tailwind CSS" />
                <SkillBadge skill="Sass" />
                <SkillBadge skill="Node.js" />
                <SkillBadge skill="Shopify" />
                <SkillBadge skill="Shopify Liquid" />
                <SkillBadge skill="Prismic" />
                <SkillBadge skill="Wordpress" />
                <SkillBadge skill="Git" />
                <SkillBadge skill="GitHub" />
              </legend>
            </CVPageSection>
            <CVSeparator className="my-[2mm]" />
            <CVPageSection>
              <CVPageSectionTitle className="mb-[2mm]">
                Additional Skills
              </CVPageSectionTitle>
              <ul className="text-8pt text-foreground/80 list-inside list-disc text-balance break-keep">
                <li>W3C Web Standards</li>
                <li>Client Communication</li>
                <li>Search Engine Optimisation</li>
                <li>Responsive Web Design</li>
                <li>Attention to Detail</li>
                <li>Agile Project Management</li>
                <li>BEM Methodology</li>
                <li>Collaborative Problem Solving</li>
              </ul>
            </CVPageSection>
          </CVSidebar>
          <CVPageContent className="relative">
            <CVPageHeader
              className="relative"
              titleNode={
                <h1 className="text-primary text-[26pt] leading-none uppercase">
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
                <div className="text-13pt flex items-center gap-[1.25mm] leading-6 uppercase">
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
                  <h2 className="hidden motion-reduce:block">
                    Front-End Engineer
                  </h2>
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
                </div>
              }
            >
              <a
                target="_blank"
                href="https://cv.lukedekiewit.co.za/"
                rel="noopener noreferrer nofollow"
                className="hover:text-primary text-foreground absolute top-0 right-0 hidden print:block"
                title="Interactive web version link"
              >
                <ExternalLinkIcon className="size-[4.5mm]" />
              </a>
            </CVPageHeader>
            <CVSeparator className="my-[2mm]" />
            <CVPageSection>
              <CVPageSectionTitle
                id="professional-experience"
                className="mb-[2mm] flex items-center gap-[1.75mm]"
              >
                <Briefcase className="size-[4.5mm] shrink-0" />
                <span>Professional experience</span>
              </CVPageSectionTitle>
              <ol className="text-8pt">
                <li className="mb-[1.25mm]">
                  <div>
                    <h4 className="text-foreground/90 mb-[1.25mm]">
                      {"> "}
                      <span className="uppercase">
                        {"Junior Developer • "}
                        <a
                          target="_blank"
                          href="https://bitcube.tech/"
                          rel="noopener noreferrer nofollow"
                          className="hover:text-primary hover:underline"
                          title="Bitcube website link"
                        >
                          Bitcube
                        </a>
                        {" • "} <span>May 2024 - Present</span>
                      </span>
                    </h4>
                    <div className="text-foreground/70">
                      <p className="mb-[1.25mm] max-w-prose text-balance">
                        I began my career at Bitcube in the Ecommerce department
                        in May 2024, specialising in Shopify theme and
                        storefront development. Focusing on responsive design,
                        performance, and accessibility standards, I collaborated
                        with a team of developers, designers and
                        quality-assurance engineers to build, maintain and
                        deliver bespoke solutions for prominent high-end luxury
                        and contemporary fashion clients across the UK, EU, and
                        US.
                      </p>
                      <p className="max-w-prose text-balance">
                        I transferred to the Engineering department in July
                        2025, moving from Ecommerce into more technical
                        development work. I collaborate with different teams to
                        build and maintain front-end systems for UK and EU-based
                        clients, primarily in the renewable energy and maritime
                        logistics sectors, as well as internal projects at
                        Bitcube.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="mb-[1.25mm]">
                  <div>
                    <h4 className="text-foreground/90 mb-[1.25mm] uppercase">
                      {"> "}
                      <span>
                        {"Junior Front-End Developer • "}
                        <a
                          target="_blank"
                          href="https://www.socoed.com/"
                          rel="noopener noreferrer nofollow"
                          className="hover:text-primary uppercase hover:underline"
                          title="SOCO_ED website link"
                        >
                          SOCO_ED
                        </a>
                        {" • "}
                        <span>Jan 2023 - Mar 2024</span>
                      </span>
                    </h4>
                    <div className="text-foreground/70">
                      <p className="max-w-prose text-balance">
                        I worked on a range of SaaS projects, building,
                        maintaining, and extending custom systems for several
                        clients, including leading universities in South Africa.
                        I led front-end development for numerous UI/UX features
                        and improvements on the Topic LMS and similar platforms.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div>
                    <h4 className="text-foreground/90 mb-[1.25mm] uppercase">
                      {"> "}
                      <span>
                        {"Development Intern • "}
                        <a
                          target="_blank"
                          href="https://www.condensation.co.za/"
                          rel="noopener noreferrer nofollow"
                          className="hover:text-primary hover:underline"
                          title="Condensation website link"
                        >
                          Condensation
                        </a>
                        {" • "} Sep 2022 - Oct 2022
                      </span>
                    </h4>
                    <div className="text-foreground/70">
                      <p className="max-w-prose text-balance">
                        I worked with a team of development interns to build and
                        maintain front-end UI components for PHP-based platforms
                        and static websites.
                      </p>
                    </div>
                  </div>
                </li>
              </ol>
            </CVPageSection>
            <CVSeparator className="my-[2mm]" />
            <CVPageSection>
              <CVPageSectionTitle
                id="public-projects"
                className="mb-[2mm] flex items-center gap-[1.75mm]"
              >
                <FolderCodeIcon className="size-[4.5mm] shrink-0" />
                <span>Public Projects</span>
              </CVPageSectionTitle>
              <ul className="text-8pt">
                <li className="mb-[1.25mm]">
                  <div>
                    <h4 className="text-foreground/90 mb-[1.25mm] flex items-center uppercase">
                      <span>
                        {"> "}
                        <a
                          target="_blank"
                          href="https://atomwave.lukedekiewit.co.za/"
                          rel="noopener noreferrer nofollow"
                          className="hover:text-primary hover:underline"
                          title="Atomwave website link"
                        >
                          Atomwave Component Library
                        </a>{" "}
                        • 2025/26
                      </span>
                    </h4>
                    <p className="text-foreground/70 max-w-prose text-balance">
                      My most ambitious project to date, due for completion in
                      2026. Atomwave is a rewrite of shadcn/ui without a
                      Tailwind dependency, offering additional components,
                      greater flexibility, and built-in support for multiple
                      themes.
                    </p>
                  </div>
                </li>
                <li className="mb-[1.25mm]">
                  <div>
                    <h4 className="text-foreground/90 mb-[1.25mm] flex items-center uppercase">
                      <span>
                        {"> "}
                        <a
                          target="_blank"
                          href="https://marlinbrokers.co.za/"
                          rel="noopener noreferrer nofollow"
                          className="hover:text-primary hover:underline"
                          title="Marlin Brokers website link"
                        >
                          Marlin Brokers
                        </a>{" "}
                        • 2024
                      </span>
                    </h4>
                    <p className="text-foreground/70 max-w-prose text-balance">
                      A complete rebuild of the Marlin Brokers website from
                      scratch, transforming an outdated and slow WordPress site
                      into a clean, fast, SEO-optimized website built with
                      Astro, React, and Tailwind.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h4 className="text-foreground/90 mb-[1.25mm] flex items-center uppercase">
                      <span>
                        {"> "}
                        <a
                          target="_blank"
                          href="https://topic.co.za/"
                          rel="noopener noreferrer nofollow"
                          className="hover:text-primary hover:underline"
                          title="Topic LMS Link"
                        >
                          Topic LMS
                        </a>{" "}
                        • 2023
                      </span>
                    </h4>
                    <p className="text-foreground/70 max-w-prose text-balance">
                      An educational platform for high school students in Grades
                      10-12, supporting the education of over 200,000 learners
                      across South Africa. Built with Next.js, React, Tailwind,
                      and Strapi.
                    </p>
                  </div>
                </li>
              </ul>
            </CVPageSection>
            <CVSeparator className="my-[2mm]" />
            <CVPageSection>
              <CVPageSectionTitle
                id="education"
                className="mb-[2mm] flex items-center gap-[1.75mm]"
              >
                <GraduationCap className="size-[4.5mm] shrink-0" />
                <span>Education</span>
              </CVPageSectionTitle>
              <ol className="text-8pt">
                <li className="mb-[1.25mm]">
                  <div>
                    <h4 className="text-foreground/90 mb-[1.25mm] uppercase">
                      <span>{"> "}</span>
                      CTU Training Solutions • 2022
                    </h4>
                    <a
                      target="_blank"
                      href="https://allqs.saqa.org.za/showQualification.php?id=48872"
                      rel="noopener noreferrer nofollow"
                      className="hover:text-primary text-foreground/70 hover:underline"
                    >
                      National Certificate: IT Systems Development (NQF 6)
                    </a>
                  </div>
                </li>
                <li className="mb-[1.25mm]">
                  <div>
                    <h4 className="text-foreground/90 mb-[1.25mm] uppercase">
                      <span>{"> "}</span>CTU Training Solutions • 2021
                    </h4>
                    <a
                      target="_blank"
                      href="https://regqs.saqa.org.za/viewQualification.php?id=78965"
                      rel="noopener noreferrer nofollow"
                      className="hover:text-primary text-foreground/70 hover:underline"
                    >
                      FET Certificate: IT Systems Development (NQF 5)
                    </a>
                  </div>
                </li>
                <li className="mb-[1.25mm]">
                  <div>
                    <h4 className="text-foreground/90 mb-[1.25mm] uppercase">
                      <span>{"> "}</span>CTU Training Solutions • 2020
                    </h4>
                    <a
                      target="_blank"
                      href="https://regqs.saqa.org.za/viewQualification.php?id=71850"
                      rel="noopener noreferrer nofollow"
                      className="hover:text-primary text-foreground/70 hover:underline"
                    >
                      FET Certificate: IT Database Development (NQF 4)
                    </a>
                  </div>
                </li>
                <li className="mb-[1.25mm]">
                  <div>
                    <h4 className="text-foreground/90 mb-[1.25mm] uppercase">
                      <span>{"> "}</span>Grey College Secondary • 2019
                    </h4>
                    <p className="text-foreground/70">
                      National Senior Certificate
                    </p>
                  </div>
                </li>
              </ol>
            </CVPageSection>
            <CVSeparator className="my-[2mm]" />
            <CVPageSection>
              <CVPageSectionTitle
                id="references"
                className="mb-[2mm] flex items-center gap-[1.75mm]"
              >
                <User2Icon className="size-[4.5mm] shrink-0" />
                <span>References</span>
              </CVPageSectionTitle>
              <p className="text-8pt text-foreground/70 max-w-prose text-balance">
                <span>For privacy reasons, references are available</span>{" "}
                <a
                  href="#contact-information"
                  rel="noopener noreferrer nofollow"
                  className="hover:text-primary text-foreground/70 text-right underline transition-all hover:underline"
                >
                  upon request
                </a>
                .
              </p>
            </CVPageSection>

            <CVPageContentBackground
              className="opacity-0 grayscale dark:opacity-5"
              src="/images/backgrounds/laptop_code_3.jpg"
            />
          </CVPageContent>
        </CVPage>
      </main>
    </>
  );
};
