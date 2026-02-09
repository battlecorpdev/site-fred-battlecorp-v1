export interface TranslationKeys {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    whitepaper: string;
    wiki: string;
    support: string;
    login: string;
    signup: string;
    logout: string;
    dashboard: string;
  };
  header: {
    brand: string;
    menuOpen: string;
    links: string;
    social: string;
  };
  footer: {
    rights: string;
    links: {
      whitepaper: string;
      wiki: string;
      support: string;
      discord: string;
      facebook: string;
    };
    legal: {
      terms: string;
      cookies: string;
      privacy: string;
    };
    sections: {
      links: string;
      social: string;
      legal: string;
    };
  };
  home: {
    sections: {
      hero: {
        badge: string;
        titlePart1: string;
        titlePart2: string;
        tagline: string;
        quote: string;
        quoteAttribution: string;
        cta: string;
        ctaSecondary: string;
      };
      howToPlay: {
        eyebrow: string;
        title: string;
        accentWord: string;
        subtitle: string;
        imageAlt: string;
        tacticalAdvice: {
          label: string;
          quotes: string[];
        };
        navigation: {
          previous: string;
          next: string;
        };
        steps: {
          title: string;
          description: string;
          details: string[];
        }[];
        resources: {
          title: string;
          items: string[];
        };
        cta: string;
      };
      pillars: {
        eyebrow: string;
        title: string;
        accentWord: string;
        subtitle: string;
        items: {
          id: string;
          title: string;
          tagline: string;
          category: string;
          bullets: string[];
          takeaway: string;
          cta: string;
        }[];
        takeawayLabel: string;
        stepLabel: string;
        navHint: string;
        statusLabel: string;
        visualPreview: string;
        mobile: {
          expand: string;
          collapse: string;
          swipeHint: string;
        };
      };
      units: {
        eyebrow: string;
        title: string;
        accentWord: string;
        subtitle: string;
        roles: {
          offensive: string;
          defensive: string;
        };
        labels: {
          melee: string;
          ranged: string;
          defense: string;
          resistance: string;
          na: string;
        };
        categories: {
          infantry: string;
          mechanical: string;
          aerial: string;
        };
        buildingNames: {
          academy: string;
          factory: string;
          spaceport: string;
        };
        abilities: {
          stealthAttack: string;
          preMeleeShot: string;
          barrage: string;
          bombing: string;
        };
        list: {
          id: string;
          name: string;
          slogan: string;
          building: "academy" | "factory" | "spaceport";
          category: "infantry" | "mechanical" | "aerial";
          role: "offensive" | "defensive";
          stats: {
            melee: number;
            ranged: number | null;
            defense: number;
            resistance: number;
          };
          production: number;
          fabrication: { resource: string; amount: number }[];
          maintenance: { resource: string; amount: number }[];
          ability: string | null;
        }[];
        production: {
          label: string;
          unit: string;
        };
        costs: {
          fabrication: string;
          maintenance: string;
        };
        resources: {
          credits: string;
          food: string;
          energy: string;
          steel: string;
          titanium: string;
          aluminum: string;
          component: string;
        };
        sections: {
          characteristics: string;
          production: string;
          costs: string;
          specialAbility: string;
          none: string;
        };
        mobile: {
          expand: string;
          collapse: string;
          swipeHint: string;
        };
      };
      victory: {
        eyebrow: string;
        title: string;
        accentWord: string;
        subtitle: string;
        pathLabel: string;
        expandPath: string;
        collapsePath: string;
        paths: {
          id: string;
          title: string;
          tag: string;
          category: string;
          description: string;
          steps: string[];
        }[];
        mobile: {
          swipeHint: string;
        };
      };
      community: {
        eyebrow: string;
        title: string;
        accentWord: string;
        subtitle: string;
        channelsTitle: string;
        resourcesTitle: string;
        kpi: {
          players: { value: string; label: string };
          games: { value: string; label: string };
          territories: { value: string; label: string };
          betaDays: { value: string; label: string };
        };
        discord: {
          title: string;
          live: string;
          description: string;
          cta: string;
          features: string[];
          channels: string[];
          resources: string[];
          moderation: string;
        };
      };
      cta: {
        eyebrow: string;
        title: string;
        subtitle: string;
        ctaPrimary: string;
        ctaSecondary: string;
        proofs: string[];
      };
    };
  };
  auth: {
    login: {
      title: string;
      subtitle: string;
      email: string;
      password: string;
      submit: string;
      noAccount: string;
      createAccount: string;
      forgotPassword: string;
    };
    signup: {
      title: string;
      subtitle: string;
      username: string;
      email: string;
      password: string;
      confirmPassword: string;
      submit: string;
      hasAccount: string;
      signIn: string;
      acceptTerms: string;
    };
  };
  authShell: {
    title: string;
    description: string;
    phase: string;
    backHome: string;
    openDiscord: string;
  };
  app: {
    title: string;
    description: string;
    phase: string;
    backHome: string;
    openDiscord: string;
  };
  notFound: {
    code: string;
    title: string;
    backHome: string;
  };
  validation: {
    required: string;
    invalidEmail: string;
    minLength8: string;
    passwordMismatch: string;
    minLength3: string;
  };
  common: {
    loading: string;
    error: string;
    success: string;
    cancel: string;
    confirm: string;
    save: string;
    delete: string;
    edit: string;
    back: string;
    next: string;
    previous: string;
    retry: string;
    empty: string;
    close: string;
  };
  ui: {
    languageSwitch: {
      fr: string;
      en: string;
    };
    theme: {
      light: string;
      dark: string;
      system: string;
    };
  };
  legal: {
    terms: {
      title: string;
      lastUpdate: string;
      intro: string;
      body: string;
    };
    cookies: {
      title: string;
      lastUpdate: string;
      intro: string;
      body: string;
    };
    privacy: {
      title: string;
      lastUpdate: string;
      intro: string;
      body: string;
    };
  };
}

export const en: TranslationKeys = {
  meta: {
    title: "BattleCorp - Cyberpunk Strategy Game",
    description: "Enter the cyberpunk world of BattleCorp. Strategy, warfare and corporations in a ruthless futuristic conflict.",
  },

  nav: {
    home: "Home",
    whitepaper: "Whitepaper",
    wiki: "Wiki",
    support: "Support",
    login: "Log in",
    signup: "Sign up",
    logout: "Log out",
    dashboard: "Dashboard",
  },

  header: {
    brand: "BATTLECORP",
    menuOpen: "Open menu",
    links: "Links",
    social: "Social",
  },

  footer: {
    rights: "All rights reserved",
    links: {
      whitepaper: "Whitepaper",
      wiki: "Wiki",
      support: "Support",
      discord: "Discord",
      facebook: "Facebook",
    },
    legal: {
      terms: "Terms",
      cookies: "Cookies",
      privacy: "Privacy",
    },
    sections: {
      links: "Links",
      social: "Social",
      legal: "Legal",
    },
  },

  home: {
    sections: {

      hero: {
        badge: "PLAYTEST — WARGAME AVAILABLE",
        titlePart1: "BATTLE",
        titlePart2: "CORP",
        tagline: "War is an industry. Make it yours.",
        quote: "« A city is built. A planet is conquered. »",
        quoteAttribution: "— Operations Manual, Internal Directive",
        cta: "JOIN THE PLAYTEST",
        ctaSecondary: "VIEW DEMO",
      },

      howToPlay: {
        eyebrow: "GAMEPLAY",
        title: "How to Play",
        accentWord: "Play",
        subtitle: "Build your base, fuel your industry, and project your forces to conquer the planet.",
        imageAlt: "Cyberpunk base",

        tacticalAdvice: {
          label: "TACTICAL ADVICE",
          quotes: [
            "« Your HQ is your nerve center. Lose it and the war is over. »",
            "« One productive worker is worth more than ten idle taxpayers. »",
            "« The best supplied army wins the war, not the battle. »",
            "« Shell. Bomb. Then invade. »",
          ],
        },

        navigation: {
          previous: "Previous",
          next: "Next",
        },

        steps: [
          {
            title: "Secure your base",
            description: "Your HQ is your vital point. Losing it means immediate elimination.",
            details: [
              "Starting territory = defeat if captured",
              "Invest in diplomacy, defenses and garrisons",
              "Anticipate enemy strikes with surveillance and protection",
            ],
          },
          {
            title: "Expand territorial control",
            description: "Every conquered territory increases your population, resources and industrial capacity.",
            details: [
              "Resource extraction: steel, uranium, titanium, aluminum",
              "4,000 to 8,000 inhabitants available for production",
              "2 to 6 slots to build infrastructures and defenses",
            ],
          },
          {
            title: "Produce & maintain",
            description: "Sustain your economy to supply troops, facilities and military operations.",
            details: [
              "Strategic resources to balance at all times",
              "Academies train, factories build, spaceports deploy",
              "Logistics resolved every 12 phases — plan ahead or fall behind",
            ],
          },
          {
            title: "Project force",
            description: "Deploy your Battlecorp’s military power to crush all planetary resistance.",
            details: [
              "Ground columns: capture and secure zones (6 phases)",
              "Artillery: long-range suppression (3 phases)",
              "Air wings: tactical bombing and rapid strikes (3 phases)",
            ],
          },
        ],

        resources: {
          title: "Resources to manage",
          items: ["Credits", "Food", "Energy", "Influence", "Steel", "Components"],
        },

        cta: "Open the Wiki",
      },

      pillars: {
        eyebrow: "STRATEGY",
        title: "4 levers to dominate the planet",
        accentWord: "dominate",
        subtitle: "Master these principles to gain the advantage… and never lose it.",

        items: [
          {
            id: "tempo",
            title: "Control the tempo",
            tagline: "Plan faster than your rivals.",
            category: "Decision / Timing",
            bullets: [
              "Every action resolves in phases — plan several cycles ahead.",
              "The LOCK system prevents rewinds.",
              "Logistics delays are paid for on the front line.",
            ],
            takeaway: "Whoever sets the pace controls the war.",
            cta: "View entry (Codex)",
          },
          {
            id: "economy",
            title: "Economic superiority",
            tagline: "Convert resources into power.",
            category: "Industry / Logistics",
            bullets: [
              "More resources = more units = more tactical options.",
              "Economic deficits halt expansion.",
              "Optimize workers, infrastructure and output.",
            ],
            takeaway: "The best supplied army wins the war.",
            cta: "View entry (Codex)",
          },
          {
            id: "pressure",
            title: "Military pressure",
            tagline: "Never let the enemy breathe.",
            category: "Offense / Map control",
            bullets: [
              "Apply constant strikes and threats to force mistakes.",
              "Disrupt enemy production lines.",
              "Relentless pressure beats isolated assaults.",
            ],
            takeaway: "Hesitation means defeat. Pressure breaks defenses.",
            cta: "View entry (Codex)",
          },
          {
            id: "survival",
            title: "HQ survival",
            tagline: "Lose your base, lose everything.",
            category: "Defense / Priority",
            bullets: [
              "Your Command Center is the primary target.",
              "Invest as much in defense as you do in expansion.",
              "A strong base enables bold offensives.",
            ],
            takeaway: "Conquer without protection and you build on sand.",
            cta: "View entry (Codex)",
          },
        ],

        takeawayLabel: "Key takeaway",
        stepLabel: "STEP",
        navHint: "Select a lever to learn more",
        statusLabel: "LEVER",
        visualPreview: "VISUAL PREVIEW",

        mobile: {
          expand: "View key point",
          collapse: "Collapse",
          swipeHint: "Swipe to see other levers",
        },
      },

      units: {
        eyebrow: "PRODUCTION & DEPLOYMENT",
        title: "Combat Units",
        accentWord: "Combat",
        subtitle: "Every unit has a role. Every choice has a cost.",

        roles: {
          offensive: "Offensive",
          defensive: "Defensive",
        },

        labels: {
          melee: "Melee",
          ranged: "Ranged",
          defense: "Defense",
          resistance: "Resistance",
          na: "N/A",
        },

        categories: {
          infantry: "Infantry",
          mechanical: "Mechanical",
          aerial: "Aerial",
        },

        buildingNames: {
          academy: "Military Academy",
          factory: "Mechanical Factory",
          spaceport: "Spaceport",
        },

        abilities: {
          stealthAttack: "Stealth attack",
          preMeleeShot: "Pre-melee shot",
          barrage: "Barrage",
          bombing: "Bombing",
        },

        production: {
          label: "Produced at",
          unit: "units/cycle",
        },

        costs: {
          fabrication: "Fabrication",
          maintenance: "Maintenance",
        },

        resources: {
          credits: "Credits",
          food: "Food",
          energy: "Energy",
          steel: "Steel",
          titanium: "Titanium",
          aluminum: "Aluminum",
          component: "Component",
        },

        sections: {
          characteristics: "Stats",
          production: "Production",
          costs: "Costs",
          specialAbility: "Special ability",
          none: "None",
        },

        mobile: {
          expand: "View details",
          collapse: "Collapse",
          swipeHint: "Swipe to see other units",
        },

        list: [], // units names can stay FR or be localized later if you want
      },

      victory: {
        eyebrow: "STRATEGY & CONQUEST",
        title: "Three paths to victory",
        accentWord: "victory",
        subtitle: "Choose your strategy. Accept the consequences.",

        pathLabel: "Path to victory",
        expandPath: "Show steps",
        collapsePath: "Hide steps",

        mobile: {
          swipeHint: "Swipe to see other paths",
        },

        paths: [], // can translate later if needed
      },

      community: {
        eyebrow: "COMMUNITY & ACTIVITY",
        title: "Join the Community",
        accentWord: "Community",
        subtitle: "Recruitment, diplomacy, alliances — expand your network.",

        channelsTitle: "Channels",
        resourcesTitle: "Resources",

        discord: {
          title: "Official Discord HQ",
          live: "LIVE",
          description: "Join Battlecorp commanders and expand your network.",
          cta: "Join Discord",
          features: [],
          channels: [],
          resources: [],
          moderation: "Moderation • anti-spam • structured feedback",
        },

        kpi: {
          players: { value: "2847", label: "players" },
          games: { value: "25420", label: "games played" },
          territories: { value: "892", label: "territories conquered" },
          betaDays: { value: "127", label: "beta days" },
        },
      },

      cta: {
        eyebrow: "IMMEDIATE ACCESS",
        title: "Ready to play?",
        subtitle: "Join the beta. Get ahead of the war.",
        ctaPrimary: "Join the Beta",
        ctaSecondary: "View Demo",
        proofs: ["Free", "No install", "Progress saved"],
      },
    },
  },

  common: {
    loading: "Loading...",
    error: "An error occurred",
    success: "Success",
    cancel: "Cancel",
    confirm: "Confirm",
    save: "Save",
    delete: "Delete",
    edit: "Edit",
    back: "Back",
    next: "Next",
    previous: "Previous",
    retry: "Retry",
    empty: "Nothing here",
    close: "Close",
  },

  ui: {
    languageSwitch: {
      fr: "FR",
      en: "EN",
    },
    theme: {
      light: "Light",
      dark: "Dark",
      system: "System",
    },
  },

  validation: {
    required: "This field is required",
    invalidEmail: "Invalid email",
    minLength8: "Minimum 8 characters",
    passwordMismatch: "Passwords do not match",
    minLength3: "Minimum 3 characters",
  },

  auth: {} as any,
  authShell: {} as any,
  app: {} as any,
  notFound: {} as any,
  legal: {} as any,
};
