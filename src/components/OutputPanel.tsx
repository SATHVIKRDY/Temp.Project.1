interface OutputPanelProps {
  output: string[];
  error: string | null;
}

const OutputPanel = ({ output, error }: OutputPanelProps) => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center px-4 py-2 bg-secondary/50 border-b border-border">
        <span className="text-xs text-muted-foreground font-mono">Console Output</span>
      </div>
      <div className="flex-1 overflow-auto p-4 bg-editor-bg font-mono text-sm">
        {output.length === 0 && !error && (
          <span className="text-muted-foreground text-xs">Run your code to see output here...</span>
        )}
        {output.map((line, i) => (
          <div key={i} className="text-syntax-string leading-6">{line}</div>
        ))}
        {error && (
          <div className="text-destructive leading-6 mt-1">❌ {error}</div>
        )}
      </div>
    </div>
  );
};

export default OutputPanel;
