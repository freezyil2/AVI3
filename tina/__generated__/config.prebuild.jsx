// tina/config.ts
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  branch: "main",
  clientId: null,
  token: null,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "homepage",
        label: "\u05D3\u05E3 \u05D4\u05D1\u05D9\u05EA",
        path: "content/homepage",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        fields: [
          {
            type: "string",
            name: "heroTitle",
            label: "\u05DB\u05D5\u05EA\u05E8\u05EA \u05E8\u05D0\u05E9\u05D9\u05EA (Hero)",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "heroSubtitle",
            label: "\u05DB\u05D5\u05EA\u05E8\u05EA \u05DE\u05E9\u05E0\u05D4 (Hero)"
          },
          {
            type: "object",
            name: "homepageLabels",
            label: "\u05EA\u05D5\u05DB\u05DF \u05D3\u05E3 \u05D4\u05D1\u05D9\u05EA \u2013 \u05DB\u05DC \u05D4\u05DE\u05D9\u05DC\u05D9\u05DD \u05D5\u05D4\u05DE\u05E9\u05E4\u05D8\u05D9\u05DD",
            description: "\u05E9\u05D9\u05E0\u05D5\u05D9 \u05DB\u05D0\u05DF \u05DE\u05E9\u05E4\u05D9\u05E2 \u05E2\u05DC \u05DB\u05DC \u05D4\u05D8\u05E7\u05E1\u05D8\u05D9\u05DD \u05E9\u05DE\u05D5\u05E4\u05D9\u05E2\u05D9\u05DD \u05D1\u05D3\u05E3 \u05D4\u05D1\u05D9\u05EA. \u05D0\u05E4\u05E9\u05E8 \u05DC\u05E9\u05E0\u05D5\u05EA \u05DB\u05D5\u05EA\u05E8\u05D5\u05EA, \u05EA\u05D9\u05D0\u05D5\u05E8\u05D9\u05DD, \u05DB\u05E4\u05EA\u05D5\u05E8\u05D9\u05DD \u05D5\u05E2\u05D5\u05D3.",
            fields: [
              { type: "string", name: "heroTagline", label: "\u05EA\u05D2\u05D9\u05EA \u05DE\u05E2\u05DC \u05D4\u05DB\u05D5\u05EA\u05E8\u05EA (Hero)" },
              { type: "string", name: "heroParagraph", label: "\u05E4\u05E1\u05E7\u05D4 \u05DE\u05EA\u05D7\u05EA \u05DC\u05DB\u05D5\u05EA\u05E8\u05EA (\u05E9\u05D5\u05E8\u05D4 \u05E9\u05E0\u05D9\u05D9\u05D4)", ui: { component: "textarea" } },
              { type: "string", name: "heroBtnDestinations", label: "\u05DB\u05E4\u05EA\u05D5\u05E8 \u2013 \u05D2\u05DC\u05D4 \u05D9\u05E2\u05D3\u05D9\u05DD" },
              { type: "string", name: "heroBtnFleet", label: "\u05DB\u05E4\u05EA\u05D5\u05E8 \u2013 \u05D4\u05E6\u05D9 \u05E9\u05DC\u05E0\u05D5" },
              { type: "string", name: "scrollDown", label: "\u05D2\u05DC\u05D5\u05DC \u05DC\u05DE\u05D8\u05D4" },
              { type: "string", name: "loadingText", label: "\u05D8\u05E7\u05E1\u05D8 \u05D8\u05E2\u05D9\u05E0\u05D4" },
              {
                type: "object",
                name: "stats",
                label: "\u05E1\u05D8\u05D8\u05D9\u05E1\u05D8\u05D9\u05E7\u05D5\u05EA (4 \u05E4\u05E8\u05D9\u05D8\u05D9\u05DD)",
                list: true,
                fields: [
                  { type: "string", name: "value", label: "\u05DE\u05E1\u05E4\u05E8" },
                  { type: "string", name: "label", label: "\u05EA\u05D9\u05D0\u05D5\u05E8 (\u05DC\u05DE\u05E9\u05DC: \u05D9\u05E2\u05D3\u05D9\u05DD \u05D1\u05E2\u05D5\u05DC\u05DD)" }
                ]
              },
              { type: "string", name: "destinationsTitle", label: "\u05DB\u05D5\u05EA\u05E8\u05EA \u05D9\u05E2\u05D3\u05D9\u05DD" },
              { type: "string", name: "destinationsHighlight", label: "\u05DE\u05D9\u05DC\u05D4 \u05DE\u05D5\u05D3\u05D2\u05E9\u05EA (\u05DC\u05DE\u05E9\u05DC: \u05E4\u05D5\u05E4\u05D5\u05DC\u05E8\u05D9\u05D9\u05DD)" },
              { type: "string", name: "destinationsSubtitle", label: "\u05EA\u05D9\u05D0\u05D5\u05E8 \u05DE\u05EA\u05D7\u05EA \u05DC\u05D9\u05E2\u05D3\u05D9\u05DD", ui: { component: "textarea" } },
              { type: "string", name: "fleetTitlePrefix", label: "\u05E6\u05D9 \u2013 \u05EA\u05D7\u05D9\u05DC\u05EA \u05DB\u05D5\u05EA\u05E8\u05EA" },
              { type: "string", name: "fleetTitleHighlight", label: "\u05E6\u05D9 \u2013 \u05DE\u05D9\u05DC\u05D4 \u05DE\u05D5\u05D3\u05D2\u05E9\u05EA" },
              { type: "string", name: "fleetTitleSuffix", label: "\u05E6\u05D9 \u2013 \u05E1\u05D5\u05E3 \u05DB\u05D5\u05EA\u05E8\u05EA" },
              { type: "string", name: "fleetSubtitle", label: "\u05EA\u05D9\u05D0\u05D5\u05E8 \u05DE\u05EA\u05D7\u05EA \u05DC\u05E6\u05D9", ui: { component: "textarea" } },
              { type: "string", name: "fleetSearchPlaceholder", label: "\u05DE\u05E7\u05D5\u05DD \u05D7\u05D9\u05E4\u05D5\u05E9 \u05D0\u05D5\u05E0\u05D9\u05D5\u05EA" },
              { type: "string", name: "fleetNoResults", label: "\u05DB\u05E9\u05D0\u05D9\u05DF \u05EA\u05D5\u05E6\u05D0\u05D5\u05EA \u05D7\u05D9\u05E4\u05D5\u05E9" },
              { type: "string", name: "fleetViewAll", label: "\u05DB\u05E4\u05EA\u05D5\u05E8 \u05E6\u05E4\u05D4 \u05D1\u05DB\u05DC \u05D4\u05E6\u05D9" },
              { type: "string", name: "cruiseLinesTitlePrefix", label: "\u05D7\u05D1\u05E8\u05D5\u05EA \u05E1\u05E4\u05E0\u05D5\u05EA \u2013 \u05EA\u05D7\u05D9\u05DC\u05EA \u05DB\u05D5\u05EA\u05E8\u05EA" },
              { type: "string", name: "cruiseLinesTitleHighlight", label: "\u05D7\u05D1\u05E8\u05D5\u05EA \u05E1\u05E4\u05E0\u05D5\u05EA \u2013 \u05DE\u05D9\u05DC\u05D4 \u05DE\u05D5\u05D3\u05D2\u05E9\u05EA" },
              { type: "string", name: "cruiseLinesTitleSuffix", label: "\u05D7\u05D1\u05E8\u05D5\u05EA \u05E1\u05E4\u05E0\u05D5\u05EA \u2013 \u05E1\u05D5\u05E3 \u05DB\u05D5\u05EA\u05E8\u05EA" },
              { type: "string", name: "cruiseLinesSubtitle", label: "\u05EA\u05D9\u05D0\u05D5\u05E8 \u05DE\u05EA\u05D7\u05EA \u05DC\u05D7\u05D1\u05E8\u05D5\u05EA" },
              { type: "string", name: "hotelsTitle", label: "\u05DB\u05D5\u05EA\u05E8\u05EA \u05DE\u05DC\u05D5\u05E0\u05D5\u05EA" },
              { type: "string", name: "hotelsSubtitle", label: "\u05EA\u05D9\u05D0\u05D5\u05E8 \u05DE\u05DC\u05D5\u05E0\u05D5\u05EA", ui: { component: "textarea" } },
              { type: "string", name: "hotelsButton", label: "\u05DB\u05E4\u05EA\u05D5\u05E8 \u05DE\u05DC\u05D5\u05E0\u05D5\u05EA" },
              { type: "string", name: "howItWorksTitle", label: "\u05D0\u05D9\u05DA \u05D6\u05D4 \u05E2\u05D5\u05D1\u05D3 \u2013 \u05EA\u05D7\u05D9\u05DC\u05EA \u05DB\u05D5\u05EA\u05E8\u05EA" },
              { type: "string", name: "howItWorksHighlight", label: "\u05D0\u05D9\u05DA \u05D6\u05D4 \u05E2\u05D5\u05D1\u05D3 \u2013 \u05DE\u05D9\u05DC\u05D4 \u05DE\u05D5\u05D3\u05D2\u05E9\u05EA" },
              { type: "string", name: "howItWorksSubtitle", label: "\u05EA\u05D9\u05D0\u05D5\u05E8 \u05D0\u05D9\u05DA \u05D6\u05D4 \u05E2\u05D5\u05D1\u05D3" },
              {
                type: "object",
                name: "howItWorksSteps",
                label: "\u05E9\u05DC\u05D1\u05D9 \u05D0\u05D9\u05DA \u05D6\u05D4 \u05E2\u05D5\u05D1\u05D3 (4 \u05E9\u05DC\u05D1\u05D9\u05DD)",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "\u05E9\u05DC\u05D1" }) },
                fields: [
                  { type: "string", name: "title", label: "\u05DB\u05D5\u05EA\u05E8\u05EA \u05E9\u05DC\u05D1" },
                  { type: "string", name: "desc", label: "\u05EA\u05D9\u05D0\u05D5\u05E8", ui: { component: "textarea" } }
                ]
              },
              { type: "string", name: "whyChooseTitle", label: "\u05DC\u05DE\u05D4 \u05DC\u05D1\u05D7\u05D5\u05E8 \u2013 \u05EA\u05D7\u05D9\u05DC\u05EA \u05DB\u05D5\u05EA\u05E8\u05EA" },
              { type: "string", name: "whyChooseHighlight", label: "\u05DC\u05DE\u05D4 \u05DC\u05D1\u05D7\u05D5\u05E8 \u2013 \u05DE\u05D9\u05DC\u05D4 \u05DE\u05D5\u05D3\u05D2\u05E9\u05EA" },
              { type: "string", name: "whyChooseSubtitle", label: "\u05EA\u05D9\u05D0\u05D5\u05E8 \u05DC\u05DE\u05D4 \u05DC\u05D1\u05D7\u05D5\u05E8 \u05D1\u05E0\u05D5" },
              {
                type: "object",
                name: "whyChooseItems",
                label: "3 \u05E1\u05D9\u05D1\u05D5\u05EA \u05DC\u05D1\u05D7\u05D5\u05E8 \u05D1\u05E0\u05D5",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title || "\u05E1\u05D9\u05D1\u05D4" }) },
                fields: [
                  { type: "string", name: "title", label: "\u05DB\u05D5\u05EA\u05E8\u05EA" },
                  { type: "string", name: "desc", label: "\u05EA\u05D9\u05D0\u05D5\u05E8", ui: { component: "textarea" } }
                ]
              },
              { type: "string", name: "testimonialsTitle", label: "\u05DE\u05D4 \u05D4\u05DC\u05E7\u05D5\u05D7\u05D5\u05EA \u2013 \u05EA\u05D7\u05D9\u05DC\u05EA \u05DB\u05D5\u05EA\u05E8\u05EA" },
              { type: "string", name: "testimonialsHighlight", label: "\u05DE\u05D4 \u05D4\u05DC\u05E7\u05D5\u05D7\u05D5\u05EA \u2013 \u05DE\u05D9\u05DC\u05D4 \u05DE\u05D5\u05D3\u05D2\u05E9\u05EA" },
              { type: "string", name: "testimonialsIntro", label: "\u05E4\u05E1\u05E7\u05EA intro \u05D4\u05DE\u05DC\u05E6\u05D5\u05EA" },
              {
                type: "object",
                name: "testimonials",
                label: "\u05D4\u05DE\u05DC\u05E6\u05D5\u05EA \u05DC\u05E7\u05D5\u05D7\u05D5\u05EA (\u05E8\u05E9\u05D9\u05DE\u05D4)",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.name || "\u05D4\u05DE\u05DC\u05E6\u05D4" }) },
                fields: [
                  { type: "string", name: "name", label: "\u05E9\u05DD" },
                  { type: "string", name: "text", label: "\u05EA\u05D5\u05DB\u05DF \u05D4\u05D4\u05DE\u05DC\u05E6\u05D4", ui: { component: "textarea" } },
                  { type: "string", name: "date", label: "\u05EA\u05D0\u05E8\u05D9\u05DA" }
                ]
              },
              { type: "string", name: "blogTitle", label: "\u05D1\u05DC\u05D5\u05D2 \u2013 \u05DB\u05D5\u05EA\u05E8\u05EA" },
              { type: "string", name: "blogHighlight", label: "\u05D1\u05DC\u05D5\u05D2 \u2013 \u05DE\u05D9\u05DC\u05D4 \u05DE\u05D5\u05D3\u05D2\u05E9\u05EA" },
              { type: "string", name: "blogAllPosts", label: "\u05E7\u05D9\u05E9\u05D5\u05E8 \u05DB\u05DC \u05D4\u05DB\u05EA\u05D1\u05D5\u05EA" },
              { type: "string", name: "blogAuthorLabel", label: "\u05EA\u05D5\u05D5\u05D9\u05EA \u05DE\u05D7\u05D1\u05E8 (\u05DC\u05DE\u05E9\u05DC: \u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05D0\u05EA\u05E8)" },
              { type: "string", name: "blogReadMore", label: "\u05E7\u05E8\u05D0 \u05E2\u05D5\u05D3" },
              { type: "string", name: "ourStoryTitle", label: "\u05D4\u05E1\u05D9\u05E4\u05D5\u05E8 \u05E9\u05DC\u05E0\u05D5 \u2013 \u05DB\u05D5\u05EA\u05E8\u05EA" },
              { type: "string", name: "ourStoryHighlight", label: "\u05D4\u05E1\u05D9\u05E4\u05D5\u05E8 \u05E9\u05DC\u05E0\u05D5 \u2013 \u05DE\u05D9\u05DC\u05D4 \u05DE\u05D5\u05D3\u05D2\u05E9\u05EA" },
              { type: "string", name: "ourStoryParagraph1", label: "\u05E4\u05E1\u05E7\u05D4 \u05E8\u05D0\u05E9\u05D5\u05E0\u05D4 \u05D4\u05E1\u05D9\u05E4\u05D5\u05E8", ui: { component: "textarea" } },
              { type: "string", name: "ourStoryParagraph2", label: "\u05E4\u05E1\u05E7\u05D4 \u05E9\u05E0\u05D9\u05D9\u05D4 \u05D4\u05E1\u05D9\u05E4\u05D5\u05E8", ui: { component: "textarea" } },
              { type: "string", name: "ourStoryTeamLabel", label: "\u05E6\u05D5\u05D5\u05EA \u05D4\u05DE\u05D5\u05DE\u05D7\u05D9\u05DD \u2013 \u05D8\u05E7\u05E1\u05D8" },
              { type: "string", name: "faqTitle", label: "\u05E9\u05D0\u05DC\u05D5\u05EA \u05E0\u05E4\u05D5\u05E6\u05D5\u05EA \u2013 \u05DB\u05D5\u05EA\u05E8\u05EA" },
              { type: "string", name: "faqHighlight", label: "\u05E9\u05D0\u05DC\u05D5\u05EA \u05E0\u05E4\u05D5\u05E6\u05D5\u05EA \u2013 \u05DE\u05D9\u05DC\u05D4 \u05DE\u05D5\u05D3\u05D2\u05E9\u05EA" },
              { type: "string", name: "faqSubtitle", label: "\u05EA\u05D9\u05D0\u05D5\u05E8 \u05DE\u05EA\u05D7\u05EA \u05DC\u05E9\u05D0\u05DC\u05D5\u05EA" },
              { type: "string", name: "footerBrand", label: "\u05E4\u05D5\u05D8\u05E8 \u2013 \u05E9\u05DD \u05D4\u05DE\u05D5\u05EA\u05D2 (\u05D7\u05DC\u05E7 \u05E8\u05D0\u05E9\u05D5\u05DF)" },
              { type: "string", name: "footerBrandHighlight", label: "\u05E4\u05D5\u05D8\u05E8 \u2013 \u05DE\u05D9\u05DC\u05D4 \u05DE\u05D5\u05D3\u05D2\u05E9\u05EA (\u05DC\u05DE\u05E9\u05DC: \u05DC\u05DB\u05D5\u05DC)" },
              { type: "string", name: "footerCopyright", label: "\u05E4\u05D5\u05D8\u05E8 \u2013 \u05D6\u05DB\u05D5\u05D9\u05D5\u05EA \u05D9\u05D5\u05E6\u05E8\u05D9\u05DD", ui: { component: "textarea" } },
              { type: "string", name: "contactTitle", label: "\u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8 \u2013 \u05DB\u05D5\u05EA\u05E8\u05EA" },
              { type: "string", name: "contactTitleHighlight", label: "\u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8 \u2013 \u05DE\u05D9\u05DC\u05D4 \u05DE\u05D5\u05D3\u05D2\u05E9\u05EA" },
              { type: "string", name: "contactDescription", label: "\u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8 \u2013 \u05E4\u05E1\u05E7\u05D4", ui: { component: "textarea" } },
              { type: "string", name: "contactLabelName", label: "\u05E9\u05D3\u05D4 \u05E9\u05DD \u05DE\u05DC\u05D0" },
              { type: "string", name: "contactLabelPhone", label: "\u05E9\u05D3\u05D4 \u05D8\u05DC\u05E4\u05D5\u05DF" },
              { type: "string", name: "contactLabelEmail", label: "\u05E9\u05D3\u05D4 \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC" },
              { type: "string", name: "contactLabelMessage", label: "\u05E9\u05D3\u05D4 \u05D4\u05D5\u05D3\u05E2\u05D4" },
              { type: "string", name: "contactPlaceholderName", label: "\u05DE\u05E7\u05D5\u05DD \u05E9\u05DD (placeholder)" },
              { type: "string", name: "contactPlaceholderPhone", label: "\u05DE\u05E7\u05D5\u05DD \u05D8\u05DC\u05E4\u05D5\u05DF" },
              { type: "string", name: "contactPlaceholderEmail", label: "\u05DE\u05E7\u05D5\u05DD \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC" },
              { type: "string", name: "contactPlaceholderMessage", label: "\u05DE\u05E7\u05D5\u05DD \u05D4\u05D5\u05D3\u05E2\u05D4" },
              { type: "string", name: "contactButtonSend", label: "\u05DB\u05E4\u05EA\u05D5\u05E8 \u05E9\u05DC\u05D7 \u05D4\u05D5\u05D3\u05E2\u05D4" },
              { type: "string", name: "contactButtonSending", label: "\u05DB\u05E4\u05EA\u05D5\u05E8 \u05D1\u05D6\u05DE\u05DF \u05E9\u05DC\u05D9\u05D7\u05D4" },
              { type: "string", name: "contactSuccessMessage", label: "\u05D4\u05D5\u05D3\u05E2\u05EA \u05D4\u05E6\u05DC\u05D7\u05D4" },
              { type: "string", name: "contactErrorMessage", label: "\u05D4\u05D5\u05D3\u05E2\u05EA \u05E9\u05D2\u05D9\u05D0\u05D4" },
              { type: "string", name: "contactPhoneValue", label: "\u05D8\u05DC\u05E4\u05D5\u05DF \u05DC\u05D4\u05E6\u05D2\u05D4" },
              { type: "string", name: "contactEmailValue", label: "\u05D0\u05D9\u05DE\u05D9\u05D9\u05DC \u05DC\u05D4\u05E6\u05D2\u05D4" },
              { type: "string", name: "contactAddressValue", label: "\u05DB\u05EA\u05D5\u05D1\u05EA \u05DC\u05D4\u05E6\u05D2\u05D4" }
            ]
          },
          {
            type: "object",
            name: "detailPageLabels",
            label: "\u05EA\u05D5\u05D5\u05D9\u05D5\u05EA \u05D3\u05E3 \u05E4\u05E8\u05D8 (\u05D9\u05E2\u05D3 / \u05D0\u05D5\u05E0\u05D9\u05D9\u05D4)",
            description: "\u05E9\u05DE\u05D5\u05EA \u05D4\u05E1\u05E2\u05D9\u05E4\u05D9\u05DD \u05D5\u05D4\u05DB\u05E4\u05EA\u05D5\u05E8\u05D9\u05DD \u05D1\u05D3\u05E4\u05D9 \u05D4\u05E4\u05E8\u05D8 \u05E9\u05DC \u05D9\u05E2\u05D3\u05D9\u05DD \u05D5\u05D0\u05D5\u05E0\u05D9\u05D5\u05EA. \u05D0\u05E4\u05E9\u05E8 \u05DC\u05E9\u05E0\u05D5\u05EA \u05DB\u05D0\u05DF \u05D0\u05EA \u05DB\u05DC \u05D4\u05DB\u05D5\u05EA\u05E8\u05D5\u05EA.",
            fields: [
              { type: "string", name: "backToHome", label: "\u05E7\u05D9\u05E9\u05D5\u05E8 \u05D7\u05D6\u05E8\u05D4 (\u05DC\u05DE\u05E9\u05DC: \u05D7\u05D6\u05E8\u05D4 \u05DC\u05D3\u05E3 \u05D4\u05D1\u05D9\u05EA)" },
              { type: "string", name: "aboutTitle", label: "\u05DB\u05D5\u05EA\u05E8\u05EA \u05E1\u05E2\u05D9\u05E3 \u05D0\u05D5\u05D3\u05D5\u05EA" },
              { type: "string", name: "noDescriptionFallback", label: "\u05D8\u05E7\u05E1\u05D8 \u05DB\u05E9\u05D0\u05D9\u05DF \u05EA\u05D9\u05D0\u05D5\u05E8" },
              { type: "string", name: "pointsOfInterestTitle", label: "\u05DB\u05D5\u05EA\u05E8\u05EA \u05E0\u05E7\u05D5\u05D3\u05D5\u05EA \u05E2\u05E0\u05D9\u05D9\u05DF" },
              { type: "string", name: "weatherTitle", label: "\u05DB\u05D5\u05EA\u05E8\u05EA \u05DE\u05D6\u05D2 \u05D0\u05D5\u05D5\u05D9\u05E8" },
              { type: "string", name: "mapTitle", label: "\u05DB\u05D5\u05EA\u05E8\u05EA \u05DE\u05E4\u05EA \u05D4\u05E0\u05EA\u05D9\u05D1" },
              { type: "string", name: "featuresTitle", label: "\u05DB\u05D5\u05EA\u05E8\u05EA \u05DE\u05D0\u05E4\u05D9\u05D9\u05E0\u05D9\u05DD \u05D5\u05DE\u05EA\u05E7\u05E0\u05D9\u05DD (\u05D0\u05D5\u05E0\u05D9\u05D9\u05D4)" },
              { type: "string", name: "specsTitle", label: "\u05DB\u05D5\u05EA\u05E8\u05EA \u05DE\u05E4\u05E8\u05D8 \u05D8\u05DB\u05E0\u05D9" },
              { type: "string", name: "specsLength", label: "\u05EA\u05D5\u05D5\u05D9\u05EA \u05D0\u05D5\u05E8\u05DA" },
              { type: "string", name: "specsSpeed", label: "\u05EA\u05D5\u05D5\u05D9\u05EA \u05DE\u05D4\u05D9\u05E8\u05D5\u05EA" },
              { type: "string", name: "specsCapacity", label: "\u05EA\u05D5\u05D5\u05D9\u05EA \u05E7\u05D9\u05D1\u05D5\u05DC\u05EA" },
              { type: "string", name: "specsTonnage", label: "\u05EA\u05D5\u05D5\u05D9\u05EA \u05EA\u05E4\u05D5\u05E1\u05D4" },
              { type: "string", name: "noSpecsFallback", label: "\u05D8\u05E7\u05E1\u05D8 \u05DB\u05E9\u05D0\u05D9\u05DF \u05DE\u05E4\u05E8\u05D8" },
              { type: "string", name: "contactCtaTitle", label: "\u05DB\u05D5\u05EA\u05E8\u05EA \u05E7\u05D5\u05E4\u05E1\u05EA \u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8" },
              { type: "string", name: "contactCtaParagraph", label: "\u05E4\u05E1\u05E7\u05D4 \u05D1\u05E7\u05D5\u05E4\u05E1\u05D4 (\u05D4\u05E9\u05EA\u05DE\u05E9\u05D5 \u05D1\u05BE{{name}} \u05DC\u05E9\u05DD \u05D4\u05D0\u05D5\u05E0\u05D9\u05D9\u05D4)" },
              { type: "string", name: "contactCtaButton", label: "\u05D8\u05E7\u05E1\u05D8 \u05DB\u05E4\u05EA\u05D5\u05E8 \u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8" },
              { type: "string", name: "galleryTitle", label: "\u05DB\u05D5\u05EA\u05E8\u05EA \u05D2\u05DC\u05E8\u05D9\u05D9\u05EA \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA (\u05D0\u05D5\u05E0\u05D9\u05D9\u05D4)" }
            ]
          },
          {
            type: "object",
            name: "fleetPageLabels",
            label: "\u05EA\u05D5\u05DB\u05DF \u05D3\u05E3 \u05E6\u05D9 \u05D4\u05D0\u05D5\u05E0\u05D9\u05D5\u05EA",
            description: "\u05DB\u05DC \u05D4\u05DB\u05D5\u05EA\u05E8\u05D5\u05EA, \u05D4\u05EA\u05D9\u05D0\u05D5\u05E8\u05D9\u05DD \u05D5\u05D4\u05EA\u05D5\u05D5\u05D9\u05D5\u05EA \u05D1\u05E2\u05DE\u05D5\u05D3 \u05E6\u05D9 \u05D4\u05D0\u05D5\u05E0\u05D9\u05D5\u05EA (\u05DB\u05D5\u05DC\u05DC \u05DB\u05E8\u05D8\u05D9\u05E1\u05D9 \u05D4\u05D0\u05D5\u05E0\u05D9\u05D5\u05EA).",
            fields: [
              { type: "string", name: "backToHome", label: "\u05E7\u05D9\u05E9\u05D5\u05E8 \u05D7\u05D6\u05E8\u05D4 (\u05D7\u05D6\u05E8\u05D4 \u05DC\u05D3\u05E3 \u05D4\u05D1\u05D9\u05EA)" },
              { type: "string", name: "titlePrefix", label: "\u05DB\u05D5\u05EA\u05E8\u05EA \u2013 \u05EA\u05D7\u05D9\u05DC\u05D4 (\u05DC\u05DE\u05E9\u05DC: \u05E6\u05D9 \u05D4)" },
              { type: "string", name: "titleHighlight", label: "\u05DB\u05D5\u05EA\u05E8\u05EA \u2013 \u05DE\u05D9\u05DC\u05D4 \u05DE\u05D5\u05D3\u05D2\u05E9\u05EA (\u05DC\u05DE\u05E9\u05DC: \u05D0\u05D5\u05E0\u05D9\u05D5\u05EA)" },
              { type: "string", name: "subtitle", label: "\u05EA\u05D9\u05D0\u05D5\u05E8 \u05DE\u05EA\u05D7\u05EA \u05DC\u05DB\u05D5\u05EA\u05E8\u05EA", ui: { component: "textarea" } },
              { type: "string", name: "searchPlaceholder", label: "\u05DE\u05E7\u05D5\u05DD \u05D7\u05D9\u05E4\u05D5\u05E9 (placeholder)" },
              { type: "string", name: "noResults", label: "\u05DB\u05E9\u05D0\u05D9\u05DF \u05EA\u05D5\u05E6\u05D0\u05D5\u05EA \u05D7\u05D9\u05E4\u05D5\u05E9" },
              { type: "string", name: "clearSearch", label: "\u05DB\u05E4\u05EA\u05D5\u05E8 \u05E0\u05E7\u05D4 \u05D7\u05D9\u05E4\u05D5\u05E9" },
              { type: "string", name: "shipsCountLabel", label: "\u05EA\u05D5\u05D5\u05D9\u05EA \u05DE\u05E1\u05E4\u05E8 \u05D0\u05D5\u05E0\u05D9\u05D5\u05EA (\u05DC\u05DE\u05E9\u05DC: \u05D0\u05D5\u05E0\u05D9\u05D5\u05EA \u05DE\u05D5\u05E6\u05D2\u05D5\u05EA)" },
              { type: "string", name: "categoryLabel", label: "\u05EA\u05D5\u05D5\u05D9\u05EA \u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D4 \u05D1\u05DB\u05E8\u05D8\u05D9\u05E1 (\u05DC\u05DE\u05E9\u05DC: \u05E6\u05D9 \u05D4\u05D0\u05D5\u05E0\u05D9\u05D5\u05EA)" },
              { type: "string", name: "speedLabel", label: "\u05EA\u05D5\u05D5\u05D9\u05EA \u05DE\u05D4\u05D9\u05E8\u05D5\u05EA" },
              { type: "string", name: "capacityLabel", label: "\u05EA\u05D5\u05D5\u05D9\u05EA \u05E7\u05D9\u05D1\u05D5\u05DC\u05EA" },
              { type: "string", name: "fullSpecsLink", label: "\u05E7\u05D9\u05E9\u05D5\u05E8 \u05DE\u05E4\u05E8\u05D8 \u05D8\u05DB\u05E0\u05D9 \u05DE\u05DC\u05D0" }
            ]
          },
          {
            type: "string",
            name: "homepageShipIds",
            label: "\u05D0\u05D5\u05E0\u05D9\u05D5\u05EA \u05DC\u05D4\u05E6\u05D2\u05D4 \u05D1\u05D3\u05E3 \u05D4\u05D1\u05D9\u05EA",
            list: true,
            description: "\u05E8\u05E9\u05D9\u05DE\u05EA \u05DE\u05D6\u05D4\u05D4 \u05D0\u05D5\u05E0\u05D9\u05D5\u05EA (id) \u05DC\u05D4\u05E6\u05D2\u05D4 \u05D1\u05D7\u05DC\u05E7 \u05D4\u05E6\u05D9 \u05D1\u05D3\u05E3 \u05D4\u05D1\u05D9\u05EA. \u05D4\u05E9\u05D0\u05E8 \u05E8\u05D9\u05E7 \u05DB\u05D3\u05D9 \u05DC\u05D4\u05E6\u05D9\u05D2 \u05D0\u05EA \u05DB\u05DC \u05D4\u05D0\u05D5\u05E0\u05D9\u05D5\u05EA."
          },
          {
            type: "object",
            name: "blogPageLabels",
            label: "\u05EA\u05D5\u05DB\u05DF \u05D3\u05E3 \u05D4\u05D1\u05DC\u05D5\u05D2",
            description: "\u05DB\u05DC \u05D4\u05DB\u05D5\u05EA\u05E8\u05D5\u05EA, \u05D4\u05EA\u05D9\u05D0\u05D5\u05E8\u05D9\u05DD \u05D5\u05D4\u05EA\u05D5\u05D5\u05D9\u05D5\u05EA \u05D1\u05E2\u05DE\u05D5\u05D3 \u05D4\u05D1\u05DC\u05D5\u05D2 (\u05DB\u05D5\u05DC\u05DC \u05DB\u05E8\u05D8\u05D9\u05E1\u05D9 \u05D4\u05DB\u05EA\u05D1\u05D5\u05EA).",
            fields: [
              { type: "string", name: "backToBlog", label: "\u05E7\u05D9\u05E9\u05D5\u05E8 \u05D7\u05D6\u05E8\u05D4 \u05DC\u05D1\u05DC\u05D5\u05D2" },
              { type: "string", name: "titlePrefix", label: "\u05DB\u05D5\u05EA\u05E8\u05EA \u2013 \u05EA\u05D7\u05D9\u05DC\u05D4 (\u05DC\u05DE\u05E9\u05DC: \u05D1\u05DC\u05D5\u05D2)" },
              { type: "string", name: "titleHighlight", label: "\u05DB\u05D5\u05EA\u05E8\u05EA \u2013 \u05DE\u05D9\u05DC\u05D4 \u05DE\u05D5\u05D3\u05D2\u05E9\u05EA (\u05DC\u05DE\u05E9\u05DC: \u05D4\u05E4\u05DC\u05D2\u05D5\u05EA)" },
              { type: "string", name: "subtitle", label: "\u05EA\u05D9\u05D0\u05D5\u05E8 \u05DE\u05EA\u05D7\u05EA \u05DC\u05DB\u05D5\u05EA\u05E8\u05EA", ui: { component: "textarea" } },
              { type: "string", name: "searchPlaceholder", label: "\u05DE\u05E7\u05D5\u05DD \u05D7\u05D9\u05E4\u05D5\u05E9 (placeholder)" },
              { type: "string", name: "featuredBadge", label: "\u05EA\u05D2\u05D9\u05EA \u05DE\u05D5\u05DE\u05DC\u05E5 (\u05D1\u05DB\u05E8\u05D8\u05D9\u05E1 \u05D1\u05D5\u05DC\u05D8)" },
              { type: "string", name: "readFullArticle", label: "\u05E7\u05E8\u05D0 \u05D0\u05EA \u05D4\u05DB\u05EA\u05D1\u05D4 \u05D4\u05DE\u05DC\u05D0\u05D4" },
              { type: "string", name: "readMore", label: "\u05E7\u05E8\u05D0 \u05E2\u05D5\u05D3 (\u05D1\u05DB\u05E8\u05D8\u05D9\u05E1\u05D9\u05DD \u05E7\u05D8\u05E0\u05D9\u05DD)" },
              { type: "string", name: "authorLabel", label: "\u05EA\u05D5\u05D5\u05D9\u05EA \u05DE\u05D7\u05D1\u05E8 (\u05DC\u05DE\u05E9\u05DC: \u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05D0\u05EA\u05E8)" },
              { type: "string", name: "readTimeLabel", label: "\u05D6\u05DE\u05DF \u05E7\u05E8\u05D9\u05D0\u05D4 (\u05DC\u05DE\u05E9\u05DC: 8 \u05D3\u05E7\u05D5\u05EA / \u05D3\u05E7\u05D5\u05EA \u05E7\u05E8\u05D9\u05D0\u05D4)" },
              { type: "string", name: "allPostsLink", label: "\u05E7\u05D9\u05E9\u05D5\u05E8 \u05DB\u05DC \u05D4\u05DB\u05EA\u05D1\u05D5\u05EA (\u05DC\u05DE\u05E9\u05DC: \u05DB\u05DC \u05D4\u05DB\u05EA\u05D1\u05D5\u05EA)" },
              { type: "string", name: "homepageTitlePrefix", label: "\u05D3\u05E3 \u05D1\u05D9\u05EA \u2013 \u05DB\u05D5\u05EA\u05E8\u05EA \u05D1\u05DC\u05D5\u05D2 (\u05EA\u05D7\u05D9\u05DC\u05D4)" },
              { type: "string", name: "homepageTitleHighlight", label: "\u05D3\u05E3 \u05D1\u05D9\u05EA \u2013 \u05DB\u05D5\u05EA\u05E8\u05EA \u05D1\u05DC\u05D5\u05D2 (\u05DE\u05D9\u05DC\u05D4 \u05DE\u05D5\u05D3\u05D2\u05E9\u05EA, \u05DC\u05DE\u05E9\u05DC: \u05DE\u05E1\u05E2\u05D5\u05EA)" }
            ]
          },
          {
            type: "string",
            name: "homepageBlogPostIds",
            label: "\u05DB\u05EA\u05D1\u05D5\u05EA \u05DC\u05D4\u05E6\u05D2\u05D4 \u05D1\u05D3\u05E3 \u05D4\u05D1\u05D9\u05EA",
            list: true,
            description: "\u05E8\u05E9\u05D9\u05DE\u05EA \u05DE\u05D6\u05D4\u05D4 \u05DB\u05EA\u05D1\u05D5\u05EA (id \u2013 \u05E9\u05DD \u05D4\u05E7\u05D5\u05D1\u05E5 \u05DC\u05DC\u05D0 .md) \u05DC\u05D4\u05E6\u05D2\u05D4 \u05D1\u05D7\u05DC\u05E7 \u05D4\u05D1\u05DC\u05D5\u05D2 \u05D1\u05D3\u05E3 \u05D4\u05D1\u05D9\u05EA. \u05D4\u05E9\u05D0\u05E8 \u05E8\u05D9\u05E7 \u05DB\u05D3\u05D9 \u05DC\u05D4\u05E6\u05D9\u05D2 \u05D0\u05EA \u05DB\u05DC \u05D4\u05DB\u05EA\u05D1\u05D5\u05EA."
          },
          {
            type: "object",
            name: "destinations",
            label: "\u05D9\u05E2\u05D3\u05D9\u05DD",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.title || "\u05D9\u05E2\u05D3 \u05D7\u05D3\u05E9" })
            },
            fields: [
              { type: "string", name: "id", label: "\u05DE\u05D6\u05D4\u05D4 (\u05DC\u05E7\u05D9\u05E9\u05D5\u05E8)", required: true },
              { type: "string", name: "title", label: "\u05DB\u05D5\u05EA\u05E8\u05EA", required: true },
              { type: "string", name: "description", label: "\u05EA\u05D9\u05D0\u05D5\u05E8", ui: { component: "textarea" } },
              { type: "image", name: "image", label: "\u05EA\u05DE\u05D5\u05E0\u05D4" },
              { type: "string", name: "weather", label: "\u05DE\u05D6\u05D2 \u05D0\u05D5\u05D5\u05D9\u05E8 \u05DE\u05DE\u05D5\u05E6\u05E2 (\u05DC\u05DE\u05E9\u05DC: \u05E7\u05D9\u05E5 12\xB0C - 18\xB0C | \u05D7\u05D5\u05E8\u05E3 -2\xB0C - 4\xB0C)", ui: { component: "textarea" } },
              { type: "image", name: "mapImage", label: "\u05EA\u05DE\u05D5\u05E0\u05EA \u05DE\u05E4\u05EA \u05D4\u05E0\u05EA\u05D9\u05D1" },
              {
                type: "string",
                name: "pointsOfInterest",
                label: "\u05E0\u05E7\u05D5\u05D3\u05D5\u05EA \u05E2\u05E0\u05D9\u05D9\u05DF \u05DE\u05E8\u05DB\u05D6\u05D9\u05D5\u05EA",
                list: true
              }
            ]
          },
          {
            type: "object",
            name: "ships",
            label: "\u05D0\u05D5\u05E0\u05D9\u05D5\u05EA (\u05E6\u05D9)",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.name || "\u05D0\u05D5\u05E0\u05D9\u05D9\u05D4 \u05D7\u05D3\u05E9\u05D4" })
            },
            fields: [
              { type: "string", name: "id", label: "\u05DE\u05D6\u05D4\u05D4 (\u05DC\u05E7\u05D9\u05E9\u05D5\u05E8)", required: true },
              { type: "string", name: "name", label: "\u05E9\u05DD \u05D4\u05D0\u05D5\u05E0\u05D9\u05D9\u05D4", required: true },
              { type: "string", name: "cruiseLine", label: "\u05D7\u05D1\u05E8\u05EA \u05E1\u05E4\u05E0\u05D5\u05EA" },
              { type: "string", name: "description", label: "\u05EA\u05D9\u05D0\u05D5\u05E8 \u05D4\u05D0\u05D5\u05E0\u05D9\u05D9\u05D4", ui: { component: "textarea" } },
              { type: "string", name: "speed", label: "\u05DE\u05D4\u05D9\u05E8\u05D5\u05EA (\u05DC\u05DE\u05E9\u05DC: 17 \u05E7\u05E9\u05E8)" },
              { type: "string", name: "capacity", label: "\u05E7\u05D9\u05D1\u05D5\u05DC\u05EA \u05E0\u05D5\u05E1\u05E2\u05D9\u05DD (\u05DC\u05DE\u05E9\u05DC: 228 \u05E0\u05D5\u05E1\u05E2\u05D9\u05DD)" },
              { type: "string", name: "length", label: "\u05D0\u05D5\u05E8\u05DA (\u05DC\u05DE\u05E9\u05DC: 362 \u05DE\u05D8\u05E8)" },
              { type: "string", name: "tonnage", label: "\u05EA\u05E4\u05D5\u05E1\u05D4 (\u05DC\u05DE\u05E9\u05DC: 228,081 \u05D8\u05D5\u05DF)" },
              {
                type: "string",
                name: "features",
                label: "\u05DE\u05D0\u05E4\u05D9\u05D9\u05E0\u05D9\u05DD \u05D5\u05DE\u05EA\u05E7\u05E0\u05D9\u05DD",
                list: true,
                description: "\u05E8\u05E9\u05D9\u05DE\u05EA \u05DE\u05EA\u05E7\u05E0\u05D9\u05DD \u05DB\u05DE\u05D5 \u05D6\u05D9\u05E8\u05EA \u05D4\u05D7\u05DC\u05E7\u05D4 \u05E2\u05DC \u05D4\u05E7\u05E8\u05D7, \u05E4\u05D0\u05E8\u05E7 \u05E9\u05E2\u05E9\u05D5\u05E2\u05D9\u05DD, \u05DE\u05E1\u05E2\u05D3\u05D5\u05EA \u05E9\u05E3 \u05D5\u05DB\u05D5'"
              },
              { type: "image", name: "image", label: "\u05EA\u05DE\u05D5\u05E0\u05D4 \u05E8\u05D0\u05E9\u05D9\u05EA" },
              {
                type: "image",
                name: "gallery",
                label: "\u05D2\u05DC\u05E8\u05D9\u05D9\u05EA \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA",
                list: true,
                description: "\u05EA\u05DE\u05D5\u05E0\u05D5\u05EA \u05E0\u05D5\u05E1\u05E4\u05D5\u05EA \u05DC\u05D0\u05D5\u05E0\u05D9\u05D9\u05D4 \u2013 \u05D2\u05DC\u05E8\u05D9\u05D4"
              }
            ]
          },
          {
            type: "object",
            name: "faq",
            label: "\u05E9\u05D0\u05DC\u05D5\u05EA \u05E0\u05E4\u05D5\u05E6\u05D5\u05EA",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.question?.slice(0, 40) || "\u05E9\u05D0\u05DC\u05D4 \u05D7\u05D3\u05E9\u05D4" })
            },
            fields: [
              { type: "string", name: "question", label: "\u05E9\u05D0\u05DC\u05D4", required: true, ui: { component: "textarea" } },
              { type: "string", name: "answer", label: "\u05EA\u05E9\u05D5\u05D1\u05D4", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            name: "blogPosts",
            label: "\u05E4\u05D5\u05E1\u05D8\u05D9\u05DD \u05DE\u05D5\u05DE\u05DC\u05E6\u05D9\u05DD (\u05D1\u05DC\u05D5\u05D2)",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.title || "\u05E4\u05D5\u05E1\u05D8 \u05D7\u05D3\u05E9" })
            },
            fields: [
              { type: "string", name: "id", label: "\u05DE\u05D6\u05D4\u05D4 (\u05DC\u05E7\u05D9\u05E9\u05D5\u05E8)", required: true },
              { type: "string", name: "title", label: "\u05DB\u05D5\u05EA\u05E8\u05EA", required: true },
              { type: "string", name: "excerpt", label: "\u05EA\u05E7\u05E6\u05D9\u05E8", ui: { component: "textarea" } },
              { type: "string", name: "date", label: "\u05EA\u05D0\u05E8\u05D9\u05DA" },
              { type: "image", name: "image", label: "\u05EA\u05DE\u05D5\u05E0\u05D4" },
              { type: "string", name: "author", label: "\u05DE\u05D7\u05D1\u05E8 (\u05DC\u05DE\u05E9\u05DC: \u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05D0\u05EA\u05E8)" },
              { type: "string", name: "readTime", label: "\u05D6\u05DE\u05DF \u05E7\u05E8\u05D9\u05D0\u05D4 (\u05DC\u05DE\u05E9\u05DC: 8 \u05D3\u05E7\u05D5\u05EA)" },
              { type: "string", name: "body", label: "\u05EA\u05D5\u05DB\u05DF \u05DE\u05DC\u05D0 (Markdown)", ui: { component: "textarea" } }
            ]
          }
        ]
      },
      {
        name: "post",
        label: "\u05E4\u05D5\u05E1\u05D8\u05D9\u05DD (\u05D1\u05DC\u05D5\u05D2)",
        path: "content/posts",
        format: "md",
        fields: [
          { type: "string", name: "title", label: "\u05DB\u05D5\u05EA\u05E8\u05EA", isTitle: true, required: true },
          { type: "string", name: "excerpt", label: "\u05EA\u05E7\u05E6\u05D9\u05E8", ui: { component: "textarea" } },
          { type: "datetime", name: "date", label: "\u05EA\u05D0\u05E8\u05D9\u05DA", ui: { dateFormat: "DD.MM.YYYY" } },
          { type: "image", name: "image", label: "\u05EA\u05DE\u05D5\u05E0\u05D4" },
          { type: "string", name: "author", label: "\u05DE\u05D7\u05D1\u05E8 (\u05DC\u05DE\u05E9\u05DC: \u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05D0\u05EA\u05E8)" },
          { type: "string", name: "readTime", label: "\u05D6\u05DE\u05DF \u05E7\u05E8\u05D9\u05D0\u05D4 (\u05DC\u05DE\u05E9\u05DC: 8 \u05D3\u05E7\u05D5\u05EA)" },
          { type: "rich-text", name: "body", label: "\u05EA\u05D5\u05DB\u05DF", isBody: true }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
