import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/404',
    component: ComponentCreator('/404', '5c5'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '822'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '5a7'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '456'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '7a6'),
            routes: [
              {
                path: '/category/введение-в-тренировки',
                component: ComponentCreator('/category/введение-в-тренировки', '667'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/инструменты',
                component: ComponentCreator('/category/инструменты', 'f2a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/основная-часть',
                component: ComponentCreator('/category/основная-часть', '9fe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/тренировки-при-хронических-заболеваниях',
                component: ComponentCreator('/category/тренировки-при-хронических-заболеваниях', 'cda'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/цель-похудеть',
                component: ComponentCreator('/category/цель-похудеть', 'cf1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/часто-задаваемые-вопросы',
                component: ComponentCreator('/category/часто-задаваемые-вопросы', '29c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/FAQ/buds-farm',
                component: ComponentCreator('/FAQ/buds-farm', '544'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/FAQ/cant-eat-more',
                component: ComponentCreator('/FAQ/cant-eat-more', '8bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/FAQ/cant-lose-weight',
                component: ComponentCreator('/FAQ/cant-lose-weight', 'd9f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/FAQ/cracks-sounds',
                component: ComponentCreator('/FAQ/cracks-sounds', 'f84'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/FAQ/muscle-pain',
                component: ComponentCreator('/FAQ/muscle-pain', 'ec1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/FAQ/no-motivation',
                component: ComponentCreator('/FAQ/no-motivation', '3ac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/FAQ/save-money',
                component: ComponentCreator('/FAQ/save-money', 'fae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Main Part/gain-muscles',
                component: ComponentCreator('/Main Part/gain-muscles', '652'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Main Part/key-to-result',
                component: ComponentCreator('/Main Part/key-to-result', 'e00'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Main Part/more-energy',
                component: ComponentCreator('/Main Part/more-energy', 'fb7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Main Part/save-muscles',
                component: ComponentCreator('/Main Part/save-muscles', '4aa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Main Part/start-workout',
                component: ComponentCreator('/Main Part/start-workout', '5f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Main Part/Target-Losewight/easy-lose-weight',
                component: ComponentCreator('/Main Part/Target-Losewight/easy-lose-weight', 'c6a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Main Part/Target-Losewight/energy-balance',
                component: ComponentCreator('/Main Part/Target-Losewight/energy-balance', 'eb9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Main Part/Target-Losewight/fast-lose-weight',
                component: ComponentCreator('/Main Part/Target-Losewight/fast-lose-weight', 'df2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Main Part/Target-Losewight/lose-weight',
                component: ComponentCreator('/Main Part/Target-Losewight/lose-weight', '0bd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Main Part/Target-Losewight/slow-lose-weight',
                component: ComponentCreator('/Main Part/Target-Losewight/slow-lose-weight', '9ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Tools/cardio-workout',
                component: ComponentCreator('/Tools/cardio-workout', '5df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Tools/diet',
                component: ComponentCreator('/Tools/diet', '10d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Tools/everyday-activity',
                component: ComponentCreator('/Tools/everyday-activity', '968'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Tools/power-workout',
                component: ComponentCreator('/Tools/power-workout', '287'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Tools/self-massage',
                component: ComponentCreator('/Tools/self-massage', '689'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Tools/stretching',
                component: ComponentCreator('/Tools/stretching', 'a7d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/WarmingUp/about-guide',
                component: ComponentCreator('/WarmingUp/about-guide', '6d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/WarmingUp/coach-value',
                component: ComponentCreator('/WarmingUp/coach-value', 'ac4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/WarmingUp/home-gear',
                component: ComponentCreator('/WarmingUp/home-gear', '76f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/WarmingUp/newbie-pro',
                component: ComponentCreator('/WarmingUp/newbie-pro', 'f52'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/WarmingUp/workout-places',
                component: ComponentCreator('/WarmingUp/workout-places', '5fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/WarmingUp/workout-principles',
                component: ComponentCreator('/WarmingUp/workout-principles', 'd64'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/WarmingUp/workouts-profit',
                component: ComponentCreator('/WarmingUp/workouts-profit', '2d0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Workouts with injuries/back-pain',
                component: ComponentCreator('/Workouts with injuries/back-pain', '3ec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Workouts with injuries/coach-doctor',
                component: ComponentCreator('/Workouts with injuries/coach-doctor', '805'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Workouts with injuries/diabetes',
                component: ComponentCreator('/Workouts with injuries/diabetes', 'ac6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Workouts with injuries/hypertension-workout',
                component: ComponentCreator('/Workouts with injuries/hypertension-workout', '452'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', '735'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
