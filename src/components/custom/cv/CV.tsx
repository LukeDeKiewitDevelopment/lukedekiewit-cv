"use client";

import { useEffect, useState } from "react";
import { CVAvatar, CVAvatarFallback, CVAvatarImage } from "./CVAvatar";
import { CVPage } from "./CVPage";
import { CVPageContent } from "./CVPageContent";
import { CVPageHeader } from "./CVPageHeader";
import { CVSeparator } from "./CVSeperator";
import { CVSidebar } from "./CVSidebar";
import { EncryptedText } from "@ui/encrypted-text";

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
          <div className="flex flex-col gap-[4.2333333333mm]">
            <div className="flex items-center justify-center">
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
            </div>
            <CVSeparator />
          </div>
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
              <span className="text-muted-foreground flex items-center gap-2 text-lg uppercase">
                <i
                  className="text-muted-foreground pointer-events-none font-normal not-italic select-none"
                  aria-hidden
                >
                  {">"}
                </i>
                <EncryptedText
                  text={"Front End Developer"}
                  encryptedClassName="text-muted-foreground/60 select-none"
                  revealedClassName="text-muted-foreground select-text"
                  revealDelayMs={40}
                  flipDelayMs={10}
                />
                {caretBlink && (
                  <i
                    className="bg-primary block h-5 w-0.5 print:hidden"
                    style={{
                      animation: "caretBlink 1.4s steps(1, end) infinite",
                    }}
                  ></i>
                )}
              </span>
            }
            lightModeLogo={{
              src: "/images/logos/ldk_logo_black_tilted_724px.png",
              alt: "",
              height: 64,
              width: 64,
              loading: "lazy",
              "aria-hidden": "true",
              className: "opacity-20",
            }}
            darkModeLogo={{
              src: "/images/logos/ldk_logo_white_tilted_724px.png",
              alt: "",
              height: 64,
              width: 64,
              loading: "lazy",
              "aria-hidden": "true",
              className: "opacity-20",
            }}
          ></CVPageHeader>
          <CVSeparator className="mt-4" />
        </CVPageContent>
      </CVPage>
    </main>
  );
};
