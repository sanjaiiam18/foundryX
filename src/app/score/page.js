"use client";
import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Lightbulb, Search, FileText, TrendingUp, History, Calculator, Award, Users, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';

const SystemExplainer = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const explanationSteps = [
    {
      id: 0,
      title: "Welcome to the Startup Viability Assessment System",
      icon: Lightbulb,
      color: "from-blue-500 to-indigo-600",
      content: {
        heading: "What is this system?",
        description: "This is an intelligent system that evaluates your startup idea before you invest time and money. It simulates real-world factors to give you a viability score between 0-100.",
        keyPoints: [
          "Analyzes your idea from multiple angles",
          "Uses real data from patents, markets, and past startups",
          "Provides a clear Go/No-Go decision",
          "Helps you avoid costly mistakes"
        ],
        visual: "Think of it as a 'fitness check' for your startup idea - just like you'd check your health before running a marathon!"
      }
    },
    {
      id: 1,
      title: "How Does It Work?",
      icon: Calculator,
      color: "from-purple-500 to-pink-600",
      content: {
        heading: "The 5-Factor Analysis",
        description: "Your startup idea is evaluated across 5 critical dimensions. Each dimension contributes points to your final score of 100.",
        keyPoints: [
          "Patent Novelty (25 points) - Is your idea unique?",
          "Market Momentum (25 points) - Is there demand right now?",
          "Research Support (20 points) - Is there scientific backing?",
          "Execution Feasibility (20 points) - Can it actually be built?",
          "Community Confidence (10 points) - What do experts think?"
        ],
        visual: "All 5 factors combine mathematically to create your final viability score."
      }
    },
    {
      id: 2,
      title: "Factor 1: Patent Novelty Score",
      icon: Search,
      color: "from-blue-500 to-cyan-600",
      content: {
        heading: "Checking if Your Idea Already Exists",
        description: "The system searches patent databases to find similar ideas. If many patents already exist, your idea might be overcrowded or already solved.",
        keyPoints: [
          "Searches global patent databases",
          "Analyzes number of similar patents",
          "Checks the age of existing patents",
          "Recent patents = higher competition"
        ],
        scoring: [
          { range: "20-25 points", meaning: "Very few similar patents - HIGH NOVELTY" },
          { range: "10-19 points", meaning: "Moderate similarity - SOME COMPETITION" },
          { range: "0-9 points", meaning: "Highly saturated - OVERCROWDED SPACE" }
        ],
        example: "If you're building 'another food delivery app', you'll likely score low. But 'AI-powered quantum computing for drug discovery' might score high!"
      }
    },
    {
      id: 3,
      title: "Factor 2: Market Momentum Score",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-600",
      content: {
        heading: "Is Your Idea Trending Right Now?",
        description: "The system analyzes the last 7 days of market data - search trends, news mentions, social media buzz. Timing matters!",
        keyPoints: [
          "Analyzes Google Trends data",
          "Checks recent news and articles",
          "Measures social media interest",
          "Identifies rising or declining trends"
        ],
        scoring: [
          { range: "20-25 points", meaning: "Strong rising interest - PERFECT TIMING" },
          { range: "10-19 points", meaning: "Neutral interest - STABLE MARKET" },
          { range: "0-9 points", meaning: "Declining interest - WRONG TIMING" }
        ],
        example: "In 2020, 'remote work tools' would score 25/25. In 2026, they might score 12/25. Timing is everything!"
      }
    },
    {
      id: 4,
      title: "Factor 3: Research Support Score",
      icon: FileText,
      color: "from-purple-500 to-violet-600",
      content: {
        heading: "Is There Scientific Evidence?",
        description: "If you upload research papers, the system checks if credible research supports your idea. Strong research = higher confidence.",
        keyPoints: [
          "Analyzes uploaded research papers",
          "Checks relevance to your idea",
          "Evaluates research quality and recency",
          "Identifies gaps in research"
        ],
        scoring: [
          { range: "15-20 points", meaning: "Strong applied research - WELL-VALIDATED" },
          { range: "7-14 points", meaning: "Partial/theoretical research - SOME SUPPORT" },
          { range: "0-6 points", meaning: "No useful research - UNPROVEN" }
        ],
        example: "A medical device with peer-reviewed studies scores high. A random gadget idea with no research scores low."
      }
    },
    {
      id: 5,
      title: "Factor 4: Execution Feasibility Score",
      icon: History,
      color: "from-orange-500 to-red-600",
      content: {
        heading: "Learning from Past Failures",
        description: "The system finds similar startups that tried your idea before. If many failed, execution might be harder than it looks.",
        keyPoints: [
          "Searches startup databases (Crunchbase, etc.)",
          "Identifies similar past attempts",
          "Analyzes success vs failure rates",
          "Identifies common failure patterns"
        ],
        scoring: [
          { range: "15-20 points", meaning: "Low execution risk - PROVEN FEASIBLE" },
          { range: "7-14 points", meaning: "Medium risk - CHALLENGING BUT POSSIBLE" },
          { range: "0-6 points", meaning: "High risk - MANY PAST FAILURES" }
        ],
        example: "If 50 startups tried your idea and all failed, you'll score low. If similar startups succeeded, you'll score high."
      }
    },
    {
      id: 6,
      title: "Factor 5: Community Confidence Score",
      icon: Users,
      color: "from-pink-500 to-rose-600",
      content: {
        heading: "What Do Other Founders Think?",
        description: "Future feature: Other founders and experts can vote on your idea. Human judgment complements AI analysis.",
        keyPoints: [
          "Founders share their experiences",
          "Community provides feedback",
          "Expert votes are weighted higher",
          "Wisdom of the crowd validation"
        ],
        scoring: [
          { range: "7-10 points", meaning: "Strong support - COMMUNITY LOVES IT" },
          { range: "4-6 points", meaning: "Mixed opinion - UNCERTAIN" },
          { range: "0-3 points", meaning: "Low confidence - COMMUNITY SKEPTICAL" }
        ],
        example: "If experienced founders in your domain love your idea, you'll score high. If they're skeptical, you'll score low."
      }
    },
    {
      id: 7,
      title: "The Final Verdict",
      icon: Award,
      color: "from-indigo-500 to-purple-600",
      content: {
        heading: "What Does Your Score Mean?",
        description: "All 5 factors are added together to give you a final score out of 100. Based on this score, you get a clear recommendation.",
        verdicts: [
          { 
            range: "80-100", 
            decision: "Go Ahead", 
            color: "text-green-600 bg-green-100",
            icon: CheckCircle,
            meaning: "Strong signals across all factors. Your idea has high potential. Time to execute!",
            action: "Build your MVP, start customer interviews, raise funding"
          },
          { 
            range: "60-79", 
            decision: "Be Careful", 
            color: "text-yellow-600 bg-yellow-100",
            icon: AlertTriangle,
            meaning: "Mixed signals. Some factors are strong, others are weak. Proceed with caution.",
            action: "Identify weak areas, pivot your approach, validate assumptions"
          },
          { 
            range: "40-59", 
            decision: "High Risk", 
            color: "text-orange-600 bg-orange-100",
            icon: AlertTriangle,
            meaning: "Multiple red flags detected. Significant challenges ahead.",
            action: "Major pivot needed, reconsider core assumptions, or explore different ideas"
          },
          { 
            range: "0-39", 
            decision: "Do Not Proceed", 
            color: "text-red-600 bg-red-100",
            icon: XCircle,
            meaning: "Critical issues across multiple factors. Very high failure risk.",
            action: "Move on to a different idea. Save your time and money."
          }
        ]
      }
    },
    {
      id: 8,
      title: "Why This System Works",
      icon: Lightbulb,
      color: "from-cyan-500 to-blue-600",
      content: {
        heading: "The Science Behind the System",
        description: "This system combines multiple proven methodologies used by VCs, accelerators, and successful founders.",
        keyPoints: [
          "Data-Driven: Uses real patent, market, and startup data",
          "Multi-Dimensional: No single factor dominates the score",
          "Learn from History: Prevents repeating known failures",
          "Timing-Aware: Considers current market conditions",
          "Balanced: Combines AI analysis with human judgment"
        ],
        visual: "Think of it as having a team of expert advisors - patent lawyers, market analysts, researchers, and successful founders - all giving you their opinion at once!"
      }
    }
  ];

  const currentExplanation = explanationSteps[currentStep];
  const Icon = currentExplanation.icon;
  const progress = ((currentStep + 1) / explanationSteps.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-slate-600 mb-2">
            <span>Step {currentStep + 1} of {explanationSteps.length}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-6">
          {/* Header */}
          <div className={`bg-gradient-to-r ${currentExplanation.color} p-8 text-white`}>
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <Icon size={32} />
              </div>
              <h1 className="text-3xl font-bold">{currentExplanation.title}</h1>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              {currentExplanation.content.heading}
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              {currentExplanation.content.description}
            </p>

            {/* Key Points */}
            {currentExplanation.content.keyPoints && (
              <div className="mb-6">
                <h3 className="font-semibold text-slate-800 mb-3 text-lg">Key Points:</h3>
                <div className="space-y-3">
                  {currentExplanation.content.keyPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="bg-indigo-100 text-indigo-600 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5 font-semibold text-sm">
                        {idx + 1}
                      </div>
                      <p className="text-slate-700">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Scoring Breakdown */}
            {currentExplanation.content.scoring && (
              <div className="mb-6">
                <h3 className="font-semibold text-slate-800 mb-3 text-lg">Scoring:</h3>
                <div className="space-y-3">
                  {currentExplanation.content.scoring.map((score, idx) => (
                    <div key={idx} className="bg-slate-50 rounded-lg p-4 border-l-4 border-indigo-500">
                      <div className="font-semibold text-slate-800">{score.range}</div>
                      <div className="text-slate-600">{score.meaning}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Verdicts */}
            {currentExplanation.content.verdicts && (
              <div className="space-y-4">
                {currentExplanation.content.verdicts.map((verdict, idx) => {
                  const VerdictIcon = verdict.icon;
                  return (
                    <div key={idx} className="bg-slate-50 rounded-xl p-5 border-2 border-slate-200">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`px-4 py-2 rounded-lg font-bold ${verdict.color} flex items-center gap-2`}>
                          <VerdictIcon size={20} />
                          {verdict.decision}
                        </div>
                        <div className="text-slate-600 font-semibold">{verdict.range} points</div>
                      </div>
                      <p className="text-slate-700 mb-2">{verdict.meaning}</p>
                      <div className="text-sm text-slate-600">
                        <span className="font-semibold">Recommended Action: </span>
                        {verdict.action}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Example */}
            {currentExplanation.content.example && (
              <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Lightbulb className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <div className="font-semibold text-blue-900 mb-1">Example:</div>
                    <div className="text-blue-800">{currentExplanation.content.example}</div>
                  </div>
                </div>
              </div>
            )}

            {/* Visual Note */}
            {currentExplanation.content.visual && (
              <div className="mt-6 bg-purple-50 border-l-4 border-purple-500 rounded-lg p-4">
                <div className="text-purple-800 italic">
                  💡 {currentExplanation.content.visual}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              currentStep === 0
                ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                : 'bg-white text-slate-700 hover:bg-slate-50 shadow-md hover:shadow-lg'
            }`}
          >
            <ChevronLeft size={20} />
            Previous
          </button>

          <div className="flex gap-2">
            {explanationSteps.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentStep(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === currentStep 
                    ? 'bg-indigo-600 w-8' 
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setCurrentStep(Math.min(explanationSteps.length - 1, currentStep + 1))}
            disabled={currentStep === explanationSteps.length - 1}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              currentStep === explanationSteps.length - 1
                ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-md hover:shadow-lg'
            }`}
          >
            Next
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Quick Jump Menu */}
        <div className="mt-8 bg-white rounded-xl shadow-md p-6">
          <h3 className="font-bold text-slate-800 mb-4">Quick Navigation</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {explanationSteps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentStep(idx)}
                className={`text-left p-3 rounded-lg text-sm transition-all ${
                  idx === currentStep
                    ? 'bg-indigo-100 text-indigo-700 font-semibold'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {idx + 1}. {step.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemExplainer;