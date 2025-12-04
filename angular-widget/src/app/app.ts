import { Component, computed, signal } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';

type FocusId = 'react' | 'angular' | 'ui';

interface FocusArea {
  id: FocusId;
  label: string;
  statement: string;
  metrics: {
    label: string;
    value: number;
    accent: 'emerald' | 'sky' | 'violet';
  }[];
  highlights: string[];
  outcomes: {
    title: string;
    detail: string;
  }[];
}

@Component({
  selector: 'portfolio-skill-widget',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly focusAreas: FocusArea[] = [
    {
      id: 'react',
      label: 'React Delivery',
      statement:
        'Builds production-ready React features with TypeScript, modern state patterns, and a11y-first UI engineering.',
      metrics: [
        { label: 'Ship Velocity', value: 92, accent: 'emerald' },
        { label: 'Code Quality', value: 88, accent: 'sky' },
        { label: 'Design Systems', value: 85, accent: 'violet' }
      ],
      highlights: [
        'Implemented SSR-ready dashboards with streaming data and suspense boundaries.',
        'Established component libraries with Storybook, testing via React Testing Library and Vitest.',
        'Reduced bundle size 18% through route-level code-splitting and memoization.'
      ],
      outcomes: [
        {
          title: 'Team Enablement',
          detail: 'Mentored 4 product engineers on hooks best practices and accessibility linting.'
        },
        {
          title: 'Performance',
          detail: 'Optimized hydration for marketing pages, lifting Core Web Vitals to 95+.'
        }
      ]
    },
    {
      id: 'angular',
      label: 'Angular Architecture',
      statement:
        'Designs modular Angular applications with standalone APIs, signal-based state, and enterprise maintainability.',
      metrics: [
        { label: 'Architecture', value: 90, accent: 'emerald' },
        { label: 'Testing', value: 84, accent: 'sky' },
        { label: 'DX Improvements', value: 87, accent: 'violet' }
      ],
      highlights: [
        'Rolled out signal-driven data flows replacing legacy NgRx boilerplate.',
        'Authored schematics speeding up module scaffolding by 40%.',
        'Integrated high-contrast theming and keyboard-first navigation across apps.'
      ],
      outcomes: [
        {
          title: 'Release Stability',
          detail: 'Cut critical regressions by 30% with component harnesses and contract tests.'
        },
        {
          title: 'Upgrade Cadence',
          detail: 'Led Angular 15 → 18 migrations with automation for deprecated APIs.'
        }
      ]
    },
    {
      id: 'ui',
      label: 'UX Systems',
      statement:
        'Bridges design and engineering with rapid prototyping, motion guidelines, and accessibility-first reviews.',
      metrics: [
        { label: 'Collaboration', value: 89, accent: 'emerald' },
        { label: 'Accessibility', value: 93, accent: 'sky' },
        { label: 'Rapid Prototyping', value: 86, accent: 'violet' }
      ],
      highlights: [
        'Figma-to-code handoffs with token pipelines and automated visual regression checks.',
        'Authored interaction guidelines for complex table, form, and data viz patterns.',
        'Delivers polished motion through CSS and Angular/React animation primitives.'
      ],
      outcomes: [
        {
          title: 'Design Confidence',
          detail: 'Shortened review cycles by 35% with shared component sandboxes.'
        },
        {
          title: 'Inclusive UX',
          detail: 'AA-level accessibility sign-off for all flagship customer journeys.'
        }
      ]
    }
  ];

  protected readonly activeFocus = signal<FocusId>('react');

  protected readonly selectedFocus = computed(() =>
    this.focusAreas.find((area) => area.id === this.activeFocus()) ?? this.focusAreas[0]
  );

  protected readonly selectFocus = (id: FocusId) => {
    this.activeFocus.set(id);
  };
}
