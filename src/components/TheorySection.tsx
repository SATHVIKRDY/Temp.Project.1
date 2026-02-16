interface TheorySectionProps {
  content: string;
}

const TheorySection = ({ content }: TheorySectionProps) => {
  // Simple markdown-like renderer for theory content
  const renderContent = (text: string) => {
    const blocks: JSX.Element[] = [];
    const lines = text.split("\n");
    let i = 0;
    let blockId = 0;

    while (i < lines.length) {
      const line = lines[i];

      // Code blocks
      if (line.trim().startsWith("```")) {
        const codeLines: string[] = [];
        i++;
        while (i < lines.length && !lines[i].trim().startsWith("```")) {
          codeLines.push(lines[i]);
          i++;
        }
        i++; // skip closing ```
        blocks.push(
          <pre key={blockId++} className="bg-editor-bg border border-border rounded-md p-4 my-3 overflow-x-auto">
            <code className="text-sm font-mono text-foreground leading-relaxed">
              {codeLines.join("\n")}
            </code>
          </pre>
        );
        continue;
      }

      // Headers
      if (line.startsWith("**") && line.endsWith("**")) {
        blocks.push(
          <h3 key={blockId++} className="text-base font-bold text-foreground mt-4 mb-2">
            {line.replace(/\*\*/g, "")}
          </h3>
        );
        i++;
        continue;
      }

      // Table
      if (line.includes("|") && line.trim().startsWith("|")) {
        const tableLines: string[] = [];
        while (i < lines.length && lines[i].includes("|") && lines[i].trim().startsWith("|")) {
          if (!lines[i].match(/^\|[\s-|]+\|$/)) {
            tableLines.push(lines[i]);
          }
          i++;
        }
        if (tableLines.length > 0) {
          const headers = tableLines[0].split("|").filter(c => c.trim());
          const rows = tableLines.slice(1);
          blocks.push(
            <div key={blockId++} className="overflow-x-auto my-3">
              <table className="w-full text-sm border border-border rounded">
                <thead>
                  <tr className="bg-secondary/50">
                    {headers.map((h, j) => (
                      <th key={j} className="px-3 py-2 text-left text-muted-foreground font-medium border-b border-border">
                        {renderInline(h.trim())}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, j) => (
                    <tr key={j} className="border-b border-border last:border-0">
                      {row.split("|").filter(c => c.trim()).map((cell, k) => (
                        <td key={k} className="px-3 py-2 text-foreground">
                          {renderInline(cell.trim())}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
        continue;
      }

      // Bullet points
      if (line.trim().startsWith("- ")) {
        const items: string[] = [];
        while (i < lines.length && lines[i].trim().startsWith("- ")) {
          items.push(lines[i].trim().substring(2));
          i++;
        }
        blocks.push(
          <ul key={blockId++} className="list-disc list-inside space-y-1 my-2 text-sm text-secondary-foreground">
            {items.map((item, j) => (
              <li key={j}>{renderInline(item)}</li>
            ))}
          </ul>
        );
        continue;
      }

      // Empty line
      if (line.trim() === "") {
        i++;
        continue;
      }

      // Regular paragraph
      blocks.push(
        <p key={blockId++} className="text-sm text-secondary-foreground leading-relaxed my-2">
          {renderInline(line)}
        </p>
      );
      i++;
    }

    return blocks;
  };

  const renderInline = (text: string): (string | JSX.Element)[] => {
    const parts: (string | JSX.Element)[] = [];
    // Handle inline code, bold, and emojis
    const regex = /(`[^`]+`|\*\*[^*]+\*\*|⚠️|✅|❌|⚡)/g;
    let lastIndex = 0;
    let match;
    let key = 0;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index));
      }
      const m = match[0];
      if (m.startsWith("`") && m.endsWith("`")) {
        parts.push(
          <code key={key++} className="bg-secondary px-1.5 py-0.5 rounded text-syntax-keyword font-mono text-xs">
            {m.slice(1, -1)}
          </code>
        );
      } else if (m.startsWith("**") && m.endsWith("**")) {
        parts.push(
          <strong key={key++} className="text-foreground font-semibold">
            {m.slice(2, -2)}
          </strong>
        );
      } else {
        parts.push(m);
      }
      lastIndex = match.index + m.length;
    }
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }
    return parts;
  };

  return (
    <div className="prose-sm max-w-none">
      {renderContent(content)}
    </div>
  );
};

export default TheorySection;
