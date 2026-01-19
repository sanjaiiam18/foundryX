"use client";
import React, { useState } from 'react';
import { Database, Search, TrendingUp, FileText, History, Users, ChevronDown, ChevronUp, ExternalLink, ArrowRight, CheckCircle } from 'lucide-react';

const DataSourcesExplorer = () => {
  const [expandedSource, setExpandedSource] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  const dataSources = [
    {
      id: 1,
      name: "Patent Data Source",
      icon: Search,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      usedFor: "Patent Novelty Score (Past Idea Check)",
      sources: [
        { name: "Google Patents", url: "patents.google.com", type: "Public Data" },
        { name: "USPTO Open Patent Data", url: "uspto.gov", type: "Official Database" },
        { name: "WIPO Patentscope", url: "patentscope.wipo.int", type: "Global Database" }
      ],
      dataCollected: [
        "Patent titles",
        "Patent abstracts",
        "Patent publication year",
        "Number of similar patents"
      ],
      purpose: [
        "To identify already solved ideas",
        "To detect overcrowded or saturated domains"
      ],
      exampleQuery: "Search: 'AI-powered food delivery' → Returns 1,247 patents → High saturation detected"
    },
    {
      id: 2,
      name: "Market Trend Data",
      icon: TrendingUp,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      usedFor: "Market Momentum Score (Last 7 Days Analysis)",
      sources: [
        { name: "Google Trends", url: "trends.google.com", type: "Search Analytics" },
        { name: "GDELT Project", url: "gdeltproject.org", type: "News Database" },
        { name: "Public Forums", url: "Reddit, blogs", type: "Discussion Data" }
      ],
      dataCollected: [
        "Search interest over last 7 days",
        "Recent news mentions",
        "Online discussion frequency",
        "Sentiment trends"
      ],
      purpose: [
        "To check current demand",
        "To understand market timing",
        "To identify rising or declining interest"
      ],
      exampleQuery: "Keyword: 'remote work tools' → Last 7 days: +45% search spike → Rising momentum"
    },
    {
      id: 3,
      name: "Research Paper Data",
      icon: FileText,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      usedFor: "Research Support Score",
      sources: [
        { name: "User Uploads", url: "PDF/Links", type: "Direct Input" },
        { name: "arXiv API", url: "arxiv.org", type: "Open Research" },
        { name: "Semantic Scholar", url: "semanticscholar.org", type: "Academic Database" }
      ],
      dataCollected: [
        "Paper abstracts",
        "Key findings and results",
        "Research limitations",
        "Publication year",
        "Citation count"
      ],
      purpose: [
        "To validate technical feasibility",
        "To check academic support for the idea",
        "To identify research gaps"
      ],
      exampleQuery: "Upload: 'quantum_computing_drug_discovery.pdf' → 15 citations, 2023 → Strong research support"
    },
    {
      id: 4,
      name: "Past Startup Learning Data",
      icon: History,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      usedFor: "Execution Feasibility Score",
      sources: [
        { name: "Startup Case Studies", url: "Public databases", type: "Historical Data" },
        { name: "Failure Reports", url: "CB Insights, Failory", type: "Analysis Reports" },
        { name: "Experiment Repos", url: "GitHub, Open sources", type: "Technical Records" }
      ],
      dataCollected: [
        "Success and failure patterns",
        "Common mistakes and pitfalls",
        "Execution challenges",
        "Time to market data",
        "Funding requirements"
      ],
      purpose: [
        "To learn from previous startup failures",
        "To estimate execution difficulty",
        "To identify common roadblocks"
      ],
      exampleQuery: "Similar idea: 'On-demand laundry' → 8 failures, 2 successes → High execution risk"
    },
    {
      id: 5,
      name: "Community Feedback Data",
      icon: Users,
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
      usedFor: "Community Confidence Score",
      sources: [
        { name: "Founder Community", url: "Platform feature", type: "Future Scope" },
        { name: "Peer Reviews", url: "Voting system", type: "Crowdsourced" },
        { name: "Expert Feedback", url: "Curated opinions", type: "Weighted Input" }
      ],
      dataCollected: [
        "Positive or negative feedback",
        "Confidence level (1-10 scale)",
        "Expert vs novice votes",
        "Detailed comments"
      ],
      purpose: [
        "To include human judgment",
        "To improve decision quality",
        "To leverage collective wisdom"
      ],
      exampleQuery: "Community vote: 47 founders → 72% positive → Good confidence signal"
    }
  ];

  const dataFlow = [
    { source: "Patent Data", arrow: true },
    { source: "Market Trend Data (7 Days)", arrow: true },
    { source: "Research Paper Data", arrow: true },
    { source: "Past Startup Learning", arrow: true },
    { source: "Community Feedback", arrow: false },
    { result: "→ Final Score Generation" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Database size={16} />
            Data Intelligence Layer
          </div>
          <h1 className="text-4xl font-bold text-slate-800 mb-3">
            Data Sources Used in the Project
          </h1>
          <p className="text-lg text-slate-600">
            Understanding where the system gets its intelligence from
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 bg-white rounded-lg p-2 shadow-md">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex-1 py-3 px-4 rounded-md font-semibold transition-all ${
              activeTab === 'overview'
                ? 'bg-indigo-600 text-white'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Data Sources Overview
          </button>
          <button
            onClick={() => setActiveTab('flow')}
            className={`flex-1 py-3 px-4 rounded-md font-semibold transition-all ${
              activeTab === 'flow'
                ? 'bg-indigo-600 text-white'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Data Flow Diagram
          </button>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-4">
            {dataSources.map((source) => {
              const Icon = source.icon;
              const isExpanded = expandedSource === source.id;

              return (
                <div key={source.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                  {/* Header */}
                  <div
                    onClick={() => setExpandedSource(isExpanded ? null : source.id)}
                    className="cursor-pointer hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-center p-6">
                      <div className={`bg-gradient-to-r ${source.color} rounded-lg p-4 text-white mr-4`}>
                        <Icon size={28} />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-semibold text-slate-500">
                            Source {source.id}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-800">{source.name}</h3>
                        <p className="text-sm text-slate-600">{source.usedFor}</p>
                      </div>

                      {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="border-t border-slate-200">
                      {/* Data Sources */}
                      <div className="p-6 bg-slate-50">
                        <h4 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                          <Database size={18} />
                          Primary Data Sources:
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          {source.sources.map((src, idx) => (
                            <div key={idx} className="bg-white rounded-lg p-4 border border-slate-200">
                              <div className="flex items-start justify-between mb-2">
                                <div className="font-semibold text-slate-800 text-sm">{src.name}</div>
                                <ExternalLink size={14} className="text-slate-400" />
                              </div>
                              <div className="text-xs text-slate-500">{src.url}</div>
                              <div className="mt-2 inline-block bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-xs font-medium">
                                {src.type}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Data Collected */}
                      <div className="p-6">
                        <h4 className="font-semibold text-slate-800 mb-3">What Data is Collected:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {source.dataCollected.map((data, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="text-slate-700">{data}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Purpose */}
                      <div className="p-6 bg-slate-50">
                        <h4 className="font-semibold text-slate-800 mb-3">Why This Data is Used:</h4>
                        <div className="space-y-2">
                          {source.purpose.map((purpose, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <ArrowRight size={18} className="text-indigo-600 flex-shrink-0 mt-0.5" />
                              <span className="text-slate-700">{purpose}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Example */}
                      <div className="p-6">
                        <h4 className="font-semibold text-slate-800 mb-2">Example Query:</h4>
                        <div className="bg-indigo-50 border-l-4 border-indigo-500 rounded-lg p-4">
                          <code className="text-sm text-indigo-900">{source.exampleQuery}</code>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Data Flow Tab */}
        {activeTab === 'flow' && (
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
              Data Flow Summary
            </h2>

            {/* Visual Flow */}
            <div className="max-w-3xl mx-auto">
              {dataFlow.map((item, idx) => (
                <div key={idx}>
                  {item.source && (
                    <div className="mb-4">
                      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg p-4 shadow-md">
                        <div className="font-semibold text-lg">{item.source}</div>
                      </div>
                      {item.arrow && (
                        <div className="flex justify-center my-3">
                          <div className="text-indigo-600 text-2xl font-bold">+</div>
                        </div>
                      )}
                    </div>
                  )}
                  {item.result && (
                    <div className="mt-6">
                      <div className="flex justify-center mb-3">
                        <ArrowRight size={32} className="text-indigo-600" />
                      </div>
                      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl p-6 text-center shadow-lg">
                        <div className="text-2xl font-bold">{item.result}</div>
                        <div className="text-sm opacity-90 mt-2">Score: 0-100 | Verdict: Go/Be Careful/High Risk/Do Not Proceed</div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8">
              {dataSources.map((source) => {
                const Icon = source.icon;
                return (
                  <div key={source.id} className={`${source.bgColor} rounded-lg p-4 border-2 ${source.borderColor}`}>
                    <div className={`bg-gradient-to-r ${source.color} rounded-lg p-2 text-white inline-block mb-2`}>
                      <Icon size={20} />
                    </div>
                    <div className="text-xs font-semibold text-slate-600 mb-1">Source {source.id}</div>
                    <div className="text-sm font-bold text-slate-800">{source.sources.length} Providers</div>
                  </div>
                );
              })}
            </div>

            {/* Data Processing Pipeline */}
            <div className="mt-8 bg-slate-50 rounded-lg p-6">
              <h3 className="font-bold text-slate-800 mb-4 text-lg">Data Processing Pipeline:</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div className="flex-1">
                    <div className="font-semibold text-slate-800">Data Collection</div>
                    <div className="text-sm text-slate-600">Gather data from all 5 sources simultaneously</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div className="flex-1">
                    <div className="font-semibold text-slate-800">Data Processing</div>
                    <div className="text-sm text-slate-600">Clean, normalize, and analyze collected data</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div className="flex-1">
                    <div className="font-semibold text-slate-800">Score Calculation</div>
                    <div className="text-sm text-slate-600">Apply weighted algorithms to generate individual scores</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">4</div>
                  <div className="flex-1">
                    <div className="font-semibold text-slate-800">Score Aggregation</div>
                    <div className="text-sm text-slate-600">Combine all scores into final viability score (0-100)</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">5</div>
                  <div className="flex-1">
                    <div className="font-semibold text-slate-800">Verdict Generation</div>
                    <div className="text-sm text-slate-600">Generate final recommendation and detailed report</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Summary Card */}
        <div className="mt-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-6 text-white">
          <h3 className="text-xl font-bold mb-3">Data Intelligence Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <div className="text-3xl font-bold">5</div>
              <div className="text-indigo-100 text-sm">Primary Data Sources</div>
            </div>
            <div>
              <div className="text-3xl font-bold">12+</div>
              <div className="text-indigo-100 text-sm">Data Providers</div>
            </div>
            <div>
              <div className="text-3xl font-bold">Real-time</div>
              <div className="text-indigo-100 text-sm">Market Data Updates</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataSourcesExplorer;