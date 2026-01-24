export interface SanitisedAsanaData {
  data: SanitisedAsanaDataEntry[];
}

export interface SanitisedAsanaDataEntry {
  id: string;
  name: string;
  createdAt: string;
  notes: string;
  projectName: string | null;
}

export const engineeringData = {
  data: [
    {
      id: "1212898164456857",
      name: "Feat: 3-step product workflow slice",
      createdAt: "2026-01-22T06:29:20.471Z",
      notes:
        "Component: “3-step product workflow” (screenshot + title + description)\n\n\nConcept:\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1212898164457022\n\n\n\nPurpose\n\nA three-part workflow block that shows the product experience through UI screenshots, paired with short “step” labels and supporting copy.\n\nSection structure\n\n    Section heading (H2)\n    3-up grid of workflow items (each item = screenshot card + title + paragraph)\n\nItem anatomy (per column)\n\nEach column contains:\n    Screenshot card\n    A rectangular card image with top rounded corners\n    Title (H3)\n    Description (paragraph)\n\nLayout & spacing\n\nDesktop (≥ 1024px)\n    3 equal columns\n    Left-aligned titles and paragraphs\n    Screenshot cards sit above the text\n    Suggested spacing (please follow existing guideline, if non existing this is the suggestion)\n    Section heading → grid: 48–72px\n    Screenshot card → title: 24–32px\n    Title → paragraph: 12–16px\n    Column gap: 48–80px (match your grid)\nTablet (≈ 768–1023px)\n    2 columns, third wraps\n    Maintain left alignment\n    Reduce column gap slightly if needed\nMobile (≤ 767px)\n    Single column stack\n    Screenshot cards full width\n    Keep text left-aligned\nScreenshot card sizing & behaviour\n    Card aspect: wide rectangle (roughly 16:9-ish, doesn’t need to be exact)\n    Card padding: enough to keep the UI mock away from edges (suggest 24–40px)\n    UI image should be responsive:\n    object-fit: contain (so the full mock remains visible)\n    No cropping on smaller screens\nTypography (use site tokens)\n    Section heading (H2): blue HEX #1F1C2B \n    Item title (H3): blue HEX #1F1C2B \n    Body: standard paragraph size, comfortable line-height, blue HEX #1F1C2B \n    Keep line length readable (suggest max-width 40–55ch for the paragraphs)\nVisual styling notes\n    Background behind the section: white\n    No visible borders on the cards\nComponent fields\n    heading (string)\n    items[] (repeatable; default 3)\n    image (screenshot / mock)\n    image_alt (string)\n    title (string)\n    description (text)\n    Optional:\n    columns_desktop (default 3)\n",
      projectName: "DCSA | Backlog",
    },
    {
      id: "1212898164456846",
      name: "Feat: 3-up feature highlight slice",
      createdAt: "2026-01-22T06:24:56.635Z",
      notes:
        "Component: “3-up feature highlights” (icon + title + description)\n\n\nConcept:\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1212898164457024\n\n\nPurpose\n    A lightweight feature/value block presenting three items side-by-side, each with a simple line icon, a bold heading, and one short paragraph.\n\nContent structure (per item)\n\nEach feature item contains:\n    Icon (SVG line icon, two-colour strokes)\n    Title (H3)\n    Description (paragraph)\nThese are not boxes or encapsulated in a box with rouded corners.\n\nLayout & spacing\n\nDesktop \n    3 equal columns in a single row\n    Items center-aligned (icon, title, and paragraph centred)\n    Container: centred on page with a max width\n    Column gap: generous whitespace (suggest 64–96px depending on your grid)\n    Vertical spacing inside each item (suggested starting points adjust based on previous work on dcsa.org):\n    Icon → Title: 24–32px\n    Title → Description: 16–24px\n\nTablet (≈ 768–1023px)\n    2 columns, then third wraps to next row\n    Keep the same internal item spacing\n\nMobile (≤ 767px)\n    1 column stacked\n    Suggest switching to left-aligned text for readability (optional; if you keep centred, increase line-height and spacing slightly)\n\nTypography\n\nUse existing font family.\n\nIcon style\n\n    Format: SVG (inline preferred)\n    Style: DCSA Icon library\n    Icon size\n    Standard icon: 24 px\n    Large icons: 32–40 px\n    Touch area: 44–48 px\n    Colours:\n    Blue HEX #1F1C2B \n    Yellow HEX #F2E300 \n\nImplementation notes\n\nMake it a repeatable component with fields:\n    items[] (exactly 3 for this layout)\n    icon (SVG asset or icon name)\n    title (string)\n    description (text)\n    Optional:\n    columns_desktop (default 3)\n    alignment_mobile (center/left)\n",
      projectName: "DCSA | Backlog",
    },
    {
      id: "1212849189601688",
      name: "Release: 1.6.3",
      createdAt: "2026-01-18T11:15:28.927Z",
      notes:
        "To be released in 1.6.3:\nhttps://app.asana.com/1/375643158116881/project/1205765637665888/task/1212756251907806",
      projectName: "GE - Backlog",
    },
    {
      id: "1212787807714442",
      name: "Implement redesign of upcoming events",
      createdAt: "2026-01-15T08:56:36.187Z",
      notes:
        "https://www.figma.com/design/MhQtQ1uFGsPMXypmhoOksW/DCSA-Design-revisions?node-id=1-588&t=zd5Vuv7Ld8gNZzOG-11\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1212787807714446\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1212787807714448\n\n\n",
      projectName: "DCSA | Backlog",
    },
    {
      id: "1212785574014038",
      name: "web: feat: add boards on setup",
      createdAt: "2026-01-14T09:50:14.738Z",
      notes: "",
      projectName: "Nexus - Backlog",
    },
    {
      id: "1212783468316516",
      name: "Web: Add repository on setup",
      createdAt: "2026-01-14T09:22:10.286Z",
      notes: "",
      projectName: "Nexus - Backlog",
    },
    {
      id: "1212728192565607",
      name: "fix: date formats should always be yyyy/MM/dd",
      createdAt: "2026-01-13T11:49:02.871Z",
      notes:
        'User Story\n\n> This has been up and is again an issue on create meeting it shows date as dd/mm/yyyy we always put the year first\n\nAcceptance Criteria\n\n> Measurable conditions that define the final business outcomes and must be true for the task to be considered complete (often written in Gherkin "Given... When... Then...").\n\n\nThe date/datetime fields on the Create and Edit Meeting pages should be in this format: yyyy/MM/dd\n\nOut of Scope\n\n> Features, requirements, or activities that are explicitly excluded from this specific task to prevent scope creep.\n\n\n\nSystem Design / Technical Approach\n\n> The technical plan outlining the architectural choices, main components, and the overall strategy for implementation.\n\n\nImplementation Steps:\n    Identify the datetime logic on the Meeting pages and ensure their format is updated to yyyy/MM/dd.\n',
      projectName: "Nexus - Backlog",
    },
    {
      id: "1212728192565599",
      name: "feat: remove status field on projects",
      createdAt: "2026-01-13T11:31:19.081Z",
      notes:
        'User Story\n\n> Remove the status field from projects\n\nAcceptance Criteria\n\n> Measurable conditions that define the final business outcomes and must be true for the task to be considered complete (often written in Gherkin "Given... When... Then...").\n\n\nThere should be no status field on the /admin/project/1/page.tsx page.\n\nOut of Scope\n\n> Features, requirements, or activities that are explicitly excluded from this specific task to prevent scope creep.\n\nSystem Design / Technical Approach\n\n> The technical plan outlining the architectural choices, main components, and the overall strategy for implementation.\n\n\nImplementation Steps:\n    On the /admin/project/1/page.tsx page, remove status from the fields array.\n    Verify no type errors are introduced, clean up any unused imports.\n    Verify this still looks correct on the frontend.\n',
      projectName: "Nexus - Backlog",
    },
    {
      id: "1212728192565595",
      name: "feat: remove unrequired columns",
      createdAt: "2026-01-13T11:30:54.726Z",
      notes:
        'User Story\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1212728192565598\n\n\n\nAcceptance Criteria\n\n> Measurable conditions that define the final business outcomes and must be true for the task to be considered complete (often written in Gherkin "Given... When... Then...").\n\n\nThe project table should not include Created_At and Updated_At columns on the frontend.\n\nOut of Scope\n\n> Features, requirements, or activities that are explicitly excluded from this specific task to prevent scope creep.\n\nSystem Design / Technical Approach\n\n> The technical plan outlining the architectural choices, main components, and the overall strategy for implementation.\n\n\nImplementation Steps:\n    Open /admin/projects/page.tsx \n    Update the columns array to remove CreatedAt and UpdatedAt.\n    Verify no type errors are introduced and remove unused imports.\n        Same as with the other one removing columns wont affect types of imports\n    Verify that the table looks correct on the frontend.\n        Also check the view pages that these are not shown\n',
      projectName: "Nexus - Backlog",
    },
    {
      id: "1212728192565591",
      name: "fix: spacing inconsistency on the breadcrumb",
      createdAt: "2026-01-13T11:28:27.208Z",
      notes:
        'User Story\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1212728192565594\n\n\n\n\n\nAcceptance Criteria\n\n> Measurable conditions that define the final business outcomes and must be true for the task to be considered complete (often written in Gherkin "Given... When... Then...").\n\n\nConsistent spacing in the breadcrumb.\n\nOut of Scope\n\n> Features, requirements, or activities that are explicitly excluded from this specific task to prevent scope creep.\n\nSystem Design / Technical Approach\n\n> The technical plan outlining the architectural choices, main components, and the overall strategy for implementation.\n\n\nImplementation Steps\n    Identify the breadcrumb component in our codebase.\n        Fix its Tailwind styling so that its spacing is consistent.\n            Most likely it is just missing padding\n',
      projectName: "Nexus - Backlog",
    },
    {
      id: "1212728192565585",
      name: "feat: this should show no data on the card the same as empty tables",
      createdAt: "2026-01-13T11:27:23.922Z",
      notes:
        "https://app.asana.com/app/asana/-/get_asset?asset_id=1212728192565588\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1212728192565590\n\n\n\nAcceptance Criteria\n\n> Measurable conditions that define the final business outcomes and must be true for the task to be considered complete (often written in Gherkin \"Given... When... Then...\").\n\n\nThe User Skills section component should have an empty state if no skills data exists for that user, just like how our tables have an empty state. \n\nOut of Scope\n\n> Features, requirements, or activities that are explicitly excluded from this specific task to prevent scope creep.\n\nSystem Design / Technical Approach\n\n> The technical plan outlining the architectural choices, main components, and the overall strategy for implementation.\n\n\nImplementation Steps\n    Add conditional logic to UserSkillsSection component:\n    If the Core, Secondary and Other skills arrays all have an array.length === 0 show an empty state, something like 'No user skill data found' centered in the component like in our tables.\n        You also need to validate undefined\n    If one or two skills arrays have data, but not the other - then still render the heading, but include a 'No secondary skills data found' subtitle.  \n",
      projectName: "Nexus - Backlog",
    },
    {
      id: "1212728192565579",
      name: "fix: remove status and created at from users",
      createdAt: "2026-01-13T11:26:12.162Z",
      notes:
        'User Story\n\n> The status and created at should be removed from the frontend pages of users\n\nAcceptance Criteria\n\n> Measurable conditions that define the final business outcomes and must be true for the task to be considered complete (often written in Gherkin "Given... When... Then...").\n\n\nThe Status and Created At fields should no longer be visible on /admin/users/[userId]/page.tsx \n\nOut of Scope\n\n> Features, requirements, or activities that are explicitly excluded from this specific task to prevent scope creep.\n\nSystem Design / Technical Approach\n\n> The technical plan outlining the architectural choices, main components, and the overall strategy for implementation.\n\n\nImplementation Steps:\n    On the admin/users/[userId]/page.tsx remove the status and created at fields from the fields array.\n    Fix any type errors if they arise, and remove any unused imports after updating the fields array.\n        Cannot see why this would be in the technical approach has nothing todo with the actual task\n    Verify the frontend looks correct.\n',
      projectName: "Nexus - Backlog",
    },
    {
      id: "1212764051618902",
      name: "fix: tools page should use the shadow loads like other pages",
      createdAt: "2026-01-13T11:25:24.548Z",
      notes:
        'User Story\n\n> It is using a big circle loader in the centre instead of working like the tables\n\nAcceptance Criteria\n\n> Measurable conditions that define the final business outcomes and must be true for the task to be considered complete (often written in Gherkin "Given... When... Then...").\n\nThe Tools page should use the same loading state implementation used on other pages with tables. \n\nOut of Scope\n\n> Features, requirements, or activities that are explicitly excluded from this specific task to prevent scope creep.\n\nSystem Design / Technical Approach\n\n> The technical plan outlining the architectural choices, main components, and the overall strategy for implementation.\n\n\nImplementation Steps:\n    Identify the loading state implementation used in our current pages, specifically pages with tables.\n    Replicate this loading state implementation in the Tools page, ensuring this is consistent with other pages.\n',
      projectName: "Nexus - Backlog",
    },
    {
      id: "1212764051618898",
      name: "fix: new random loader between pages",
      createdAt: "2026-01-13T11:23:53.520Z",
      notes:
        'User Story\n\n> This new issue has appeared after the release to be fixed\n\n(See the video attached on this task.)\n\nAcceptance Criteria\n\n> Measurable conditions that define the final business outcomes and must be true for the task to be considered complete (often written in Gherkin "Given... When... Then...").\n\nThe loader should not pop in and out/flash on our pages.\n\nOut of Scope\n\n> Features, requirements, or activities that are explicitly excluded from this specific task to prevent scope creep.\n\nSystem Design / Technical Approach\n\n> The technical plan outlining the architectural choices, main components, and the overall strategy for implementation.\n\n\nImplementation Steps:\n    Identify the Loader component in our codebase.\n    Identify what piece of code and/or state determines when the Loader is shown.\n    Implement a fix to ensure the Loader does not flash or pop up in between page renders.\n\nClarifications Needed\n\n    Should we completely remove this Loader?\n        It should not be coming up it is something we broke in the previous sprint, the component most likely is already used somewhere else and should not be removed\n',
      projectName: "Nexus - Backlog",
    },
    {
      id: "1212764051618894",
      name: "fix: I cannot select project manager on project team members",
      createdAt: "2026-01-13T10:48:58.249Z",
      notes:
        'User Story\n\n> trying to choose project manager breaks and I am unable to add the user\n\nAcceptance Criteria\n\n> Measurable conditions that define the final business outcomes and must be true for the task to be considered complete (often written in Gherkin "Given... When... Then...").\n\n\nYou should be able to select Project Manager or any role when adding a user.\n\nOut of Scope\n\n> Features, requirements, or activities that are explicitly excluded from this specific task to prevent scope creep.\n\n\n\nSystem Design / Technical Approach\n\n> The technical plan outlining the architectural choices, main components, and the overall strategy for implementation.\n\n\nI suspect this is likely caused by a mismatch between the front-end form field values and the backend.\n\nImplementation Steps:\n    Identify why the form doesn\'t submit when Project Manager is selected (likely a mismatch between the front-end and backend).\n    Correct this mismatch and verify that a user can be added with any role.\n    Identify if we can improve type safety on this form by using the generated API client types for user roles - so errors like these can be caught before runtime.\n        This step should just be the approach because we need to use it\n',
      projectName: "Nexus - Backlog",
    },
    {
      id: "1212756251907806",
      name: "Remove Calendly Support",
      createdAt: "2026-01-13T10:48:06.087Z",
      notes:
        "Branch off of the release/1.6.2-prod branch for this.\n\nWe need to remove Calendly, but the questionnaire should still work as usual.\n\nThe easiest way to do this should be to just remove the buttons that trigger Calendly. The questionnaire itself is not dependent on Calendly so should still work as before.\n\n\n",
      projectName: "GE - Backlog",
    },
    {
      id: "1212688010306914",
      name: "feat: set the default page size to 20 ",
      createdAt: "2026-01-07T09:11:15.323Z",
      notes: "Set the default pagination page size to 20",
      projectName: "Nexus - Issues",
    },
    {
      id: "1212688010362864",
      name: "tech: errors should be standard component with proper wording",
      createdAt: "2026-01-07T08:56:02.224Z",
      notes:
        "we should have a ProblemResultDisplay component that correctly gives the text what should be displayed when we need it not custom, here is an example of custom text, while the server gave us the correct info\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1212688010362867\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1212688010362869\n\n\nHere is another example of it not being properly standardized\n\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1212688010362877\n\n\n\n",
      projectName: "Nexus - Issues",
    },
    {
      id: "1212688763182714",
      name: "tech: remove the console logs",
      createdAt: "2026-01-07T08:47:54.837Z",
      notes:
        "I added console logs to test during deployment please remove them from the google login should be all something like Google: Validating User or DB: Getting User in a Writeline",
      projectName: "Nexus - Issues",
    },
    {
      id: "1212688763182708",
      name: "fix: error page styling does not match the login page",
      createdAt: "2026-01-07T08:22:40.419Z",
      notes:
        "This page design has changed and now has a scroll and the logo moved down which should not happen\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1212688763182713\n\n\n\n\n",
      projectName: "Nexus - Issues",
    },
    {
      id: "1212688764845922",
      name: "fix: show month then year",
      createdAt: "2026-01-07T08:18:25.005Z",
      notes:
        "This should show month then year, not year then month\n\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1212688764845925\n\n\n",
      projectName: "Nexus - Issues",
    },
    {
      id: "1212688764845918",
      name: "fix: remove overly grayish design",
      createdAt: "2026-01-07T08:17:21.133Z",
      notes:
        "This gray bands everywhere is too much take it back a notch like the assigned hours page rather\n\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1212688764845921\n\n\n",
      projectName: "Nexus - Issues",
    },
    {
      id: "1212688764845912",
      name: "fix: incorrect style being used ",
      createdAt: "2026-01-07T08:15:29.288Z",
      notes:
        "This is not the style we built, other cards all have it at the bottom it should not get new styling just because\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1212688764845915\n\n\n\n",
      projectName: "Nexus - Issues",
    },
    {
      id: "1212626359849274",
      name: "Spike: New Discount Test Code",
      createdAt: "2025-12-31T10:52:34.138Z",
      notes:
        "The TEST2025 discount code we’ve been using for testing appears to no longer be working (on both staging and localhost), or may have expired. Enquire if we can obtain a new test discount code.",
      projectName: "GE - Backlog",
    },
    {
      id: "1212497499867167",
      name: "Web: Add new check box to the filter to toggle weekends ",
      createdAt: "2025-12-18T08:00:03.156Z",
      notes: "",
      projectName: "Nexus - Backlog",
    },
    {
      id: "1212497499867165",
      name: "Web: Add check box to filters for the week view ",
      createdAt: "2025-12-18T07:58:01.585Z",
      notes: "",
      projectName: "Nexus - Backlog",
    },
    {
      id: "1212497506062491",
      name: "Fix: overlapping search bar on smaller screens",
      createdAt: "2025-12-18T07:57:19.506Z",
      notes:
        'Issue description:\nThe search bar animation on smaller screens overlaps its UI with some of the text on the header.\n\nWhat steps will recreate this issue?\n    Launch the live website on a smaller screen. \n    Hover over the search bar in the header.\n    Observe that the bar overlaps with the "About us" section in the header.\n\nWhat is the expected outcome?\nThe animation for the search bar should not overlap with other text in the header.\n\nAny additional information:\nAttached is a screenshot of the issue.\n\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1212497305111632\n\n\n',
      projectName: "DCSA | Backlog",
    },
    {
      id: "1212497499867146",
      name: "Web: Create a new page where you can update the members assigned hours",
      createdAt: "2025-12-18T07:50:42.841Z",
      notes: "",
      projectName: "Nexus - Backlog",
    },
    {
      id: "1212497499867144",
      name: "web: update the assigned hours edit page to indicate warnings and display the assignee hours for the members  ",
      createdAt: "2025-12-18T07:47:03.186Z",
      notes: "",
      projectName: "Nexus - Backlog",
    },
    {
      id: "1212497499867136",
      name: "Web: Add the filter component to Assigned Hours page",
      createdAt: "2025-12-18T06:55:04.879Z",
      notes: "",
      projectName: "Nexus - Backlog",
    },
    {
      id: "1212497499867129",
      name: "Web: Add the filter component to Assigned Hours page",
      createdAt: "2025-12-18T06:45:44.761Z",
      notes: "",
      projectName: "Nexus - Backlog",
    },
    {
      id: "1212508319318391",
      name: "Web: Update the Assigned vs Used Filter component so that it can also be used on the Assigned Hours page.",
      createdAt: "2025-12-18T06:44:03.166Z",
      notes: "",
      projectName: "Nexus - Backlog",
    },
    {
      id: "1212372083399958",
      name: "Release: 1.8.0",
      createdAt: "2025-12-11T05:57:11.738Z",
      notes:
        "    https://app.asana.com/1/375643158116881/project/1205765637665888/task/1210522307508406\n    https://app.asana.com/1/375643158116881/project/1205765637665888/task/1211636476753325\n    https://app.asana.com/1/375643158116881/project/1205765637665888/task/1210170535193652\n    https://app.asana.com/1/375643158116881/project/1205765637665888/task/1209639987157186\n    https://app.asana.com/1/375643158116881/project/1205765637665888/task/1209160416899189\n    https://app.asana.com/1/375643158116881/project/1205765637665888/task/1208803920899701\n    https://app.asana.com/1/375643158116881/project/1205765637665888/task/1211490673308172\n",
      projectName: "GE - Backlog",
    },
    {
      id: "1212355800010290",
      name: "Good Energy - Admin",
      createdAt: "2025-12-10T07:20:42.656Z",
      notes: "",
      projectName: "GE - Backlog",
    },
    {
      id: "1212306200240978",
      name: "Web: Add column to working days table",
      createdAt: "2025-12-04T13:16:20.433Z",
      notes: "Check how bages would look like.",
      projectName: "Nexus - Backlog",
    },
    {
      id: "1212278221901038",
      name: "Add threshold to hour predictions to provide an warning if 10% over or under allocated hours",
      createdAt: "2025-12-03T09:20:34.584Z",
      notes:
        "Description\n\nUpdate the system's prediction logic to estimate if a member will reach their total Monthly Assigned Hours Goal. A clear warning or flag must be displayed if the member is predicted to deviate by more than 10% above or below the target, allowing Administrators to proactively adjust the workload.\n\nUser Stories\n\nAs an Admin, I want to see a clear visual warning displayed in the hours view, so that I am immediately alerted if a member's Projected Final Hours are deviating by more than 10% either above or below their Assigned Monthly Hours Goal.\n\nAcceptance Criteria\n\n    A visual warning (e.g., colored icon, badge, or highlight) appears next to members whose Projected Final Hours are ±10% or more from their Assigned Monthly Hours Goal.\n    The warning updates dynamically as hours are adjusted or updated.\n    The warning is clear and easily distinguishable from other table elements.\n    The Assigned vs Used table reflects the deviation alongside the warning.\n\nOut of Scope\n\nN/A\n\nNon-functional requirements\n\n    Performance: Rendering the warning should not noticeably slow down table updates.\n    Usability: Warning must be immediately visible and easy to interpret.\n    Reliability: Warning must accurately reflect API-provided deviation data.\n\n\nUI / Design\n\n    https://v0.app/chat/assigned-hours-4742iA8dU6G?ref=9EA8C4\n\nSystem Design / Technical Approach\n\n    Prediction Service Update\n        Enhance the prediction service to compare each member’s predicted hours against a defined threshold.\n        The threshold is currently hardcoded (±10%).\n        Introduce logic to determine whether a predicted value is above or below the threshold and map this status to a structured response object.\n    Response Object Enhancement\n        Extend the service response to include an enum field (PredictionStatus) indicating:\n            AboveThreshold\n            BelowThreshold\n            WithinThreshold (optional for clarity)\n        This enables downstream components to handle display logic based on the prediction status rather than raw numeric comparison.\n    UI Indicators\n        Display a banner at the top of the table indicating which member(s) exceed the threshold.\n        Use the API-provided projected deviation for each member to calculate whether they are outside the ±10% range.\n        Integrate a dynamic warning indicator within the Assigned vs Used table to visually flag members exceeding the threshold.\n    Reactive & Modular Component Design\n        Ensure the table and banner components update automatically as new API data arrives without requiring a page reload.\n        Maintain modularity so that the warning system can be reused or extended to other tables or views in the future.\n    Scalability & Future Enhancements\n        The architecture supports future updates, such as:\n            Configurable thresholds per member or team.\n            Multiple deviation ranges with different warning levels.\n            Integration with other predictive metrics beyond assigned hours.\n\n\nDependencies\n\nN/A\n\nTesting\n\nManual testing to verify:\n    Warnings appear correctly based on the API-provided deviation.\n    Warnings update dynamically when new API data is fetched.\n    Warnings are clearly visible and distinguishable.\n    The table accurately reflects the deviation alongside the warning.\n\n\nRelease\n\nN/A",
      projectName: "Nexus - Backlog",
    },
    {
      id: "1212278221901034",
      name: "Add Working Days Column in Assigned Hours Table",
      createdAt: "2025-12-03T09:13:41.158Z",
      notes:
        'Description\n\nImplement a new column in the Assigned Hours table to clearly display the member\'s scheduled working days (e.g., Mon–Fri, Tue–Sat). This dynamic field will reflect any changes to the member\'s official schedule, improve visibility into team availability.\n\nUser Stories\n\nAs an Administrator, I want to see a dedicated column in the Assigned Hours table that clearly displays the member\'s scheduled working days (e.g., "Mon-Fri" or "Mon, Wed, Fri"), so that I can quickly understand their availability at a glance.\n\nAcceptance Criteria\n\n    A new column titled "Working Days"\n    The "Working Days" column for that member displays the value "Mon-Fri" / "Mon, Wed, Fri".\n\n\nOut of Scope\n\nN/A\n\nNon-functional requirements\n\n    Performance: Adding the column should not noticeably slow table rendering.\n    Usability: Working days should be easy to read and consistent in format.\n    Reliability: Values must accurately reflect the member’s current official schedule.\n\n\nUI / Design\n\n    https://v0.app/chat/assigned-hours-4742iA8dU6G?ref=9EA8C4\n\nSystem Design / Technical Approach\n\n    Response Object Update\n        Extend the backend response DTO to include a new string property:\n        \n        string WorkingDays { get; set; } \n        The backend must support two formats:\n            All weekdays selected: "Mon - Fri"\n            Custom selection: "Mon, Tue, Fri"\n        Ensure the property is included in all relevant API responses consumed by the Assigned vs Used table.\n    Service Layer Enhancement\n        Update the backend service to compute and populate the WorkingDays string based on stored member-working-day configurations.\n        Standardise the formatting logic into a utility/helper method to ensure consistent output across endpoints.\n    Frontend API Contract Update\nUpdate the frontend API models/interfaces to align with the updated response object:\n\n\ninterface AssignedVsUsedResponse \n{   \n    ... \n    workingDays: string; \n} \n\n        Ensure the API consumption layer correctly maps and exposes the workingDays value to downstream components.\n    Table Update (UI Layer)\n        Add a new “Working Days” column to the Assigned vs Used table.\n        Bind the backend value to the table’s data model using the new workingDays property.\n        Ensure column supports varying formats (range or comma-separated days) without additional transformation in the UI.\n    Component Integration\n        Ensure the table component is updated to render the new property without requiring structural refactoring.\n        The component should support reactive updates when new API data arrives (e.g., on member/project filter changes).\n    Scalability Considerations\n        The architecture supports future enhancements such as:\n            Localised weekday labels\n            Configurable workweek patterns per team or region\n            Storing working days as structured data (array) while still exposing formatted strings\n\nDependencies\n\nN/A\n\nTesting\n\n    Manual testing to verify:\n        The new Working Days column displays correct schedules for all members.\n        Column updates correctly when schedule changes.\n        Text formatting is consistent and readable.\n\nRelease\n\nN/A',
      projectName: "Nexus - Backlog",
    },
    {
      id: "1212277071692745",
      name: "Employee Skills - Frontend – Skills Search Page",
      createdAt: "2025-12-03T05:44:53.186Z",
      notes:
        'Description\n\n> A brief explanation of the problem being solved, its context, and the expected final outcome.\n\nBuild a page to search for users based on skills, proficiency, and category filters.User Story\n\n\n> Define the feature\'s business value from the end-user\'s perspective using the "As a... I want to... So that..." format.\n\nAs an admin, I want to find users by skill and proficiency, so that I can quickly identify suitable personnel.\n\n\n> Above should be done before the task can be moved from New → Backlog\n\n\n\nAcceptance Criteria\n\n> Measurable conditions that define the final business outcomes and must be true for the task to be considered complete (often written in Gherkin "Given... When... Then...").\n\n    Search input for skill name\n    Filters for min proficiency and category (Core/Other)\n    Results table shows user, matched skills, proficiency, category\n    Sorting by highest proficiency → most matches\n    Empty state guidance\n\n\n> Above should be done before the task can be moved from Backlog → Refinement\n\n\n\nOut of Scope\n\n> Features, requirements, or activities that are explicitly excluded from this specific task to prevent scope creep.\n\n\n\nNon-functional requirements\n\n> Quality attributes that specify how well the system must perform, such as performance, security, reliability, or usability.\n\n\n\nUI / Design\n\n> Links to finalized designs, style guides, and notes for the visual and user experience implementation.\n\nSearchFilters.tsx Mockup:\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1212513578371008\n\nSearchResults.tsx Mockup:\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1212513578371010\n\nhttps://v0.app/chat/epmloyee-skills-G33OS1I3uNP?ref=6SHUVS\n\nTechnical Approach / System Architecture \n\n> The technical plan outlining the architectural choices, main components, and the overall strategy for implementation.\n\n    DB\n    API\n    WEB\n        API Integration:\n            Call GET /user-skills/search with skill name, min proficiency, and category filters.\n        Component Creation:\n            Create a dedicated /admin/skills-search route\n            This page will handle API functionality and state management like on all our other pages.  The page will have two subcomponents:\n                SearchFilters - Allows searching by skill with dropdown filters for skill category, skill proficiency or sliders for skill proficiency. \n                SearchResults - This will render the search results in a table format after a search is triggered:\n                    Each table row will have the following data:\n                        Username/Email\n                        Matched Skills\n                        Highest Proficiency\n                        Category: Core, Secondary, Other\n                        Actions:\n                             View Profile\n                Table will allow for sorting.\n\nDependencies\n\n> Prerequisites needed before development can begin, such as accounts, data, access, or prior tasks.\n\n    Search & Filter API completed\n\nTesting Requirements\n\n> The specific requirements for quality assurance, including requirements for unit tests, integration tests, and test cases.\n\n\n\nRelease Requirements\n\n> All pre- or post-release requirements, such as data migrations, monitoring setup, or validation scripts, needed for a successful deployment to production.\n\n\n\n> Above should be done before the task can be moved from Refinement → Ready for Sprint\n\n\n',
      projectName: "Nexus - Sprint 10 | 22 Dec 2025 - 5 Jan 2026",
    },
    {
      id: "1212277071692743",
      name: "Employee Skills - Frontend – Skills Matrix Page",
      createdAt: "2025-12-03T05:42:58.514Z",
      notes:
        '\n\nDescription\n\n> A brief explanation of the problem being solved, its context, and the expected final outcome.\n\nCreate a matrix view of all users vs skills with proficiency indicators.User Story\n\n\n> Define the feature\'s business value from the end-user\'s perspective using the "As a... I want to... So that..." format.\n\nAs an admin, I want to see a skill matrix, so I can quickly assess team capabilities.\n\n\n> Above should be done before the task can be moved from New → Backlog\n\n\n\nAcceptance Criteria\n\n> Measurable conditions that define the final business outcomes and must be true for the task to be considered complete (often written in Gherkin "Given... When... Then...").\n\n    Users as rows, skills as columns\n    Cells show proficiency (e.g., 1–5 stars)\n    Admin-only access\n    Optional filters for categories\n\n\n> Above should be done before the task can be moved from Backlog → Refinement\n\n\n\nOut of Scope\n\n> Features, requirements, or activities that are explicitly excluded from this specific task to prevent scope creep.\n\n\n\nNon-functional requirements\n\n> Quality attributes that specify how well the system must perform, such as performance, security, reliability, or usability.\n\n    Responsive table layout\n\nUI / Design\n\n> Links to finalized designs, style guides, and notes for the visual and user experience implementation.\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1212513578371013\n\n> https://v0.app/chat/epmloyee-skills-G33OS1I3uNP?ref=6SHUVS\n\n\n\nTechnical Approach / System Architecture \n\n> The technical plan outlining the architectural choices, main components, and the overall strategy for implementation.\n\n    DB\n    API\n    WEB\n        Component Creation:\n            Create a new in route in the Admin panel /admin/skills-matrix.\n                This page will contain two components:\n                    SkillsMatrix.tsx - Skills matrix table containing the actual data.\n                    SkillsMatrixLegend.tsx - A visual guide for the data.\n        API Integration:\n            Fetch matrix data from GET /skills-matrix.\n        Matrix Rendering:\n            Users = rows, Skills = columns\n            Display proficiency in numbers in cells\n            Empty cells if skill not present\n\n\nDependencies\n\n> Prerequisites needed before development can begin, such as accounts, data, access, or prior tasks.\n\n    Skills Matrix API completed\n\nTesting Requirements\n\n> The specific requirements for quality assurance, including requirements for unit tests, integration tests, and test cases.\n\n\n\nRelease Requirements\n\n> All pre- or post-release requirements, such as data migrations, monitoring setup, or validation scripts, needed for a successful deployment to production.\n\n\n\n> Above should be done before the task can be moved from Refinement → Ready for Sprint\n\n\n',
      projectName: "Nexus - Sprint 10 | 22 Dec 2025 - 5 Jan 2026",
    },
    {
      id: "1212277071692740",
      name: "Employee Skills - Frontend – User Profile Skills Section",
      createdAt: "2025-12-03T05:40:46.306Z",
      notes:
        'Description\n\n> A brief explanation of the problem being solved, its context, and the expected final outcome.\n\nAdd a new section in the Member profile to display and manage skills.\n\nUser Story\n\n> Define the feature\'s business value from the end-user\'s perspective using the "As a... I want to... So that..." format.\n\nAs an admin, I want to view and modify member skills on their profile, so that each Member\'s capabilities are accurately represented.\n\n\n> Above should be done before the task can be moved from New → Backlog\n\n\n\nAcceptance Criteria\n\n> Measurable conditions that define the final business outcomes and must be true for the task to be considered complete (often written in Gherkin "Given... When... Then...").\n\n    Displays skills grouped by category\n    Admins see Add/Edit/Delete buttons\n    Skill form modal for add/edit\n\n> Above should be done before the task can be moved from Backlog → Refinement\n\n\n\nOut of Scope\n\n> Features, requirements, or activities that are explicitly excluded from this specific task to prevent scope creep.\n\n\n\nNon-functional requirements\n\n> Quality attributes that specify how well the system must perform, such as performance, security, reliability, or usability.\n\n    Clear error messages\n\nUI / Design\n\n> Links to finalized designs, style guides, and notes for the visual and user experience implementation.\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1212496717118107\n\n    https://simpleicons.org/ is a good candidate for technology icons. These are consistent and can be installed as an npm package. They also provide an associated color codes for each icon. This can look really good in a shadcn/ui badge.\nStyling recommendations:\n    This will look something like this:\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1212513578370996\n\n\n\nTechnical Approach / System Architecture \n\n> The technical plan outlining the architectural choices, main components, and the overall strategy for implementation.\n\n    DB\n    API\n    WEB\n        Component Creation:\n            Create UserSkills React component.\n        API Integration:\n            Fetch user skills from GET /user-skills/userId.\n            Render grouped by category.\n        Validation & Feedback:\n            Client-side validation for duplicates and proficiency.\n            Show success/error notifications.\n\n\nDependencies\n\n> Prerequisites needed before development can begin, such as accounts, data, access, or prior tasks.\n\n\n\nTesting Requirements\n\n> The specific requirements for quality assurance, including requirements for unit tests, integration tests, and test cases.\n\n    CRUD API for UserSkills exists\n\nRelease Requirements\n\n> All pre- or post-release requirements, such as data migrations, monitoring setup, or validation scripts, needed for a successful deployment to production.\n\n\n\n> Above should be done before the task can be moved from Refinement → Ready for Sprint\n\n\n',
      projectName: "Nexus - Sprint 10 | 22 Dec 2025 - 5 Jan 2026",
    },
    {
      id: "1212239419700094",
      name: "Reviews",
      createdAt: "2025-12-01T12:37:40.825Z",
      notes: "",
      projectName: "DCSA | WO002",
    },
    {
      id: "1212220008123758",
      name: "Implement Middleware Route Protection",
      createdAt: "2025-11-28T13:16:22.349Z",
      notes:
        "\n    Refactor middleware.ts to add session checking after Prismic redirects: import auth from @/lib/auth, and call auth.api.getSession({ headers: request.headers }), define public paths array (including /, /api/auth/*, /_next/*, /slice-simulator), and redirect unauthenticated requests to /?auth=required for protected paths while preserving existing redirect logic.\n    Create protected route group structure within the app, at the same level as the (found_page) group, with its own layout.tsx that performs server-side session validation using auth.api.getSession(), redirects to home if no session exists, and wraps children with session context\n    Configure path-based protection patterns in middleware using a PROTECTED_PATHS constant array with patterns like /newsroom/*, /standards/*, /your-needs/*, allowing you to add/remove paths as designs finalize without touching route group structure, with a helper function isProtectedPath(pathname: string) that matches against patterns.\n    Update auth.ts to export a requireAuth() helper function for server components that calls auth.api.getSession() and redirects if no session, plus add session type exports for TypeScript support throughout the app.\n",
      projectName: "DCSA | WO002",
    },
    {
      id: "1212220008123757",
      name: "Build Authentication UI Components",
      createdAt: "2025-11-28T13:16:22.322Z",
      notes:
        "Build authentication UI components: create src/components/AuthPrompt.tsx modal/banner that reads ?auth=required query param and triggers the Cognito sign-in flow, and add it to layout.tsx as a client component that listens for the query parameter and displays the prompt.",
      projectName: "DCSA | WO002",
    },
    {
      id: "1212157041210178",
      name: "Release: 1.6.2",
      createdAt: "2025-11-26T15:00:15.345Z",
      notes:
        "Released in 1.6.2:\n\nhttps://app.asana.com/1/375643158116881/project/1205765637665888/task/1212154689809269?focus=true",
      projectName: "GE - Backlog",
    },
    {
      id: "1212154689809269",
      name: "Email not getting updated in zoho and sent to customer",
      createdAt: "2025-11-26T12:36:45.143Z",
      notes:
        "This issue is in Prod so i would urge it to get if fixed ASAP\n\nScenario 1\nUser inserts address\nUser skips personal information\nUser selects Own\nUser changes mind and decides to insert email, so clicks back, inserts email\nUser continues with the quote flow\n\nUser does NOT get the email.\nIn zoho the email isnt updated\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1212154689809274\n\n\nScenario 2\nUser inserts address\nUser skips personal information\nUser continues with the quote flow\n\nIn the estimate page the user inserts the email address as well as phone and name\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1212154689809276\n\n\nUser does NOT get the email\nIn zoho the email isn't updated\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1212154689809278\n\n\n\nScenario 3\nUser inserts address\nUser inserts email address and registers interest\nUser continues with the quote flow\n\nThe user DOES get the email.\nIn zoho i can see the email address.\n\nTherefor 2/3 scenarios wont record and send an email to the customer, in the scenario 1 it's a corner case so less impact, but in the scenario 2 the impact is big as many customers will decide to insert their email once seeing the price\n\n\n",
      projectName: "GE - Backlog",
    },
    {
      id: "1212060029773013",
      name: "Release 1.6.1",
      createdAt: "2025-11-25T10:48:35.535Z",
      notes:
        "To be released in 1.6.1:\nhttps://app.asana.com/1/375643158116881/project/1205765637665888/task/1211833263769794?focus=true",
      projectName: "GE - Backlog",
    },
    {
      id: "1211923563302308",
      name: "Staging | The link in the estimate page points at the old domain",
      createdAt: "2025-11-12T14:21:57.827Z",
      notes:
        "When trying to verify another ticket, i've realised that in staging if i click on the email that i receive. then i get redirected to \n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1211923563302311\n\n\n\n\n",
      projectName: "GE - Backlog",
    },
    {
      id: "1211876506852848",
      name: "Assign Hours to Employees - List Page",
      createdAt: "2025-11-07T09:32:47.622Z",
      notes:
        "1.  Create a mock-up for the Assigned Hours List Page\n     Design the page layout showing all employee-project assignments in a table format.\n    Include columns for Employee, Project, Start Date, End Date, and Assigned Hours.\n    Add action buttons for Edit and Delete per row.\n    Include an “Add Assignment” button at the top of the table.\n\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1211896126063280\n\n\n",
      projectName: "Nexus - Backlog",
    },
    {
      id: "1211876506852847",
      name: "Assign Hours to Employees - Edit Page",
      createdAt: "2025-11-07T09:31:50.188Z",
      notes:
        "3. Create a mock-up for the Assigned Hours Edit Page\n    Reuse the same structure as the Create Page.\n    Prepopulate fields with existing assignment data.\n    Include Save Changes and Cancel buttons.\n\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1211896126063282\n\n\n",
      projectName: "Nexus - Backlog",
    },
    {
      id: "1211876506852846",
      name: "Assign Hours to Employees - create Page",
      createdAt: "2025-11-07T09:31:49.403Z",
      notes:
        "2. Create a mock-up for the Assigned Hours Create Page\n     Include a dropdown for selecting an Employee (using UsersAPI).\n    Include a dropdown for selecting a Project (using ProjectsAPI).\n    Include date pickers for Start Date and End Date.\n    Include an input field for Total Assigned Hours (accepts only numbers).\n    Include Cancel and Save buttons.\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1211896126063284\n\n\n",
      projectName: "Nexus - Backlog",
    },
    {
      id: "1211875278595312",
      name: "Assign Hours to Employees - Frontend",
      createdAt: "2025-11-07T07:56:38.932Z",
      notes:
        "Frontend Implementation Steps\n\n\n4. Set up frontend routing and page structure\n\n    Add 'Time Tracking' menu item in the Admin Panel sidebar.\n    Add /admin/assigned-hours for the list page.\n    Add /admin/assigned-hours/create for the create page.\n    Add /admin/assigned-hours/[id]/edit for the edit page.\n    Add /admin/assigned-hours/[id] for viewing specific entry.\n\n\n5. Set up Access Control\n    Implement admin-only access control. Only users with 'Admin' or 'SuperAdmin' should have access.\n    Set up a route-guard to redirect unauthorized users.\n\n6. API Integration\n    Once backend is ready, update the API Client using `bix codegen api-client` \n    We will make use of generated API functions to GET, PUT, POST data - like we do with all implementations on the project. \n\n7. List Page API Integration\n    Integrate the Assigned Hours List Page with API\n    Fetch all existing assignments.\n    Display data in a shadcn DataTable component.\n    Show loading and empty states.\n    Handle pagination like on other pages with data tables.\n    Add delete confirmation modal using shadcn Dialog.\n\n8. Create page API integration\n    Integrate the Create Page with API\n    Fetch users and projects for dropdowns on page load.\n    Make use of existing FormGenerator component.\n    Redirect back to list view upon success.\n    Implement form validation using Zod.\n    On submit, call the generated Create method.\n\n9. Edit page API integration\n    Fetch the assignment by ID and populate form fields with retrieved data.\n    On submit, call the generated Update method.\n    Redirect to list page upon success.\n\n10. Implement Delete Assignment functionality\n    Add a delete action.\n    Show confirmation modal before proceeding.\n    On submit, call the generated Delete method.\n    Refresh the table after deletion.\n\n\n",
      projectName: "Nexus - Backlog",
    },
    {
      id: "1211860756326310",
      name: "web",
      createdAt: "2025-11-06T13:40:46.148Z",
      notes:
        "Frontend Implementation Steps\n\n1. Create a mock-up for the Project Team Hours Page\n    Design a page under /project/[projectId]/team-hours.\n    Display a table (or card layout) per team member:\n    Team Member Name\n    Assigned Hours\n    Used Hours\n    Remaining Hours (Assigned − Used)\n    Exclude team members with no assignments.\n\n2. Create a mock-up for optional detail view per team member\n    Clicking an team member row shows detailed assigned/used hours breakdown.\n    Include a back button to return to the main project view.\n\n3. Set up frontend routing and page structure\n    Route: /project/[projectId]/team-hours.\n\n4. Implement admin-only access control\n     Restrict route to admin users only.\n    Redirect unauthorized users.\n\n5. Integrate Team Hours Page with API\n    Update frontend API client using bix codegen api-client when ready.\n    Fetch assigned/used hours for project members.\n",
      projectName: "Nexus - Backlog",
    },
    {
      id: "1211860756326304",
      name: "Admin View Used vs Assigned Hours - Frontend",
      createdAt: "2025-11-06T13:33:46.463Z",
      notes:
        "Frontend Implementation Steps\n\n1. Create a mock-up for the Project Hours Comparison Page\n    Design a page under the admin panel, e.g., /admin/project-hours.\nInclude a table or card layout showing per employee:\n    Team Member Name\n    Project Name\n    Assigned Hours\n    Used Hours\n    Remaining Hours (calculated: Assigned − Used)\n\n2. Set up frontend routing and page structure\n     Add /admin/project-hours route for the comparison list page.\n\n3. Implement admin-only access control\n     Restrict /admin/project-hours to admin users only - 'Admin' and 'SuperAdmin' roles.\n     Redirect unauthorized users to dashboard.\n    \n4. Integrate Project Hours Comparison Page with API\n    Once ready, update the frontend API client using bix codegen api-client\n    Fetch all employee/project assignments and used hours via generated API client methods.\n    Display data in a shadcn DataTable (or card layout).\n    Show loading skeletons while fetching data.\n    Handle empty states (e.g., no assignments yet).\n    Ensure table columns are sortable.\n\n",
      projectName: "Nexus - Backlog",
    },
    {
      id: "1211819455183974",
      name: "Good Energy - Code Reviews",
      createdAt: "2025-11-03T11:33:43.048Z",
      notes: "",
      projectName: "GE - Backlog",
    },
    {
      id: "1211819455183970",
      name: "Good Energy - E2E Testing ",
      createdAt: "2025-11-03T11:32:35.213Z",
      notes: "",
      projectName: "GE - Backlog",
    },
    {
      id: "1211791017563008",
      name: "Refactor: Replace Dialog and Drawer components with latest ShadCN versions",
      createdAt: "2025-10-30T07:24:10.608Z",
      notes:
        "The existing Dialog and Drawer components have previously been heavily customised - causing UX issues such as the drawer not being closable on some mobile devices.\n\nReplace these two components with the latest versions from ShadCN.\n\nEnsure that:\n    A Drawer is used on mobile.\n    A Modal/Dialog on Desktop\n    This should integrate seamlessly and not break anything in the project.\n",
      projectName: "GE - Backlog",
    },
    {
      id: "1211729498981234",
      name: 'Follow up on "Table Slice: More Columns"',
      createdAt: "2025-10-23T14:09:58.872Z",
      notes:
        "Follow up on https://app.asana.com/1/375643158116881/task/1211578576989072?focus=true\n\n    The width of the table could be wider to avoid horizontal scroll when using a variation with more columns\n    The redundant column title settings should also be removed as the  first row of the table functions as the header.\n    A table variation's number of column settings should be equal to the number of columns supported by the variation (e.g: the 8 column variation should have 8 column settings).\n\n",
      projectName: "DCSA | Backlog",
    },
    {
      id: "1211726419920848",
      name: "Fix: Logos overflowing on about-us/members page",
      createdAt: "2025-10-23T06:40:13.575Z",
      notes:
        "I've picked up that the logos on the /about-us and /about-us/members pages are cut-off on mobile and desktop when zooming in. This appears to happen across all sections that use this slice - LogoSlice. Again, not an issue on larger screens - but ideally, should be more responsive.\n\n\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1211726419922973\n\n\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1211726419922971\n\n\n",
      projectName: "DCSA | Backlog",
    },
    {
      id: "1211717310154008",
      name: "Meetings – Add date/time selector component",
      createdAt: "2025-10-22T09:14:30.599Z",
      notes:
        "Create a frontend component that allows selecting a single meeting date with defined start and end times. Ensure proper validation and UI consistency with the design system.",
      projectName: "Nexus - Backlog",
    },
    {
      id: "1211717310154006",
      name: "Meetings – Allow adding custom participant email",
      createdAt: "2025-10-22T09:13:31.407Z",
      notes:
        "Enable users to manually add participant emails that aren’t part of the existing user list, allowing meetings with external or guest attendees.",
      projectName: "Nexus - Backlog",
    },

    {
      id: "1211578576989076",
      name: "Slice Hero 4: Description & Height Adjustment",
      createdAt: "2025-10-08T11:04:27.959Z",
      notes:
        "Add a Description field beneath the Title in Slice Hero 4. Adjust the slice height accordingly to maintain visual balance.",
      projectName: "DCSA | Backlog",
    },
    {
      id: "1211578576989074",
      name: "Slice Hero 3: Default Background",
      createdAt: "2025-10-08T11:04:13.534Z",
      notes:
        "If no image is uploaded in Slice Hero 3, set the default background color to dark blue. (Ref #1F1C2B)",
      projectName: "DCSA | Backlog",
    },
    {
      id: "1211523741579203",
      name: "NVDA | When user selects Rent nothing is announced to the user",
      createdAt: "2025-10-01T15:12:54.396Z",
      notes:
        "If a user selects Rent on page 2, then nothing is announced to the customer, so they are not aware that Heat Pumps cant be installed in a rented property ",
      projectName: "GE - Backlog",
    },
    {
      id: "1211523741579197",
      name: 'NVDA | Grouping "xyz" button announced when selecting first button on a page',
      createdAt: "2025-10-01T15:06:54.628Z",
      notes:
        'When navigating with the keyboard and having NVDA enabled , then on the first button of the page, NVDA will read the question then grouping and then the title of the button\n\ni.e. Do you own or rent grouping Own button.\n\nHowever, on step 11, independently if the user has chosen yes/no then NVDA only reads "Yes" rather than the above. For consistency they should all be the same ',
      projectName: "GE - Backlog",
    },
    {
      id: "1211496264351238",
      name: "Focus not on textfield after applying incorrect discount code",
      createdAt: "2025-09-29T14:35:47.320Z",
      notes:
        "If a customer inserts an incorrect discount code, the focus is not given to the textfield , so a keyboard user would have to toggle all the way around the page in order to get back to the discount code textfield.\n\nImplement same functionality as the one when inserting incorrect email in the estimate page, where the focus is given to the inserting email textfield",
      projectName: "GE - Backlog",
    },
    {
      id: "1211496039751679",
      name: "Square around header",
      createdAt: "2025-09-29T14:17:34.120Z",
      notes:
        "An square seems to have been introduced around the header\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1211496045352485\n\n\n\nThis is not in live atm so some of the changes introduced lately (i suspect NVDA does not read the title)",
      projectName: "GE - Backlog",
    },
    {
      id: "1211477729430693",
      name: "Accessibility | When a customer has got 175% or more on a mobile browser and opens a modal, then not all content is accessible",
      createdAt: "2025-09-26T12:39:17.864Z",
      notes:
        "If a customer is on a mobile and their browser is 175% or bigger, then the following modals , their content isn't fully accessible. If the customer tries to view the higher content, then the modal disappears\ni.e \n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1211477729430696\n\n\nFix: https://app.asana.com/1/375643158116881/project/1205765637665888/task/1211791017563008?focus=true",
      projectName: "GE - Backlog",
    },
    {
      id: "1211474375223583",
      name: "Release: 1.6.0.rc-1",
      createdAt: "2025-09-26T07:40:37.169Z",
      notes: "",
      projectName: "GE - Backlog",
    },
    {
      id: "1211474375223578",
      name: "Release: 1.7.0",
      createdAt: "2025-09-26T06:36:39.715Z",
      notes:
        "List of tasks getting released in 1.7.0:\n    https://app.asana.com/1/375643158116881/project/1205765637665888/task/1211791017563008\n    https://app.asana.com/1/375643158116881/project/1205765637665888/task/1211647933874685\n    https://app.asana.com/1/375643158116881/project/1205765637665888/task/1211477729430693\n    https://app.asana.com/1/375643158116881/project/1205765637665888/task/1211062411785571\n    https://app.asana.com/1/375643158116881/project/1205765637665888/task/1211109916167165\n    https://app.asana.com/1/375643158116881/project/1205765637665888/task/1211109916167149\n    https://app.asana.com/1/375643158116881/project/1205765637665888/task/1211109916167157\n    https://app.asana.com/1/375643158116881/project/1205765637665888/task/1211062411785590\n    https://app.asana.com/1/375643158116881/project/1205765637665888/task/1211062411883080\n    https://app.asana.com/1/375643158116881/project/1205765637665888/task/1211160395261730\n    https://app.asana.com/1/375643158116881/project/1205765637665888/task/1211496264351238\n    https://app.asana.com/1/375643158116881/project/1205765637665888/task/1211523741579197\n    https://app.asana.com/1/375643158116881/project/1205765637665888/task/1211523741579203\n    https://app.asana.com/1/375643158116881/project/1205765637665888/task/1212154984165995\n    https://app.asana.com/1/375643158116881/project/1205765637665888/task/1209639987157192\n    https://app.asana.com/1/375643158116881/project/1205765637665888/task/1209567871874957\n",
      projectName: "GE - Backlog",
    },
    {
      id: "1211474375223574",
      name: "Release: 1.6.0",
      createdAt: "2025-09-26T06:35:50.753Z",
      notes:
        "https://app.asana.com/app/asana/-/get_asset?asset_id=1211474375223577\n\n\nContains \nhttps://app.asana.com/1/375643158116881/project/1205765637665888/task/1209642955817690\nhttps://app.asana.com/1/375643158116881/project/1205765637665888/task/1209642962481830\nhttps://app.asana.com/1/375643158116881/project/1205765637665888/task/1209651476584906\nhttps://app.asana.com/1/375643158116881/project/1205765637665888/task/1211043084330091?focus=true\nhttps://app.asana.com/1/375643158116881/project/1205765637665888/task/1210820226624442\nhttps://app.asana.com/1/375643158116881/project/1205765637665888/task/1210749796241873\nhttps://app.asana.com/1/375643158116881/project/1205765637665888/task/1209642962481834\nhttps://app.asana.com/1/375643158116881/project/1205765637665888/task/1209642955817681\nhttps://app.asana.com/1/375643158116881/project/1205765637665888/task/1210522307508414\n\n\n",
      projectName: "GE - Backlog",
    },
    {
      id: "1211291975645239",
      name: "New Project Setup Flow - Frontend",
      createdAt: "2025-09-08T15:13:22.906Z",
      notes:
        "Frontend Implementation Steps \n\n    Project Setup Context\n        In project-setup-context.tsx, create a function that takes a projectId, calls the API (backend will return isSetupCompleted: true/false), and stores/returns the project setup status.\n        Make this status available to all child components via the context provider.\n    Wrap Sidebar with Context\n        Ensure AppSidebar is wrapped in ProjectSetupContextProvider so it can use the setup status.\n    Update getProjectSidebarConfig()\n        Add a setupStatus param to the function.\n        Inside the function, decide whether to include the Project Setup menu item based on the status — show it only if setup is not complete.\n        All other menu items should be hidden/disabled until the project setup is marked as complete.\n    Use in AppSidebar.tsx\n        Get the project’s setup status from the context.\n        Pass the status into getProjectSidebarConfig().\n        The config builder handles hiding/showing the Project Setup item, keeping AppSidebar simple.\n    Add a Route Guard\n        Wrap project routes in a guard component that checks the setup status from context.\n        If the setup is not complete, redirect the user to the Project Setup page.\n        Only allow navigation to other project routes once setup is marked complete.\n",
      projectName: "Nexus - Sprint 6 | 1 Sep - 15 Sep 2025",
    },
    {
      id: "1211109913487166",
      name: "Audit components usage",
      createdAt: "2025-08-21T11:47:02.035Z",
      notes:
        "Audit the current set of components we have in the project and determine what can be rebuilt/cleaned-up.",
      projectName: "GE - Backlog",
    },
    {
      id: "1211075988414155",
      name: "Resources - CRUD - Frontend",
      createdAt: "2025-08-18T06:33:48.863Z",
      notes:
        "Implement the crud pages and APIs\n\n    We should be able to create\n    We should be able to edit\n    We should be able to view\n    We should be able to delete\n\nImplementation Steps\n     Create a file named resources.codegen.json inside the .bitcube folder.\n    Confirm the schema content with Herman before proceeding.\n    Run the codegen command:\n    bix codegen crud resources\n    Verify that the API is generated for both frontend and backend.\n    In the features/resourcesfolder, include:\n    Dialogs for create, edit, and delete\n    A table component for listing meetings\n    Any necessary route files\n    Connect the components and ensure they work end-to-end.\n    A user should be able to:\n    Create a resource\n    Edit a resource\n    View resources\n    Delete a resource\n    Test all flows for correct behavior and data handling.\n    Check that validation, routing, and UI are consistent.\n    Will follow how other features were implemented.\n\n\nUpdated Implementation Steps\n    Check for any type errors.\n    Test Search and Sorting. \n    Verify Creating, Updating and Deleting are working.\n    Verify all pages are working and displaying as expected.\n    Check for visual bugs and ensure the pages are consistent with other CRUDs.\n    Verify form logic - e.g: empty form can't be submitted, etc.\n    Move any repetitive functions/logic to /features/resources\n    Clean up any unused imports, unused code, etc.\nTime Estimate: 2 - 3hrs",
      projectName: "Nexus - Backlog",
    },
    {
      id: "1211075988414153",
      name: "Sprints - CRUD - Frontend",
      createdAt: "2025-08-18T06:33:26.782Z",
      notes:
        "Implement the crud pages and APIs\n\n    We should be able to create\n    We should be able to edit\n    We should be able to view\n    We should be able to delete\n\nImplementation Steps\n    Repeat the same as Meetings and update steps below\n     Create a file named sprints.codegen.json inside the .bitcube folder.\n    Confirm the schema content with Herman before proceeding.\n    Run the codegen command:\n    bix codegen crud sprints\n    Verify that the API is generated for both frontend and backend.\n    In the features/sprints folder, include:\n    Dialogs for create, edit, and delete\n    A table component for listing meetings\n    Any necessary route files\n    Connect the components and ensure they work end-to-end.\n    A user should be able to:\n    Create a sprint\n    Edit a sprint\n    View sprints\n    Delete a sprint\n    Test all flows for correct behavior and data handling.\n    Check that validation, routing, and UI are consistent.\n    Will follow how other features were implemented.\n\nUpdated Implementation Steps\n    Check for any type errors.\n    Test Search and Sorting. - Disabled sorting for now if broken.\n    Verify Creating, Updating and Deleting are working.\n    Verify all pages are working and displaying as expected.\n    Check for visual bugs and ensure the pages are consistent with other CRUDs.\n    Verify form logic - e.g: empty form can't be submitted, etc.\n    Move any repetitive functions/logic to /features/sprints.\n    Clean up any unused imports, unused code, etc.\nTime Estimate: 2 - 3hrs",
      projectName: "Nexus - Backlog",
    },
    {
      id: "1211075988414151",
      name: "Dashboard - Integration Health Status - Frontend",
      createdAt: "2025-08-18T06:33:11.329Z",
      notes:
        "Implement a health status dashboard card for the health of the project integrations\n\nImplementation Steps\n    Make sure it works with the current implementation\n    Make sure each card is a component\n    Make sure the section is separated into a component\n    Make sure proper fallback validation is working and no runtime errors appear\n    Make sure typing's are correct using npm run build it should not give errors for the health checks\n    UI is consistent against cards and wording\n    Validate that it was imported correctly from v0\n\n\n25/09/25 - Updated Implementation Steps:\n\n    Fix 'any' type on UseState's at the top of the file and any other type errors that would cause build to fail.\n    Move getStatusIcon() function to dedicated /features/admin/integration-status-icon.tsx\n    Move getStatusBadge() function to dedicated /features/admin/integration-status-badge.tsx\n    Split 'Integration Health Status' and 'Recent Activity' sections into their own components under src/components/dashboard/integration-health-status.tsx and src/components/dashboard/recent-activity.tsx\n    Move existing code to a dedicated integration-health-status-card.tsx component under src/components/dashboard/\n    Do the same above two steps for Recent Activities.\n    Ensure this all works with our current API implementation.\n    Scan for any inconsistencies in wording, styling.\n    Check for runtime errors.\n\nTime Estimate: 2 - 3hrs",
      projectName: "Nexus - Backlog",
    },
    {
      id: "1211075988414148",
      name: "Meetings – Implement CRUD (Frontend)",
      createdAt: "2025-08-18T06:32:23.225Z",
      notes:
        "Build the frontend pages and components for creating, reading, updating, and deleting meetings. Integrate with the API endpoints and apply consistent UI patterns.\n\n    We should be able to create\n    We should be able to edit\n    We should be able to view\n    We should be able to delete\n\nImplementation Steps\n     Create a file named meetings.codegen.json inside the .bitcube folder.\n    Confirm the schema content with Herman before proceeding.\n    Run the codegen command:\n    bix codegen crud meetings\n    Verify that the API is generated for both frontend and backend.\n    In the features/meetingsfolder, include:\n    Dialogs for create, edit, and delete\n    A table component for listing meetings\n    Any necessary route files\n    Connect the components and ensure they work end-to-end.\n    A user should be able to:\n    Create a meeting\n    Edit a meeting\n    View meetings\n    Delete a meeting\n    Test all flows for correct behavior and data handling.\n    Check that validation, routing, and UI are consistent.\n    Will follow how other features were implemented.\n\n\nUpdated Implementation Steps\n    Check for any type errors.\n    Test Search and Sorting. \n    Verify Creating, Updating and Deleting are working.\n    Verify all pages are working and displaying as expected.\n    Check for visual bugs and ensure the pages are consistent with other CRUDs.\n    Verify form logic - e.g: empty form can't be submitted, etc.\n    Move any repetitive functions/logic to /features/meetings\n    Clean up any unused imports, unused code, etc.\nTime Estimate: 2 - 3hrs",
      projectName: "Nexus - Backlog",
    },
    {
      id: "1211062411883080",
      name: "Create IconButton",
      createdAt: "2025-08-15T09:31:47.854Z",
      notes:
        "Add a new IconButton to simplify main button code.\n    Create /components/buttons/icon-button.tsx.\n    Extend UI Button to accept an icon prop.\n    Ensure it reduces conditional logic in main button.\n    Use as named export, no default export. \n",
      projectName: "GE - Backlog",
    },
    {
      id: "1211062411785571",
      name: "BackButton Cleanup",
      createdAt: "2025-08-15T09:15:57.494Z",
      notes:
        "Ensure only one BackButton exists and follows conventions.\n\n    Identify both existing BackButton implementations.\n    Decide which one to keep.\n    Delete the redundant BackButton.\n    Move the remaining BackButton to /components/buttons/back-button.tsx.\n    Export as named export export const BackButton = ... (no default export).\n    Verify code inside looks fine.\n",
      projectName: "GE - Backlog",
    },
    {
      id: "1211017055582071",
      name: "Users - CRUD - Frontend",
      createdAt: "2025-08-11T06:47:35.461Z",
      notes: "",
      projectName: "Nexus - Backlog",
    },
    {
      id: "1211005379217217",
      name: "Project - CRUD - Frontend",
      createdAt: "2025-08-08T08:49:35.960Z",
      notes: "",
      projectName: "Nexus - Backlog",
    },
    {
      id: "1210995308928484",
      name: "Step 7/11 next button when tabbing behavior ",
      createdAt: "2025-08-07T07:30:15.226Z",
      notes:
        'When a user is using the tab, and they reach page 7 (What is the total floor area of your property?)  , when the tab focuses on "next" button,  the screen moves to step 8 rather than staying on step 7. \n\nUpdate it so that when user is moving with the tab, then if they focus "next" button, the user has to press "enter" in order to move to step 8',
      projectName: "GE - Backlog",
    },
    {
      id: "1210976339424435",
      name: "Update Servicing Wording ",
      createdAt: "2025-08-05T13:48:22.669Z",
      notes:
        "Please update the wording on the quote page to remove the free Annual Servicing \n\n    Remove highlighted bullet point\n\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1210976339424438\n\n\n2. Remove the highlighted words annual servicing\n\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1210976339424440\n\n\n",
      projectName: "GE - Backlog",
    },
    {
      id: "1210957080187205",
      name: "Setup - Foundation - Frontend",
      createdAt: "2025-08-03T11:02:02.116Z",
      notes:
        "Create the context or way to save the steps as we run the steps store them as draft so we can come back later, once saved this same context manager should trigger the apis and report back as needed, each page/step should just work with this manager\n\nDeliverables\n    Build a setup wizard for a project:\n    Each step is a separate component (modular).\n    As the user progresses, data from each step is stored as a draft (client + backend).\n    The setup flow should be resumable.\n    Once finalized, the same context manager will trigger final API calls.\n    Everything is coordinated via a centralized React context.\n\nFrontend Plan\nStructure\n\n- ProjectSetupContext.tsx\n- ProjectSetup.tsx – to be rendered on [projectId]/setup\n- components\nstep1.tsx\nstep2.tsx\nstep3.tsx\nstep4.tsx\n...etc\n \n1. ProjectSetup.tsx\nResponsibilities:\n    Serves as the entry point for the setup flow.\n    Wraps child steps in the ProjectProvider.\n    Manages navigation between steps.\n    Optionally handles route guards to prevent leaving the page with unsaved changes.\n    Will be rendered on the /[projectId]/setup page\n \n2. ProjectProvider.tsx\nResponsibilities:\n    Stores the project draft state.\nProvides functions to:\n    Set data per step.\n    Persist data to the backend.\n    Load existing draft data when initializing.\n    Submit the final full payload to the backend when complete.\n    Exposes loading/error states as needed for step components.\n    \n3. Step Components\nEach step component is:\n    A focused, isolated form or input flow.\n    Consumes and updates step-specific data via the ProjectProvider.\n    Triggers saveDraft on change/next.\n    Setup to perform step-level validation.\n    Renders form/input controls specific to the step.\n    Read/write from the context.\n    Displays validation errors or save state.\n    Triggers a save-to-backend (via context) if needed on change or submit.\n\nImplementation Steps\n\n    Frontend\nCreate ProjectProvider context\n    Stores project ID and draft data\nProvides methods to:\n    Set step data\n    Persist to backend\n    Finalize setup\n    Track save and validation state\n    Integrate context into ProjectSetup.tsx page\n    Loads initial draft from backend\n    Wraps step components with context provider\nCreate individual step components\n    Each consumes/updates context for its step\n    Triggers context's saveDraft on data change\n    Implement final submit UI + context action\n    Calls finalizeSetup from context\n    Validates all step data before submitting\n    Handles and displays validation errors\nAdd navigation and step tracking logic\nAllows forward/back navigation\n\n\nTime Estimate for Setting Foundation: ~1 Day",
      projectName: "Nexus - Backlog",
    },
    {
      id: "1210957080186983",
      name: "Setup - Launch Tracking - Frontend",
      createdAt: "2025-08-03T10:27:17.442Z",
      notes:
        "The page should show the progress of the setup and make the user is informed of every step\n\nThe button should trigger the launch should at the top, the section with what will be created should be wrapped in the future dev, after a few seconds it should navigate to the dashboard, the message should also reflect that",
      projectName: "Nexus - Backlog",
    },
    {
      id: "1210957080186982",
      name: "Setup - Integration Review - Frontend",
      createdAt: "2025-08-03T10:27:17.252Z",
      notes:
        "This step should show what integrations will be run and be executed as an initial info step\n\nJust make sure it works and looks decent",
      projectName: "Nexus - Backlog",
    },
    {
      id: "1210957080186981",
      name: "Setup - Members Creation - Frontend",
      createdAt: "2025-08-03T10:27:17.060Z",
      notes:
        "This step should prep and store the data then on launch it should trigger the creation\n\nJust make sure it works and looks decent",
      projectName: "Nexus - Backlog",
    },
    {
      id: "1210957080186980",
      name: "Setup - Resource Creation - Frontend",
      createdAt: "2025-08-03T10:27:16.872Z",
      notes:
        "This step should prep and store the data then on launch it should trigger the creation\n\nJust make sure it works and looks decent",
      projectName: "Nexus - Backlog",
    },
    {
      id: "1210957080186979",
      name: "Setup - Meeting Creation - Frontend",
      createdAt: "2025-08-03T10:27:16.671Z",
      notes:
        'This step should prep and store the data then on launch it should trigger the creation\n\nMark as "Future Development", do not implement further than that and do not send results to API',
      projectName: "Nexus - Backlog",
    },
    {
      id: "1210957080186978",
      name: "Setup - Sprint Creation - Frontend",
      createdAt: "2025-08-03T10:27:16.468Z",
      notes:
        "This step should prep and store the data then on launch it should trigger the creation\n\nJust make sure it works and looks decent",
      projectName: "Nexus - Backlog",
    },
    {
      id: "1210957080186977",
      name: "Setup - Repos Creation - Frontend",
      createdAt: "2025-08-03T10:27:16.239Z",
      notes:
        "This step should prep and store the data then on launch it should trigger the creation.\n\nJust make sure it works and looks decent",
      projectName: "Nexus - Backlog",
    },
    {
      id: "1210957080079140",
      name: "Foundation - Project Picker",
      createdAt: "2025-08-03T10:24:26.415Z",
      notes:
        "Review and make sure you understand how the project picker component works internally and how it stores the data\n\n    Use the cursor pointer when hovering over projects\n    It has a bug that takes the first letter and focusses it while searching, see how we can fix it.\n    Add a cancel X button on the right of the search so that if we search and want to clear it it does that, \n        it should only display if some text is in the search\n        it should only clear the search and the search itself should trigger the new project list\n",
      projectName: "Nexus - Backlog",
    },
    {
      id: "1210957080079139",
      name: "Foundation - User Button",
      createdAt: "2025-08-03T10:24:26.167Z",
      notes:
        "In the bottom left make sure this button works\n\n    Show the correct user and email\n    Allow Profile as an option that takes you to profile\n    Allow for log out that works\n    Remove account and settings\n    Make sure the ui/components has a cursor pointer enabled on it not an arrow\n",
      projectName: "Nexus - Backlog",
    },
    {
      id: "1210957080079138",
      name: "Foundation - Page Toolbar",
      createdAt: "2025-08-03T10:24:25.940Z",
      notes:
        "Make sure the page toolbar is the same across all pages, it should have the sidenav button and breadcrumb only",
      projectName: "Nexus - Backlog",
    },
    {
      id: "1210957080079135",
      name: "Foundation - Sidenav",
      createdAt: "2025-08-03T10:24:24.795Z",
      notes:
        "Review and make sure no visible breaking changes happens\n\n    Remove the toggle sidebar option thing\n    Only keep the toggle sidebar with button\n",
      projectName: "Nexus - Backlog",
    },
    {
      id: "1210926586911178",
      name: "Check Python version on Lambda",
      createdAt: "2025-07-30T10:21:36.373Z",
      notes:
        "AWS is ending support for Python 3.9 in Lambda on December 15, 2025",
      projectName: "GE - Backlog",
    },
    {
      id: "1210903477631561",
      name: "Update email disclaimer",
      createdAt: "2025-07-28T10:01:48.602Z",
      notes:
        "The quote email disclaimer requires updating due to Good Energy not being a Plc any longer.  \n\n    Please can the email disclaimer be updated \n        From \n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1210903477631568\n\n\nTo\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1210903477631566\n\n\n",
      projectName: "GE - Backlog",
    },
    {
      id: "1210837067703785",
      name: "Prompt to switch to newly created project",
      createdAt: "2025-07-19T06:27:24.372Z",
      notes:
        'I want to be prompted after creating a project, so that I can choose to immediately switch to the new project or return to the project list\n\nScenario: Show prompt after successful project creation\n  Given the user has just created a new project\n  When the project is successfully saved\n  Then a dialog should appear asking "Do you want to switch to this project now?"\n\nScenario: User chooses "Yes"\n  Given the dialog is visible after project creation\n  When the user clicks "Yes"\n  Then the current project context should update to the newly created project\n  And the user should be navigated to the new project’s dashboard\n\nScenario: User chooses "No"\n  Given the dialog is visible after project creation\n  When the user clicks "No"\n  Then the user should stay on the project list page\n  And the current project context should remain unchanged\n\n\nImplementation\n    Implement a dialog component (e.g., ProjectSwitchPrompt) that accepts onConfirm and onCancel handlers.\n    Show Dialog on Create Success\n    Handle "Yes" (Go to project)\n    Handle "No" (Back to list)\n    Disable form during project creation click.\n',
      projectName: "Nexus - Backlog",
    },
    {
      id: "1210820226624442",
      name: "Wording Changes",
      createdAt: "2025-07-17T09:02:35.868Z",
      notes:
        "Wording changes required. \n\n    When a user selects \"Rent\" on the step 3 change the wording\n        From: Unfortunately, we can only install a heat pump in this property with the homeowner.  If you are still interested, send this survey to them.  \n        To: Thank you for your interest.  We need to work with the homeowner directly to install a heat pump.  Please do send this quote journey to your  landlord if they would like to proceed.  \n    When the property is returned as Purpose Built Flat or Converted Flat change the wording\n        From: As the property is a purpose built flat, it'll be easier for us to help you over the phone. \n        To: Please call us to continue your enquiry\n    When a property has a large floor space, change the wording\n        From: We're not able to install a heat pump for you etc\n        To: Sorry, we're not able to install a heat pump for you.\nAt the moment, we focus on installing heat pumps in properties with a floor area between 50 and 1000m2.  Your Energy Performance Certificate (EPD) indicates that your property is outside of this range. \n\nIf we've got this wrong or you would like more help from our experts, please call 03330164500 or email heatpumps@goodenergy.co.uk.\n\n    When the user selects \"Other\" for the question What is your main source of fuel for your heating? change the wording \n        From: Please contact us\nBased on what you have told us, it'll be easier for us to help you over the phone. \n        To: Please call us to continue your enquiry\nBased on what you have told us, it'll be easier for us to help you over the phone. \n\nTo speak to one of our heat pump experts, call 0333016 4500.  Our phone lines are open 9am to 5:30pm, Monday to Friday.  \n\n",
      projectName: "GE - Backlog",
    },
    {
      id: "1210807852494015",
      name: "GitHub User Management Finalize",
      createdAt: "2025-07-17T06:41:21.889Z",
      notes:
        "I implemented the feature and made sure the pages display and create work, complete the view, edit and delete functions and make sure they work, the edit should function the same as the create",
      projectName: "Nexus - Backlog",
    },
    {
      id: "1210749796241873",
      name: "Footer links to open in same page",
      createdAt: "2025-07-09T07:49:49.871Z",
      notes:
        "The terms and conditions and the privacy policy links in the footer currently open in a new tab. \nAfter talking with UX these should open in the same page. \n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1210749797042724\n\n\nAlso the gap between the words seems smaller than the one in Figma\n\nCurrently\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1210749797042720\n\n\nFigma\nhttps://www.figma.com/design/qjPvWq8tj2JNs5kiEHuFmL/Components?node-id=1937-577&p=f&t=VfRR68w6HxZrbf9J-0\n\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1210749797042722\n\n\n",
      projectName: "GE - Backlog",
    },
    {
      id: "1210522307508414",
      name: "Mobile | On IOS when clicking on a texfield the screen gets too big",
      createdAt: "2025-06-11T13:30:14.724Z",
      notes:
        "When selecting one of the textfields in page 2 and using ios, the focus is given to the field but also the whole screen gets bigger This is making some of the content pushed to the edges and some of it gets also cut, the big focus is kept across all pages. \nFocus should be given to the field without zooming in \n\nL;eft Android and Right ios\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1210522307508417\n\n\n",
      projectName: "GE - Backlog",
    },
    {
      id: "1210349965813361",
      name: "Validate postcodes in the frontend",
      createdAt: "2025-05-22T10:59:08.660Z",
      notes:
        "https://www.ukpostcode.co.uk/validate-postcode.htm\n\nhttps://app.asana.com/0/profile/1201545454120396 this needs to validate postcodes correctly in the frontend, I can type in 111111 as my postcode which will result in a failure at on the physics API",
      projectName: "GE - Backlog",
    },
    {
      id: "1210170535193652",
      name: "Better error message when Zoho down",
      createdAt: "2025-05-06T10:09:39.015Z",
      notes:
        "When Zoho is down we're unable to provide quotes but we should ensure that the error message that the end user sees is as friendly as possible and encourages them to try again later.\n\nhttps://app.asana.com/0/profile/637221998446854To investigate the details around moving the dependency on Zoho from API startup to run time.\nhttps://app.asana.com/0/profile/1205781394180503To decide (or ask the design team) how the error page should look.",
      projectName: "GE - Backlog",
    },
  ],
};
