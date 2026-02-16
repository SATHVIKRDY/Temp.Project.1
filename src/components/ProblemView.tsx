import { useState } from "react";
import { Problem } from "@/data/types";
import CodeEditor from "./CodeEditor";
import OutputPanel from "./OutputPanel";

interface ProblemViewProps {
  problem: Problem;
  problemIndex: number;
  totalProblems: number;
  onNext: () => void;
  onPrev: () => void;
}

const ProblemView = ({ problem, problemIndex, totalProblems, onNext, onPrev }: ProblemViewProps) => {
  const [output, setOutput] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [result, setResult] = useState<"success" | "fail" | null>(null);

  const runCode = (code: string) => {
    setOutput([]);
    setError(null);
    setResult(null);

    const logs: string[] = [];
    const mockConsole = {
      log: (...args: any[]) => {
        logs.push(args.map(a => {
          if (typeof a === "object") return JSON.stringify(a);
          return String(a);
        }).join(" "));
      },
    };

    try {
      const fn = new Function("console", code);
      fn(mockConsole);
      setOutput(logs);
    } catch (err: any) {
      setOutput(logs);
      setError(err.message || "An error occurred");
    }
  };

  const checkAnswer = () => {
    const userOutput = output.join("\n").trim();
    const expected = problem.expectedOutput.trim();
    if (userOutput === expected) {
      setResult("success");
    } else {
      setResult("fail");
    }
  };

  const renderDescription = (desc: string) => {
    return desc.split("`").map((part, i) => 
      i % 2 === 1 
        ? <code key={i} className="bg-secondary px-1 py-0.5 rounded text-syntax-keyword font-mono text-xs">{part}</code>
        : <span key={i}>{part}</span>
    );
  };

  return (
    <div className="flex flex-col h-full">
      {/* Problem header */}
      <div className="flex items-center justify-between px-4 py-3 bg-card border-b border-border">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-muted-foreground">
            Problem {problemIndex + 1} / {totalProblems}
          </span>
          <h3 className="text-sm font-semibold text-foreground">{problem.title}</h3>
        </div>
        <div className="flex gap-2">
          <button
            onClick={onPrev}
            disabled={problemIndex === 0}
            className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-md disabled:opacity-30 hover:bg-secondary/80 transition"
          >
            ← Prev
          </button>
          <button
            onClick={onNext}
            disabled={problemIndex === totalProblems - 1}
            className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-md disabled:opacity-30 hover:bg-secondary/80 transition"
          >
            Next →
          </button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Left: Problem description */}
        <div className="w-[35%] border-r border-border overflow-auto p-4 bg-card">
          <p className="text-sm text-secondary-foreground leading-relaxed mb-4">
            {renderDescription(problem.description)}
          </p>
          
          <div className="text-xs text-muted-foreground mb-3">
            <span className="font-semibold text-foreground">Expected Output:</span>
            <pre className="mt-1 bg-editor-bg p-2 rounded border border-border font-mono text-syntax-string">
              {problem.expectedOutput}
            </pre>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            <button
              onClick={checkAnswer}
              disabled={output.length === 0}
              className="px-3 py-1.5 text-xs bg-primary text-primary-foreground rounded-md disabled:opacity-40 hover:opacity-90 transition font-semibold"
            >
              ✓ Check Answer
            </button>
            <button
              onClick={() => setShowHint(!showHint)}
              className="px-3 py-1.5 text-xs bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition"
            >
              💡 Hint
            </button>
            <button
              onClick={() => setShowSolution(!showSolution)}
              className="px-3 py-1.5 text-xs bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition"
            >
              👁 Solution
            </button>
          </div>

          {result === "success" && (
            <div className="mt-3 p-2 bg-accent/10 border border-accent rounded-md text-accent text-xs font-semibold">
              ✅ Correct! Great job!
            </div>
          )}
          {result === "fail" && (
            <div className="mt-3 p-2 bg-destructive/10 border border-destructive rounded-md text-destructive text-xs font-semibold">
              ❌ Output doesn't match. Try again!
            </div>
          )}

          {showHint && (
            <div className="mt-3 p-2 bg-warning/10 border border-warning/30 rounded-md text-xs text-secondary-foreground">
              💡 {problem.hint}
            </div>
          )}

          {showSolution && (
            <div className="mt-3">
              <span className="text-xs font-semibold text-muted-foreground">Solution:</span>
              <pre className="mt-1 bg-editor-bg p-3 rounded border border-border font-mono text-xs text-foreground overflow-x-auto">
                {problem.solution}
              </pre>
            </div>
          )}
        </div>

        {/* Right: Editor + Output */}
        <div className="flex-1 flex flex-col">
          <div className="flex-1 min-h-0">
            <CodeEditor initialCode={problem.starterCode} onRun={runCode} />
          </div>
          <div className="h-[35%] border-t border-border">
            <OutputPanel output={output} error={error} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemView;
