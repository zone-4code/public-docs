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
    'onboarding/introduction',
    'onboarding/configuration',
    'onboarding/github',
    'onboarding/environment',
    'onboarding/linux-commands',
   // 'onboarding/Règles de nommage à respecter',
   // 'onboarding/Atomic Design en Reactjs',
   // 'onboarding/Documentation projet',
   //'onboarding/Redux Toolkit',
    

  ],
  BackendSidebar: [
    {
      type: 'doc',
      id: 'backend', // document ID
      label: 'Introduction', // sidebar label
    },
    {
      'Getting started': [{
            type: 'doc',
            id:'tutorial-basics/quickInstall',
            label:'quick install'
            }]
    }
  ],
  FrontendSidebar: [
    {
      type: 'doc',
      id: 'intro', // document ID
      label: 'Introduction', // sidebar label
    },
    {
      'Getting started': [{
            type: 'doc',
            id:'tutorial-basics/create-a-page',
            label:'quick install',
            },
            {
              type: 'doc',
              id:'tutorial-basics/Règles de nommage à respecter',
              label:'Règles de nommage à respecter',
              },
              {
                type: 'doc',
                id:'tutorial-basics/Atomic Design en Reactjs',
                label:'Atomic Design en Reactjs',
                },
                {
                  type: 'doc',
                  id:'tutorial-basics/Documentation projet',
                  label:'Documentation projet',
                  }
                  ,
                  {
                    type: 'doc',
                    id:'tutorial-basics/Redux Toolkit',
                    label:'Redux Toolkit',
                    }
            
            ]
    }  ]
};

module.exports = sidebars;
