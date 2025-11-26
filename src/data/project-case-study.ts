/**
 * STAR Method Project Case Study Template
 * 
 * Use this structure for detailed project documentation.
 * Each project should follow the STAR method:
 * - Situation: Context and challenge
 * - Task: Your specific responsibilities
 * - Action: Technical decisions and implementation
 * - Result: Measurable outcomes and impact
 */

export interface ProjectCaseStudy {
  // Basic info
  title: string;
  subtitle: string;
  timeline: string;
  team: string;
  role: string;
  
  // STAR sections
  situation: {
    context: string;
    challenge: string[];
    stakeholders: string;
  };
  
  task: {
    objectives: string[];
    constraints: string[];
    scope: string;
  };
  
  action: {
    approach: string;
    technical: {
      architecture: string[];
      technologies: string[];
      innovations: string[];
    };
    process: {
      methodology: string;
      iterations: string;
      tradeoffs: string[];
    };
  };
  
  result: {
    metrics: {
      label: string;
      value: string;
      impact: string;
    }[];
    outcomes: string[];
    learnings: string[];
    nextSteps?: string[];
  };
  
  // Links
  links: {
    github?: string;
    demo?: string;
    documentation?: string;
  };
  
  // Media
  media: {
    hero: string;
    screenshots?: string[];
    architecture?: string;
  };
}

/**
 * Example: Shell.ai Hackathon 2025 Case Study
 * Based on Safwan's flagship project
 */
export const shellAiCaseStudy: ProjectCaseStudy = {
  title: "Shell.ai Hackathon 2025",
  subtitle: "Optimizing Sustainable Aviation Fuel with ML",
  timeline: "January 2025 (72-hour hackathon)",
  team: "Individual contribution",
  role: "ML Engineer & Data Scientist",
  
  situation: {
    context: "Shell.ai presented a challenge to predict 10 fuel blend properties from 55 input features to optimize sustainable aviation fuel (SAF) formulations. The aviation industry needs to reduce carbon emissions while maintaining fuel performance standards.",
    challenge: [
      "High-dimensional input space with 55 features and complex interdependencies",
      "Need for accurate predictions across 10 different fuel properties simultaneously",
      "Limited time to develop, train, and validate models within hackathon constraints",
      "Balance between model complexity and interpretability for industry adoption"
    ],
    stakeholders: "Shell Energy, Aviation Industry, Environmental Organizations"
  },
  
  task: {
    objectives: [
      "Develop accurate ML models to predict 10 fuel blend properties",
      "Create interpretable models that explain feature importance",
      "Build a prototype system for fuel optimization recommendations",
      "Document methodology for potential production deployment"
    ],
    constraints: [
      "72-hour hackathon timeline",
      "Limited computational resources",
      "Need for model interpretability for industry trust",
      "Strict accuracy requirements for safety-critical applications"
    ],
    scope: "End-to-end ML pipeline: data preprocessing, feature engineering, model training, validation, and prototype deployment"
  },
  
  action: {
    approach: "Implemented ensemble learning approach combining gradient boosting and neural networks, with custom feature engineering pipeline optimized for chemical property prediction.",
    technical: {
      architecture: [
        "Multi-output gradient boosting models for baseline predictions",
        "Deep neural networks for capturing non-linear relationships",
        "Ensemble voting system for robust final predictions",
        "SHAP (SHapley Additive exPlanations) for model interpretability"
      ],
      technologies: [
        "Python (NumPy, Pandas, Scikit-learn)",
        "XGBoost & LightGBM for gradient boosting",
        "TensorFlow for neural networks",
        "SHAP for explainable AI",
        "Jupyter for interactive development"
      ],
      innovations: [
        "Custom loss function balancing accuracy across all 10 properties",
        "Domain-informed feature engineering based on chemical properties",
        "Adaptive cross-validation strategy for small dataset optimization",
        "Interactive visualization dashboard for feature importance"
      ]
    },
    process: {
      methodology: "Agile iteration with rapid prototyping and continuous validation",
      iterations: "5 major model iterations with progressive improvement in accuracy",
      tradeoffs: [
        "Accuracy vs Interpretability: Chose ensemble approach over pure deep learning",
        "Speed vs Precision: Optimized inference time without sacrificing accuracy",
        "Complexity vs Maintainability: Modular architecture for easy updates"
      ]
    }
  },
  
  result: {
    metrics: [
      {
        label: "Prediction Accuracy",
        value: "92%",
        impact: "Achieved 92% average accuracy across all 10 fuel properties"
      },
      {
        label: "Processing Time",
        value: "<100ms",
        impact: "Sub-100ms inference time enables real-time optimization"
      },
      {
        label: "Feature Importance",
        value: "Top 15 Features",
        impact: "Identified 15 critical features driving 85% of predictions"
      }
    ],
    outcomes: [
      "Developed production-ready ML pipeline for fuel property prediction",
      "Created interpretable model explanations for industry stakeholders",
      "Built prototype web interface for interactive fuel optimization",
      "Demonstrated significant potential for reducing aviation carbon emissions"
    ],
    learnings: [
      "Domain knowledge is crucial for effective feature engineering in chemical applications",
      "Ensemble methods provide robust predictions in high-stakes scenarios",
      "Model interpretability is as important as accuracy for industry adoption",
      "Rapid prototyping requires strong foundation in ML fundamentals"
    ],
    nextSteps: [
      "Scale to larger datasets with production-grade infrastructure",
      "Integrate real-time data feeds for continuous model updating",
      "Expand to predict additional fuel properties and characteristics",
      "Collaborate with industry partners for validation and deployment"
    ]
  },
  
  links: {
    github: "https://github.com/safwanahmadsaffi",
    demo: undefined,
    documentation: undefined
  },
  
  media: {
    hero: "/images/projects/shell-ai-hero.jpg",
    screenshots: [
      "/images/projects/shell-ai-dashboard.jpg",
      "/images/projects/shell-ai-model.jpg"
    ],
    architecture: "/images/projects/shell-ai-architecture.jpg"
  }
};

/**
 * Template for adding new projects
 * Copy this and fill in your project details
 */
export const projectTemplate: ProjectCaseStudy = {
  title: "[Project Name]",
  subtitle: "[One-line description]",
  timeline: "[Duration or dates]",
  team: "[Team size and composition]",
  role: "[Your specific role]",
  
  situation: {
    context: "[Background and context for the project]",
    challenge: [
      "[Challenge 1]",
      "[Challenge 2]",
      "[Challenge 3]"
    ],
    stakeholders: "[Who was impacted or involved]"
  },
  
  task: {
    objectives: [
      "[Objective 1]",
      "[Objective 2]",
      "[Objective 3]"
    ],
    constraints: [
      "[Constraint 1]",
      "[Constraint 2]"
    ],
    scope: "[What you were responsible for]"
  },
  
  action: {
    approach: "[High-level approach description]",
    technical: {
      architecture: [
        "[Architecture decision 1]",
        "[Architecture decision 2]"
      ],
      technologies: [
        "[Technology 1]",
        "[Technology 2]"
      ],
      innovations: [
        "[Innovation 1]",
        "[Innovation 2]"
      ]
    },
    process: {
      methodology: "[Development methodology]",
      iterations: "[Iteration approach]",
      tradeoffs: [
        "[Tradeoff 1: Decision vs Alternative]",
        "[Tradeoff 2: Decision vs Alternative]"
      ]
    }
  },
  
  result: {
    metrics: [
      {
        label: "[Metric name]",
        value: "[Metric value]",
        impact: "[What this means]"
      }
    ],
    outcomes: [
      "[Outcome 1]",
      "[Outcome 2]"
    ],
    learnings: [
      "[Learning 1]",
      "[Learning 2]"
    ],
    nextSteps: [
      "[Future improvement 1]",
      "[Future improvement 2]"
    ]
  },
  
  links: {
    github: "[GitHub URL]",
    demo: "[Demo URL]",
    documentation: "[Docs URL]"
  },
  
  media: {
    hero: "[Hero image path]",
    screenshots: [
      "[Screenshot 1 path]",
      "[Screenshot 2 path]"
    ],
    architecture: "[Architecture diagram path]"
  }
};
