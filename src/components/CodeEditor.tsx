import { useState, useCallback } from "react";

interface CodeEditorProps {
  initialCode: string;
  onRun: (code: string) => void;
}

const CodeEditor = ({ initialCode, onRun }: CodeEditorProps) => {
  const [code, setCode] = useState(initialCode);

  const lines = code.split("\n");

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between px-4 py-2 bg-secondary/50 border-b border-border">
        <span className="text-xs text-muted-foreground font-mono">script.js</span>
        <button
          onClick={() => onRun(code)}
          className="px-4 py-1.5 bg-accent text-accent-foreground text-sm font-semibold rounded-md hover:opacity-90 transition-opacity"
        >
          ▶ Run Code
        </button>
      </div>
      <div className="flex flex-1 overflow-auto bg-editor-bg">
        <div className="py-3 px-2 text-right select-none border-r border-border min-w-[3rem]">
          {lines.map((_, i) => (
            <div key={i} className="text-xs leading-6 text-editor-gutter font-mono">
              {i + 1}
            </div>
          ))}
        </div>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="flex-1 bg-transparent text-foreground font-mono text-sm p-3 leading-6 outline-none resize-none"
          spellCheck={false}
          autoCapitalize="off"
          autoCorrect="off"
        />
      </div>
    </div>
  );
};

export default CodeEditor;
