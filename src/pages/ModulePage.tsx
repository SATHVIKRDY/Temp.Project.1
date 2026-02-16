import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getModuleById } from "@/data/modules";
import TheorySection from "@/components/TheorySection";
import ProblemView from "@/components/ProblemView";

const ModulePage = () => {
  const { moduleId } = useParams<{ moduleId: string }>();
  const mod = getModuleById(moduleId || "");
  const [activeTab, setActiveTab] = useState<"learn" | "practice">("learn");
  const [activeTopic, setActiveTopic] = useState(0);
  const [activeProblem, setActiveProblem] = useState(0);

  if (!mod) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-2">Module not found</h1>
          <Link to="/" className="text-primary hover:underline text-sm">← Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top bar */}
      <header className="flex items-center justify-between px-4 py-3 bg-card border-b border-border">
        <div className="flex items-center gap-3">
          <Link to="/" className="text-muted-foreground hover:text-foreground text-sm transition">
            ← Home
          </Link>
          <span className="text-border">|</span>
          <span className="text-lg">{mod.icon}</span>
          <h1 className="text-base font-bold text-foreground">{mod.title}</h1>
        </div>
        <div className="flex bg-secondary rounded-md overflow-hidden">
          <button
            onClick={() => setActiveTab("learn")}
            className={`px-4 py-1.5 text-xs font-medium transition ${
              activeTab === "learn" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            📖 Learn
          </button>
          <button
            onClick={() => setActiveTab("practice")}
            className={`px-4 py-1.5 text-xs font-medium transition ${
              activeTab === "practice" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            💻 Practice
          </button>
        </div>
      </header>

      {activeTab === "learn" ? (
        <div className="flex flex-1 overflow-hidden">
          {/* Topic sidebar */}
          <aside className="w-56 border-r border-border bg-card overflow-auto">
            <div className="p-3 text-xs font-mono text-muted-foreground border-b border-border">
              Topics ({mod.topics.length})
            </div>
            {mod.topics.map((topic, i) => (
              <button
                key={topic.id}
                onClick={() => setActiveTopic(i)}
                className={`w-full text-left px-4 py-3 text-sm border-b border-border transition ${
                  activeTopic === i
                    ? "bg-primary/10 text-primary border-l-2 border-l-primary"
                    : "text-secondary-foreground hover:bg-secondary/50"
                }`}
              >
                <span className="text-xs text-muted-foreground font-mono mr-2">{i + 1}.</span>
                {topic.title}
              </button>
            ))}
            <div className="p-4">
              <button
                onClick={() => setActiveTab("practice")}
                className="w-full px-3 py-2 text-xs bg-accent text-accent-foreground font-semibold rounded-md hover:opacity-90 transition"
              >
                Start Practice →
              </button>
            </div>
          </aside>

          {/* Theory content */}
          <main className="flex-1 overflow-auto p-6 max-w-3xl">
            <h2 className="text-xl font-bold text-foreground mb-4">
              {mod.topics[activeTopic].title}
            </h2>
            <TheorySection content={mod.topics[activeTopic].theory} />
            
            <div className="flex justify-between mt-8 pt-4 border-t border-border">
              <button
                onClick={() => setActiveTopic(Math.max(0, activeTopic - 1))}
                disabled={activeTopic === 0}
                className="text-xs text-muted-foreground hover:text-foreground disabled:opacity-30 transition"
              >
                ← Previous Topic
              </button>
              {activeTopic < mod.topics.length - 1 ? (
                <button
                  onClick={() => setActiveTopic(activeTopic + 1)}
                  className="text-xs text-primary hover:underline transition"
                >
                  Next Topic →
                </button>
              ) : (
                <button
                  onClick={() => setActiveTab("practice")}
                  className="text-xs text-accent hover:underline transition font-semibold"
                >
                  Start Practice →
                </button>
              )}
            </div>
          </main>
        </div>
      ) : (
        <div className="flex-1 overflow-hidden">
          <ProblemView
            key={activeProblem}
            problem={mod.problems[activeProblem]}
            problemIndex={activeProblem}
            totalProblems={mod.problems.length}
            onNext={() => setActiveProblem(Math.min(mod.problems.length - 1, activeProblem + 1))}
            onPrev={() => setActiveProblem(Math.max(0, activeProblem - 1))}
          />
        </div>
      )}
    </div>
  );
};

export default ModulePage;
