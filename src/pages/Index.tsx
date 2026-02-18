import { Link } from "react-router-dom";
import { modules } from "@/data/modules";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <header className="relative overflow-hidden border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-mono bg-primary/10 text-primary rounded-full border border-primary/20">
            Created By - SATHVIK REDDY
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight text-foreground mb-4">
            JS <span className="text-primary">Mastery</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
            Learn JavaScript the easy way — brief theory, then hands-on coding problems with a built-in editor. Build your logic step by step.
          </p>
          <Link
            to={`/module/${modules[0].id}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Start Learning →
          </Link>
        </div>
      </header>

      {/* Modules Grid */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-xl font-bold text-foreground mb-6">
          10 Modules · {modules.reduce((sum, m) => sum + m.problems.length, 0)} Problems
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {modules.map((mod, index) => (
            <Link
              key={mod.id}
              to={`/module/${mod.id}`}
              className="group p-5 bg-card border border-border rounded-lg hover:border-primary/50 hover:bg-secondary/30 transition-all"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">{mod.icon}</span>
                <div>
                  <div className="text-xs text-muted-foreground font-mono mb-1">
                    Module {index + 1}
                  </div>
                  <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                    {mod.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    {mod.description}
                  </p>
                  <div className="flex gap-3 mt-2 text-xs text-muted-foreground">
                    <span>{mod.topics.length} topics</span>
                    <span>·</span>
                    <span>{mod.problems.length} problems</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        Built for learning · No backend · Pure React + JS
      </footer>
    </div>
  );
};

export default Index;
