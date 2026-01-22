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

export const ecomData = {
  data: [
    {
      id: "1209699933931781",
      name: "fix(finish-options): empty properties adding to cart",
      createdAt: "2025-03-18T08:39:55.728Z",
      notes:
        "Description:\nOnline orders are being received where clients have submitted measurements, but these measurements are not appearing on the order. Example order:\n🔗 https://admin.shopify.com/store/huntsman-savile-row/orders/11675806368124#event225588494532988\nFindings So Far:\n    Testing shows that selecting 'finish options' without adding measurements prevents the product from being added to the cart.\n    This suggests that the measurement information is lost between checkout and confirmed order.\n    Likely linked to the previously raised issue by Taj, where the incorrect measurement metric was being displayed in the order form.\nAction Items:\n✅ Investigate why measurement data is missing from confirmed orders.\n✅ Verify if this issue is linked to the previously reported measurement metric issue.\n✅ Provide updates on the cause and fix ASAP, as this directly impacts order fulfillment.\nAdditional Contact:\n    Hemison (CC'd) – Processes online orders and will share further examples or relevant details if needed.\n",
      projectName: null,
    },
    {
      id: "1209709830729330",
      name: 'Ref(booking form): add salesforce form to "book an appointment"',
      createdAt: "2025-03-18T07:30:34.804Z",
      notes:
        "https://app.asana.com/0/0/1209493724421485/f\n\nhttps://www.huntsmansavilerow.com/pages/contact\n\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1209709830729332\n\n\n",
      projectName: null,
    },
    {
      id: "1209709497437164",
      name: "Meetings",
      createdAt: "2025-03-18T07:30:10.547Z",
      notes: "",
      projectName: "Designworks Collective",
    },
    {
      id: "1209709497437162",
      name: "Admin",
      createdAt: "2025-03-18T07:29:46.778Z",
      notes: "",
      projectName: "Designworks Collective",
    },
    {
      id: "1209709497437160",
      name: "Reviews",
      createdAt: "2025-03-18T07:29:03.673Z",
      notes: "",
      projectName: "Designworks Collective",
    },
    {
      id: "1209709497437158",
      name: "Standups",
      createdAt: "2025-03-18T07:28:41.928Z",
      notes: "",
      projectName: "Designworks Collective",
    },
    {
      id: "1209676661960672",
      name: " Improve product grid layout for Mobile UX",
      createdAt: "2025-03-14T10:36:00.868Z",
      notes:
        "Adjust text layout:\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1209709497437156\n\n\n",
      projectName: "Designworks Collective",
    },
    {
      id: "1209676661959594",
      name: "Mobile Search Bar Improvements ",
      createdAt: "2025-03-14T06:37:32.456Z",
      notes:
        "Extend search bar to full width in menu drawer:\n\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1209709497437154\n\n\n\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1209709497437152\n\n\n\n",
      projectName: "Designworks Collective",
    },
    {
      id: "1209676661959591",
      name: "Remove Elements from the Menu Drawer ",
      createdAt: "2025-03-14T06:33:08.934Z",
      notes:
        " remove distracting elements (e.g., social media icons and redundant text like “2025, Paddywax”).\n\nKeep Sign In (Underlined in Blue):\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1209709494506482\n\n\n",
      projectName: "Designworks Collective",
    },
    {
      id: "1209676661959588",
      name: "Ensure consistent spacing in dropdown menus for visual consistency.",
      createdAt: "2025-03-14T06:13:58.609Z",
      notes: "",
      projectName: "Designworks Collective",
    },
    {
      id: "1209676661959587",
      name: "Fix image alignment issue in the “Gifts and More” collection",
      createdAt: "2025-03-14T06:13:55.231Z",
      notes:
        "Issue: Images are misaligned\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1209709494506468\n\n\nShould be like below:\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1209709494506470\n\n\n",
      projectName: "Designworks Collective",
    },
    {
      id: "1209676661959584",
      name: " Website Fixes & Enhancements",
      createdAt: "2025-03-14T06:13:23.676Z",
      notes: "",
      projectName: "Designworks Collective",
    },
    {
      id: "1209651476584906",
      name: 'NVDA does not announce what the dropdown "Select a date range" is',
      createdAt: "2025-03-12T08:58:45.231Z",
      notes:
        'When NVDA is enabled on step "When was the property build" if the user selects the dropdown then NVDA announces "clickable" but nothing like "select a date range"',
      projectName: "GE - Backlog",
    },
    {
      id: "1209642962481834",
      name: 'NVDA does not read "Invalid discount code"',
      createdAt: "2025-03-11T15:00:05.516Z",
      notes:
        "When the user inserts an incorrect discount code, then this is not read to the customer so they are unaware that the discount has not been applied. ",
      projectName: "GE - Backlog",
    },
    {
      id: "1209642962481830",
      name: "NVDA does not read the error messages",
      createdAt: "2025-03-11T14:56:05.381Z",
      notes:
        "When using a screen reader, if the user does not select any option and clicks on Next, then there is no announcement of this error to the customer. The only way to read the message is for the user to navigate with the keyboard to the error block, which is quite far away. As the focus is given to the error block, then this should be read to the customer. Looking into our own portal, seems like we use aria-label in order to announce it to the customer about the error",
      projectName: "GE - Backlog",
    },
    {
      id: "1209642955817690",
      name: "NVDA does not inform which new page the user is at/read the questions",
      createdAt: "2025-03-11T14:52:41.227Z",
      notes:
        "When using nvda and navigating through the pages, then the question isnt read to the customer, so i.e. in the do you own or rent , the header/question is not read and only the buttons are read to the end customer. This can cause confusion as they might not know what page they're at. \n\nLooking into our portal , seems like NVDA is reading the tab, so i.e. in this one it'd read \"Terms and conditions, good energy\"\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1209642955817693\n\n\nLooking into heat pump, the tab is always the same, so that wouldnt be useful. ",
      projectName: "GE - Backlog",
    },
    {
      id: "1209642955817681",
      name: "Opens in a new tab icon not read with screen reader",
      createdAt: "2025-03-11T14:47:42.210Z",
      notes:
        "When using NVDA and navigating to a link that opens in a new tab (the footers or i.e. zoopla/rightmove) the screen reader only reads the text, it does not inform the end user that it's opening in a new tab.\n\n\nI believe the aria-label needs to be updated so that the text + (opens in a new tab) is read to the user. \n\n",
      projectName: "GE - Backlog",
    },
    {
      id: "1209641260437437",
      name: 'Follow up on "Salesforce Web-to-Lead Booking forms from Website"',
      createdAt: "2025-03-11T12:39:33.690Z",
      notes:
        "https://app.asana.com/0/0/1209493724421485/f\n\n    Email should be sent to all booking forms as per original \n    Update that was required was to syncing this to SF as well\n",
      projectName: null,
    },
    {
      id: "1209627114590248",
      name: "Planning",
      createdAt: "2025-03-10T09:37:16.066Z",
      notes: "",
      projectName: null,
    },
    {
      id: "1209568210402144",
      name: "Feat(Landing Page): Syzygy Lead-Gen Landing Page",
      createdAt: "2025-03-05T05:21:57.016Z",
      notes:
        "Description:\n    Wireframes for the landing page are available [HERE]  https://www.canva.com/design/DAGgzN9ey6Q/GDhj0I9CDqTxC4LkOhafyA/view?utm_content=DAGgzN9ey6Q&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h23727df045\n    Imagery used for the design is in [this folder] (https://drive.google.com/drive/u/0/folders/1dGRcGa27HYZ2UIaa8Anv5CD4TX2opc3_). Let us know if any resizing is needed.\n    Product featured at the bottom: Syzygy – current PDP [HERE] (https://www.notwoways.com/products/syzygy-2).\n    Klaviyo List ID: XWKmTX [Linked Here] (https://www.klaviyo.com/login?next=/list/XWKmTX).\n    Capture SMS: Please explore options for adding SMS capture on the page.\n    Deadline: The goal is to have this rolling by Thursday evening (4:30 pm our time) so we can start linking ads.\n    The template follows the JME lead-gen page, but let us know if any block adjustments are needed for faster execution.\n",
      projectName: "NTW | Archive",
    },
    {
      id: "1209567871874957",
      name: "Anchor error message",
      createdAt: "2025-03-04T10:30:17.006Z",
      notes:
        'Revert Branch: https://github.com/bitcubesystems/igloo/pull/516\nFeature Branch: https://github.com/bitcubesystems/igloo/pull/499\n\nFound when testing https://app.asana.com/1/375643158116881/project/1205765637665888/task/1208446412892370\n\nWhen the user clicks on next without selecting any option, then an error message should be displayed at the top, with an error message that anchors to the corresponding question.\n\n\nStep\nError Message\nAnchor\nHeat pump quote\nOk\nWhen clicking on "Enter a valid address" then the focus goes quite low. The customer does not see anymore the question. (See pic)\nReceive a copy of your estimate\nEmail error message\nCorresponding anchor working as expected\nDo you own or rent this property?\nOk\nWhen clicking on "Select an option" the focus goes really low. The customer does not see the question and half the buttons (see pic)\n\n\nWhat type of property is it?\nOk\nOk\nHow many bedrooms does the property have?\nOk\nQuestion cant be seen \nHow many storeys does your property have?\nThe focus is not given to the red error message at the top (see pic)\nStoreys question cant be seen\nBasement ok\nWhen was the property built?\nOk\nOk\nWhat is your main source of fuel for your heating?\nOk\nOk\nDo you have a hot water cylinder?\nOk\nWhen clicking on "Select an option" the focus goes really low. The customer does not see the question and half the buttons\nWhat type of heating system do you currently have?oK\n\n\nWhen clicking on "Select an option" the focus goes really low. The customer does not see the question and half the buttons\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1209567871874962\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1209567871874966\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1209567871874968\n\n\n',
      projectName: "GE - Backlog",
    },
    {
      id: "1209534694992899",
      name: "Fix Search Page Filtering Issue",
      createdAt: "2025-02-28T11:42:00.004Z",
      notes:
        "🔍 Task Description:\nCurrently, when searching for a product, the old filters are still appearing on the results pages instead of the new ones implemented by Jacques.\n🛠️ Steps to Resolve:\n    Investigate why the old filters are still appearing on search results.\n    Ensure that the new filtering system is correctly applied to search pages.\n    Test various search terms to confirm the fix.\n✅ Deliverables:\n    Updated search filters reflecting the new filtering system.\n    Confirmation that search filters are consistent across all search pages.\n",
      projectName: "NTW | Archive",
    },
    {
      id: "1209534694992895",
      name: " Ensure 'Coming Soon' Label Displays Correctly Until Product Launch",
      createdAt: "2025-02-28T10:20:40.977Z",
      notes:
        "🔍 Task Description:\nThe product M1 HKE Ultimate by JME ( https://www.notwoways.com/products/m1-hke-ultimate-by-jme ) should remain labeled as 'Coming Soon' until launch at 5 PM. Currently, after reverting stock to zero, the button shows 'Sold Out' instead of 'Coming Soon' despite the metafield being set to 'True'.\n🛠️ Steps to Resolve:\n    Investigate why the product is displaying 'Sold Out' instead of 'Coming Soon' after stock adjustments.\n    Ensure that the product remains as 'Coming Soon' until launch time.\n    Confirm that the Klaviyo embed removal does not interfere with the expected behavior.\n    Provide a fix or workaround before 5 PM to ensure a smooth transition.\n✅ Deliverables:\n    Product correctly displays 'Coming Soon' until launch.\n    Clear instructions on managing similar stock transitions in the future.\n⏳ Status: Pending Investigation & Fix",
      projectName: "NTW | Archive",
    },
    {
      id: "1209506964965460",
      name: "feat(order-tracking): demo Shopify native order tracking functionality",
      createdAt: "2025-02-26T15:11:51.063Z",
      notes: "",
      projectName: "NTW | Archive",
    },
    {
      id: "1209497055787215",
      name: "fix(shoppable-lookbook): Formatting ",
      createdAt: "2025-02-26T12:22:07.902Z",
      notes:
        "    On mobile, the feature isn’t formatting properly - I've attached a screenshot for reference.\n    Could we also implement an option to add a third content box in the row? \nLet me know when we can expect these fixes.\n\n\n",
      projectName: null,
    },
    {
      id: "1209508146892411",
      name: "Time Tracking - Luke",
      createdAt: "2025-02-26T10:36:23.536Z",
      notes: "",
      projectName: "NoTwoWays",
    },
    {
      id: "1209497055787210",
      name: "Fix(Finish options): Broken Link ",
      createdAt: "2025-02-26T10:04:00.484Z",
      notes:
        "Currently 'How do I measure my...' on the finish options pop-out doesn't link anywhere:\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1209497055787214\n\n\n\nCan we either link this to the size-guide page, or remove the text altogether if that's not possible?",
      projectName: null,
    },
    {
      id: "1209506528084009",
      name: "Update Expandable Section Icons",
      createdAt: "2025-02-26T09:11:19.374Z",
      notes:
        "Redesign UI elements by replacing icons (e.g., “>”) with clearer ones (e.g., “+”) to improve expand/collapse interactions.\n\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1209709494506480\n\n\n",
      projectName: "Designworks Collective",
    },
    {
      id: "1209506528084006",
      name: "Simplify Pricing Display",
      createdAt: "2025-02-26T08:59:36.702Z",
      notes:
        "Redesign the pricing layout by removing duplicate pricing elements and using clear, contrasting styles to highlight discounts and savings.\n\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1209709494506474\n\n\n\n\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1209709494506478\n\n\n",
      projectName: "Designworks Collective",
    },
    {
      id: "1209506527639101",
      name: "Adjust Checkout Button Placement",
      createdAt: "2025-02-26T08:59:01.231Z",
      notes:
        "reposition the checkout button to ensure it is prominent and accessible on both desktop and mobile views.\n\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1209676661959601\n\n\n",
      projectName: "Designworks Collective",
    },
    {
      id: "1209506527639096",
      name: "Cart Drawer/Page Layout & Design",
      createdAt: "2025-02-26T08:56:40.206Z",
      notes: "",
      projectName: "Designworks Collective",
    },
    {
      id: "1209506527639089",
      name: "Navigation - Mobile Menu Drawer",
      createdAt: "2025-02-26T08:45:57.871Z",
      notes: "",
      projectName: "Designworks Collective",
    },
    {
      id: "1209506527639082",
      name: "UX Product Display Pages",
      createdAt: "2025-02-26T08:40:57.217Z",
      notes: "",
      projectName: "Designworks Collective",
    },
    {
      id: "1209493724421481",
      name: "Fix(size selector):Button formatting ",
      createdAt: "2025-02-25T06:06:24.217Z",
      notes:
        "Please can you take a look at this:\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1209493724421484\n\n\n\nThanks",
      projectName: null,
    },
    {
      id: "1209480725147849",
      name: "Fix(PDP):unit of measure",
      createdAt: "2025-02-24T08:20:54.996Z",
      notes:
        "The jacket/trouser alteration length on garments is being displayed a (CM) default - when it should be shown as inches. Please can you investigate why this is happening and rectify?\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1209480725147852\n\n\n",
      projectName: null,
    },
    {
      id: "1209453547495062",
      name: "Investigation(MTO): MTO not showing on this product",
      createdAt: "2025-02-21T12:49:11.088Z",
      notes:
        "Hey Nick and Jacques,\n\nhttps://www.huntsmansavilerow.com/products/brown-orange-burgundy-check-flap-patch-pocket-1-2-belt-jacket?variant=47776718291259\n\nI've taken a look and I can't see why MTO is now showing- all the correct tags and settings seem to be applied.\n\nMany thanks",
      projectName: null,
    },
    {
      id: "1209432252118750",
      name: "chore(navigation): ensure only in use navigation lists are on admin",
      createdAt: "2025-02-19T10:54:58.670Z",
      notes:
        "https://app.asana.com/app/asana/-/get_asset?asset_id=1209454475157260\n\n\n",
      projectName: "NTW | Archive",
    },
    {
      id: "1209362047686798",
      name: "admin(returns portal):notification flow/setting",
      createdAt: "2025-02-11T12:41:30.768Z",
      notes:
        "Client returns portal notifications via portal (hemison.brown@huntsmansavilerow.com)\n\n    Use shopify flow to send email and notify that there is an return request that should be given attention to\n",
      projectName: null,
    },
    {
      id: "1209362170826582",
      name: "Fix(Personalisation drawer): should default to product image if metafield is not set",
      createdAt: "2025-02-10T09:17:12.282Z",
      notes: "",
      projectName: null,
    },
    {
      id: "1209301947742502",
      name: "feat(hero):Image Block CTA",
      createdAt: "2025-02-05T06:28:00.600Z",
      notes:
        "Image Block CTA Button\nIs there a way we can have an option to have the CTA button underneath the title? See examples attached.\n\n\n----------------------------------------\n\n----------------------------------------\n\n----------------------------------------\n\n\nUpdate section Image block - V2\n    Add option for mobile image\n    Update the content part to just have one text part (richtext)\n    Add options the button below it \n        text\n        url link\n        button style\n    Add setting to have content be \n        top\n        middle\n    Add setting to have button\n        below text\n        bottom of section\n",
      projectName: null,
    },
    {
      id: "1209301937521788",
      name: "Refactor(booking form): Remove box border",
      createdAt: "2025-02-04T12:39:14.253Z",
      notes:
        "https://www.huntsmansavilerow.com/pages/about-trunk-shows\n\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1209348853258121\n\n\ntrunk-show-booking-form.liquid\n    remove border around form\n",
      projectName: null,
    },
    {
      id: "1209301937521786",
      name: "Fix(inline navigation bar):remove grey background ",
      createdAt: "2025-02-04T12:39:12.862Z",
      notes:
        "https://www.huntsmansavilerow.com/pages/u-s-a-trunk-shows\n\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1209348853258138\n\n\n\n    Update (inline-navigation) section to remove the grey background\n",
      projectName: null,
    },
    {
      id: "1209290671972217",
      name: "Fix(cart): fix styling issues relating to clerk recommendations",
      createdAt: "2025-02-03T05:57:19.349Z",
      notes:
        "1) Fix styling on cart page where adding a new section breaks page.\nEnsure that styling regarding the main layout of the page is per section.\n    Seems like flex styling is on body and possibly inline styles\n\n\ncontext https://app.asana.com/0/1202537898929105/1209290671972214\n\n2) get the custom liquid currently on the cart page that has code from https://clerk.io to work\n\n\n",
      projectName: null,
    },
    {
      id: "1209247995756952",
      name: "Fix(image block): Block Margins - Image Blocks ",
      createdAt: "2025-01-30T10:57:35.785Z",
      notes:
        "Tegan Harding\n12:45 (12 minutes ago)\n\n\n\n\nto Jacques, me, John\n\nHi Nick / Jacques \n\nI am trying to edit block margins within an image block, and the spacing doesn't change when I increase or decrease this. Would you please be able to look into this? See the reference attached. \n\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1209348853258142\n\n\n",
      projectName: null,
    },
    {
      id: "1209270203969978",
      name: "Meetings",
      createdAt: "2025-01-29T11:50:20.054Z",
      notes: "",
      projectName: "Palome - Kanban",
    },
    {
      id: "1209268410280237",
      name: "Footer links should not be all caps",
      createdAt: "2025-01-29T08:21:25.683Z",
      notes: "",
      projectName: "Palome - Kanban",
    },
    {
      id: "1209268408381477",
      name: "Added social media links don't display properly",
      createdAt: "2025-01-29T08:14:53.054Z",
      notes:
        "https://app.asana.com/app/asana/-/get_asset?asset_id=1209268408381479\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1209268408381481\n\n\n",
      projectName: "Palome - Kanban",
    },
    {
      id: "1209261142376825",
      name: "Fix(Bear PDPs): Add support for custom personalisation text",
      createdAt: "2025-01-28T11:26:02.686Z",
      notes:
        'The Notebook personalisation message is appearing on our Huntsman Bear products:\nhttps://www.huntsmansavilerow.com/products/the-taji-bear?variant=44574444060987\nAlthough these are also personalised products, the messaging should differ, as the same rules do not apply.\n"Huntsman bears can be personalised with a name added on a bespoke label, affixed to the foot of your bear. Either choose to add your recipient\'s name, or give your Huntsman bear their very own name."\n\n\n',
      projectName: null,
    },
    {
      id: "1209259391479001",
      name: "investigation(Product):Unpublished products appearing",
      createdAt: "2025-01-28T06:53:26.867Z",
      notes:
        "Task title:\ninvestigation(Product):Unpublished products appearing\n\nContact Person / Person that requested:\nJohnny\n\nRequest type:\nBug Fix\n\nPriority:\nHigh (Urgent or critical)\n\nDetailed Description:\nhttps://admin.shopify.com/store/huntsman-savile-row/products/14983954497916\n\nThis product is appearing in search results even though it's not published on any sales channel, or active. This product should not be displayed on the website.\n\nWhy is that happening, and please can we ensure it is removed from the site asap?\n\n\nBusiness Impact:\nHigh (Critical issue impacting sales or client relationship)\n\n———————————————\nThis task was submitted through Client Request Submission\nhttps://form.asana.com/?k=yDbsVEyV4bs_SLNFuBn9EA&d=375643158116881",
      projectName: null,
    },
    {
      id: "1209165820211022",
      name: "ref(image blocks): refactor image blocks to fix responsiveness",
      createdAt: "2025-01-16T07:42:53.834Z",
      notes: "https://app.asana.com/0/0/1209149145359292/f",
      projectName: null,
    },
    {
      id: "1209149145359286",
      name: "Fix(in line menu): Menu burger & restructure the new menu",
      createdAt: "2025-01-14T12:37:30.776Z",
      notes:
        "1\n\nMenu burger is currently white on PDP’s so is not visible - change to red\nhttps://www.huntsmansavilerow.com/products/grey-chalk-stripe-double-breasted-suit-1\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1209149145359289\n\n\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1209149145359291\n\n2\n\nWhen we try to restructure the new menu, putting direct page links after the navigation it doesn't format the correctly. Please see \"About Huntsman Trunkshows\" remains purple and underlined.\nCan we make it so that we don't have to do a subcategory heading before we reach a page link? Happy to jump on a call now to discuss?\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1209149145359297\n\n\n",
      projectName: null,
    },
    {
      id: "1209134400020729",
      name: "Feat(ts): convert js to ts files",
      createdAt: "2025-01-14T10:47:44.664Z",
      notes: "",
      projectName: "Wishlist app",
    },
    {
      id: "1209074705883826",
      name: "Code reviews",
      createdAt: "2025-01-03T07:02:35.269Z",
      notes: "",
      projectName: null,
    },
    {
      id: "1209068936197122",
      name: "feat(shoppable lookbook): shoppable lookbook section",
      createdAt: "2025-01-02T11:27:16.287Z",
      notes:
        'Create a new section called "Shoppable lookbook"\n\n    section settings\n        margin top\n        margin bottom\n        color scheme\n        full width section (default = false)\n\n     block settings  ( max of 4 blocks )\n        image (image_picker)\n         text (richtext)\n        products (product_list)\n              limit to 3 products\n\nDesign:\nhttps://app.asana.com/0/1208665967818386/1208684107495533/f\n\nShoppable Lookbooks Mobile Prototype: https://www.figma.com/proto/OsulymvsD5IMnnwnJym3Nq/Huntsman?page-id=3708%3A2407&node-id=3730-14734&node-type=frame&viewport=649%2C491%2C0.24&t=q6YGQMYrIpG4dVpj-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=3730%3A14734\n\nShoppable Lookbooks Desktop Prototype: https://www.figma.com/proto/OsulymvsD5IMnnwnJym3Nq/Huntsman?page-id=3708%3A2406&node-id=3730-19231&node-type=frame&viewport=596%2C875%2C0.29&t=yanN3QVZX9IEgHHo-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=3730%3A19231',
      projectName: null,
    },
    {
      id: "1209032574359390",
      name: "ref(header-drawer): clean up code after implementing new header drawer",
      createdAt: "2024-12-23T13:43:54.672Z",
      notes:
        "Once the new menu drawer has been deployed, the old menu drawer should be removed and all references to it should be removed or updated to the new drawer implementation.",
      projectName: null,
    },
    {
      id: "1208995589536186",
      name: "Feat(Footer): setup signup to use klaviyo",
      createdAt: "2024-12-17T12:16:54.583Z",
      notes:
        "    Change current footer signup setup to subscribe emails to klaviyo\n    add a custom tooltip for incorrect email addresses when trying to signup\n\nKlaviyo ID: XbRrDN\n\n",
      projectName: "NTW | Archive",
    },
    {
      id: "1208983310673698",
      name: "fix(FAQ):redirect links",
      createdAt: "2024-12-16T11:37:48.888Z",
      notes:
        "Can we add a direct link to the main Returns FAQ in the footer.\nThe direct link is this one:  https://support.notwoways.com/kb/article/9-can-i-return-my-order/\n\nIn the middle menu,  can we have:\nFAQ\nTRACK YOUR ORDER\nRETURNS\nCUSTOMER SERVICE\n\nand then remove the terms and conditions as that already exists in the bottom footer.\nCan we get that done today as it would help with some customer service questions\n\n\n----------------------------------------\n\n----------------------------------------\n\n----------------------------------------\n\n----------------------------------------\n\n----------------------------------------\n\n\n    Remove TERMS & CONDITIONS in middle footer nav\n    Reorder middle footer nav to\n        FAQ\n        TRACK YOUR ORDER\n        RETURNS (links to  https://support.notwoways.com/kb/article/9-can-i-return-my-order/)\n        CUSTOMER SERVICE\n\n",
      projectName: "NTW | Archive",
    },
    {
      id: "1208965773389905",
      name: "design(search bar): setup some designs for possible search bar implementation",
      createdAt: "2024-12-13T07:24:24.929Z",
      notes:
        "\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1208998648697005\n\n\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1208998648697007\n\n\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1208998648697009\n\n\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1208998648697011\n\n\n",
      projectName: "NTW | Archive",
    },
    {
      id: "1208965568262165",
      name: "fix(contact-popup): fix phone number padding",
      createdAt: "2024-12-12T13:04:16.438Z",
      notes:
        "https://app.asana.com/app/asana/-/get_asset?asset_id=1208965568262171\n\n\n",
      projectName: "Purdey - Kanban",
    },
    {
      id: "1208933785960590",
      name: "Feat(christmas hero upsell): setup christmas hero upsell animation icon",
      createdAt: "2024-12-10T13:47:29.426Z",
      notes:
        "references this Design task\nhttps://app.asana.com/0/1208665967818386/1208396398869456\n\nBauble Design and annotations: https://www.figma.com/design/OsulymvsD5IMnnwnJym3Nq/Huntsman?node-id=4070-16648&t=8CdSVE787PsE0ktF-1\nDesktop: https://www.figma.com/design/OsulymvsD5IMnnwnJym3Nq/Huntsman?node-id=4254-11155&t=8CdSVE787PsE0ktF-1…\nSee more\n\nSetup a new hero section that uses this animation section\nOR\nsetup a new section that contains the logic for the animation that can be used on the hero",
      projectName: null,
    },
    {
      id: "1208936482419843",
      name: "Ref(product cards): update size of image on product cards",
      createdAt: "2024-12-10T07:08:40.740Z",
      notes:
        "https://app.asana.com/app/asana/-/get_asset?asset_id=1208936482419845\n\n\n\nUpdate on the following\n    featured collections\n    collection pages\n    recommendations\n\nUse transform: scale(1.2) to increase size of image dispalyed\n\nNOTE:\n    keep in mind that the hover effect of using scale to increase size should also be increased to (1.25) \n",
      projectName: "NTW | Archive",
    },
    {
      id: "1208936476287028",
      name: "ref(nav): remove the top white space nav bar sits in when you have yet to scroll",
      createdAt: "2024-12-10T05:46:31.051Z",
      notes:
        "    Firstly verify if this is not a theme setting we can use to remove the scroll effect (ie space at top and then when scroll down the white space disappears)\n    Secondly verify that the setting we currently have for the color of the nav still works in this case\n\n\n\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1208936476287033\n\n\n",
      projectName: "NTW | Archive",
    },
    {
      id: "1208932831630470",
      name: "Feat(Footer signup): Implement a custom error tooltip for the email signup",
      createdAt: "2024-12-09T13:24:12.579Z",
      notes:
        "https://app.asana.com/app/asana/-/get_asset?asset_id=1208932831630477\n\n\nSetup custom tooltip for errors on with the email address\n    square corners\n    no icon\n    keep error code\n",
      projectName: "NTW | Archive",
    },
    {
      id: "1208932831630469",
      name: "Ref(footer): link the footer to homepage",
      createdAt: "2024-12-09T13:22:32.244Z",
      notes: "NTW logo in footer should link to the homepage",
      projectName: "NTW | Archive",
    },
    {
      id: "1208932831630468",
      name: "Ref(featured collection): Update arrows to only show when there is something to scroll on the sides",
      createdAt: "2024-12-09T13:21:53.147Z",
      notes:
        "Update arrows for them to only show when there is something to scroll on the sides. ie if nothing to scroll on left then no arrow same for right hand side\n\n\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1208932831630481\n\n\n\n\n",
      projectName: "NTW | Archive",
    },
    {
      id: "1208932831630467",
      name: "Ref(card content): update font sizing",
      createdAt: "2024-12-09T13:21:29.296Z",
      notes:
        "\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1208932831630485\n\n\n    Update pricing  font / weight / sizing  [Size 13 font, light Suisse]\n    Update on\n        featured collection\n        collection pages\n        recommended products\n",
      projectName: "NTW | Archive",
    },
    {
      id: "1208932831630466",
      name: "ref(footer): update copy on footer",
      createdAt: "2024-12-09T13:21:00.046Z",
      notes:
        "Change to ‘Customer service’\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1208932831630487\n\n\n",
      projectName: "NTW | Archive",
    },
    {
      id: "1208932831630464",
      name: "Fix(nav): center logo on screen",
      createdAt: "2024-12-09T13:19:34.156Z",
      notes:
        "On PDP the logo is not centered when animation has run and only the NTW shows\nLogo should be centered with the featured image edge\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1208932831630491\n\n\n",
      projectName: "NTW | Archive",
    },
    {
      id: "1208932831630462",
      name: "Fix(site reskin): change requests",
      createdAt: "2024-12-09T13:19:22.788Z",
      notes:
        "https://docs.google.com/document/d/1hHocbgoOz8GBQWUnxMppmQxYYANo851VQ1bPDlGjm3E/edit?tab=t.0",
      projectName: "NTW | Archive",
    },
    {
      id: "1208935359427673",
      name: 'Ref(mysterybox)" update scrollbar on mobile to always be visible',
      createdAt: "2024-12-09T13:10:03.905Z",
      notes: "",
      projectName: "NTW | Archive",
    },
    {
      id: "1208900163336218",
      name: "Feat(nav): add setting for the nav text if not scrolled page and when scrolled page",
      createdAt: "2024-12-04T11:04:55.268Z",
      notes:
        "\n    Add setting for the color of the nav text when the page has not been scrolled yet and the nav is contained in white bar\n\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1208890959004185\n\n\n\n    Add setting for the nav color once the page has scrolled past the white bar\n\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1208890959004187\n\n\n\n\n",
      projectName: "NTW | Archive",
    },
    {
      id: "1208894894182263",
      name: "fix(PDP): dropdown for content",
      createdAt: "2024-12-03T14:52:47.985Z",
      notes:
        "Hi! Callum is going through so there'll be a bit more to follow.\nBig note from me is on the Shipping & Returns, Style Guide etc on the PDP. Can they please be like the Represent link on Figma: https://uk.representclo.com/products/represent-owners-club-stamp-t-shirt-flat-white\n(whereby they cover the description, rather than expand the way they currently do). If all of them are expanded, you cannot scroll down anymore.\nThanks!",
      projectName: "NTW | Archive",
    },
    {
      id: "1208893667336317",
      name: "ref(book an appointment): mobile",
      createdAt: "2024-12-03T13:34:12.858Z",
      notes:
        "    Book an appointment form - mobile\n        Image and text alignment error (full bleed and grey line & center align text )\n\nhttps://www.huntsmansavilerow.com/pages/contact\n\n\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1208933341989763\n\n\n",
      projectName: null,
    },
    {
      id: "1208883570950845",
      name: "Fix(reskin): Reskin final feedback ",
      createdAt: "2024-12-03T07:15:09.024Z",
      notes:
        "I'm trying to get the site over the line today. A few notes which would be great to address asap:\n    The copy for Shipping/Returns/Payment Methods needs changing\n\nPAYMENT METHODS: https://bitcube-external.slack.com/team/U03HEB18UAF could you help us with a small line of copy here?\nHELP AND CONTACT US: If you need help or have any questions, please contact us at support@notwoways.com\nSTYLE DETAILS: Let's please have this pull from the 'Materials and care' section on the current PDPs\n    The 'Origins' page needs some work - please see Figma here: https://www.figma.com/design/XlhjLk2EslG1Isvuw8LpTy/Site-notes?node-id=0-1&t=cqjEpR7cGWUj0cB9-1\n\nFinal preview from my side here: https://yt70iacwadhi32au-44214550691.shopifypreview.com/\nhttps://bitcube-external.slack.com/team/U03HEB18UAF could I please have your eyes on it when you get a sec?\n\nNote that 'Origins' ratios are fine on mobile - it's desktop that needs work",
      projectName: "NTW | Archive",
    },
    {
      id: "1208863757347292",
      name: "fix(image-grid): fixed image grid images being cut off",
      createdAt: "2024-11-28T07:08:17.722Z",
      notes: "",
      projectName: "Purdey - Kanban",
    },
    {
      id: "1208838613409016",
      name: "Feat(pricing): a strikethrough of the compare price should be shown on featured collection section",
      createdAt: "2024-11-27T11:18:57.649Z",
      notes:
        'Strike through setting on featured products block\n\nAlex still needs to provide details on all section where this should be added\n\n\ncompare_at_price is the "was price"',
      projectName: "Purdey - Kanban",
    },
    {
      id: "1208849594611268",
      name: "Feat(navigation): UX/UI - inline navigation and side main menu",
      createdAt: "2024-11-26T12:51:22.308Z",
      notes:
        "Reference:\nhttps://app.asana.com/0/0/1208611010975704/f\n\nDesktop Prototype: https://www.figma.com/proto/OsulymvsD5IMnnwnJym3Nq/Huntsman?page-id=3363%3A13451&node-id=3363-13452&node-type=frame&viewport=173%2C108%2C0.21&t=4IMEXsVf0NMCQPSA-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=3363%3A13452\n\nMobile Prototype: https://www.figma.com/proto/OsulymvsD5IMnnwnJym3Nq/Huntsman?page-id=3363%3A12909&node-id=3363-12910&node-type=frame&viewport=1128%2C1707%2C0.68&t=aJTadIpiJdg1EbTH-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=3363%3A12910\n\n",
      projectName: null,
    },
    {
      id: "1208834891506109",
      name: "feat(reskin): revamp footer",
      createdAt: "2024-11-25T06:08:54.591Z",
      notes:
        "https://app.asana.com/app/asana/-/get_asset?asset_id=1208834896159401\n\nhttps://www.figma.com/design/XIyq4o2EfEYq6Lrgt1T7NH/NTW-WEBSITE-2.O?node-id=380-3&node-type=canvas&t=ebK8f9gxzZyFjZ6G-0",
      projectName: "NTW | Archive",
    },
    {
      id: "1208834564665410",
      name: "fix(multicolumn): Section error ",
      createdAt: "2024-11-25T05:26:17.940Z",
      notes:
        "Task title:\nfix(multicolumn):Section error \n\nContact Person / Person that requested:\nAlex\n\nRequest type:\nBug Fix\n\nPriority:\nMedium (Important but not urgent)\n\nDetailed Description:\nthe Multicolumn block but when I add images they are taken up by blocks of red where the link button is seemingly extending?\n\nBusiness Impact:\nMedium (Some disruption or risk of sales loss)\n\n———————————————\nThis task was submitted through Client Request Submission\nhttps://form.asana.com/?k=rqVcfziJXwwji-4hMQQ1Kg&d=375643158116881",
      projectName: "Purdey - Kanban",
    },
    {
      id: "1208793870032231",
      name: "feat(text and icons): setup richtext section with icons section",
      createdAt: "2024-11-21T13:40:20.376Z",
      notes:
        "https://app.asana.com/app/asana/-/get_asset?asset_id=1209021328585509\n\n\n\nbehind the no\nOne of us is a pro athlete. The other works in luxury fashion. Our day jobs and sponsors have us keeping our identities on the down-low, but nothing's stopping us from launching. After a year of testing and perfecting, we're introducing the worl's first microplatic-free underwear. Soft, chafe-free, and built for you to move in, it's so comfortable you'll forget you're even wearing it.\nWEAR NO UNDERWEAR.",
      projectName: "NTW | Archive",
    },
    {
      id: "1208793870032230",
      name: "feat(NOunderwear):  setup image and text section",
      createdAt: "2024-11-21T13:39:26.826Z",
      notes:
        "Desktop:\n\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1209032239711308\n\n\nMobile:\n\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1209032239711310\n\n\n\n\nBlock settings:\n    image\n    richtext\n\nif one image takes whole width of page, if 2 iamges 50% etc\n\non mobile use a slider",
      projectName: "NTW | Archive",
    },
    {
      id: "1208793870032229",
      name: "feat(NOunderwear): setup USP section",
      createdAt: "2024-11-21T13:39:14.002Z",
      notes:
        "https://app.asana.com/app/asana/-/get_asset?asset_id=1209021328585492\n\n\n",
      projectName: "NTW | Archive",
    },
    {
      id: "1208793870032225",
      name: "feat(NOunderwear):  setup hero ",
      createdAt: "2024-11-21T13:35:44.813Z",
      notes: "",
      projectName: "NTW | Archive",
    },
    {
      id: "1208815630796969",
      name: "fix(F&F):PDP",
      createdAt: "2024-11-21T10:00:47.266Z",
      notes:
        "https://friendsandfamily.purdey.com/products/mens-felgate-coat\n \nWe’ve got two cylinder beige blobs under the product images, and then the thumbnails are not neatly displayed.\n \nCan you take a look ASAP please?",
      projectName: "Purdey - Kanban",
    },
    {
      id: "1208808899683505",
      name: "demo(PDP): 50/50 split on images for Mokka",
      createdAt: "2024-11-20T14:19:28.847Z",
      notes:
        "Jacques Malan to set up dev product for 50/50 to send to maria@notwoways.com- on Mokka",
      projectName: "NTW | Archive",
    },
    {
      id: "1208786433296548",
      name: "investigation(F&F -size guide): Size guide not displaying",
      createdAt: "2024-11-18T11:19:23.463Z",
      notes:
        "Task title:\ninvestigation(F&F -size guide): Size guide not displaying\n\nContact Person / Person that requested:\nAlex\n\nRequest type:\nBug Fix\n\nPriority:\nMedium (Important but not urgent)\n\nDetailed Description:\nThe size guides should be visible on these two products: CMO018 (Men's Felgate Coat) and CMS142 (Men's Tartan Shirt).\n\n \n\nIf you could check and let me know that would be great. Thanks!\n\nBusiness Impact:\nMedium (Some disruption or risk of sales loss)\n\n———————————————\nThis task was submitted through Client Request Submission\nhttps://form.asana.com/?k=rqVcfziJXwwji-4hMQQ1Kg&d=375643158116881",
      projectName: "Purdey - Kanban",
    },
    {
      id: "1208774814092417",
      name: "fix(show dropdown options on enquire form )",
      createdAt: "2024-11-15T11:52:53.098Z",
      notes:
        "Issue Description\nOn the new bespoke gun pages, hovering mouse in the salutation field, an option is only shown when hovered upon \n\nWhat steps will reproduce the problem?\n    Navigate to the new bespoke gun pages i.e. \n        https://www.purdey.com/products/sidelock-over-and-under-1\n        https://www.purdey.com/products/damascus-gun\n        https://www.purdey.com/products/sidelock-hammer-ejector\n    Scroll down to the enquire form \n    Click the salutation field \n    Observe as the options are not shown\n\nWhat is the expected output? \nA different text colour to be used for the options to appear \n\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1208774814092419\n\n\n",
      projectName: "Purdey - Kanban",
    },
    {
      id: "1208753165350376",
      name: "Ref(HP sections): update section for new layout",
      createdAt: "2024-11-14T14:44:03.516Z",
      notes:
        "This is very last minute, but we’re redesigning the homepage for the gift guide and need a few updates implemented. Could you let me know if these can be done ASAP?\n\nImage Blocks:\n\n    Mobile-Suitable Image Option (Priority): Could we add the option to include a separate, mobile-suitable image for better control over appearance on mobile vs. desktop?\n    CTA Button Position: Could we enable an option to centralise the CTA button so it sits below the title?\n\nBanner Image:\n\n    Text and CTA Alignment: We’d like the flexibility to choose the alignment of the title, text, and CTA button (left or right). Currently, only the title can be aligned. I’ve attached examples from Ralph Lauren as a reference.\nIf possible, could we please prioritise the mobile feature for image blocks?",
      projectName: null,
    },
    {
      id: "1208764354334613",
      name: "NO Underwear",
      createdAt: "2024-11-14T12:35:20.584Z",
      notes:
        "Task title:\nNO Underwear\n\nContact Person / Person that requested:\nMaria\n\nRequest type:\nNew Feature\n\nPriority:\nHigh (Urgent or critical)\n\nDetailed Description:\nAs mentioned in yesterday’s catch-up, we’re gearing up to start a new ecomm project. We’re working on an underwear/activewear brand called NO (no underwear, NO to stand for naked obsession..).\nThe plan for this is to be independent from notwoways and hopefully evolve into its own thing.\nWe’d like to start building the site asap as we’re keen to start a lead-gen campaign for this as soon as we have the assets ready.\nI have the wireframes ready for you on this Figma board. - https://www.figma.com/design/xVVm9QuYWGKSoifD476RWl/NO-Underwear-site?node-id=0-1&t=rGomLeZJkucowqcC-1\nA small note is that the final imagery is still being edited, so it’d be great to build this with the placeholders provided and facilitate an easy swap once all is ready.\nThe key right now is getting the layout and dimensions right.\nA few notes:\n- Really important to get the imagery above the fold, and USPs right below\n- We’re quite precious about logo and email capture box placement in its two variations (you’ll see there are two homepage options - let’s please build both at this early stage)\n- I’ve dropped the original files of everything I’ve used on Figma. I like the crops I’ve used on the final boards, but it’s more important that the ratios are correct across desktop and mobile, so please feel free to place imagery in blocks accordingly\nTech stack:\n- The domain wearing.no is under the same GoDaddy account you have access to\n- I’ve just set-up a Shopify store (domain already integrated). I have two admin seats free, who should I give access to? - https://wearing.no/password\n- Sendlane for email/SMS. I can either add admins, or give you a full access API key. There’s only one list in the account currently - we’ll be collecting emails there. - https://www.sendlane.com/\n\n\n\nBusiness Impact:\nHigh (Critical issue impacting sales or client relationship)\n\n———————————————\nThis task was submitted through Client Request Submission\nhttps://form.asana.com/?k=9oZt0gqwx7v2JgswfBnXxg&d=375643158116881",
      projectName: "NTW | Archive",
    },
    {
      id: "1208735540790148",
      name: "feat(gun pages): comments after review",
      createdAt: "2024-11-11T08:54:43.741Z",
      notes: "https://app.asana.com/0/0/1208432905372155/f\n\n\n",
      projectName: "Purdey - Kanban",
    },
    {
      id: "1208696112859047",
      name: "Feat(Mystery Box): Setup Mystery Box LP",
      createdAt: "2024-11-05T05:20:02.327Z",
      notes:
        "Task title:\nMystery Box campaign for Christmas\n\nContact Person / Person that requested:\nMaria\n\nRequest type:\nNew Feature\n\nPriority:\nHigh (Urgent or critical)\n\nDetailed Description:\nwe're doing a Mystery Box campaign for Christmas and would like to start collecting emails for the activation asap.\nI've got some landing page wireframes for you here: https://www.canva.com/design/DAGVh0YPHvA/7P0UtmjLZ96gqYMYrlANxg/view?utm_content=DAGVh0YPHvA&utm_campaign=designshare&utm_medium=link&utm_source=editor\nAssets I've used here: https://we.tl/t-MAhawgAD4G\nThis will need optimising for desktop + mob.\n\nBusiness Impact:\nHigh (Critical issue impacting sales or client relationship)\n\nExpected Outcome or Deliverables:\nNew landing page \n\n———————————————\nThis task was submitted through Client Request Submission\nhttps://form.asana.com/?k=9oZt0gqwx7v2JgswfBnXxg&d=375643158116881",
      projectName: "NTW | Archive",
    },
    {
      id: "1208684671459515",
      name: "feat(big-red-button): restyle home page and add copy",
      createdAt: "2024-11-04T07:54:21.180Z",
      notes:
        "    Restyle the home page to match the attached PDF\n        Implement the new logo\n        Update copy\n        Update the style of the page\n        Update the style of the form\n        Add a static leaderboard showing only the top 10 on the right hand side, use existing components\n        Make the checkboxes required\n        Update the form submitted state to show the access code. Use a hardcoded code for now\n",
      projectName: "NTW | Archive",
    },
    {
      id: "1208659138480774",
      name: "Meeting",
      createdAt: "2024-10-30T13:00:18.440Z",
      notes: "",
      projectName: null,
    },
    {
      id: "1208646346472382",
      name: "feat(multi column text blocks): setup multi column text blocks",
      createdAt: "2024-10-29T06:02:28.055Z",
      notes:
        'Task title:\nURGENT - PUR - Page Request \n\nContact Person / Person that requested:\nAbi\n\nRequest type:\nNew Feature\n\nPriority:\nHigh (Urgent or critical)\n\nDetailed Description:\n\n\nSorry to be a total pain. But can you duplicate the recipe blog block – but have it as free text? I don’t want to link the duplicated block to recipes.\n\nBasically I need to create this landing page (attached) and the block for directions/heading etc is created with the look and feel of the recipe block.\n\n\n\nThis page needs to go live on 30th btw! I just realised this afternoon as I tried to build it.\n\n\nBusiness Impact:\nHigh (Critical issue impacting sales or client relationship)\n\nExpected Outcome or Deliverables:\nNew page\n\nDeadline/Time Sensitivity:\nOct 29, 2024 – Oct 29, 2024\n\n———————————————\nThis task was submitted through Client Request Submission\nhttps://form.asana.com/?k=rqVcfziJXwwji-4hMQQ1Kg&d=375643158116881\n\n\n----------------------------------------\n\n----------------------------------------\n\n----------------------------------------\n\n----------------------------------------\n\n----------------------------------------\n\n\nCreate a new section "multi column text blocks"\n\nSection settings:\n    Heading\n        richtext\n    color scheme setting\n    margin top and bottom\n    checkbox for line between blocks (true by default)\n\nBlock settings (max of 4 blocks)\n    Heading\n        richtext\n    Body copy\n        richtext\n\nIf 1 block is setup then it takes 100% width if 2 blocks then 50 -50 etc to max of 4 blocks',
      projectName: "Purdey - Kanban",
    },
    {
      id: "1208634574081571",
      name: "Feat(Wishlist general): General functionality",
      createdAt: "2024-10-28T12:43:26.872Z",
      notes:
        "  - Users can add or remove items from the wishlist without logging in.\n  - Require login if the user wants to save their wishlist.\n\ncustomer view\n\n    page to view items in wishlish\n        can add to cart from this page\n\nAdmin view\n\n    View products added to wishlist\n        can go deeper and view variants added\n\nAPP\n\n    use app blocks\n        PDP\n        header\n        wishlist page\n",
      projectName: "Wishlist app",
    },
    {
      id: "1208587158489174",
      name: "Feat(site reskin): updates after feedback",
      createdAt: "2024-10-22T13:44:24.127Z",
      notes:
        "https://www.figma.com/design/XIyq4o2EfEYq6Lrgt1T7NH/NTW-WEBSITE-2.O?node-id=12-13&node-type=frame&t=kdWSzwm1mc4EXj5H-0\n\nhttps://docs.google.com/document/d/1s2M67ZkSmRXZofFuVM2zvmKG49Iw2ReBze9Y_p0TAuI/edit?tab=t.0\n\n\n\n",
      projectName: "NTW | Archive",
    },
    {
      id: "1208596883891413",
      name: "PUR - SF Form On PDP",
      createdAt: "2024-10-22T05:03:52.429Z",
      notes:
        "Task title:\nPUR - SF Form On PDP\n\nContact Person / Person that requested:\nAbi\n\nRequest type:\nContent Update\n\nPriority:\nMedium (Important but not urgent)\n\nDetailed Description:\nCan we put the general SalesForce enquiry form on PDPs instead of the link to the booking tool below?\n\nPriority 4 please.\n\nBusiness Impact:\nMedium (Some disruption or risk of sales loss)\n\nExpected Outcome or Deliverables:\nForm link update \n\nDeadline/Time Sensitivity:\nOct 29, 2024 – Oct 29, 2024\n\n———————————————\nThis task was submitted through Client Request Submission\nhttps://form.asana.com/?k=rqVcfziJXwwji-4hMQQ1Kg&d=375643158116881\n\n                                                        \n\nUpdate PDP contact us button to open a popup of this signup form\nhttps://shop.purdey.com/pages/contact-us\n\nThis is contact-us-form webcomponent\nimplement as a popup",
      projectName: "Purdey - Kanban",
    },
    {
      id: "1208575510115681",
      name: "feat(the-ten-count): home page",
      createdAt: "2024-10-18T09:38:15.589Z",
      notes: "",
      projectName: "NTW | Archive",
    },
    {
      id: "1208568048904450",
      name: "feat(the-ten-count): leaderboard",
      createdAt: "2024-10-17T13:38:18.682Z",
      notes:
        "Adjust the leaderboard page to respect sort based on the distanceToTarget column, instead of the score itself, to represent the actual closest score\n\nAlso, pagination needs to be reworked to mimic the standard ShadCN pagination linked here: https://ui.shadcn.com/docs/components/pagination",
      projectName: "NTW | Archive",
    },
    {
      id: "1208556106265016",
      name: "fix(image appearance) : images are being cut at the top ",
      createdAt: "2024-10-16T13:13:37.089Z",
      notes:
        "Issue Description\nImages do not appear fully \n\nWhat steps will reproduce the problem?\n    Navigate to the theme editor \n    Add the triple image section \n    Add the blocks and populate the settings\n    Save and preview \n    Navigate to the section on preview \n    Observe as the images are cut at the top \n\nWhat is the expected output? \nImages to not be cut \n\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1208556106265018\n\n\n",
      projectName: "Purdey - Kanban",
    },
    {
      id: "1208538043172524",
      name: "feat(blue-print-page): setup image grid section",
      createdAt: "2024-10-16T11:24:04.740Z",
      notes:
        "Create a new section - image grid block\n\nsection settings:\n    margin top and bottom \n        range 0 - 100px\n\nblock settings:\n    image\n    richtext \n    select to position the text either left, center of right bottom of image\n    text should be links\n\nUP to 4 blocks can be added\nSo if 1 block the image spans the entire with of container\nif 2 block then image spans 50 - 50 including the space between blocks and so on\n\n\n\nMOBILE:\n    images should stack on mobile\n\n",
      projectName: "NTW | Archive",
    },
    {
      id: "1208539859588667",
      name: "feat(blueprint-landing-page): setup new page",
      createdAt: "2024-10-14T10:22:35.625Z",
      notes:
        "Task title:\nBlue pint landing page\n\nContact Person / Person that requested:\nMaria\n\nRequest type:\nNew Feature\n\nPriority:\nHigh (Urgent or critical)\n\nDetailed Description:\nI've got a landing page brief for a shoe we're releasing soon here: https://www.figma.com/design/rlwbVyY64jMwc257iCspfE/Blueprint?node-id=0-1&node-type=canvas&t=RjKvSaZTcXj8I62I-0\nI've kept the layout the Exact same as the Mokka one (except the press quote - there is only one, instead of three).\nWe'd like for this to be live this week; let me know if too ambitious, with all assets provided. I can give you a Klaviyo embed for the black box in the middle and all assets today.\nOn a different note, how are we looking on the HKE landing page amends?\n\nBusiness Impact:\nHigh (Critical issue impacting sales or client relationship)\n\nExpected Outcome or Deliverables:\nNew landing page \n\nDeadline/Time Sensitivity:\nOct 18, 2024 – Oct 18, 2024\n\n———————————————\nThis task was submitted through Client Request Submission\nhttps://form.asana.com/?k=9oZt0gqwx7v2JgswfBnXxg&d=375643158116881",
      projectName: "NTW | Archive",
    },
    {
      id: "1208515635935629",
      name: "fix(pdp): add back notify when available on PDP ",
      createdAt: "2024-10-10T12:21:07.070Z",
      notes: "",
      projectName: "NTW | Archive",
    },
    {
      id: "1208511181819581",
      name: 'Chore(automation): Automate adding and removing "Availability" metafields',
      createdAt: "2024-10-09T15:06:01.613Z",
      notes:
        "TO support with the theme reskin, a metafield was added to products to indicate availability at a product level rather than variant level.\n\nThe metafield probably needs to be auto-changed based on a product update event through Shopify Flow",
      projectName: "NTW | Archive",
    },
    {
      id: "1208501065734362",
      name: "fix(site reskin): updates after review",
      createdAt: "2024-10-09T12:59:03.586Z",
      notes: "",
      projectName: "NTW | Archive",
    },
    {
      id: "1208509418495241",
      name: "Feat(drawer): Setup free shipping indicator in cart",
      createdAt: "2024-10-09T11:05:23.650Z",
      notes:
        "Task title:\nShipping on Cart (drawer) \n\nContact Person / Person that requested:\nMaria\n\nRequest type:\nNew Feature\n\nPriority:\nMedium (Important but not urgent)\n\nDetailed Description:\nOn the cart conversation - dropping some favourite examples below.\nI would love to have the bar at the top (You're X£ away from free shipping).\n+ suggested product cards for the Cap and Socks (link below:\nBlack socks: https://www.notwoways.com/products/no-socks\nWhite socks: https://www.notwoways.com/products/no-socks-white\nCap: https://www.notwoways.com/products/no-cap-black\nIf they qualify for free shipping already, they should get a 'Congratulations, you get free shipping' bar instead, but would love to still keep the product carousel at the bottom. This should be dynamic, so it doesn't clash with what's in their basket.\nI believe @Rich M has set some free shipping thresholds yesterday, let  me know if you can find these or need us to send them over please! Ty\n\nBusiness Impact:\nMedium (Some disruption or risk of sales loss)\n\nExpected Outcome or Deliverables:\nFree shipping to be displayed with bar \n\nDeadline/Time Sensitivity:\nOct 10, 2024 – Oct 11, 2024\n\n———————————————\nThis task was submitted through Client Request Submission\nhttps://form.asana.com/?k=9oZt0gqwx7v2JgswfBnXxg&d=375643158116881\n\nmin spend for free shipping is £130\n\nTHEME SETTING for shipping threshold",
      projectName: "NTW | Archive",
    },
    {
      id: "1208488858596013",
      name: "Fix(re-skin): update additional pages",
      createdAt: "2024-10-08T06:52:52.462Z",
      notes: "",
      projectName: "NTW | Archive",
    },
    {
      id: "1208444081927427",
      name: "feat(HKE lp): setup new page",
      createdAt: "2024-10-03T07:59:45.040Z",
      notes:
        "https://www.figma.com/design/IjsRVAufSXMxT0arFDpIBK/HKE-LANDING-PAGE?node-id=0-1&node-type=canvas&t=VzgY0HAcpdIngR1z-0\n\n\nhttps://we.tl/t-KRdPW13wmj",
      projectName: "NTW | Archive",
    },
    {
      id: "1208444081927422",
      name: "feat(theme updates): - PHASE 2- Reskin the Website -  ",
      createdAt: "2024-10-02T12:19:15.664Z",
      notes: "",
      projectName: "NTW | Archive",
    },
    {
      id: "1208432905372160",
      name: "feat(live chat): implement Shopify live chat  ",
      createdAt: "2024-10-01T14:27:28.087Z",
      notes:
        "Shopify Inbox app\n\nScribes:\n    Customer:\nhttps://scribehow.com/shared/How_to_use_Shopify_live_chat_as_a_customer__Do5Ey5YtT9y4frkCX1XyGQ\n    Admin:\nhttps://scribehow.com/shared/Customising_Shopify_Live_Chat_as_an_Admin__olkPKmWFQYulzDFp44Kmhw",
      projectName: "Purdey - Kanban",
    },
    {
      id: "1208432905372155",
      name: "feat(gun pages): rebuild bespoke gun pages ",
      createdAt: "2024-10-01T14:24:52.724Z",
      notes: "Design input required \n\nestimate completion time 4 days",
      projectName: "Purdey - Kanban",
    },
    {
      id: "1208432261807838",
      name: "feat(theme-reskin): build new image section",
      createdAt: "2024-09-30T12:56:04.935Z",
      notes:
        "\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1208432261807843\n\n\nSetup new multi row image section\n\nSection settings:\npadding top and bottom: 0 - 100px\n\nblock settings:\neach block contains 2 x image pickers",
      projectName: "NTW | Archive",
    },
    {
      id: "1208432261807826",
      name: "feat(theme-reskin): update how arrows are shown for more products",
      createdAt: "2024-09-30T12:47:20.725Z",
      notes:
        "https://app.asana.com/app/asana/-/get_asset?asset_id=1208432261807829\n\n\nOn featured Featured collection section add a setting to have the arrows on the side, with no indication of amount of slides\n\nExpectation:\nSlide arrows layout:\nbelow slides | on sides of slides\n\nsomething like below\n\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1208432261807831\n\n\n\n",
      projectName: "NTW | Archive",
    },
    {
      id: "1208396857723923",
      name: "feat(theme-reskin): build new footer",
      createdAt: "2024-09-25T07:13:23.661Z",
      notes:
        "HELP\nTrack your Order\nFAQs\nCustomer Services\n\nABOUT\nOrigins\nArchive\n\nBORING\nTerms & Conditions\nBored? Watch this",
      projectName: "NTW | Archive",
    },
    {
      id: "1208396857723921",
      name: "feat(theme-reskin): re-style product page",
      createdAt: "2024-09-25T07:11:24.933Z",
      notes:
        "https://app.asana.com/app/asana/-/get_asset?asset_id=1208432261807847\n\n\n\n",
      projectName: "NTW | Archive",
    },
    {
      id: "1208375018609144",
      name: "feat(theme updates): Reskin the Website for Retail Launch",
      createdAt: "2024-09-25T06:00:33.258Z",
      notes:
        "Task: Reskin the Website for Retail Launch\n\n\n    Review and Analyze Annotated PDF\n    Execute Homepage and Product Page Design\n    Apply Design to Other Pages\n\nThe core sites we are emulating here are https://uk.representclo.com/, https://axelarigato.com/ and https://fearofgod.com/\n\n",
      projectName: "NTW | Archive",
    },
    {
      id: "1208358339831758",
      name: "Chore(Remove links): Remove loyalty functionality on account page",
      createdAt: "2024-09-20T08:58:01.567Z",
      notes: "",
      projectName: "NTW | Archive",
    },
    {
      id: "1208328702335639",
      name: "Fix slider component",
      createdAt: "2024-09-19T06:29:56.659Z",
      notes:
        "Slider is broken, items not arranged in slider.\n\n\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1208328702335645\n\n\n\n",
      projectName: "Purdey - Kanban",
    },
    {
      id: "1208328654616349",
      name: "ref(mokka landing page improvements)",
      createdAt: "2024-09-18T13:22:41.900Z",
      notes:
        "follow up on this task: https://app.asana.com/0/1207453505969671/1208290669635038/f\n\nNotes below:\nDesktop version\n    Quite a lot of white space at the top. I've attached a shorter image to use.\n    Font colour is different to the Figma one, HEX code #E0D0B7\n    Please move email capture box lower (currently crammed under the header)\n    The image is slightly blurry for me - was it compressed in any way?\n    Press section is still on central; there needs to be more space between 'FRESH OFF THE PRESS' and the quotes themselves. NICE logo is larger than the others. Logos aren't aligned\n    Can ticker tape move continuously, not glitch + restart? Let me know if you need it longer\n    Add space top + bottom of WHAT'S INSIDE\n    Box image is blurry - let me know if you need another\n    Product section - please align text as per Figma (to take up the full space and be larger in size)\n    Add space top + bottom of RATED BY THE NTW community header\n\nMobile version\n    Header is really crammed, doesn't look like the new image (which has a lot more space at the top)\n    Make text slightly smaller so it's not quite as edge to edge\n    Email box needs to bee smaller and further from the shoes\n    FRESH OFF THE PRESS needs to be smaller\n    Same note on ticker tape - it glitches and restarts, can it run smoothly?\n    WHAT'S INSIDE needs to be slightly smaller and have more space top + bottom\n    2nd product image in the carousel is smaller when the rest\n",
      projectName: "NTW | Archive",
    },
    {
      id: "1208328702335625",
      name: "feat(page template): Setup video content page template",
      createdAt: "2024-09-17T10:50:25.006Z",
      notes:
        "Setup a new template that is noindexed that will show 12 videos.\nVideos will be hosted on youtube\nUsing the video section we have to display the videos",
      projectName: "Purdey - Kanban",
    },
    {
      id: "1208314883632512",
      name: "fix(slideshow): fix heading settings not being respected",
      createdAt: "2024-09-16T06:33:38.300Z",
      notes:
        'Issue Description\nOne of the settings does not seem to work as intended, and the other shows "missing translation..."\n\nWhat steps will reproduce the problem?\n    Navigate to the theme editor \n    On the Slideshow section, click any of the Slide blocks \n    Navigate to the Heading Size dropdown \n    Select the Extra large setting (observe as the setting does not adjust the heading according the description)\n    Observe as the heading size below extra large shows "missing translation"\n\n\nWhat is the expected output? \n\nThe Extra large setting should adjust the heading accordingly \nThe relevant size should be shown instead of "missing translation..."\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1208314883632516\n\n\n',
      projectName: "Purdey - Kanban",
    },
    {
      id: "1208303372318228",
      name: "Community reviews",
      createdAt: "2024-09-13T12:55:10.944Z",
      notes:
        "https://app.asana.com/app/asana/-/get_asset?asset_id=1208303372318235\n\n\nCreate a new section - community reviews\nThis should use blocks to add a review\n\neach block should have the following settings\n    image picker\n    rich text for the copy\n    url link for image to link to socials\n",
      projectName: "NTW | Archive",
    },
    {
      id: "1208303372318223",
      name: "Product preview with text",
      createdAt: "2024-09-13T12:48:32.640Z",
      notes:
        "https://app.asana.com/app/asana/-/get_asset?asset_id=1208303372318225\n\n\nSetup a new section - product preview with text\nThis section can use the slider setup we currently have on PDP pages does not need to look like image above\n\nsettings required\n    Product selector for what product images to show\n    Rich text box to copy\n    range for margin top and bottom\n",
      projectName: "NTW | Archive",
    },
    {
      id: "1208303372318218",
      name: "Ticker tape",
      createdAt: "2024-09-13T12:46:27.710Z",
      notes:
        "https://app.asana.com/app/asana/-/get_asset?asset_id=1208303372318220\n\nWe should be able to use the marquee section to do this",
      projectName: "NTW | Archive",
    },
    {
      id: "1208303372318199",
      name: " Setup press section",
      createdAt: "2024-09-13T11:42:05.314Z",
      notes:
        "Setup a new section - press section\n\nUse blocks to setup the following\neach block required settings:\n    rich text area for text\n    image picker for logo\n    range setting for margin top and bottom ( 0 - 60 px)\n",
      projectName: "NTW | Archive",
    },
    {
      id: "1208290669635038",
      name: "Feat(new page): landing page for Mokka ",
      createdAt: "2024-09-13T05:41:37.829Z",
      notes:
        "We would like to create an additional landing page for https://www.notwoways.com/products/mokka (not currently live on our site). Since we'll be using this for lead gen ads, we want to try an even more aggressive approach when it comes to optimising for conversion.\nI've mocked up the page here: https://www.figma.com/design/ML9DcOBhqm0BOq3KhlLAXO/MOKKA-LANDING-PAGE?node-id=0-1&t=2PfpObgqXQld1HC8-1\nAll the assets I've used are on this link: https://we.tl/t-nQGSQ3XYyy\nA couple of notes:\n    Email capture box at the top - how do we do this? I usually use a Klaviyo embed but these can only go in a body of text from my knowledge. Can you help us embed over an image? LMK if you need the piece of code from the form itself/any other help from me.\n    Can the black ticker tape be dynamic from mobile (i.e. move from left to right)\n    As with Syzygy - if we can, at some point, have a video of someone reviewing/styling pop up on the page, let me know and I can give you content for this\n\nTIME ESTIMATE:  6 - 8 hours",
      projectName: "NTW | Archive",
    },
    {
      id: "1208290946865737",
      name: "fix(triple-image-block): fix cta alignment ",
      createdAt: "2024-09-12T09:24:24.026Z",
      notes:
        "There’s also an issue with the triple image block as the CTA’s don’t sit correctly under each image!",
      projectName: "Purdey - Kanban",
    },
    {
      id: "1208292587078880",
      name: "investigation(theme): this theme is currently missing and team would like to see what is still viewable ",
      createdAt: "2024-09-12T09:02:16.630Z",
      notes:
        "There is a theme within which I think is no longer there. I don't know whether it's been written over or deleted - undoubtedly before Bitcube's involvement.\n\nIt contained a lot of custom HTML for splash pages, and some interesting functionality the business would probably want to retain.\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1208292587078884\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1208292587078886\n\n\nThe theme was created in April 2023 and looked like the attached. I might be missing something really obvious here, but just in case your team can help to investigate this I thought I'd raise it as a ticket. There's quite a bit of pricey dev work in there somewhere.",
      projectName: "NTW | Archive",
    },
    {
      id: "1208278941575895",
      name: "Fix(Mobile video section settings)",
      createdAt: "2024-09-11T07:21:25.827Z",
      notes:
        "Issue Description\n\n    When increasing the video aspect ratio for mobile the heading and button appearance also changes (1st attached video file)\n    There is horizontal scrolling present when the aspect ration is above 50% (2nd attached video file)\n    When the video Heading is populated, it has a white background which does not look great (see attached image for reference) \n\nWhat steps will reproduce the problem?\nPoint 1 & 2\n    Open the theme editor and add the video section\n    And and customize the following blocks\n        Heading block \n        Buttons block \n    Select the video section, add video URL for mobile \n    Increase the aspect ration\n    Save changes and preview\n    Observe the appearance of the Heading and button on the section \n    For point 2, scroll horizontally on the section to observe the horizontal scrolling \n\nWhat is the expected output? \n\n    Should the the heading and button have a fixed font size even though the aspect ratio is changed? \n    Horizontal scrolling should not be present \n    Should the heading use the functionality of the transparent background ?\n\n\n\n\n\n\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1208278941575897\n\n\n",
      projectName: "Purdey - Kanban",
    },
    {
      id: "1208278941575890",
      name: "Fix(Desktop video section settings)",
      createdAt: "2024-09-11T06:30:54.823Z",
      notes:
        "Issue Description\n    When the CTA link setting in the video section is populated, this results in the video to not appear when the settings are saved (only the heading and buttons blocks appear over the next section if added)\n    The video heading does not appear on desktop even though set \n\nWhat steps will reproduce the problem?\n    Open the theme editor and add the video section \n    And and customize the following blocks \n        Heading block \n        Buttons block \n    Select the video section, add a video URL for desktop \n    Navigate to the CTA settings\n    Add a CTA label \n    Add a CTA link \n    Save changes and preview\n    Observe as the video is hidden and only the heading and buttons appear \n\nPoint 2\n    Open the theme editor \n    Select the video section \n    Populate the video heading setting \n    Save change and preview \n    Observe as the heading is not shown \n\nWhat is the expected output? \nThe video should still appear even when the CTA link has been added \n\nPoint 1\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1208278941575894\n\n\n\nPoint 2\n\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1208278941575903\n\n\n",
      projectName: "Purdey - Kanban",
    },
    {
      id: "1208259578170161",
      name: "feat(image-grid): introduce new image grid section ",
      createdAt: "2024-09-10T09:44:43.244Z",
      notes:
        "Create a new section - image grid block\n\nsection settings:\n    margin top and bottom \n        range 0 - 100px\n\nblock settings:\n    image\n    richtext \n    select to position the text either left, center of right bottom of image\n    text should be links\n\nUP to 4 blocks can be added\nSo if 1 block the image spans the entire with of container\nif 2 block then image spans 50 - 50 including the space between blocks and so on\n\n\n\nMOBILE:\n    images should stack on mobile\n\n",
      projectName: "Purdey - Kanban",
    },
    {
      id: "1208269245163049",
      name: "feat(loyalty-hero-banner): adjust hero image based on logged in state",
      createdAt: "2024-09-10T08:00:29.220Z",
      notes: "",
      projectName: "NTW | Archive",
    },
    {
      id: "1208269245163047",
      name: "feat(loyalty-account): add loyalty tier and points on account page",
      createdAt: "2024-09-10T07:57:11.088Z",
      notes:
        "The request places this content between the order history and account section. this can be accomplished by adding support for app blocks within the section\n\nhttps://shopify.dev/docs/storefronts/themes/architecture/blocks/app-blocks",
      projectName: "NTW | Archive",
    },
    {
      id: "1208269245163046",
      name: "feat(loyalty-cart): add a link on the cart page to create an account",
      createdAt: "2024-09-10T07:56:45.416Z",
      notes: "",
      projectName: "NTW | Archive",
    },
    {
      id: "1208268947680897",
      name: "Feat/Low stock badges",
      createdAt: "2024-09-10T07:10:32.755Z",
      notes:
        "Add a badge (similar to the 'Sold out' badge) showing 'Only x left' to PDPs if a product variant's stock is equal or less than 10. \n\nAdd a 'stock level' product variant metafield that overrides the 'Only x left'. For example adding the number 99 to a variant should then show 'Only 99 left'.",
      projectName: "NTW | Archive",
    },
    {
      id: "1208244837508884",
      name: "feat(social-links): add support for a third set of social links within theme settings",
      createdAt: "2024-09-06T11:15:25.707Z",
      notes:
        "Can we get the sporting agency social accounts linked in the footer like with our other accounts\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1208244837508888\n\n\n",
      projectName: "Purdey - Kanban",
    },
    {
      id: "1208226350067552",
      name: "fix(region-selector): remove dark colouring of region options",
      createdAt: "2024-09-04T13:29:13.768Z",
      notes:
        "Issue Description\nA dark overlay is shown when hovering over the countries in the region selector\n\nWhat steps will reproduce the problem?\n    Navigate to https://shop.purdey.com/\n    Click the region selector \n    Hover over the countries \n    Observe the black overlay that appears \n\nWhat is the expected output? \nCould a white/semi-transparent overlay be used instead as before \n\n\n\n\n",
      projectName: "Purdey - Kanban",
    },
    {
      id: "1208220296179409",
      name: "feat(video-banner): add support for a mobile specific video",
      createdAt: "2024-09-04T07:08:07.984Z",
      notes:
        "To allow for a better mobile experience, add a second video option for mobile only.\n\nThis video should have options for aspect ratio of:\n    Landscape — current\n    Square — Square - default for mobile\n    Portrait — calc(100dvh - header height) tall\n",
      projectName: "Purdey - Kanban",
    },
    {
      id: "1208204620564625",
      name: "Update google favicon so it isn't warped.",
      createdAt: "2024-09-02T13:12:20.597Z",
      notes: "",
      projectName: "NTW | Archive",
    },
    {
      id: "1208190818006339",
      name: "feat: Integrate user reviews in to product landing page (low lift test on Syzergy product page)",
      createdAt: "2024-08-30T13:07:48.783Z",
      notes:
        'Context\nOur paid marketing agency are pushing for us to improve the product landing page to improve conversion here. We have healthy CTR but low on page conversion (we are testing ads for the Syzergy shoe only at this time).\nI believe we already have a ticket open in this sprint to update this page but (given how important it seems) it felt like a good idea to lean in a little on this happening asap. Can you take a look at the below?\n\nStage One:\nUpdate Landing Page Image:\n        Change the landing page image to include a quote. This task is currently in progress.\nQuote for the image:\n"Desired chunky aesthetic without any of the unwelcome heaviness or bulk"\n\nwe should have Waldenburg on all the pages. Looks like it\'s at 105 compression too.\n\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1208203082667596\n\n\n\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1208210520645507\n\n\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1208210520645509\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1208210520645511\n\n\nIntegrate Consumer Reviews:\n        Work with Maria to integrate consumer reviews on the landing page. This can be done either by integrating Trustpilot reviews or hard-coding the reviews for testing purposes. Prioritize whichever method is quickest and looks best.\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1208203082667594\n\n\nStage Two (Conditional):\n    If Stage One is successful, implement functionality to display "only x left" on specific sizes. Ideally, if the visitor has visited before, this message should appear next to the same size they viewed previously.\n\nhttps://qaasu13as0byxcv3-44214550691.shopifypreview.com/products/syzygy-2',
      projectName: "NTW | Archive",
    },
    {
      id: "1208168375653228",
      name: "Adjust the carousel to prevent lazy loading on the first image.",
      createdAt: "2024-08-30T10:15:12.794Z",
      notes: "",
      projectName: "NTW | Archive",
    },
    {
      id: "1208168375653223",
      name: "create a doc in shared folder indicating where to updates this",
      createdAt: "2024-08-30T10:09:19.106Z",
      notes: "",
      projectName: "NoTwoWays",
    },
    {
      id: "1208188618716679",
      name: "feat(hero-banner): fix button styles on the hero banner so that the button style effects take effect",
      createdAt: "2024-08-30T07:09:55.486Z",
      notes: "",
      projectName: "Purdey - Kanban",
    },
    {
      id: "1208188618716675",
      name: "feat(video): add colour scheme setting to the video section",
      createdAt: "2024-08-30T07:08:33.635Z",
      notes: "",
      projectName: "Purdey - Kanban",
    },
    {
      id: "1208179315086978",
      name: "Site Navigation - Logout Button",
      createdAt: "2024-08-29T14:03:34.467Z",
      notes:
        "    Task: Add a logout button to the desktop site.\n    Description: Ensure easy access to logout functionality.\n",
      projectName: "NTW | Archive",
    },
    {
      id: "1208179315086976",
      name: "User Login Experience",
      createdAt: "2024-08-29T14:03:33.394Z",
      notes:
        "    Task: Add a login button on the desktop version of the site.\n    Description: Improve user experience by providing a consistent login option.\n",
      projectName: "NTW | Archive",
    },
    {
      id: "1208179315086960",
      name: "Fix(console errors): Fix console error on PDP",
      createdAt: "2024-08-29T14:01:11.978Z",
      notes:
        'Task: Investigate and fix the console error related to a popup on the product page.\n\n<img src="Liquid error (sections/main-product line 829): invalid url input" ,="" width="100%," height="100%">',
      projectName: "NTW | Archive",
    },
    {
      id: "1208168375653216",
      name: "planning",
      createdAt: "2024-08-29T10:03:13.150Z",
      notes: "",
      projectName: "NoTwoWays",
    },
    {
      id: "1208145861176769",
      name: "feature(landing page): new page ",
      createdAt: "2024-08-28T12:33:17.183Z",
      notes: "    \n",
      projectName: "NTW | Archive",
    },
    {
      id: "1208106408593825",
      name: "feat(loyalty): iterate loyalty functionality",
      createdAt: "2024-08-20T19:43:03.440Z",
      notes:
        "Review the attached document and address the requests within: \nhttps://docs.google.com/presentation/d/13_G6F8Sxz8K7qYrH8wSXuXdlG52efPB9jCtNV0DpZ6E/edit#slide=id.g2fc08236cce_0_38",
      projectName: "NTW | Archive",
    },
    {
      id: "1208102852853552",
      name: "fix(product-overlay): remove random text on product image",
      createdAt: "2024-08-20T14:29:36.274Z",
      notes:
        "https://app.asana.com/app/asana/-/get_asset?asset_id=1208102852853555\n\n\n",
      projectName: "NTW | Archive",
    },
    {
      id: "1208100661857511",
      name: "fix(login-registration): adjust login and registration analytics to read the email address via javascript",
      createdAt: "2024-08-20T13:25:00.630Z",
      notes:
        "The analytics events triggered on login and registration use liquid to obtain the customer's email address. This value would not exist at this time and should rather be obtained by reading the data in the form.\n\nSince these values are not used in any active reporting, remove the events:\nhttps://github.com/bitcubesystems/purdey-shopify-theme/blob/4377ee2be0f9025776958d7b5f9ad8b2a5f902be/theme/templates/customers/register.liquid#L158\n\nhttps://github.com/bitcubesystems/purdey-shopify-theme/blob/4377ee2be0f9025776958d7b5f9ad8b2a5f902be/theme/templates/customers/login.liquid#L133\n\n",
      projectName: "Purdey - Kanban",
    },
    {
      id: "1208098995202534",
      name: "fix/bugsnag-errors",
      createdAt: "2024-08-20T09:09:40.245Z",
      notes:
        "TypeError - Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element'.\nhttps://app.bugsnag.com/ecommerce-3/purdey-shopify-theme/errors/66629d21fb44920008bf3386?filters[error.status]=open&filters[event.since]=30d&event_id=66c4432900f87eb593810000\n\nTypeError \n/en-us/products/clk207\nundefined is not an object (evaluating 'window.variantStrings.soldOut')\nhttps://app.bugsnag.com/ecommerce-3/purdey-shopify-theme/errors/66c3a9167fce022d1c3ce5bc?filters[error.status]=open&filters[event.since]=30d&event_id=66c3a91600f87f2d9f1c0000",
      projectName: "Purdey - Kanban",
    },
    {
      id: "1208089567444743",
      name: "Reviews",
      createdAt: "2024-08-19T12:02:26.318Z",
      notes: "",
      projectName: "NoTwoWays",
    },
    {
      id: "1208089567444741",
      name: "Standup",
      createdAt: "2024-08-19T12:02:25.462Z",
      notes: "",
      projectName: "NoTwoWays",
    },
    {
      id: "1208089567444739",
      name: "Meetings",
      createdAt: "2024-08-19T12:02:23.633Z",
      notes: "",
      projectName: "NoTwoWays",
    },
    {
      id: "1207996794859887",
      name: "feat(personalisation): charms",
      createdAt: "2024-08-08T12:00:18.734Z",
      notes:
        'When a product has a "Charms" metaobject, show an option to "Personalize" as an outlined button. This should be a block that can be added to the main Product section\n\nWhen the metaobject is present, render a drawer that is triggered by the "Personalize" button\n\nThe drawer should show the options for personalization based on the metaobject\n\nThe amount of charm options available should come from the meta object setting for charms available\n\nFor each charm available, render all charm options within the set. Each option \n\nSettings:\n    Personalization drawer header\n    Personalization drawer subheading\n\nNotes:\n    Ignore the preview image\n\n\n',
      projectName: "Tateossian | Shopify 2.0",
    },
    {
      id: "1207963904547197",
      name: "Standup",
      createdAt: "2024-08-02T10:32:47.027Z",
      notes: "",
      projectName: null,
    },
    {
      id: "1207950611031077",
      name: "feat(megamenu): switch from hover based menu opening on desktop to click based interactions",
      createdAt: "2024-08-02T07:05:53.945Z",
      notes: "",
      projectName: "Purdey - Kanban",
    },
    {
      id: "1207959652877782",
      name: "Fix(Cannot read properties of null (reading 'addEventListener'))",
      createdAt: "2024-08-02T06:25:41.076Z",
      notes: "",
      projectName: "Purdey - Kanban",
    },
    {
      id: "1207939714903376",
      name: "chore(cleanup): remove ua analytics",
      createdAt: "2024-07-31T07:26:21.353Z",
      notes:
        "Now that we've migrated to GA4, we have no more need for the implementation of Universal Analytics. Please remove all of this source code",
      projectName: "Purdey - Kanban",
    },
    {
      id: "1207929974924345",
      name: "Fix(wrapped menu items on mobile)",
      createdAt: "2024-07-30T06:58:50.151Z",
      notes:
        "Issue Description\nThe menu items on the mega menu are wrapped on mobile \n\nWhat steps will reproduce the problem?\n    Navigate to https://shop.purdey.com or https://purdey.com \n    Click the burger menu \n    Click the links \n    Observe as the menu items are wrapped \n\nWhat is the expected output? \nThe menu items should not be wrapped \n\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1207929974924348\n\n\n",
      projectName: "Purdey - Backlog | Issues",
    },
    {
      id: "1207903793975165",
      name: "Change product list to use Grid",
      createdAt: "2024-07-26T10:39:20.332Z",
      notes:
        "For the featured collection blocks, I suggest we do this:\n    Adjust the container of the collection grid to display: grid\n    Use the existing section settings for columns to define the column size\n    Use the metaobject we set up\n    Add settings for defining column span and row span\n    Adjust the setting for defining where the item is placed to rather give a specific column and row for both desktop and mobile\n    Use the settings from the metaobject to render the featured collection block\n\nBy doing this, you'll be able to set grid-row and grid-column to define placement, like this\n  grid-row: {{ metaobject row }} / span {{ metaobject row span }};\n  grid-column: {{ metaobject column }} / span {{ metaobject column span }};",
      projectName: "Tateossian | Shopify 2.0",
    },
    {
      id: "1207852016602023",
      name: "Potential bug. If you click through a link from the homepage and then hit the back button, the logo is full size and not the minimised scroll size.",
      createdAt: "2024-07-19T07:21:46.418Z",
      notes: "",
      projectName: "NTW | Archive",
    },
    {
      id: "1207846678860930",
      name: "the Origins page has a footer menu with social links that other pages don't have, can we please remove?",
      createdAt: "2024-07-18T15:34:49.444Z",
      notes: "",
      projectName: "NTW | Archive",
    },
    {
      id: "1207809664958691",
      name: "fix -PUR - Newsletter Sign Up",
      createdAt: "2024-07-16T10:06:04.711Z",
      notes:
        "Would you or Jacques be able to provide some context on the functionality of the newsletter pop-up?\n \nI’ve checked the CMS for shop.purdey and there is an Ometria form ID however the text in there doesn’t reflect the current pop-up.\n \n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1207809664958695\n\nDo you know there the current pop-up exists?\n\nWe need to update the look and feel of this pop-up to reflect the new sign up landing page below: https://www.purdey.com/pages/signup. Including the check boxes for the 3x pillars of the business.",
      projectName: "Purdey - Kanban",
    },
    {
      id: "1207809667266589",
      name: "Fix mega menu hover issue",
      createdAt: "2024-07-15T10:42:57.143Z",
      notes:
        "When hovering over main items in the mega menu, the submenu sometimes closes prematurely. \n\nhttps://www.loom.com/share/3bab03095b274274a9b6170d8976fa4d?sid=98395011-9cca-4669-a25d-0084c088ef2d\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1207809667266593\n\n\n",
      projectName: "Purdey - Kanban",
    },
    {
      id: "1207786967777732",
      name: "The homepage nav is glitching when it minimises the NO logo",
      createdAt: "2024-07-12T09:37:19.886Z",
      notes: "",
      projectName: "NTW | Archive",
    },
    {
      id: "1207778014346329",
      name: "feat(lead-forms): add PSA Salesforce Web to lead implementation",
      createdAt: "2024-07-10T13:53:17.926Z",
      notes:
        'All same as current Gun web to lead form \nMandatory: \n    First and Last name\n    Email\n    Summary (Displayed as Interest\nFew points\nGC country should bring the country code\nwebsite will capture the page url. \n\nPlease note Record Type for this form will be. \n\n<option value="0124J0000005fAd">RBSA Lead</option>\n\n\n',
      projectName: "Purdey - Kanban",
    },
    {
      id: "1207774182746878",
      name: "Change homepage hero to allow for images and videos",
      createdAt: "2024-07-10T09:32:08.392Z",
      notes:
        "    Change the homepage hero to allow for images and videos.\n    Allow for the colour of the links to be changed.\n",
      projectName: "NTW | Archive",
    },
    {
      id: "1207753411360302",
      name: "feat(knife-block-update)- Dynamic content ",
      createdAt: "2024-07-09T08:54:15.543Z",
      notes:
        "Quick question, is it possible to update the block below on PDP on all knife products?\n\n\n \n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1207753411360306\n\nWe would like it to say the below instead – only on knives:\n\nRegrettably, we are unable to ship knives internationally directly from the Purdey website. However, our team at the Purdey boutique can assist in coordinating shipping. If you have any questions or wish to make a purchase, please feel free to contact us.\n \nCould we get this done as a priority this week?",
      projectName: "Purdey - Kanban",
    },
    {
      id: "1207755647906070",
      name: "Editorial page follow ups",
      createdAt: "2024-07-08T10:37:49.850Z",
      notes:
        "    Add a control for controlling the intensity of the image overlay\n    Revisit vertical spacing around text\n",
      projectName: "Purdey - Kanban",
    },
    {
      id: "1207713554521221",
      name: "AW24 Editorial Section - Allow for only one image",
      createdAt: "2024-07-02T08:49:26.288Z",
      notes:
        "The editorial section should adjust accordingly if only one image is added, per the Figma designs.\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1207713554521225\n\n\n",
      projectName: "Purdey - Kanban",
    },
    {
      id: "1207700649427388",
      name: "AW24: Editorial Lookbook - Build the page",
      createdAt: "2024-07-01T14:12:48.069Z",
      notes:
        "https://www.figma.com/design/MVygMBRjMj0gGulGK0Aujr/Purdey-UX%2FUI-Designs?node-id=1664-243&t=44Rb0sYZhMQcJgDm-11\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1207700649427392\n\n\nBranch: aw24/base",
      projectName: "Purdey - Kanban",
    },
    {
      id: "1207684333851808",
      name: "fix(carousel): improve thumbnail border consistency",
      createdAt: "2024-06-28T07:33:14.441Z",
      notes:
        "Issue Description\n    Came across this issue when testing on this branch refactor/swiper-consistency\n    The thumbnail border on some thumbnails is thicker on other thumbnails \n    When navigating between the images using the thumbnail arrows some images get skipped \n    On mobile its just the thumbnail border size issue inconsistency\n\nWhat steps will reproduce the problem?\n    Navigate to any PDP \n        https://shop.purdey.com/products/mens-ridge-parka-jacket-in-tobacco-1?_pos=21&_sid=f3a8fe819&_ss=r and https://shop.purdey.com/products/purdey-london-6-paperweight-limited-edition?_pos=3&_sid=2cb9d12ec&_ss=r were used in this instance \n    Observe the thick thumbnail border on some thumbnails, and  a thin one on others\n    Click the arrows on the thumbnail section and observe as some images are being skipped \n\nWhat is the expected output? \n    There should be consistency on the weight/thickness of the thumbnail border \n    Images should not be skipped when clicking the arrows on the thumbnail section \n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1207684338242483\n\n\n\n\n",
      projectName: "Purdey - Kanban",
    },
    {
      id: "1207684333851806",
      name: "fix(carousel): update carousel counter when navigating between images",
      createdAt: "2024-06-28T07:23:57.166Z",
      notes:
        'Issue Description\n    Came across this issue when testing on this branch refactor/swiper-consistency\n    The counter on the product image carousel does not update \n    This occurs on other PDPs where the product has more than one image \n    On Desktop the counter updates when clicking the arrows, when swiping the counter no longer updates as expected \n\nWhat steps will reproduce the problem?\n    Navigate to https://shop.purdey.com/\n    Click the search icon and type "paperweight"\n    Click the "Limited Edition Purdey London 5 Paperweight" in the search results \n    Upon navigating to the PDP, scroll to the "Product image carousel" section \n    Scroll between the images\n    Observe as the number is not being updated when different images are shown \n\nWhat is the expected output? \nThe counter/number should update according the image that is shown \n\n',
      projectName: "Purdey - Kanban",
    },
    {
      id: "1207658025252142",
      name: "Meetings",
      createdAt: "2024-06-26T14:27:54.432Z",
      notes: "",
      projectName: "Tateossian | Shopify 2.0",
    },
    {
      id: "1207658025252140",
      name: "Standups",
      createdAt: "2024-06-26T14:27:49.942Z",
      notes: "",
      projectName: "Tateossian | Shopify 2.0",
    },
    {
      id: "1207647234574951",
      name: "Search function - not displaying searched words",
      createdAt: "2024-06-25T09:35:21.912Z",
      notes:
        "We have found a bug in the search function- it doesn’t display anything when you type something (search works). Please could this be fixed?\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1207647239514265\n\n\n",
      projectName: "Purdey - Kanban",
    },
    {
      id: "1207630116311765",
      name: "Can we please remove the notwoways.com button on the collection blocks on home page?\n",
      createdAt: "2024-06-21T07:04:17.178Z",
      notes:
        "https://app.asana.com/app/asana/-/get_asset?asset_id=1207630116311776\n\n\n",
      projectName: "NTW | Archive",
    },
    {
      id: "1207630116311761",
      name: "PDPs: photo selector a bit glitchy if you go back and forward through the images and try selecting them",
      createdAt: "2024-06-21T07:04:09.914Z",
      notes: "Remove hover based navigation overall",
      projectName: "NTW | Archive",
    },
    {
      id: "1207630116311759",
      name: "Collections Page: Words broken across lines",
      createdAt: "2024-06-21T07:04:09.548Z",
      notes: "",
      projectName: "NTW | Archive",
    },
    {
      id: "1207630116311757",
      name: "Banner text needs to be sped up a bit in mobile. I took a look and can see any speed increases currently impact both desktop and mobile",
      createdAt: "2024-06-21T07:04:08.334Z",
      notes: "",
      projectName: "NTW | Archive",
    },
    {
      id: "1207630116311755",
      name: "Home Page collection image full width banner needs a setting for mobile and another for desktop so we can upload 2 images to suit the diff aspect ratios",
      createdAt: "2024-06-21T07:04:07.934Z",
      notes: "",
      projectName: "NTW | Archive",
    },
    {
      id: "1207630116311753",
      name: "The footer menu has words broken across lines",
      createdAt: "2024-06-21T07:04:07.451Z",
      notes:
        "Set \n--font-heading-scale: 1.7;\nOn the footer on mobile\nRevert on desktop",
      projectName: "NTW | Archive",
    },
    {
      id: "1207630116311751",
      name: "In the mobile menu, can we please remove the region and currency at the bottom",
      createdAt: "2024-06-21T07:04:06.957Z",
      notes: "",
      projectName: "NTW | Archive",
    },
    {
      id: "1207630116311749",
      name: "nothing appears in the mobile menu when opened (burger menu at the top)",
      createdAt: "2024-06-21T07:04:01.207Z",
      notes: "",
      projectName: "NTW | Archive",
    },
    {
      id: "1207598289150842",
      name: "Aw24 - Editorial section",
      createdAt: "2024-06-18T08:00:13.783Z",
      notes:
        "https://www.figma.com/design/MVygMBRjMj0gGulGK0Aujr/Purdey-UX%2FUI-Designs?node-id=1903-243&t=9Q9EhjKFdnOolR0D-11\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1207598289150845\n\n\n",
      projectName: "Purdey - Kanban",
    },
    {
      id: "1207598289150840",
      name: "Shop the look - Allow to work on pages that aren't product pages",
      createdAt: "2024-06-18T07:43:47.694Z",
      notes:
        "This section does not work on pages that aren't product pages\n\nAdd a setting to choose a featured product\nIf the product is present, use that product instead\nThis needs to still work with the globally available product",
      projectName: "Purdey - Kanban",
    },
    {
      id: "1207598289150838",
      name: "Featured collection - Allow for slider functionality on desktop",
      createdAt: "2024-06-18T07:41:58.564Z",
      notes:
        "Add support for using the slider component on desktop on the featured collection section",
      projectName: "Purdey - Kanban",
    },
    {
      id: "1207571080027688",
      name: "Fix slider buttons on the product page",
      createdAt: "2024-06-14T07:38:09.944Z",
      notes: "",
      projectName: "NTW | Archive",
    },
    {
      id: "1207571080027685",
      name: "Add notify me when available forms to archive",
      createdAt: "2024-06-14T07:36:41.877Z",
      notes:
        '{%- if product.metafields.custom.coming_soon_signup_form -%}\n              <div\n                class="{{ product.metafields.custom.coming_soon_signup_form.value }} klaviyo-form"\n              ></div>\n            {% else %}\n              <!-- Existing button -->\n            {%- endif -%}',
      projectName: "NTW | Archive",
    },
    {
      id: "1207560698479490",
      name: "Apply new button style for featured collection navigation",
      createdAt: "2024-06-13T11:15:40.357Z",
      notes:
        "https://www.figma.com/design/FyzfVmN9DzHZ3lICZnef2h/NTW---Website-Designs?node-id=2389-4504&t=zvzyYTc33HJ7xrpw-11\n\nApply a maximum with using the page-width class\n\nThe footsteps at the bottom are not a hard requirement. Just a nice to have\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1207560698479494\n\n\n",
      projectName: "NTW | Archive",
    },
    {
      id: "1207550553062696",
      name: "Archive timeline block",
      createdAt: "2024-06-12T12:17:15.995Z",
      notes:
        "Extend the timeline block\n\nSupport for showing images\n    below the title and CTA on mobile\n    Next to the image on the right on desktop\n\nAdd\n    Settings\n        Rich text override - If blank use the the product's description\n        Primary image override - If blank use the first image in the product's media\n        Secondary image override - If blank use the second image in the product's media\n        Button label - If blank use \"Shop now\"\n        Button destination - If blank use product URL\n",
      projectName: "NTW | Archive",
    },
    {
      id: "1207547662279755",
      name: "Good Energy - Collaboration",
      createdAt: "2024-06-12T07:57:24.104Z",
      notes: "",
      projectName: "GE - Backlog",
    },
    {
      id: "1207547662276656",
      name: "Good Energy - Meetings",
      createdAt: "2024-06-12T07:27:27.209Z",
      notes: "",
      projectName: "GE - Backlog",
    },
    {
      id: "1207538751495395",
      name: '"Find your NO" section',
      createdAt: "2024-06-11T12:35:39.443Z",
      notes:
        "Implement the find your no section per the designs\nhttps://www.figma.com/design/FyzfVmN9DzHZ3lICZnef2h/NTW---Website-Designs?node-id=1-973&t=tkDwWEYCDkThh1Jh-11\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1207538751495398\n\n\n",
      projectName: "NTW | Archive",
    },
    {
      id: "1207537374665515",
      name: "Extend the collage banner section to allow for video",
      createdAt: "2024-06-11T07:23:59.050Z",
      notes:
        "Add a new video block to the collage banner with settings for\n    A video\n    Rich Text\n\nhttps://www.figma.com/design/FyzfVmN9DzHZ3lICZnef2h/NTW---Website-Designs?node-id=1-973&t=euzV1yYcxFNMyNCd-11\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1207537374665519\n\n\n",
      projectName: "NTW | Archive",
    },
    {
      id: "1207537374665513",
      name: "Header does not respond properly on origins page",
      createdAt: "2024-06-11T07:23:50.506Z",
      notes: "",
      projectName: "NTW | Archive",
    },
    {
      id: "1207352973664980",
      name: "Sprint planning",
      createdAt: "2024-05-20T10:06:35.824Z",
      notes: "",
      projectName: "Designworks Collective - Archive",
    },
    {
      id: "1207352973664935",
      name: "Standups",
      createdAt: "2024-05-19T19:27:09.684Z",
      notes: "",
      projectName: "Designworks Collective - Archive",
    },
    {
      id: "1207352973664581",
      name: "chore(gh): audit skip accessibility",
      createdAt: "2024-05-19T18:41:18.018Z",
      notes: "",
      projectName: "Designworks Collective - Archive",
    },
    {
      id: "1207352973664569",
      name: "chore(all): audit form accessibility",
      createdAt: "2024-05-19T18:40:49.557Z",
      notes:
        "A customer should be able to fill out all forms using only a keybaord.\n\nValidate:\n    Registration forms\n    Login forms\n    Contact forms\n",
      projectName: "Designworks Collective - Archive",
    },
    {
      id: "1207352973664533",
      name: "chore(all): audit keyboard navigation",
      createdAt: "2024-05-19T18:39:50.887Z",
      notes:
        "Functionally, a user should be able to functionally use the site using a keyboard only.\n\nA customer should be able to add to cart, view their cart, and check out using their keyboard\nFor example:\n    From the homepage\n    Navigate to a collection page\n    Navigate to a specific product\n    Add that product to cart\n    View their cart\n    Check out\n\nA customer should be able to use the navigation bar with their keyboard, including submenus\n\nA customer should be able to navigate carousels\n\n",
      projectName: "Designworks Collective - Archive",
    },
    {
      id: "1207352973664525",
      name: "chore(pw): audit text resizing",
      createdAt: "2024-05-19T18:39:40.827Z",
      notes:
        "When applying font size scaling through browser accessibility settings, a user should be able to use all functionality on the site without elements overflowing due to larger text. \n\nIf any changes are required, note them down on this task so they can be addressed separately.",
      projectName: "Designworks Collective - Archive",
    },
    {
      id: "1207352973664521",
      name: "chore(gh): audit text resizing",
      createdAt: "2024-05-19T18:39:26.673Z",
      notes:
        "When applying font size scaling through browser accessibility settings, a user should be able to use all functionality on the site without elements overflowing due to larger text. \n\nIf any changes are required, note them down on this task so they can be addressed separately.",
      projectName: "Designworks Collective - Archive",
    },
    {
      id: "1207352973664513",
      name: "chore(pw): audit color contrast",
      createdAt: "2024-05-19T18:39:17.303Z",
      notes: "",
      projectName: "Designworks Collective - Archive",
    },
    {
      id: "1207352973664509",
      name: "chore(gh): audit color contrast",
      createdAt: "2024-05-19T18:38:21.207Z",
      notes: "",
      projectName: "Designworks Collective - Archive",
    },
    {
      id: "1207352973664473",
      name: "spike(gh): evaluate content hierarchy on key pages",
      createdAt: "2024-05-19T18:32:02.844Z",
      notes:
        "Homepage, Collectiopn pages, and Product pages should follow proper content hierarchy\n\nhttps://chromewebstore.google.com/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi?hl=en",
      projectName: "Designworks Collective - Archive",
    },
    {
      id: "1207244698628692",
      name: "Shopify Theme Dev - Certification: Liquid Storefronts for Theme Developers",
      createdAt: "2024-05-06T08:17:38.905Z",
      notes:
        "Work through this certification\nhttps://academy.shopify.com/path/liquid-storefronts-for-theme-developers\n\nThis certification is a paid certification. Bitcube will pay for this, provided you pass. If you fail, the cost of this certification will need to be re-payed",
      projectName: "Luke Onboarding",
    },
    {
      id: "1207244736439728",
      name: "Shopify Theme Dev - Improving performance",
      createdAt: "2024-05-06T08:17:37.098Z",
      notes:
        "The purpose of this task is to learn how to build theme sections with performance in mind. This is a key part of what we do day to day\n\nFollow the tutorial below:\nhttps://workshops.shopify.dev/workshops/online-store-performance#0",
      projectName: "Luke Onboarding",
    },
    {
      id: "1207244734419280",
      name: "Shopify Theme Dev - Creating a video section",
      createdAt: "2024-05-06T08:17:36.116Z",
      notes:
        "The purpose of this task is to teach you about working with external and Shopify hosted video files\n\nComplete the tutorial below:\nhttps://workshops.shopify.dev/workshops/video-section#0",
      projectName: "Luke Onboarding",
    },
    {
      id: "1207244551675727",
      name: "Shopify Theme Dev - Creating a custom section",
      createdAt: "2024-05-06T08:17:31.126Z",
      notes:
        "The purpose of this task is to create an existing section that utilizes Javascript\n\nComplete the tutorial below:\nhttps://workshops.shopify.dev/workshops/themes-timer-section#0",
      projectName: "Luke Onboarding",
    },
    {
      id: "1207244551675725",
      name: "Shopify Theme Dev - Getting started with Liquid and Theme Sections",
      createdAt: "2024-05-06T08:17:30.276Z",
      notes:
        "The purpose of this task is to get you familiar with how to use Liquid to customize and improve theme sections, preview these changes, and push changes to a live Shopify store\n\nhttps://workshops.shopify.dev/workshops/learning-liquid#0",
      projectName: "Luke Onboarding",
    },
    {
      id: "1207244551675723",
      name: "Shopify Theme Dev - Getting started",
      createdAt: "2024-05-06T08:17:29.439Z",
      notes:
        "The purpose of this task is to get you familiar with a typical Shopify theme development environment\n\nWork through the tutorial below:\nhttps://workshops.shopify.dev/workshops/prerequisites#0\n\nA partners account has already been created, and you will be given access to this",
      projectName: "Luke Onboarding",
    },
    {
      id: "1207244551675721",
      name: "Getting started - The Official Shopify Tutorial for Merchants ",
      createdAt: "2024-05-06T08:17:28.579Z",
      notes:
        "Watch through this video: https://www.youtube.com/watch?v=ferhOYx1NMo\n\nThe purpose of this video is to show you how Shopify works from a Merchants perspective",
      projectName: "Luke Onboarding",
    },
    {
      id: "1207244551675719",
      name: "Getting started - Introduction to Shopify",
      createdAt: "2024-05-06T08:17:27.662Z",
      notes:
        "Look through this documentation\nhttps://help.shopify.com/en/manual/intro-to-shopify\n\nThe purpose of this is to give you a baseline of information for working with Shopify. This may seem trivial to you, but is a key starting point we share with our clients as well",
      projectName: "Luke Onboarding",
    },
    {
      id: "1207195874472299",
      name: "Task 3",
      createdAt: "2024-04-29T14:35:10.958Z",
      notes: "This is a placeholder task created for you",
      projectName: null,
    },
    {
      id: "1207195874472297",
      name: "Task 2",
      createdAt: "2024-04-29T14:35:10.633Z",
      notes: "This is a placeholder task created for you",
      projectName: null,
    },
    {
      id: "1207195874472295",
      name: "Task 1",
      createdAt: "2024-04-29T14:35:10.218Z",
      notes: "This is a placeholder task created for you",
      projectName: null,
    },
    {
      id: "1207129979718599",
      name: "PUR - Web Performance",
      createdAt: "2024-04-22T13:31:13.224Z",
      notes:
        "https://app.asana.com/app/asana/-/get_asset?asset_id=1207129979718615\n\n\n",
      projectName: "Purdey - Kanban",
    },
    {
      id: "1206587975979445",
      name: "fix(shop-the-look): fix shop-the-look functionality on mobile",
      createdAt: "2024-02-13T10:38:34.674Z",
      notes:
        "Issue Description\nOn mobile when the shop the look section is on other pages beside the PDP the UX is not as expected i.e.\n    the carousel is not functioning (cannot scroll) even the appearance is different \n    the quick shop is not functioning \n    the burger menu is not functioning \n    in some instances delayed navigation to the PDPs on the section \n\nWhat steps will reproduce the problem?\n    Navigate to https://purdey1814.myshopify.com?preview_theme_id=127894487113 where the issue can be reproduced \n    Navigate to the https://shop.purdey.com/collections/view-all-new-arrivals (page that is not PDP where the section has been added )on mobile \n    Click the quick shop\n    Click the burger menu\n    Click the carousel \n    Observe as all are not responsive \n\nWhat is the expected output? \nThe following functionality...\n    Carousel\n    Quick shop \n    Burger menu \nshould remain working and responsive on any page where the shop the look section has been added \n\n\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1206587975979447\n\n\n",
      projectName: "Purdey - Kanban",
    },
    {
      id: "1206551753555682",
      name: "fix(404): resolve a route for a page navigating to a 404",
      createdAt: "2024-02-08T06:20:34.312Z",
      notes:
        "Issue Description\nPages redirect to 404 when trying to navigate to the PDP \n\nWhat steps will reproduce the problem?\n    Navigate to https://www.purdey.com/products/purdey-bolt-action-rifle-31175?pr_prod_strat=e5_desc&pr_rec_id=ed38ed919&pr_rec_pid=7102859280589&pr_ref_pid=7102858592461&pr_seq=uniform\n    Click the first three products (open on a new tab) as shown on the attached image \n    Observe as they redirect to 404s on the https://shop.purdey.com site \n\n\nWhat is the expected output? \nThe page should not redirect to 404 \n\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=1206551753555687\n\n\n",
      projectName: "Purdey - Backlog | Issues",
    },
  ],
};

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
      id: "1212239419700093",
      name: "Standup",
      createdAt: "2025-12-01T12:37:40.794Z",
      notes: "",
      projectName: "DCSA | WO002",
    },
    {
      id: "1212239419700092",
      name: "Meetings",
      createdAt: "2025-12-01T12:37:40.103Z",
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
      id: "1211596437011124",
      name: "Deployments",
      createdAt: "2025-10-09T07:47:27.684Z",
      notes: "",
      projectName: "DCSA | Backlog",
    },
    {
      id: "1211596437011119",
      name: "Reviews",
      createdAt: "2025-10-09T07:47:27.526Z",
      notes: "",
      projectName: "DCSA | Backlog",
    },
    {
      id: "1211596437011114",
      name: "Standup",
      createdAt: "2025-10-09T07:47:27.357Z",
      notes: "",
      projectName: "DCSA | Backlog",
    },
    {
      id: "1211596437011109",
      name: "Meetings",
      createdAt: "2025-10-09T07:47:27.177Z",
      notes: "",
      projectName: "DCSA | Backlog",
    },
    {
      id: "1211596184093561",
      name: "Time Tracking - Luke",
      createdAt: "2025-10-09T07:47:25.962Z",
      notes: "",
      projectName: "DCSA | Backlog",
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
