// Purpose: To store the pricing data for the pricing page.

export  const tiers = [
    {
      name: "Trial",
      id: "tier-Trial",
      href: "#",
      price: "Try Now",
      description: "Get personalised template",
      features: [
        "25+ data sources",
        "GPT4, LinkedIn and others",
        "Access to slack community",
        "10+ templates to scale your outbound",
      ],
      footer: [
        "Explore product capabilities",
        "Get personalized template",
        "Access to slack community",
      ],
      button: "Try Now",
      mostPopular: false,
    },
    {
      name: "Growth",
      id: "tier-Growth",
      href: "#",
      price: { monthly: "$229", annually: "$1899" },
      description: "",
      off: "$459",
      features: [
        "8,000  Credits",
        "Webhook, HTTP API",
        "Credit rollover (upto 2x plan credits)",
        "Outbound email integrations like Instantly, Smartlead.",
        "Dedicated 3 hours from Bitscale expert",
      ],
      footer: [
        "Unlimited leads search",
        "Fully enriched 5000 leads",
        "Personalized outreach at scale",
      ],
      button: "Continue with Growth",
      mostPopular: false,
    },
    {
      name: "Booster",
      id: "tier-Booster",
      href: "#",
      price: { monthly: "$499", annually: "$3699" },
      description: "",
      off: "$999",
      features: [
        "25,000  Credits",
        "Webhook, HTTP API",
        "Credit rollover (upto 2x plan credits)",
        "Outbound email integrations like Instantly, Smartlead.",
        "Dedicated 3 hours from Bitscale expert",
        "Advanced models like Claude Sonnet",
        "Dedicated 8 hours from Bitscale expert",
        "2 way Hubspot integration",
      ],
      footer: [
        "Unlimited leads search",
        "Fully enriched 15000 leads",
        "Personalized outreach at scale",
      ],
      button: "Continue with Booster",
      mostPopular: true,
    },
    {
      name: "Enterprise",
      id: "tier-Enterprise",
      href: "#",
      price: "Contact Us",
      description: "For individual pricing",
      features: [
        "Data privacy certification",
        "Priority Support",
        "Dedicated Bitscale expert",
        "Private Slack Channel",
        "Collaborative workspace and templates",
      ],
      footer: [
        "Perfect for High-Volume End-to-End CRM Data Enrichment",
        "Unlimited list of leads with unlimited data points",
      ],
      button: "Try Now",
      mostPopular: false,
    },
  ];
  
  export const frequencies = [
    { id: "month", value: "monthly", label: "Monthly", priceSuffix: "/month" },
    { id: "annual", value: "annually", label: "Annual", priceSuffix: "/year" },
  ];
