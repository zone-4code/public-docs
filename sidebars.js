/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  OnboardingSidebar: [
    {
      type: "doc",
      id: "onboarding/introduction", // document ID
      label: "Introduction", // sidebar label
    },
    {
      environment: [
        {
          type: "doc",
          id: "onboarding/Presentation",
          label: "Présentation",
        },
        {
          type: "doc",
          id: "onboarding/Features",
          label: "Features",
        },
        {
          type: "doc",
          id: "onboarding/Hotfix",
          label: "Hotfix",
        },
        {
          type: "doc",
          id: "onboarding/Releases",
          label: "Releases",
        },
      ],
    },
    {
      type: "doc",
      id: "onboarding/configuration", // document ID
      label: "Configuration", // sidebar label
    },
    {
      type: "doc",
      id: "onboarding/linux-commands", // document ID
      label: "linux-commands", // sidebar label
    },
  ],
  BackendSidebar: [
    {
      type: "doc",
      id: "backend", // document ID
      label: "Introduction", // sidebar label
    },
    {
      "Getting started": [
        {
          type: "doc",
          id: "tutorial-basics/quickInstall",
          label: "quick install",
        },
      ],
    },
  ],
  FrontendSidebar: [
    {
      type: "doc",
      id: "intro", // document ID
      label: "Introduction", // sidebar label
    },
    {
      "Getting started": [
        {
          type: "doc",
          id: "tutorial-basics/create-a-page",
          label: "quick install",
        },
      ],
    },
  ],
};

module.exports = sidebars;
