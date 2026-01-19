"use client"
import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  FileText,
  Search,
  TrendingUp,
  AlertTriangle,
  Calculator,
  MessageSquare,
  Database,
} from "lucide-react";

const WorkflowDiagram = () => {
  const [expandedModule, setExpandedModule] = useState(null);

  const modules = [
    {
      id: 1,
      title: "User Input Module",
      subtitle: "Idea Collection",
      icon: FileText,
      color: "bg-blue-500",
      steps: [
        "User opens application/form",
        "Enter product idea, target users, problem statement, market domain",
        "Optional: Upload research papers",
        "Data stored in database",
      ],
      output: "Structured idea data",
    },
    {
      id: 2,
      title: "Patent Analysis Module",
      subtitle: "Past Idea Check",
      icon: Search,
      color: "bg-purple-500",
      steps: [
        "System processes idea description",
        "Search patent databases for similar patents",
        "Analyze number and age of patents",
        "Generate patent risk score",
      ],
      output: "Patent Risk Score",
    },
    {
      id: 3,
      title: "Research Paper Analysis",
      subtitle: "Evidence Validation",
      icon: FileText,
      color: "bg-green-500",
      steps: [
        "Extract text from uploaded papers",
        "Check relevance to startup idea",
        "Evaluate research strength and limitations",
        "Generate research support score",
      ],
      output: "Research Support Score",
    },
    {
      id: 4,
      title: "Market Signal Module",
      subtitle: "Last 7 Days Analysis",
      icon: TrendingUp,
      color: "bg-orange-500",
      steps: [
        "Extract keywords from idea",
        "Collect search trends and news (7 days)",
        "Analyze market interest trends",
        "Generate market momentum score",
      ],
      output: "Market Momentum Score",
    },
    {
      id: 5,
      title: "Past Startup Learning",
      subtitle: "Historical Analysis",
      icon: AlertTriangle,
      color: "bg-red-500",
      steps: [
        "Find similar startup ideas from history",
        "Analyze success and failure patterns",
        "Identify common mistakes",
        "Generate execution risk score",
      ],
      output: "Execution Risk Score",
    },
    {
      id: 6,
      title: "Simulation & Scoring",
      subtitle: "Core Analysis Engine",
      icon: Calculator,
      color: "bg-indigo-500",
      steps: [
        "Collect all module scores",
        "Apply weighted scoring algorithm",
        "Calculate final score (0-100)",
        "Generate verdict (Go/Be Careful/High Risk)",
      ],
      output: "Final Score & Verdict",
    },
    {
      id: 7,
      title: "Result & Explanation",
      subtitle: "User Feedback",
      icon: MessageSquare,
      color: "bg-teal-500",
      steps: [
        "Display final score and verdict",
        "Explain reasoning behind score",
        "Provide risk assessment",
        "Suggest improvements",
      ],
      output: "Comprehensive Report",
    },
    {
      id: 8,
      title: "Community Module",
      subtitle: "Future Scope",
      icon: Database,
      color: "bg-pink-500",
      steps: [
        "Founders share ideas and experiences",
        "Community provides feedback and votes",
        "Aggregate community insights",
        "Improve confidence score",
      ],
      output: "Community Confidence Score",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-3">
            Startup Viability Assessment System
          </h1>
          <p className="text-lg text-slate-600">Module-wise Workflow Diagram</p>
        </div>

        <div className="space-y-4">
          {modules.map((module, index) => {
            const Icon = module.icon;
            const isExpanded = expandedModule === module.id;

            return (
              <div key={module.id} className="relative">
                {/* Module Card */}
                <div
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden"
                  onClick={() =>
                    setExpandedModule(isExpanded ? null : module.id)
                  }
                >
                  <div className="flex items-center p-6">
                    <div
                      className={`${module.color} rounded-full p-4 text-white mr-4`}
                    >
                      <Icon size={28} />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-slate-500">
                          Module {module.id}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-800">
                        {module.title}
                      </h3>
                      <p className="text-sm text-slate-600">
                        {module.subtitle}
                      </p>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-xs text-slate-500 font-medium">
                          OUTPUT
                        </div>
                        <div className="text-sm font-semibold text-slate-700">
                          {module.output}
                        </div>
                      </div>
                      {isExpanded ? (
                        <ChevronUp size={24} />
                      ) : (
                        <ChevronDown size={24} />
                      )}
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {isExpanded && (
                    <div className="border-t border-slate-200 bg-slate-50 p-6">
                      <h4 className="font-semibold text-slate-700 mb-3">
                        Workflow Steps:
                      </h4>
                      <ol className="space-y-2">
                        {module.steps.map((step, stepIndex) => (
                          <li key={stepIndex} className="flex items-start">
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-200 text-slate-700 text-xs font-bold mr-3 mt-0.5 flex-shrink-0">
                              {stepIndex + 1}
                            </span>
                            <span className="text-slate-700">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}
                </div>

                {/* Connector Arrow */}
                {index < modules.length - 1 && (
                  <div className="flex justify-center my-3">
                    <div className="w-0.5 h-6 bg-slate-300"></div>
                    <div className="absolute w-3 h-3 bg-slate-300 rounded-full transform translate-y-5"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Summary Section */}
        <div className="mt-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">System Flow Summary</h3>
          <p className="text-indigo-100 mb-4">
            The system processes startup ideas through 8 interconnected modules,
            each contributing to the final viability assessment. Data flows
            sequentially from user input through multiple analysis layers,
            culminating in a comprehensive score and actionable recommendations.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-3xl font-bold">8</div>
              <div className="text-sm text-indigo-200">Modules</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-3xl font-bold">4</div>
              <div className="text-sm text-indigo-200">Score Inputs</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-3xl font-bold">0-100</div>
              <div className="text-sm text-indigo-200">Final Score</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-3xl font-bold">3</div>
              <div className="text-sm text-indigo-200">Risk Levels</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowDiagram;
