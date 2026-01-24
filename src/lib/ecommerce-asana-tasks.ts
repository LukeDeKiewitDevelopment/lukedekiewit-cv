import type { SanitisedAsanaData } from "./engineering-asana-tasks";

export const ecommerceAsanaTasks: SanitisedAsanaData = {
  data: [
    {
      id: "1209699933931781",
      name: "fix(finish-options): empty properties adding to cart",
      createdAt: "2025-03-18T08:39:55.728Z",
      notes:
        "Description:\nOnline orders are being received where clients have submitted measurements, but these measurements are not appearing on the order. Example order:\n🔗 https://admin.shopify.com/store/*********/orders/11675806368124#event225588494532988\nFindings So Far:\n    Testing shows that selecting 'finish options' without adding measurements prevents the product from being added to the cart.\n    This suggests that the measurement information is lost between checkout and confirmed order.\n    Likely linked to the previously raised issue by Taj, where the incorrect measurement metric was being displayed in the order form.\nAction Items:\n✅ Investigate why measurement data is missing from confirmed orders.\n✅ Verify if this issue is linked to the previously reported measurement metric issue.\n✅ Provide updates on the cause and fix ASAP, as this directly impacts order fulfillment.\nAdditional Contact:\n    Hemison (CC'd) – Processes online orders and will share further examples or relevant details if needed.\n",
      projectName: "*********",
    },
    {
      id: "1209709830729330",
      name: 'Ref(booking form): add salesforce form to "book an appointment"',
      createdAt: "2025-03-18T07:30:34.804Z",
      notes:
        "https://app.asana.com/0/0/*********\n\nhttps://www.*********.com/pages/contact\n\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=*********",
      projectName: "*********",
    },

    {
      id: "1209676661960672",
      name: " Improve product grid layout for Mobile UX",
      createdAt: "2025-03-14T10:36:00.868Z",
      notes:
        "Adjust text layout:\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=*********",
      projectName: "*********",
    },
    {
      id: "1209676661959594",
      name: "Mobile Search Bar Improvements ",
      createdAt: "2025-03-14T06:37:32.456Z",
      notes:
        "Extend search bar to full width in menu drawer:\n\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=*********",
      projectName: "*********",
    },
    {
      id: "1209676661959591",
      name: "Remove Elements from the Menu Drawer",
      createdAt: "2025-03-14T06:33:08.934Z",
      notes:
        " remove distracting elements (e.g., social media icons and redundant text like “2025, *********,).\n\nKeep Sign In (Underlined in Blue):\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=*********",
      projectName: "*********",
    },
    {
      id: "1209676661959588",
      name: "Ensure consistent spacing in dropdown menus for visual consistency.",
      createdAt: "2025-03-14T06:13:58.609Z",
      notes: "",
      projectName: "*********",
    },
    {
      id: "1209676661959587",
      name: "Fix image alignment issue in the “Gifts and More” collection",
      createdAt: "2025-03-14T06:13:55.231Z",
      notes:
        "Issue: Images are misaligned\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=********* be like below:\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=*********",
      projectName: "*********",
    },
    {
      id: "1209676661959584",
      name: " Website Fixes & Enhancements",
      createdAt: "2025-03-14T06:13:23.676Z",
      notes: "See the email from ********* for details on what needs fixing.",
      projectName: "*********",
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
        "When using nvda and navigating through the pages, then the question isnt read to the customer, so i.e. in the do you own or rent , the header/question is not read and only the buttons are read to the end customer. This can cause confusion as they might not know what page they're at. \n\nLooking into our portal , seems like NVDA is reading the tab, so i.e. in this one it'd read \"Terms and conditions, good energy\"\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=********* into heat pump, the tab is always the same, so that wouldnt be useful. ",
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
      projectName: "*********",
    },
    {
      id: "1209568210402144",
      name: "Feat(Landing Page): ********* Landing Page",
      createdAt: "2025-03-05T05:21:57.016Z",
      notes:
        "Description:\n    Wireframes for the landing page are available here:  https://www.canva.com/design/DAGgzN9ey6Q/GDhj0I9CDqTxC4LkOhafyA/view?utm_content=DAGgzN9ey6Q&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h23727df045\n    Imagery used for the design is in [this folder] (https://drive.google.com/drive/u/0/folders/1dGRcGa27HYZ2UIaa8Anv5CD4TX2opc3_). Let us know if any resizing is needed.\n    Product featured at the bottom: Syzygy – current PDP [HERE] (https://www.notwoways.com/products/syzygy-2).\n    Klaviyo List ID: XWKmTX [Linked Here] (https://www.klaviyo.com/login?next=/list/XWKmTX).\n    Capture SMS: Please explore options for adding SMS capture on the page.\n    Deadline: The goal is to have this rolling by Thursday evening (4:30 pm our time) so we can start linking ads.\n    The template follows the JME lead-gen page, but let us know if any block adjustments are needed for faster execution.\n",
      projectName: "*********",
    },
    {
      id: "1209567871874957",
      name: "Anchor error message",
      createdAt: "2025-03-04T10:30:17.006Z",
      notes:
        'Revert Branch: https://github.com/bitcubesystems/*********/pull/516\nFeature Branch: https://github.com/bitcubesystems/*********/pull/499\n\nFound when testing https://app.asana.com/1/375643158116881/project/1205765637665888/task/1208446412892370\n\nWhen the user clicks on next without selecting any option, then an error message should be displayed at the top, with an error message that anchors to the corresponding question.\n\n\nStep\nError Message\nAnchor\nHeat pump quote\nOk\nWhen clicking on "Enter a valid address" then the focus goes quite low. The customer does not see anymore the question. (See pic)\nReceive a copy of your estimate\nEmail error message\nCorresponding anchor working as expected\nDo you own or rent this property?\nOk\nWhen clicking on "Select an option" the focus goes really low. The customer does not see the question and half the buttons (see pic)\n\n\nWhat type of property is it?\nOk\nOk\nHow many bedrooms does the property have?\nOk\nQuestion cant be seen \nHow many storeys does your property have?\nThe focus is not given to the red error message at the top (see pic)\nStoreys question cant be seen\nBasement ok\nWhen was the property built?\nOk\nOk\nWhat is your main source of fuel for your heating?\nOk\nOk\nDo you have a hot water cylinder?\nOk\nWhen clicking on "Select an option" the focus goes really low. The customer does not see the question and half the buttons\nWhat type of heating system do you currently have?oK\n\n\nWhen clicking on "Select an option" the focus goes really low. The customer does not see the question and half the buttons\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=*********',
      projectName: "GE - Backlog",
    },
    {
      id: "1209534694992899",
      name: "Fix Search Page Filtering Issue",
      createdAt: "2025-02-28T11:42:00.004Z",
      notes:
        "🔍 Task Description:\nCurrently, when searching for a product, the old filters are still appearing on the results pages instead of the new ones implemented by *********.\n🛠️ Steps to Resolve:\n    Investigate why the old filters are still appearing on search results.\n    Ensure that the new filtering system is correctly applied to search pages.\n    Test various search terms to confirm the fix.\n✅ Deliverables:\n    Updated search filters reflecting the new filtering system.\n    Confirmation that search filters are consistent across all search pages.\n",
      projectName: "*********",
    },
    {
      id: "1209534694992895",
      name: " Ensure 'Coming Soon' Label Displays Correctly Until Product Launch",
      createdAt: "2025-02-28T10:20:40.977Z",
      notes:
        "🔍 Task Description:\nThe product M1 HKE Ultimate by JME ( https://www.notwoways.com/products/m1-hke-ultimate-by-jme ) should remain labeled as 'Coming Soon' until launch at 5 PM. Currently, after reverting stock to zero, the button shows 'Sold Out' instead of 'Coming Soon' despite the metafield being set to 'True'.\n🛠️ Steps to Resolve:\n    Investigate why the product is displaying 'Sold Out' instead of 'Coming Soon' after stock adjustments.\n    Ensure that the product remains as 'Coming Soon' until launch time.\n    Confirm that the Klaviyo embed removal does not interfere with the expected behavior.\n    Provide a fix or workaround before 5 PM to ensure a smooth transition.\n✅ Deliverables:\n    Product correctly displays 'Coming Soon' until launch.\n    Clear instructions on managing similar stock transitions in the future.\n⏳ Status: Pending Investigation & Fix",
      projectName: "*********",
    },
    {
      id: "1209506964965460",
      name: "feat(order-tracking): demo Shopify native order tracking functionality",
      createdAt: "2025-02-26T15:11:51.063Z",
      notes: "",
      projectName: "*********",
    },
    {
      id: "1209497055787215",
      name: "fix(shoppable-lookbook): Formatting ",
      createdAt: "2025-02-26T12:22:07.902Z",
      notes:
        "    On mobile, the feature isn’t formatting properly - I've attached a screenshot for reference.\n    Could we also implement an option to add a third content box in the row? \nLet me know when we can expect these fixes.\n\n\n",
      projectName: "*********",
    },

    {
      id: "1209497055787210",
      name: "Fix(Finish options): Broken Link ",
      createdAt: "2025-02-26T10:04:00.484Z",
      notes:
        "Currently 'How do I measure my...' on the finish options pop-out doesn't link anywhere:\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=********* we either link this to the size-guide page, or remove the text altogether if that's not possible?",
      projectName: "*********",
    },
    {
      id: "1209506528084009",
      name: "Update Expandable Section Icons",
      createdAt: "2025-02-26T09:11:19.374Z",
      notes:
        "Redesign UI elements by replacing icons (e.g., “>”) with clearer ones (e.g., “+”) to improve expand/collapse interactions.\n\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=*********",
      projectName: "*********",
    },
    {
      id: "1209506528084006",
      name: "Simplify Pricing Display",
      createdAt: "2025-02-26T08:59:36.702Z",
      notes:
        "Redesign the pricing layout by removing duplicate pricing elements and using clear, contrasting styles to highlight discounts and savings.\n\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=*********",
      projectName: "*********",
    },
    {
      id: "1209506527639101",
      name: "Adjust Checkout Button Placement",
      createdAt: "2025-02-26T08:59:01.231Z",
      notes:
        "reposition the checkout button to ensure it is prominent and accessible on both desktop and mobile views.\n\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=*********",
      projectName: "*********",
    },
    {
      id: "1209506527639096",
      name: "Cart Drawer/Page Layout & Design",
      createdAt: "2025-02-26T08:56:40.206Z",
      notes: "",
      projectName: "*********",
    },
    {
      id: "1209506527639089",
      name: "Navigation - Mobile Menu Drawer",
      createdAt: "2025-02-26T08:45:57.871Z",
      notes: "",
      projectName: "*********",
    },
    {
      id: "1209506527639082",
      name: "UX Product Display Pages",
      createdAt: "2025-02-26T08:40:57.217Z",
      notes: "",
      projectName: "*********",
    },
    {
      id: "1209493724421481",
      name: "Fix(size selector):Button formatting ",
      createdAt: "2025-02-25T06:06:24.217Z",
      notes:
        "Please can you take a look at this:\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=*********",
      projectName: "*********",
    },
    {
      id: "1209480725147849",
      name: "Fix(PDP):unit of measurement",
      createdAt: "2025-02-24T08:20:54.996Z",
      notes:
        "The jacket/trouser alteration length on garments is being displayed a (CM) default - when it should be shown as inches. Please can you investigate why this is happening and rectify?\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=*********",
      projectName: "*********",
    },
    {
      id: "1209453547495062",
      name: "Investigation(MTO): MTO not showing on this product",
      createdAt: "2025-02-21T12:49:11.088Z",
      notes:
        "Hey ********* and *********,\n\nhttps://www.*********.com/products/*********?variant=47776718291259\n\nI've taken a look and I can't see why MTO is now showing- all the correct tags and settings seem to be applied.\n\nMany thanks",
      projectName: "*********",
    },
    {
      id: "1209432252118750",
      name: "chore(navigation): ensure only in use navigation lists are on admin",
      createdAt: "2025-02-19T10:54:58.670Z",
      notes: "https://app.asana.com/app/asana/-/get_asset?asset_id=*********",
      projectName: "*********",
    },
    {
      id: "1209362047686798",
      name: "admin(returns portal):notification flow/setting",
      createdAt: "2025-02-11T12:41:30.768Z",
      notes:
        "Client returns portal notifications via portal (*********@*********.com)\n\n    Use shopify flow to send email and notify that there is an return request that should be given attention to\n",
      projectName: "*********",
    },
    {
      id: "1209362170826582",
      name: "Fix(Personalisation drawer): should default to product image if metafield is not set",
      createdAt: "2025-02-10T09:17:12.282Z",
      notes: "",
      projectName: "*********",
    },
    {
      id: "1209301947742502",
      name: "feat(hero):Image Block CTA",
      createdAt: "2025-02-05T06:28:00.600Z",
      notes:
        "Image Block CTA Button\nIs there a way we can have an option to have the CTA button underneath the title? See examples attached.\n\n\n----------------------------------------\n\n----------------------------------------\n\n----------------------------------------\n\n\nUpdate section Image block - V2\n    Add option for mobile image\n    Update the content part to just have one text part (richtext)\n    Add options the button below it \n        text\n        url link\n        button style\n    Add setting to have content be \n        top\n        middle\n    Add setting to have button\n        below text\n        bottom of section\n",
      projectName: "*********",
    },
    {
      id: "1209301937521788",
      name: "Refactor(booking form): Remove box border",
      createdAt: "2025-02-04T12:39:14.253Z",
      notes:
        "https://www.*********.com/pages/*********\n\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=*********    remove border around form\n",
      projectName: "*********",
    },
    {
      id: "1209301937521786",
      name: "Fix(inline navigation bar):remove grey background ",
      createdAt: "2025-02-04T12:39:12.862Z",
      notes:
        "https://www.*********.com/pages/*********\n\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=*********    Update (inline-navigation) section to remove the grey background\n",
      projectName: "*********",
    },
    {
      id: "1209290671972217",
      name: "Fix(cart): fix styling issues relating to Clerk recommendations",
      createdAt: "2025-02-03T05:57:19.349Z",
      notes:
        "1) Fix styling on cart page where adding a new section breaks page.\nEnsure that styling regarding the main layout of the page is per section.\n    Seems like flex styling is on body and possibly inline styles\n\n\ncontext https://app.asana.com/0/1202537898929105/1209290671972214\n\n2) get the custom liquid currently on the cart page that has code from https://clerk.io to work\n\n\n",
      projectName: "*********",
    },
    {
      id: "1209247995756952",
      name: "Fix(image block): Block Margins - Image Blocks ",
      createdAt: "2025-01-30T10:57:35.785Z",
      notes:
        "*********\n12:45 (12 minutes ago)\n\n\n\n\nto *********, me, *********\n\nHi ********* / *********\n\nI am trying to edit block margins within an image block, and the spacing doesn't change when I increase or decrease this. Would you please be able to look into this? See the reference attached. \n\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=*********",
      projectName: "*********",
    },

    {
      id: "1209268410280237",
      name: "Footer links should not be all caps",
      createdAt: "2025-01-29T08:21:25.683Z",
      notes: "",
      projectName: "*********",
    },
    {
      id: "1209268408381477",
      name: "Added social media links don't display properly",
      createdAt: "2025-01-29T08:14:53.054Z",
      notes: "https://app.asana.com/app/asana/-/get_asset?asset_id=*********",
      projectName: "*********",
    },
    {
      id: "1209261142376825",
      name: "Fix(Bear PDPs): Add support for custom personalisation text",
      createdAt: "2025-01-28T11:26:02.686Z",
      notes:
        'The Notebook personalisation message is appearing on our ********* products:\nhttps://www.*********.com/products/*********?variant=44574444060987\nAlthough these are also personalised products, the messaging should differ, as the same rules do not apply.\n"********* bears can be personalised with a name added on a bespoke label, affixed to the foot of your bear. Either choose to add your recipient\'s name, or give your ********* bear their very own name."\n\n\n',
      projectName: "*********",
    },
    {
      id: "1209259391479001",
      name: "investigation(Product):Unpublished products appearing",
      createdAt: "2025-01-28T06:53:26.867Z",
      notes:
        "Task title:\ninvestigation(Product):Unpublished products appearing\n\nContact Person / Person that requested:\nJohnny\n\nRequest type:\nBug Fix\n\nPriority:\nHigh (Urgent or critical)\n\nDetailed Description:\nhttps://admin.shopify.com/store/*********/products/14983954497916\n\nThis product is appearing in search results even though it's not published on any sales channel, or active. This product should not be displayed on the website.\n\nWhy is that happening, and please can we ensure it is removed from the site asap?\n\n\nBusiness Impact:\nHigh (Critical issue impacting sales or client relationship)\n\n———————————————\nThis task was submitted through Client Request Submission\nhttps://form.asana.com/*********",
      projectName: "*********",
    },
    {
      id: "1209165820211022",
      name: "ref(image blocks): refactor image blocks to fix responsiveness",
      createdAt: "2025-01-16T07:42:53.834Z",
      notes: "https://app.asana.com/0/0/1209149145359292/f",
      projectName: "*********",
    },
    {
      id: "1209149145359286",
      name: "Fix(in line menu): Menu burger & restructure the new menu",
      createdAt: "2025-01-14T12:37:30.776Z",
      notes:
        "1\n\nMenu burger is currently white on PDP’s so is not visible - change to red\nhttps://www.*********.com/products/*********\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=********* we try to restructure the new menu, putting direct page links after the navigation it doesn't format the correctly. Please see \"About ********* *********\" remains purple and underlined.\nCan we make it so that we don't have to do a subcategory heading before we reach a page link? Happy to jump on a call now to discuss?\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=*********",
      projectName: "*********",
    },
    {
      id: "1209134400020729",
      name: "Feat(ts): convert js to ts files",
      createdAt: "2025-01-14T10:47:44.664Z",
      notes: "",
      projectName: "*********",
    },
    {
      id: "1209068936197122",
      name: "feat(shoppable lookbook): shoppable lookbook section",
      createdAt: "2025-01-02T11:27:16.287Z",
      notes:
        'Create a new section called "Shoppable lookbook"\n\n    section settings\n        margin top\n        margin bottom\n        color scheme\n        full width section (default = false)\n\n     block settings  ( max of 4 blocks )\n        image (image_picker)\n         text (richtext)\n        products (product_list)\n              limit to 3 products\n\nDesign:\nhttps://app.asana.com/0/*********/*********/f\n\nShoppable Lookbooks Mobile Prototype: https://www.figma.com/proto/*********\n\nShoppable Lookbooks Desktop Prototype: https://www.figma.com/proto/*********',
      projectName: "*********",
    },
    {
      id: "1209032574359390",
      name: "ref(header-drawer): clean up code after implementing new header drawer",
      createdAt: "2024-12-23T13:43:54.672Z",
      notes:
        "Once the new menu drawer has been deployed, the old menu drawer should be removed and all references to it should be removed or updated to the new drawer implementation.",
      projectName: "*********",
    },
    {
      id: "1208995589536186",
      name: "Feat(Footer): setup signup to use klaviyo",
      createdAt: "2024-12-17T12:16:54.583Z",
      notes:
        "    Change current footer signup setup to subscribe emails to klaviyo\n    add a custom tooltip for incorrect email addresses when trying to signup\n\nKlaviyo ID: XbRrDN\n\n",
      projectName: "*********",
    },
    {
      id: "1208983310673698",
      name: "fix(FAQ):redirect links",
      createdAt: "2024-12-16T11:37:48.888Z",
      notes:
        "Can we add a direct link to the main Returns FAQ in the footer.\nThe direct link is this one:  https://support.notwoways.com/kb/article/9-can-i-return-my-order/\n\nIn the middle menu,  can we have:\nFAQ\nTRACK YOUR ORDER\nRETURNS\nCUSTOMER SERVICE\n\nand then remove the terms and conditions as that already exists in the bottom footer.\nCan we get that done today as it would help with some customer service questions\n\n\n----------------------------------------\n\n----------------------------------------\n\n----------------------------------------\n\n----------------------------------------\n\n----------------------------------------\n\n\n    Remove TERMS & CONDITIONS in middle footer nav\n    Reorder middle footer nav to\n        FAQ\n        TRACK YOUR ORDER\n        RETURNS (links to  https://support.notwoways.com/kb/article/9-can-i-return-my-order/)\n        CUSTOMER SERVICE\n\n",
      projectName: "*********",
    },
    {
      id: "1208965773389905",
      name: "design(search bar): setup some designs for possible search bar implementation",
      createdAt: "2024-12-13T07:24:24.929Z",
      notes:
        "\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=*********",
      projectName: "*********",
    },
    {
      id: "1208965568262165",
      name: "fix(contact-popup): fix phone number padding",
      createdAt: "2024-12-12T13:04:16.438Z",
      notes: "https://app.asana.com/app/asana/-/get_asset?asset_id=*********",
      projectName: "*********",
    },
    {
      id: "1208933785960590",
      name: "Feat(christmas hero upsell): setup christmas hero upsell animation bauble",
      createdAt: "2024-12-10T13:47:29.426Z",
      notes:
        "references this Design task\nhttps://app.asana.com/0/1208665967818386/1208396398869456\n\nBauble Design and annotations: https://www.figma.com/design/********* https://www.figma.com/design/*********/\nSee more\n\nSetup a new hero section that uses this animation section\nOR\nsetup a new section that contains the logic for the animation that can be used on the hero",
      projectName: "*********",
    },
    {
      id: "1208936482419843",
      name: "Ref(product cards): update size of image on product cards",
      createdAt: "2024-12-10T07:08:40.740Z",
      notes:
        "https://app.asana.com/app/asana/-/get_asset?asset_id=********* on the following\n    featured collections\n    collection pages\n    recommendations\n\nUse transform: scale(1.2) to increase size of image dispalyed\n\nNOTE:\n    keep in mind that the hover effect of using scale to increase size should also be increased to (1.25) \n",
      projectName: "*********",
    },
    {
      id: "1208936476287028",
      name: "ref(nav): remove the top white space nav bar sits in when you have yet to scroll",
      createdAt: "2024-12-10T05:46:31.051Z",
      notes:
        "    Firstly verify if this is not a theme setting we can use to remove the scroll effect (ie space at top and then when scroll down the white space disappears)\n    Secondly verify that the setting we currently have for the color of the nav still works in this case\n\n\n\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=*********",
      projectName: "*********",
    },
    {
      id: "1208932831630470",
      name: "Feat(Footer signup): Implement a custom error tooltip for the email signup",
      createdAt: "2024-12-09T13:24:12.579Z",
      notes:
        "https://app.asana.com/app/asana/-/get_asset?asset_id=********* custom tooltip for errors on with the email address\n    square corners\n    no icon\n    keep error code\n",
      projectName: "*********",
    },
    {
      id: "1208932831630469",
      name: "Ref(footer): link the footer to homepage",
      createdAt: "2024-12-09T13:22:32.244Z",
      notes: "NTW logo in footer should link to the homepage",
      projectName: "*********",
    },
    {
      id: "1208932831630468",
      name: "Ref(featured collection): Update arrows to only show when there is something to scroll on the sides",
      createdAt: "2024-12-09T13:21:53.147Z",
      notes:
        "Update arrows for them to only show when there is something to scroll on the sides. ie if nothing to scroll on left then no arrow same for right hand side\n\n\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=*********",
      projectName: "*********",
    },
    {
      id: "1208932831630467",
      name: "Ref(card content): update font sizing",
      createdAt: "2024-12-09T13:21:29.296Z",
      notes:
        "\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=*********    Update pricing  font / weight / sizing  [Size 13 font, light Suisse]\n    Update on\n        featured collection\n        collection pages\n        recommended products\n",
      projectName: "*********",
    },
    {
      id: "1208932831630466",
      name: "ref(footer): update copy on footer",
      createdAt: "2024-12-09T13:21:00.046Z",
      notes:
        "Change to ‘Customer service’\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=*********",
      projectName: "*********",
    },
    {
      id: "1208932831630464",
      name: "Fix(nav): center logo on screen",
      createdAt: "2024-12-09T13:19:34.156Z",
      notes:
        "On PDP the logo is not centered when animation has run and only the NTW shows\nLogo should be centered with the featured image edge\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=*********",
      projectName: "*********",
    },
    {
      id: "1208932831630462",
      name: "Fix(site reskin): change requests",
      createdAt: "2024-12-09T13:19:22.788Z",
      notes:
        "https://docs.google.com/document/d/1hHocbgoOz8GBQWUnxMppmQxYYANo851VQ1bPDlGjm3E/edit?tab=t.0",
      projectName: "*********",
    },
    {
      id: "1208935359427673",
      name: 'Ref(mysterybox)" update scrollbar on mobile to always be visible',
      createdAt: "2024-12-09T13:10:03.905Z",
      notes: "",
      projectName: "*********",
    },
    {
      id: "1208900163336218",
      name: "Feat(nav): add setting for the nav text if not scrolled page and when scrolled page",
      createdAt: "2024-12-04T11:04:55.268Z",
      notes:
        "\n    Add setting for the color of the nav text when the page has not been scrolled yet and the nav is contained in white bar\n\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=*********    Add setting for the nav color once the page has scrolled past the white bar\n\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=*********",
      projectName: "*********",
    },
    {
      id: "1208894894182263",
      name: "fix(PDP): dropdown for content",
      createdAt: "2024-12-03T14:52:47.985Z",
      notes:
        "Hi! ***** is going through so there will be a bit more to follow.\nBig note from me is on the Shipping & Returns, Style Guide etc on the PDP. Can they please be like the Represent link on Figma: https://uk.representclo.com/products/represent-owners-club-stamp-t-shirt-flat-white\n(whereby they cover the description, rather than expand the way they currently do). If all of them are expanded, you cannot scroll down anymore.\nThanks!",
      projectName: "*********",
    },
    {
      id: "1208893667336317",
      name: "ref(book an appointment): mobile",
      createdAt: "2024-12-03T13:34:12.858Z",
      notes:
        "    Book an appointment form - mobile\n        Image and text alignment error (full bleed and grey line & center align text )\n\nhttps://www.*********.com/pages/contact\n\n\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=*********",
      projectName: "*********",
    },
    {
      id: "1208883570950845",
      name: "Fix(reskin): Reskin final feedback ",
      createdAt: "2024-12-03T07:15:09.024Z",
      notes:
        "I'm trying to get the site over the line today. A few notes which would be great to address asap:\n    The copy for Shipping/Returns/Payment Methods needs changing\n\nPAYMENT METHODS: https://bitcube-*********.slack.com/team/********* could you help us with a small line of copy here?\nHELP AND CONTACT US: If you need help or have any questions, please contact us at support@notwoways.com\nSTYLE DETAILS: Let's please have this pull from the 'Materials and care' section on the current PDPs\n    The 'Origins' page needs some work - please see Figma here: https://www.figma.com/design/********* preview from my side here: https://*********.shopifypreview.com/\nhttps://bitcube-*********.slack.com/team/********* could I please have your eyes on it when you get a sec?\n\nNote that 'Origins' ratios are fine on mobile - it's desktop that needs work",
      projectName: "*********",
    },
    {
      id: "1208863757347292",
      name: "fix(image-grid): fixed image grid images being cut off",
      createdAt: "2024-11-28T07:08:17.722Z",
      notes: "",
      projectName: "*********",
    },
    {
      id: "1208838613409016",
      name: "Feat(pricing): a strikethrough of the compare price should be shown on featured collection section",
      createdAt: "2024-11-27T11:18:57.649Z",
      notes:
        'Strike through setting on featured products block\n\nAlex still needs to provide details on all section where this should be added\n\n\ncompare_at_price is the "was price"',
      projectName: "*********",
    },
    {
      id: "1208849594611268",
      name: "Feat(navigation): UX/UI - inline navigation and side main menu",
      createdAt: "2024-11-26T12:51:22.308Z",
      notes:
        "Reference:\nhttps://app.asana.com/0/0/*********/f\n\nDesktop Prototype: https://www.figma.com/proto/*********\n\nMobile Prototype: https://www.figma.com/proto/*********\n\n",
      projectName: "*********",
    },
    {
      id: "1208834891506109",
      name: "feat(reskin): revamp footer",
      createdAt: "2024-11-25T06:08:54.591Z",
      notes: "https://app.asana.com/app/asana/-/get_asset?asset_id=*********",
      projectName: "*********",
    },
    {
      id: "1208834564665410",
      name: "fix(multicolumn): Section error ",
      createdAt: "2024-11-25T05:26:17.940Z",
      notes:
        "Task title:\nfix(multicolumn):Section error \n\nContact Person / Person that requested:\nAlex\n\nRequest type:\nBug Fix\n\nPriority:\nMedium (Important but not urgent)\n\nDetailed Description:\nthe Multicolumn block but when I add images they are taken up by blocks of red where the link button is seemingly extending?\n\nBusiness Impact:\nMedium (Some disruption or risk of sales loss)\n\n———————————————\nThis task was submitted through Client Request Submission\nhttps://form.asana.com/?k=rqVcfziJXwwji-4hMQQ1Kg&d=375643158116881",
      projectName: "*********",
    },
    {
      id: "1208793870032231",
      name: "feat(text and icons): setup richtext section with icons section",
      createdAt: "2024-11-21T13:40:20.376Z",
      notes:
        "https://app.asana.com/app/asana/-/get_asset?asset_id=********* the no\nOne of us is a pro athlete. The other works in luxury fashion. Our day jobs and sponsors have us keeping our identities on the down-low, but nothing's stopping us from launching. After a year of testing and perfecting, we're introducing the worl's first microplatic-free underwear. Soft, chafe-free, and built for you to move in, it's so comfortable you'll forget you're even wearing it.\nWEAR NO UNDERWEAR.",
      projectName: "*********",
    },
    {
      id: "1208793870032230",
      name: "feat(NOunderwear):  setup image and text section",
      createdAt: "2024-11-21T13:39:26.826Z",
      notes:
        "Desktop:\n\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=********* settings:\n    image\n    richtext\n\nif one image takes whole width of page, if 2 iamges 50% etc\n\non mobile use a slider",
      projectName: "*********",
    },
    {
      id: "1208793870032229",
      name: "feat(NOunderwear): setup USP section",
      createdAt: "2024-11-21T13:39:14.002Z",
      notes: "https://app.asana.com/app/asana/-/get_asset?asset_id=*********",
      projectName: "*********",
    },
    {
      id: "1208793870032225",
      name: "feat(NOunderwear): setup hero ",
      createdAt: "2024-11-21T13:35:44.813Z",
      notes: "",
      projectName: "*********",
    },
    {
      id: "1208815630796969",
      name: "fix(F&F):PDP",
      createdAt: "2024-11-21T10:00:47.266Z",
      notes:
        "https://*********.com/products/*********\n \nWe’ve got two cylinder beige blobs under the product images, and then the thumbnails are not neatly displayed.\n \nCan you take a look ASAP please?",
      projectName: "*********",
    },
    {
      id: "1208808899683505",
      name: "demo(PDP): 50/50 split on images for *********",
      createdAt: "2024-11-20T14:19:28.847Z",
      notes:
        "********* to set up dev product for 50/50 to send to ********* on ********* PDP",
      projectName: "*********",
    },
    {
      id: "1208786433296548",
      name: "investigation(F&F -size guide): Size guide not displaying",
      createdAt: "2024-11-18T11:19:23.463Z",
      notes:
        "Task title:\ninvestigation(F&F -size guide): Size guide not displaying\n\nContact Person / Person that requested:\nAlex\n\nRequest type:\nBug Fix\n\nPriority:\nMedium (Important but not urgent)\n\nDetailed Description:\nThe size guides should be visible on these two products: CMO018 (Men's Felgate Coat) and CMS142 (Men's Tartan Shirt).\n\n \n\nIf you could check and let me know that would be great. Thanks!\n\nBusiness Impact:\nMedium (Some disruption or risk of sales loss)\n\n———————————————\nThis task was submitted through Client Request Submission\nhttps://form.asana.com/?k=rqVcfziJXwwji-4hMQQ1Kg&d=375643158116881",
      projectName: "*********",
    },
    {
      id: "1208774814092417",
      name: "fix(show dropdown options on enquire form )",
      createdAt: "2024-11-15T11:52:53.098Z",
      notes:
        "Issue Description\nOn the new bespoke gun pages, hovering mouse in the salutation field, an option is only shown when hovered upon \n\nWhat steps will reproduce the problem?\n    Navigate to the new bespoke gun pages i.e. \n        https://www.*********.com/products/*********\n        https://www.*********.com/products/*********\n        https://www.*********.com/products/*********\n    Scroll down to the enquire form \n    Click the salutation field \n    Observe as the options are not shown\n\nWhat is the expected output? \nA different text colour to be used for the options to appear \n\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=*********",
      projectName: "*********",
    },
    {
      id: "1208753165350376",
      name: "Ref(HP sections): update section for new layout",
      createdAt: "2024-11-14T14:44:03.516Z",
      notes:
        "This is very last minute, but we’re redesigning the homepage for the gift guide and need a few updates implemented. Could you let me know if these can be done ASAP?\n\nImage Blocks:\n\n    Mobile-Suitable Image Option (Priority): Could we add the option to include a separate, mobile-suitable image for better control over appearance on mobile vs. desktop?\n    CTA Button Position: Could we enable an option to centralise the CTA button so it sits below the title?\n\nBanner Image:\n\n    Text and CTA Alignment: We’d like the flexibility to choose the alignment of the title, text, and CTA button (left or right). Currently, only the title can be aligned. I’ve attached examples from Ralph Lauren as a reference.\nIf possible, could we please prioritise the mobile feature for image blocks?",
      projectName: "*********",
    },
    {
      id: "1208764354334613",
      name: "NO Underwear",
      createdAt: "2024-11-14T12:35:20.584Z",
      notes:
        "Task title:\nNO Underwear\n\nContact Person / Person that requested:\nMaria\n\nRequest type:\nNew Feature\n\nPriority:\nHigh (Urgent or critical)\n\nDetailed Description:\nAs mentioned in yesterday’s catch-up, we’re gearing up to start a new ecomm project. We’re working on an underwear/activewear brand called NO (no underwear, NO to stand for naked obsession..).\nThe plan for this is to be independent from notwoways and hopefully evolve into its own thing.\nWe’d like to start building the site asap as we’re keen to start a lead-gen campaign for this as soon as we have the assets ready.\nI have the wireframes ready for you on this Figma board. - https://www.figma.com/design/********* small note is that the final imagery is still being edited, so it’d be great to build this with the placeholders provided and facilitate an easy swap once all is ready.\nThe key right now is getting the layout and dimensions right.\nA few notes:\n- Really important to get the imagery above the fold, and USPs right below\n- We’re quite precious about logo and email capture box placement in its two variations (you’ll see there are two homepage options - let’s please build both at this early stage)\n- I’ve dropped the original files of everything I’ve used on Figma. I like the crops I’ve used on the final boards, but it’s more important that the ratios are correct across desktop and mobile, so please feel free to place imagery in blocks accordingly\nTech stack:\n- The domain wearing.no is under the same GoDaddy account you have access to\n- I’ve just set-up a Shopify store (domain already integrated). I have two admin seats free, who should I give access to? - https://wearing.no/password\n- Sendlane for email/SMS. I can either add admins, or give you a full access API key. There’s only one list in the account currently - we’ll be collecting emails there. - https://www.sendlane.com/\n\n\n\nBusiness Impact:\nHigh (Critical issue impacting sales or client relationship)\n\n———————————————\nThis task was submitted through Client Request Submission\nhttps://form.asana.com/?k=9oZt0gqwx7v2JgswfBnXxg&d=375643158116881",
      projectName: "*********",
    },
    {
      id: "1208735540790148",
      name: "feat(gun pages): comments after review",
      createdAt: "2024-11-11T08:54:43.741Z",
      notes: "https://app.asana.com/0/0/1208432905372155/f\n\n\n",
      projectName: "*********",
    },
    {
      id: "1208696112859047",
      name: "Feat(Mystery Box): Setup Mystery Box LP",
      createdAt: "2024-11-05T05:20:02.327Z",
      notes:
        "Task title:\nMystery Box campaign for Christmas\n\nContact Person / Person that requested:\nMaria\n\nRequest type:\nNew Feature\n\nPriority:\nHigh (Urgent or critical)\n\nDetailed Description:\nwe're doing a Mystery Box campaign for Christmas and would like to start collecting emails for the activation asap.\nI've got some landing page wireframes for you here: https://www.canva.com/design/DAGVh0YPHvA/7P0UtmjLZ96gqYMYrlANxg/view?utm_content=DAGVh0YPHvA&utm_campaign=designshare&utm_medium=link&utm_source=editor\nAssets I've used here: https://we.tl/t-MAhawgAD4G\nThis will need optimising for desktop + mob.\n\nBusiness Impact:\nHigh (Critical issue impacting sales or client relationship)\n\nExpected Outcome or Deliverables:\nNew landing page \n\n———————————————\nThis task was submitted through Client Request Submission\nhttps://form.asana.com/?k=9oZt0gqwx7v2JgswfBnXxg&d=375643158116881",
      projectName: "*********",
    },
    {
      id: "1208684671459515",
      name: "feat(big-red-button): restyle home page and add copy",
      createdAt: "2024-11-04T07:54:21.180Z",
      notes:
        "    Restyle the home page to match the attached PDF\n        Implement the new logo\n        Update copy\n        Update the style of the page\n        Update the style of the form\n        Add a static leaderboard showing only the top 10 on the right hand side, use existing components\n        Make the checkboxes required\n        Update the form submitted state to show the access code. Use a hardcoded code for now\n",
      projectName: "*********",
    },
    {
      id: "1208646346472382",
      name: "feat(multi column text blocks): setup multi column text blocks",
      createdAt: "2024-10-29T06:02:28.055Z",
      notes:
        'Task title:\nURGENT - PUR - Page Request \n\nContact Person / Person that requested:\nAbi\n\nRequest type:\nNew Feature\n\nPriority:\nHigh (Urgent or critical)\n\nDetailed Description:\n\n\nSorry to be a total pain. But can you duplicate the recipe blog block – but have it as free text? I don’t want to link the duplicated block to recipes.\n\nBasically I need to create this landing page (attached) and the block for directions/heading etc is created with the look and feel of the recipe block.\n\n\n\nThis page needs to go live on 30th btw! I just realised this afternoon as I tried to build it.\n\n\nBusiness Impact:\nHigh (Critical issue impacting sales or client relationship)\n\nExpected Outcome or Deliverables:\nNew page\n\nDeadline/Time Sensitivity:\nOct 29, 2024 – Oct 29, 2024\n\n———————————————\nThis task was submitted through Client Request Submission\nhttps://form.asana.com/?k=rqVcfziJXwwji-4hMQQ1Kg&d=375643158116881\n\n\n----------------------------------------\n\n----------------------------------------\n\n----------------------------------------\n\n----------------------------------------\n\n----------------------------------------\n\n\nCreate a new section "multi column text blocks"\n\nSection settings:\n    Heading\n        richtext\n    color scheme setting\n    margin top and bottom\n    checkbox for line between blocks (true by default)\n\nBlock settings (max of 4 blocks)\n    Heading\n        richtext\n    Body copy\n        richtext\n\nIf 1 block is setup then it takes 100% width if 2 blocks then 50 -50 etc to max of 4 blocks',
      projectName: "*********",
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
        "https://www.figma.com/design/*********/\n /docs.google.com/document/d/*********\n\n\n\n",
      projectName: "*********",
    },
    {
      id: "1208596883891413",
      name: "PUR - SF Form On PDP",
      createdAt: "2024-10-22T05:03:52.429Z",
      notes:
        "Task title:\nPUR - SF Form On PDP\n\nContact Person / Person that requested:\nAbi\n\nRequest type:\nContent Update\n\nPriority:\nMedium (Important but not urgent)\n\nDetailed Description:\nCan we put the general SalesForce enquiry form on PDPs instead of the link to the booking tool below?\n\nPriority 4 please.\n\nBusiness Impact:\nMedium (Some disruption or risk of sales loss)\n\nExpected Outcome or Deliverables:\nForm link update \n\nDeadline/Time Sensitivity:\nOct 29, 2024 – Oct 29, 2024\n\n———————————————\nThis task was submitted through Client Request Submission\nhttps://form.asana.com/?k=rqVcfziJXwwji-4hMQQ1Kg&d=375643158116881\n\n                                                        \n\nUpdate PDP contact us button to open a popup of this signup form\nhttps://shop.*********.com/pages/*********\n\nThis is contact-us-form webcomponent\nimplement as a popup",
      projectName: "*********",
    },
    {
      id: "1208575510115681",
      name: "feat(the-ten-count): home page",
      createdAt: "2024-10-18T09:38:15.589Z",
      notes: "",
      projectName: "*********",
    },
    {
      id: "1208568048904450",
      name: "feat(the-ten-count): leaderboard",
      createdAt: "2024-10-17T13:38:18.682Z",
      notes:
        "Adjust the leaderboard page to respect sort based on the distanceToTarget column, instead of the score itself, to represent the actual closest score\n\nAlso, pagination needs to be reworked to mimic the standard ShadCN pagination linked here: https://ui.shadcn.com/docs/components/pagination",
      projectName: "*********",
    },
    {
      id: "1208556106265016",
      name: "fix(image appearance) : images are being cut at the top ",
      createdAt: "2024-10-16T13:13:37.089Z",
      notes:
        "Issue Description\nImages do not appear fully \n\nWhat steps will reproduce the problem?\n    Navigate to the theme editor \n    Add the triple image section \n    Add the blocks and populate the settings\n    Save and preview \n    Navigate to the section on preview \n    Observe as the images are cut at the top \n\nWhat is the expected output? \nImages to not be cut \n\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=*********",
      projectName: "*********",
    },
    {
      id: "1208538043172524",
      name: "feat(blue-print-page): setup image grid section",
      createdAt: "2024-10-16T11:24:04.740Z",
      notes:
        "Create a new section - image grid block\n\nsection settings:\n    margin top and bottom \n        range 0 - 100px\n\nblock settings:\n    image\n    richtext \n    select to position the text either left, center of right bottom of image\n    text should be links\n\nUP to 4 blocks can be added\nSo if 1 block the image spans the entire with of container\nif 2 block then image spans 50 - 50 including the space between blocks and so on\n\n\n\nMOBILE:\n    images should stack on mobile\n\n",
      projectName: "*********",
    },
    {
      id: "1208539859588667",
      name: "feat(blueprint-landing-page): setup new page",
      createdAt: "2024-10-14T10:22:35.625Z",
      notes:
        "Task title:\nBlue pint landing page\n\nContact Person / Person that requested:\n******\n\nRequest type:\nNew Feature\n\nPriority:\nHigh (Urgent or critical)\n\nDetailed Description:\nI've got a landing page brief for a shoe we're releasing soon here: https://www.figma.com/design/*********'ve kept the layout the Exact same as the Mokka one (except the press quote - there is only one, instead of three).\nWe'd like for this to be live this week; let me know if too ambitious, with all assets provided. I can give you a Klaviyo embed for the black box in the middle and all assets today.\nOn a different note, how are we looking on the HKE landing page amends?\n\nBusiness Impact:\nHigh (Critical issue impacting sales or client relationship)\n\nExpected Outcome or Deliverables:\nNew landing page \n\nDeadline/Time Sensitivity:\nOct 18, 2024 – Oct 18, 2024\n\n———————————————\nThis task was submitted through Client Request Submission\nhttps://form.asana.com/?k=9oZt0gqwx7v2JgswfBnXxg&d=375643158116881",
      projectName: "*********",
    },
    {
      id: "1208515635935629",
      name: "fix(pdp): add back notify when available on PDP ",
      createdAt: "2024-10-10T12:21:07.070Z",
      notes: "",
      projectName: "*********",
    },
    {
      id: "1208511181819581",
      name: 'Chore(automation): Automate adding and removing "Availability" metafields',
      createdAt: "2024-10-09T15:06:01.613Z",
      notes:
        "TO support with the theme reskin, a metafield was added to products to indicate availability at a product level rather than variant level.\n\nThe metafield probably needs to be auto-changed based on a product update event through Shopify Flow",
      projectName: "*********",
    },
    {
      id: "1208501065734362",
      name: "fix(site reskin): updates after review",
      createdAt: "2024-10-09T12:59:03.586Z",
      notes: "",
      projectName: "*********",
    },
    {
      id: "1208509418495241",
      name: "Feat(drawer): Setup free shipping indicator in cart",
      createdAt: "2024-10-09T11:05:23.650Z",
      notes:
        "Task title:\nShipping on Cart (drawer) \n\nContact Person / Person that requested:\nMaria\n\nRequest type:\nNew Feature\n\nPriority:\nMedium (Important but not urgent)\n\nDetailed Description:\nOn the cart conversation - dropping some favourite examples below.\nI would love to have the bar at the top (You're X£ away from free shipping).\n+ suggested product cards for the Cap and Socks (link below:\nBlack socks: https://www.notwoways.com/products/no-socks\nWhite socks: https://www.notwoways.com/products/no-socks-white\nCap: https://www.notwoways.com/products/no-cap-black\nIf they qualify for free shipping already, they should get a 'Congratulations, you get free shipping' bar instead, but would love to still keep the product carousel at the bottom. This should be dynamic, so it doesn't clash with what's in their basket.\nI believe @Rich M has set some free shipping thresholds yesterday, let  me know if you can find these or need us to send them over please! Ty\n\nBusiness Impact:\nMedium (Some disruption or risk of sales loss)\n\nExpected Outcome or Deliverables:\nFree shipping to be displayed with bar \n\nDeadline/Time Sensitivity:\nOct 10, 2024 – Oct 11, 2024\n\n———————————————\nThis task was submitted through Client Request Submission\nhttps://form.asana.com/?k=9oZt0gqwx7v2JgswfBnXxg&d=375643158116881\n\nmin spend for free shipping is £130\n\nTHEME SETTING for shipping threshold",
      projectName: "*********",
    },
    {
      id: "1208488858596013",
      name: "Fix(re-skin): update additional pages",
      createdAt: "2024-10-08T06:52:52.462Z",
      notes: "",
      projectName: "*********",
    },
    {
      id: "1208444081927427",
      name: "feat(HKE lp): setup new page",
      createdAt: "2024-10-03T07:59:45.040Z",
      notes: "https://www.figma.com/design/*********//we.tl/*********",
      projectName: "*********",
    },
    {
      id: "1208444081927422",
      name: "feat(theme updates): - PHASE 2- Reskin the Website -  ",
      createdAt: "2024-10-02T12:19:15.664Z",
      notes: "",
      projectName: "*********",
    },
    {
      id: "1208432905372160",
      name: "feat(live chat): implement Shopify live chat  ",
      createdAt: "2024-10-01T14:27:28.087Z",
      notes:
        "Shopify Inbox app\n\nScribes:\n    Customer:\nhttps://scribehow.com/shared/How_to_use_Shopify_live_chat_as_a_customer__Do5Ey5YtT9y4frkCX1XyGQ\n    Admin:\nhttps://scribehow.com/shared/Customising_Shopify_Live_Chat_as_an_Admin__olkPKmWFQYulzDFp44Kmhw",
      projectName: "*********",
    },
    {
      id: "1208432905372155",
      name: "feat(gun pages): rebuild bespoke gun pages ",
      createdAt: "2024-10-01T14:24:52.724Z",
      notes: "Design input required \n\nestimate completion time 4 days",
      projectName: "*********",
    },
    {
      id: "1208432261807838",
      name: "feat(theme-reskin): build new image section",
      createdAt: "2024-09-30T12:56:04.935Z",
      notes:
        "\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=********* new multi row image section\n\nSection settings:\npadding top and bottom: 0 - 100px\n\nblock settings:\neach block contains 2 x image pickers",
      projectName: "*********",
    },
    {
      id: "1208432261807826",
      name: "feat(theme-reskin): update how arrows are shown for more products",
      createdAt: "2024-09-30T12:47:20.725Z",
      notes:
        "https://app.asana.com/app/asana/-/get_asset?asset_id=********* featured Featured collection section add a setting to have the arrows on the side, with no indication of amount of slides\n\nExpectation:\nSlide arrows layout:\nbelow slides | on sides of slides\n\nsomething like below\n\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=*********",
      projectName: "*********",
    },
    {
      id: "1208396857723923",
      name: "feat(theme-reskin): build new footer",
      createdAt: "2024-09-25T07:13:23.661Z",
      notes:
        "HELP\nTrack your Order\nFAQs\nCustomer Services\n\nABOUT\nOrigins\nArchive\n\nBORING\nTerms & Conditions\nBored? Watch this",
      projectName: "*********",
    },
    {
      id: "1208396857723921",
      name: "feat(theme-reskin): re-style product page",
      createdAt: "2024-09-25T07:11:24.933Z",
      notes: "https://app.asana.com/app/asana/-/get_asset?asset_id=*********",
      projectName: "*********",
    },
    {
      id: "1208375018609144",
      name: "feat(theme updates): Reskin the Website for Retail Launch",
      createdAt: "2024-09-25T06:00:33.258Z",
      notes:
        "Task: Reskin the Website for Retail Launch\n\n\n    Review and Analyze Annotated PDF\n    Execute Homepage and Product Page Design\n    Apply Design to Other Pages\n\nThe core sites we are emulating here are https://uk.representclo.com/, https://axelarigato.com/ and https://fearofgod.com/\n\n",
      projectName: "*********",
    },
    {
      id: "1208358339831758",
      name: "Chore(Remove links): Remove loyalty functionality on account page",
      createdAt: "2024-09-20T08:58:01.567Z",
      notes: "",
      projectName: "*********",
    },
    {
      id: "1208328702335639",
      name: "Fix slider component",
      createdAt: "2024-09-19T06:29:56.659Z",
      notes:
        "Slider is broken, items not arranged in slider.\n\n\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=*********",
      projectName: "*********",
    },
    {
      id: "1208328654616349",
      name: "ref(mokka landing page improvements)",
      createdAt: "2024-09-18T13:22:41.900Z",
      notes:
        "follow up on this task: https://app.asana.com/0/1207453505969671/1208290669635038/f\n\nNotes below:\nDesktop version\n    Quite a lot of white space at the top. I've attached a shorter image to use.\n    Font colour is different to the Figma one, HEX code #E0D0B7\n    Please move email capture box lower (currently crammed under the header)\n    The image is slightly blurry for me - was it compressed in any way?\n    Press section is still on central; there needs to be more space between 'FRESH OFF THE PRESS' and the quotes themselves. NICE logo is larger than the others. Logos aren't aligned\n    Can ticker tape move continuously, not glitch + restart? Let me know if you need it longer\n    Add space top + bottom of WHAT'S INSIDE\n    Box image is blurry - let me know if you need another\n    Product section - please align text as per Figma (to take up the full space and be larger in size)\n    Add space top + bottom of RATED BY THE NTW community header\n\nMobile version\n    Header is really crammed, doesn't look like the new image (which has a lot more space at the top)\n    Make text slightly smaller so it's not quite as edge to edge\n    Email box needs to bee smaller and further from the shoes\n    FRESH OFF THE PRESS needs to be smaller\n    Same note on ticker tape - it glitches and restarts, can it run smoothly?\n    WHAT'S INSIDE needs to be slightly smaller and have more space top + bottom\n    2nd product image in the carousel is smaller when the rest\n",
      projectName: "*********",
    },
    {
      id: "1208328702335625",
      name: "feat(page template): Setup video content page template",
      createdAt: "2024-09-17T10:50:25.006Z",
      notes:
        "Setup a new template that is noindexed that will show 12 videos.\nVideos will be hosted on youtube\nUsing the video section we have to display the videos",
      projectName: "*********",
    },
    {
      id: "1208314883632512",
      name: "fix(slideshow): fix heading settings not being respected",
      createdAt: "2024-09-16T06:33:38.300Z",
      notes:
        'Issue Description\nOne of the settings does not seem to work as intended, and the other shows "missing translation..."\n\nWhat steps will reproduce the problem?\n    Navigate to the theme editor \n    On the Slideshow section, click any of the Slide blocks \n    Navigate to the Heading Size dropdown \n    Select the Extra large setting (observe as the setting does not adjust the heading according the description)\n    Observe as the heading size below extra large shows "missing translation"\n\n\nWhat is the expected output? \n\nThe Extra large setting should adjust the heading accordingly \nThe relevant size should be shown instead of "missing translation..."\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=*********',
      projectName: "*********",
    },
    {
      id: "1208303372318228",
      name: "Community reviews",
      createdAt: "2024-09-13T12:55:10.944Z",
      notes:
        "https://app.asana.com/app/asana/-/get_asset?asset_id=********* a new section - community reviews\nThis should use blocks to add a review\n\neach block should have the following settings\n    image picker\n    rich text for the copy\n    url link for image to link to socials\n",
      projectName: "*********",
    },
    {
      id: "1208303372318223",
      name: "Product preview with text",
      createdAt: "2024-09-13T12:48:32.640Z",
      notes:
        "https://app.asana.com/app/asana/-/get_asset?asset_id=********* a new section - product preview with text\nThis section can use the slider setup we currently have on PDP pages does not need to look like image above\n\nsettings required\n    Product selector for what product images to show\n    Rich text box to copy\n    range for margin top and bottom\n",
      projectName: "*********",
    },
    {
      id: "1208303372318218",
      name: "Ticker tape",
      createdAt: "2024-09-13T12:46:27.710Z",
      notes:
        "https://app.asana.com/app/asana/-/get_asset?asset_id=********* should be able to use the marquee section to do this",
      projectName: "*********",
    },
    {
      id: "1208303372318199",
      name: " Setup press section",
      createdAt: "2024-09-13T11:42:05.314Z",
      notes:
        "Setup a new section - press section\n\nUse blocks to setup the following\neach block required settings:\n    rich text area for text\n    image picker for logo\n    range setting for margin top and bottom ( 0 - 60 px)\n",
      projectName: "*********",
    },
    {
      id: "1208290669635038",
      name: "Feat(new page): landing page for Mokka ",
      createdAt: "2024-09-13T05:41:37.829Z",
      notes:
        "We would like to create an additional landing page for https://www.notwoways.com/products/mokka (not currently live on our site). Since we'll be using this for lead gen ads, we want to try an even more aggressive approach when it comes to optimising for conversion.\nI've mocked up the page here: https://www.figma.com/design/********* the assets I've used are on this link: https://we.tl/*********\nA couple of notes:\n    Email capture box at the top - how do we do this? I usually use a Klaviyo embed but these can only go in a body of text from my knowledge. Can you help us embed over an image? LMK if you need the piece of code from the form itself/any other help from me.\n    Can the black ticker tape be dynamic from mobile (i.e. move from left to right)\n    As with Syzygy - if we can, at some point, have a video of someone reviewing/styling pop up on the page, let me know and I can give you content for this\n\nTIME ESTIMATE:  6 - 8 hours",
      projectName: "*********",
    },
    {
      id: "1208290946865737",
      name: "fix(triple-image-block): fix cta alignment ",
      createdAt: "2024-09-12T09:24:24.026Z",
      notes:
        "There’s also an issue with the triple image block as the CTA’s don’t sit correctly under each image!",
      projectName: "*********",
    },
    {
      id: "1208292587078880",
      name: "investigation(theme): this theme is currently missing and team would like to see what is still viewable ",
      createdAt: "2024-09-12T09:02:16.630Z",
      notes:
        "There is a theme within which I think is no longer there. I don't know whether it's been written over or deleted - undoubtedly before Bitcube's involvement.\n\nIt contained a lot of custom HTML for splash pages, and some interesting functionality the business would probably want to retain.\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=********* theme was created in April 2023 and looked like the attached. I might be missing something really obvious here, but just in case your team can help to investigate this I thought I'd raise it as a ticket. There's quite a bit of pricey dev work in there somewhere.",
      projectName: "*********",
    },
    {
      id: "1208278941575895",
      name: "Fix(Mobile video section settings)",
      createdAt: "2024-09-11T07:21:25.827Z",
      notes:
        "Issue Description\n\n    When increasing the video aspect ratio for mobile the heading and button appearance also changes (1st attached video file)\n    There is horizontal scrolling present when the aspect ration is above 50% (2nd attached video file)\n    When the video Heading is populated, it has a white background which does not look great (see attached image for reference) \n\nWhat steps will reproduce the problem?\nPoint 1 & 2\n    Open the theme editor and add the video section\n    And and customize the following blocks\n        Heading block \n        Buttons block \n    Select the video section, add video URL for mobile \n    Increase the aspect ration\n    Save changes and preview\n    Observe the appearance of the Heading and button on the section \n    For point 2, scroll horizontally on the section to observe the horizontal scrolling \n\nWhat is the expected output? \n\n    Should the the heading and button have a fixed font size even though the aspect ratio is changed? \n    Horizontal scrolling should not be present \n    Should the heading use the functionality of the transparent background ?\n\n\n\n\n\n\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=*********",
      projectName: "*********",
    },
    {
      id: "1208278941575890",
      name: "Fix(Desktop video section settings)",
      createdAt: "2024-09-11T06:30:54.823Z",
      notes:
        "Issue Description\n    When the CTA link setting in the video section is populated, this results in the video to not appear when the settings are saved (only the heading and buttons blocks appear over the next section if added)\n    The video heading does not appear on desktop even though set \n\nWhat steps will reproduce the problem?\n    Open the theme editor and add the video section \n    And and customize the following blocks \n        Heading block \n        Buttons block \n    Select the video section, add a video URL for desktop \n    Navigate to the CTA settings\n    Add a CTA label \n    Add a CTA link \n    Save changes and preview\n    Observe as the video is hidden and only the heading and buttons appear \n\nPoint 2\n    Open the theme editor \n    Select the video section \n    Populate the video heading setting \n    Save change and preview \n    Observe as the heading is not shown \n\nWhat is the expected output? \nThe video should still appear even when the CTA link has been added \n\nPoint 1\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=********* 2\n\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=*********",
      projectName: "*********",
    },
    {
      id: "1208259578170161",
      name: "feat(image-grid): introduce new image grid section ",
      createdAt: "2024-09-10T09:44:43.244Z",
      notes:
        "Create a new section - image grid block\n\nsection settings:\n    margin top and bottom \n        range 0 - 100px\n\nblock settings:\n    image\n    richtext \n    select to position the text either left, center of right bottom of image\n    text should be links\n\nUP to 4 blocks can be added\nSo if 1 block the image spans the entire with of container\nif 2 block then image spans 50 - 50 including the space between blocks and so on\n\n\n\nMOBILE:\n    images should stack on mobile\n\n",
      projectName: "*********",
    },
    {
      id: "1208269245163049",
      name: "feat(loyalty-hero-banner): adjust hero image based on logged in state",
      createdAt: "2024-09-10T08:00:29.220Z",
      notes: "",
      projectName: "*********",
    },
    {
      id: "1208269245163047",
      name: "feat(loyalty-account): add loyalty tier and points on account page",
      createdAt: "2024-09-10T07:57:11.088Z",
      notes:
        "The request places this content between the order history and account section. this can be accomplished by adding support for app blocks within the section\n\nhttps://shopify.dev/docs/storefronts/themes/architecture/blocks/app-blocks",
      projectName: "*********",
    },
    {
      id: "1208269245163046",
      name: "feat(loyalty-cart): add a link on the cart page to create an account",
      createdAt: "2024-09-10T07:56:45.416Z",
      notes: "",
      projectName: "*********",
    },
    {
      id: "1208268947680897",
      name: "Feat/Low stock badges",
      createdAt: "2024-09-10T07:10:32.755Z",
      notes:
        "Add a badge (similar to the 'Sold out' badge) showing 'Only x left' to PDPs if a product variant's stock is equal or less than 10. \n\nAdd a 'stock level' product variant metafield that overrides the 'Only x left'. For example adding the number 99 to a variant should then show 'Only 99 left'.",
      projectName: "*********",
    },
    {
      id: "1208244837508884",
      name: "feat(social-links): add support for a third set of social links within theme settings",
      createdAt: "2024-09-06T11:15:25.707Z",
      notes:
        "Can we get the sporting agency social accounts linked in the footer like with our other accounts\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=*********",
      projectName: "*********",
    },
    {
      id: "1208226350067552",
      name: "fix(region-selector): remove dark colouring of region options",
      createdAt: "2024-09-04T13:29:13.768Z",
      notes:
        "Issue Description\nA dark overlay is shown when hovering over the countries in the region selector\n\nWhat steps will reproduce the problem?\n    Navigate to https://shop.*********.com/\n    Click the region selector \n    Hover over the countries \n    Observe the black overlay that appears \n\nWhat is the expected output? \nCould a white/semi-transparent overlay be used instead as before \n\n\n\n\n",
      projectName: "*********",
    },
    {
      id: "1208220296179409",
      name: "feat(video-banner): add support for a mobile specific video",
      createdAt: "2024-09-04T07:08:07.984Z",
      notes:
        "To allow for a better mobile experience, add a second video option for mobile only.\n\nThis video should have options for aspect ratio of:\n    Landscape — current\n    Square — Square - default for mobile\n    Portrait — calc(100dvh - header height) tall\n",
      projectName: "*********",
    },
    {
      id: "1208204620564625",
      name: "Update google favicon so it isn't warped.",
      createdAt: "2024-09-02T13:12:20.597Z",
      notes: "",
      projectName: "*********",
    },
    {
      id: "1208190818006339",
      name: "feat: Integrate user reviews in to product landing page (low lift test on Syzergy product page)",
      createdAt: "2024-08-30T13:07:48.783Z",
      notes:
        'Context\nOur paid marketing agency are pushing for us to improve the product landing page to improve conversion here. We have healthy CTR but low on page conversion (we are testing ads for the Syzergy shoe only at this time).\nI believe we already have a ticket open in this sprint to update this page but (given how important it seems) it felt like a good idea to lean in a little on this happening asap. Can you take a look at the below?\n\nStage One:\nUpdate Landing Page Image:\n        Change the landing page image to include a quote. This task is currently in progress.\nQuote for the image:\n"Desired chunky aesthetic without any of the unwelcome heaviness or bulk"\n\nwe should have Waldenburg on all the pages. Looks like it\'s at 105 compression too.\n\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=********* Consumer Reviews:\n        Work with Maria to integrate consumer reviews on the landing page. This can be done either by integrating Trustpilot reviews or hard-coding the reviews for testing purposes. Prioritize whichever method is quickest and looks best.\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=********* Two (Conditional):\n    If Stage One is successful, implement functionality to display "only x left" on specific sizes. Ideally, if the visitor has visited before, this message should appear next to the same size they viewed previously.\n\nhttps://*********.shopifypreview.com/products/*********',
      projectName: "*********",
    },
    {
      id: "1208168375653228",
      name: "Adjust the carousel to prevent lazy loading on the first image.",
      createdAt: "2024-08-30T10:15:12.794Z",
      notes: "",
      projectName: "*********",
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
      projectName: "*********",
    },
    {
      id: "1208188618716675",
      name: "feat(video): add colour scheme setting to the video section",
      createdAt: "2024-08-30T07:08:33.635Z",
      notes: "",
      projectName: "*********",
    },
    {
      id: "1208179315086978",
      name: "Site Navigation - Logout Button",
      createdAt: "2024-08-29T14:03:34.467Z",
      notes:
        "    Task: Add a logout button to the desktop site.\n    Description: Ensure easy access to logout functionality.\n",
      projectName: "*********",
    },
    {
      id: "1208179315086976",
      name: "User Login Experience",
      createdAt: "2024-08-29T14:03:33.394Z",
      notes:
        "    Task: Add a login button on the desktop version of the site.\n    Description: Improve user experience by providing a consistent login option.\n",
      projectName: "*********",
    },
    {
      id: "1208179315086960",
      name: "Fix(console errors): Fix console error on PDP",
      createdAt: "2024-08-29T14:01:11.978Z",
      notes:
        'Task: Investigate and fix the console error related to a popup on the product page.\n\n<img src="Liquid error (sections/main-product line 829): invalid url input" ,="" width="100%," height="100%">',
      projectName: "*********",
    },
    {
      id: "1208145861176769",
      name: "feature(landing page): new page ",
      createdAt: "2024-08-28T12:33:17.183Z",
      notes: "",
      projectName: "*********",
    },
    {
      id: "1208106408593825",
      name: "feat(loyalty): iterate loyalty functionality",
      createdAt: "2024-08-20T19:43:03.440Z",
      notes:
        "Review the attached document and address the requests within: \nhttps://docs.google.com/presentation/d/13_G6F8Sxz8K7qYrH8wSXuXdlG52efPB9jCtNV0DpZ6E/edit#slide=id.g2fc08236cce_0_38",
      projectName: "*********",
    },
    {
      id: "1208102852853552",
      name: "fix(product-overlay): remove random text on product image",
      createdAt: "2024-08-20T14:29:36.274Z",
      notes: "https://app.asana.com/app/asana/-/get_asset?asset_id=*********",
      projectName: "*********",
    },
    {
      id: "1208100661857511",
      name: "fix(login-registration): adjust login and registration analytics to read the email address via javascript",
      createdAt: "2024-08-20T13:25:00.630Z",
      notes:
        "The analytics events triggered on login and registration use liquid to obtain the customer's email address. This value would not exist at this time and should rather be obtained by reading the data in the form.\n\nSince these values are not used in any active reporting, remove the events:\nhttps://github.com/bitcubesystems/*********/blob/4377ee2be0f9025776958d7b5f9ad8b2a5f902be/theme/templates/customers/register.liquid#L158\n\nhttps://github.com/bitcubesystems/*********/blob/4377ee2be0f9025776958d7b5f9ad8b2a5f902be/theme/templates/customers/login.liquid#L133\n\n",
      projectName: "*********",
    },
    {
      id: "1208098995202534",
      name: "fix/bugsnag-errors",
      createdAt: "2024-08-20T09:09:40.245Z",
      notes:
        "TypeError - Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element'.\nhttps://app.bugsnag.com/*********/*********/errors/66629d21fb44920008bf3386\n\nTypeError \n/en-us/products/clk207\nundefined is not an object (evaluating 'window.variantStrings.soldOut')\nhttps://app.bugsnag.com/*********/*********/errors/66c3a9167fce022d1c3ce5bc",
      projectName: "*********",
    },
    {
      id: "1208089567444743",
      name: "Reviews",
      createdAt: "2024-08-19T12:02:26.318Z",
      notes: "",
      projectName: "NoTwoWays",
    },

    {
      id: "1207996794859887",
      name: "feat(personalisation): charms",
      createdAt: "2024-08-08T12:00:18.734Z",
      notes:
        'When a product has a "Charms" metaobject, show an option to "Personalize" as an outlined button. This should be a block that can be added to the main Product section\n\nWhen the metaobject is present, render a drawer that is triggered by the "Personalize" button\n\nThe drawer should show the options for personalization based on the metaobject\n\nThe amount of charm options available should come from the meta object setting for charms available\n\nFor each charm available, render all charm options within the set. Each option \n\nSettings:\n    Personalization drawer header\n    Personalization drawer subheading\n\nNotes:\n    Ignore the preview image\n\n\n',
      projectName: "*********",
    },

    {
      id: "1207950611031077",
      name: "feat(megamenu): switch from hover based menu opening on desktop to click based interactions",
      createdAt: "2024-08-02T07:05:53.945Z",
      notes: "",
      projectName: "*********",
    },
    {
      id: "1207959652877782",
      name: "Fix(Cannot read properties of null (reading 'addEventListener'))",
      createdAt: "2024-08-02T06:25:41.076Z",
      notes: "",
      projectName: "*********",
    },
    {
      id: "1207939714903376",
      name: "chore(cleanup): remove ua analytics",
      createdAt: "2024-07-31T07:26:21.353Z",
      notes:
        "Now that we've migrated to GA4, we have no more need for the implementation of Universal Analytics. Please remove all of this source code",
      projectName: "*********",
    },
    {
      id: "1207929974924345",
      name: "Fix(wrapped menu items on mobile)",
      createdAt: "2024-07-30T06:58:50.151Z",
      notes:
        "Issue Description\nThe menu items on the mega menu are wrapped on mobile \n\nWhat steps will reproduce the problem?\n    Navigate to https://shop.*********.com or https://*********.com \n    Click the burger menu \n    Click the links \n    Observe as the menu items are wrapped \n\nWhat is the expected output? \nThe menu items should not be wrapped \n\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=*********",
      projectName: "*********",
    },
    {
      id: "1207903793975165",
      name: "Change product list to use Grid",
      createdAt: "2024-07-26T10:39:20.332Z",
      notes:
        "For the featured collection blocks, I suggest we do this:\n    Adjust the container of the collection grid to display: grid\n    Use the existing section settings for columns to define the column size\n    Use the metaobject we set up\n    Add settings for defining column span and row span\n    Adjust the setting for defining where the item is placed to rather give a specific column and row for both desktop and mobile\n    Use the settings from the metaobject to render the featured collection block\n\nBy doing this, you'll be able to set grid-row and grid-column to define placement, like this\n  grid-row: {{ metaobject row }} / span {{ metaobject row span }};\n  grid-column: {{ metaobject column }} / span {{ metaobject column span }};",
      projectName: "*********",
    },
    {
      id: "1207852016602023",
      name: "Potential bug. If you click through a link from the homepage and then hit the back button, the logo is full size and not the minimised scroll size.",
      createdAt: "2024-07-19T07:21:46.418Z",
      notes: "",
      projectName: "*********",
    },
    {
      id: "1207846678860930",
      name: "the Origins page has a footer menu with social links that other pages don't have, can we please remove?",
      createdAt: "2024-07-18T15:34:49.444Z",
      notes: "",
      projectName: "*********",
    },
    {
      id: "1207809664958691",
      name: "fix -PUR - Newsletter Sign Up",
      createdAt: "2024-07-16T10:06:04.711Z",
      notes:
        "Hi *********. Would you or ********* be able to provide some context on the functionality of the newsletter pop-up?\n \nI’ve checked the CMS for ********* and there is an Ometria form ID however the text in there doesn’t reflect the current pop-up.\n \n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=********* you know there the current pop-up exists?\n\nWe need to update the look and feel of this pop-up to reflect the new sign up landing page below: https://www.*********.com/pages/signup. Including the check boxes for the 3x pillars of the business.",
      projectName: "*********",
    },
    {
      id: "1207809667266589",
      name: "Fix mega menu hover issue",
      createdAt: "2024-07-15T10:42:57.143Z",
      notes:
        "When hovering over main items in the mega menu, the submenu sometimes closes prematurely. \n\nhttps://www.loom.com/share/3bab03095b274274a9b6170d8976fa4d?sid=98395011-9cca-4669-a25d-0084c088ef2d\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=*********",
      projectName: "*********",
    },
    {
      id: "1207786967777732",
      name: "The homepage nav is glitching when it minimises the NO logo",
      createdAt: "2024-07-12T09:37:19.886Z",
      notes: "",
      projectName: "*********",
    },
    {
      id: "1207778014346329",
      name: "feat(lead-forms): add PSA Salesforce Web to lead implementation",
      createdAt: "2024-07-10T13:53:17.926Z",
      notes:
        'All same as current Gun web to lead form \nMandatory: \n    First and Last name\n    Email\n    Summary (Displayed as Interest\nFew points\nGC country should bring the country code\nwebsite will capture the page url. \n\nPlease note Record Type for this form will be. \n\n<option value="0124J0000005fAd">RBSA Lead</option>\n\n\n',
      projectName: "*********",
    },
    {
      id: "1207774182746878",
      name: "Change homepage hero to allow for images and videos",
      createdAt: "2024-07-10T09:32:08.392Z",
      notes:
        "    Change the homepage hero to allow for images and videos.\n    Allow for the colour of the links to be changed.\n",
      projectName: "*********",
    },
    {
      id: "1207753411360302",
      name: "feat(knife-block-update)- Dynamic content ",
      createdAt: "2024-07-09T08:54:15.543Z",
      notes:
        "Quick question, is it possible to update the block below on PDP on all knife products?\n\n\n \n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=********* would like it to say the below instead – only on knives:\n\nRegrettably, we are unable to ship knives internationally directly from the ********* website. However, our team at the ********* boutique can assist in coordinating shipping. If you have any questions or wish to make a purchase, please feel free to contact us.\n \nCould we get this done as a priority this week?",
      projectName: "*********",
    },
    {
      id: "1207755647906070",
      name: "Editorial page follow ups",
      createdAt: "2024-07-08T10:37:49.850Z",
      notes:
        "    Add a control for controlling the intensity of the image overlay\n    Revisit vertical spacing around text\n",
      projectName: "*********",
    },
    {
      id: "1207713554521221",
      name: "AW24 Editorial Section - Allow for only one image",
      createdAt: "2024-07-02T08:49:26.288Z",
      notes:
        "The editorial section should adjust accordingly if only one image is added, per the Figma designs.\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=*********",
      projectName: "*********",
    },
    {
      id: "1207700649427388",
      name: "AW24: Editorial Lookbook - Build the page",
      createdAt: "2024-07-01T14:12:48.069Z",
      notes:
        "https://www.figma.com/design/*********/*********\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=********* aw24/base",
      projectName: "*********",
    },
    {
      id: "1207684333851808",
      name: "fix(carousel): improve thumbnail border consistency",
      createdAt: "2024-06-28T07:33:14.441Z",
      notes:
        "Issue Description\n    Came across this issue when testing on this branch refactor/swiper-consistency\n    The thumbnail border on some thumbnails is thicker on other thumbnails \n    When navigating between the images using the thumbnail arrows some images get skipped \n    On mobile its just the thumbnail border size issue inconsistency\n\nWhat steps will reproduce the problem?\n    Navigate to any PDP \n        https://shop.*********.com/products/mens-ridge-parka-jacket-in-tobacco-1?_pos=21&_sid=f3a8fe819&_ss=r and https://shop.*********.com/products/purdey-london-6-paperweight-limited-edition?_pos=3&_sid=2cb9d12ec&_ss=r were used in this instance \n    Observe the thick thumbnail border on some thumbnails, and  a thin one on others\n    Click the arrows on the thumbnail section and observe as some images are being skipped \n\nWhat is the expected output? \n    There should be consistency on the weight/thickness of the thumbnail border \n    Images should not be skipped when clicking the arrows on the thumbnail section \n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=*********",
      projectName: "*********",
    },
    {
      id: "1207684333851806",
      name: "fix(carousel): update carousel counter when navigating between images",
      createdAt: "2024-06-28T07:23:57.166Z",
      notes:
        'Issue Description\n    Came across this issue when testing on this branch refactor/swiper-consistency\n    The counter on the product image carousel does not update \n    This occurs on other PDPs where the product has more than one image \n    On Desktop the counter updates when clicking the arrows, when swiping the counter no longer updates as expected \n\nWhat steps will reproduce the problem?\n    Navigate to https://shop.*********.com/\n    Click the search icon and type "paperweight"\n    Click the "Limited Edition *********5 Paperweight" in the search results \n    Upon navigating to the PDP, scroll to the "Product image carousel" section \n    Scroll between the images\n    Observe as the number is not being updated when different images are shown \n\nWhat is the expected output? \nThe counter/number should update according the image that is shown \n\n',
      projectName: "*********",
    },

    {
      id: "1207647234574951",
      name: "Search function - not displaying searched words",
      createdAt: "2024-06-25T09:35:21.912Z",
      notes:
        "We have found a bug in the search function- it doesn’t display anything when you type something (search works). Please could this be fixed?\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=*********",
      projectName: "*********",
    },
    {
      id: "1207630116311765",
      name: "Can we please remove the notwoways.com button on the collection blocks on home page?\n",
      createdAt: "2024-06-21T07:04:17.178Z",
      notes: "https://app.asana.com/app/asana/-/get_asset?asset_id=*********",
      projectName: "*********",
    },
    {
      id: "1207630116311761",
      name: "PDPs: photo selector a bit glitchy if you go back and forward through the images and try selecting them",
      createdAt: "2024-06-21T07:04:09.914Z",
      notes: "Remove hover based navigation overall",
      projectName: "*********",
    },
    {
      id: "1207630116311759",
      name: "Collections Page: Words broken across lines",
      createdAt: "2024-06-21T07:04:09.548Z",
      notes: "",
      projectName: "*********",
    },
    {
      id: "1207630116311757",
      name: "Banner text needs to be sped up a bit in mobile. I took a look and can see any speed increases currently impact both desktop and mobile",
      createdAt: "2024-06-21T07:04:08.334Z",
      notes: "",
      projectName: "*********",
    },
    {
      id: "1207630116311755",
      name: "Home Page collection image full width banner needs a setting for mobile and another for desktop so we can upload 2 images to suit the diff aspect ratios",
      createdAt: "2024-06-21T07:04:07.934Z",
      notes: "",
      projectName: "*********",
    },
    {
      id: "1207630116311753",
      name: "The footer menu has words broken across lines",
      createdAt: "2024-06-21T07:04:07.451Z",
      notes:
        "Set \n--font-heading-scale: 1.7;\nOn the footer on mobile\nRevert on desktop",
      projectName: "*********",
    },
    {
      id: "1207630116311751",
      name: "In the mobile menu, can we please remove the region and currency at the bottom",
      createdAt: "2024-06-21T07:04:06.957Z",
      notes: "",
      projectName: "*********",
    },
    {
      id: "1207630116311749",
      name: "nothing appears in the mobile menu when opened (burger menu at the top)",
      createdAt: "2024-06-21T07:04:01.207Z",
      notes: "",
      projectName: "*********",
    },
    {
      id: "1207598289150842",
      name: "AW24 - Editorial section",
      createdAt: "2024-06-18T08:00:13.783Z",
      notes:
        "https://www.figma.com/design/*********/\n app.asana.com/app/asana/-/get_asset?asset_id=*********",
      projectName: "*********",
    },
    {
      id: "1207598289150840",
      name: "Shop the look - Allow to work on pages that aren't product pages",
      createdAt: "2024-06-18T07:43:47.694Z",
      notes:
        "This section does not work on pages that aren't product pages\n\nAdd a setting to choose a featured product\nIf the product is present, use that product instead\nThis needs to still work with the globally available product",
      projectName: "*********",
    },
    {
      id: "1207598289150838",
      name: "Featured collection - Allow for slider functionality on desktop",
      createdAt: "2024-06-18T07:41:58.564Z",
      notes:
        "Add support for using the slider component on desktop on the featured collection section",
      projectName: "*********",
    },
    {
      id: "1207571080027688",
      name: "Fix slider buttons on the product page",
      createdAt: "2024-06-14T07:38:09.944Z",
      notes: "",
      projectName: "*********",
    },
    {
      id: "1207571080027685",
      name: "Add notify me when available forms to archive",
      createdAt: "2024-06-14T07:36:41.877Z",
      notes:
        '{%- if product.metafields.custom.coming_soon_signup_form -%}\n              <div\n                class="{{ product.metafields.custom.coming_soon_signup_form.value }} klaviyo-form"\n              ></div>\n            {% else %}\n              <!-- Existing button -->\n            {%- endif -%}',
      projectName: "*********",
    },
    {
      id: "1207560698479490",
      name: "Apply new button style for featured collection navigation",
      createdAt: "2024-06-13T11:15:40.357Z",
      notes:
        "https://www.figma.com/design/********* a maximum with using the page-width class\n\nThe footsteps at the bottom are not a hard requirement. Just a nice to have\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=*********",
      projectName: "*********",
    },
    {
      id: "1207550553062696",
      name: "Archive timeline block",
      createdAt: "2024-06-12T12:17:15.995Z",
      notes:
        "Extend the timeline block\n\nSupport for showing images\n    below the title and CTA on mobile\n    Next to the image on the right on desktop\n\nAdd\n    Settings\n        Rich text override - If blank use the the product's description\n        Primary image override - If blank use the first image in the product's media\n        Secondary image override - If blank use the second image in the product's media\n        Button label - If blank use \"Shop now\"\n        Button destination - If blank use product URL\n",
      projectName: "*********",
    },
    {
      id: "1207538751495395",
      name: '"Find your NO" section',
      createdAt: "2024-06-11T12:35:39.443Z",
      notes:
        "Implement the find your no section per the designs\nhttps://www.figma.com/design/*********/\n/app.asana.com/app/asana/-/get_asset?asset_id=*********",
      projectName: "*********",
    },
    {
      id: "1207537374665515",
      name: "Extend the collage banner section to allow for video",
      createdAt: "2024-06-11T07:23:59.050Z",
      notes:
        "Add a new video block to the collage banner with settings for\n    A video\n    Rich Text\n\nhttps://www.figma.com/design/*********",
      projectName: "*********",
    },
    {
      id: "1207537374665513",
      name: "Header does not respond properly on origins page",
      createdAt: "2024-06-11T07:23:50.506Z",
      notes: "",
      projectName: "*********",
    },

    {
      id: "1207352973664581",
      name: "chore(gh): audit skip accessibility",
      createdAt: "2024-05-19T18:41:18.018Z",
      notes: "",
      projectName: "*********",
    },
    {
      id: "1207352973664569",
      name: "chore(all): audit form accessibility",
      createdAt: "2024-05-19T18:40:49.557Z",
      notes:
        "A customer should be able to fill out all forms using only a keyboard.\n\nValidate:\n    Registration forms\n    Login forms\n    Contact forms\n",
      projectName: "*********",
    },
    {
      id: "1207352973664533",
      name: "chore(all): audit keyboard navigation",
      createdAt: "2024-05-19T18:39:50.887Z",
      notes:
        "Functionally, a user should be able to functionally use the site using a keyboard only.\n\nA customer should be able to add to cart, view their cart, and check out using their keyboard\nFor example:\n    From the homepage\n    Navigate to a collection page\n    Navigate to a specific product\n    Add that product to cart\n    View their cart\n    Check out\n\nA customer should be able to use the navigation bar with their keyboard, including submenus\n\nA customer should be able to navigate carousels\n\n",
      projectName: "*********",
    },
    {
      id: "1207352973664525",
      name: "chore(pw): audit text resizing",
      createdAt: "2024-05-19T18:39:40.827Z",
      notes:
        "When applying font size scaling through browser accessibility settings, a user should be able to use all functionality on the site without elements overflowing due to larger text. \n\nIf any changes are required, note them down on this task so they can be addressed separately.",
      projectName: "*********",
    },
    {
      id: "1207352973664521",
      name: "chore(gh): audit text resizing",
      createdAt: "2024-05-19T18:39:26.673Z",
      notes:
        "When applying font size scaling through browser accessibility settings, a user should be able to use all functionality on the site without elements overflowing due to larger text. \n\nIf any changes are required, note them down on this task so they can be addressed separately.",
      projectName: "*********",
    },
    {
      id: "1207352973664513",
      name: "chore(pw): audit color contrast",
      createdAt: "2024-05-19T18:39:17.303Z",
      notes: "",
      projectName: "*********",
    },
    {
      id: "1207352973664509",
      name: "chore(gh): audit color contrast",
      createdAt: "2024-05-19T18:38:21.207Z",
      notes: "",
      projectName: "*********",
    },
    {
      id: "1207352973664473",
      name: "spike(gh): evaluate content hierarchy on key pages",
      createdAt: "2024-05-19T18:32:02.844Z",
      notes:
        "Homepage, Collectiopn pages, and Product pages should follow proper content hierarchy\n\nhttps://chromewebstore.google.com/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi?hl=en",
      projectName: "*********",
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
      id: "1207129979718599",
      name: "PUR - Web Performance",
      createdAt: "2024-04-22T13:31:13.224Z",
      notes: "https://app.asana.com/app/asana/-/get_asset?asset_id=*********",
      projectName: "*********",
    },
    {
      id: "1206587975979445",
      name: "fix(shop-the-look): fix shop-the-look functionality on mobile",
      createdAt: "2024-02-13T10:38:34.674Z",
      notes:
        "Issue Description\nOn mobile when the shop the look section is on other pages beside the PDP the UX is not as expected i.e.\n    the carousel is not functioning (cannot scroll) even the appearance is different \n    the quick shop is not functioning \n    the burger menu is not functioning \n    in some instances delayed navigation to the PDPs on the section \n\nWhat steps will reproduce the problem?\n    Navigate to https://*********.com?preview_theme_id=127894487113 where the issue can be reproduced \n    Navigate to the https://shop.*********.com/collections/view-all-new-arrivals (page that is not PDP where the section has been added )on mobile \n    Click the quick shop\n    Click the burger menu\n    Click the carousel \n    Observe as all are not responsive \n\nWhat is the expected output? \nThe following functionality...\n    Carousel\n    Quick shop \n    Burger menu \nshould remain working and responsive on any page where the shop the look section has been added \n\n\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=*********",
      projectName: "*********",
    },
    {
      id: "1206551753555682",
      name: "fix(404): resolve a route for a page navigating to a 404",
      createdAt: "2024-02-08T06:20:34.312Z",
      notes:
        "Issue Description\nPages redirect to 404 when trying to navigate to the PDP \n\nWhat steps will reproduce the problem?\n    Navigate to https://www.*********.com/products/*********\n    Click the first three products (open on a new tab) as shown on the attached image \n    Observe as they redirect to 404s on the https://shop.*********.com site \n\n\nWhat is the expected output? \nThe page should not redirect to 404 \n\n\nhttps://app.asana.com/app/asana/-/get_asset?asset_id=*********",
      projectName: "*********",
    },
  ],
};
