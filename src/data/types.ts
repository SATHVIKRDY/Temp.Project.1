export interface Problem {
  id: number;
  title: string;
  description: string;
  starterCode: string;
  expectedOutput: string;
  hint: string;
  solution: string;
}

export interface Topic {
  id: string;
  title: string;
  theory: string; // markdown-like content with code blocks
}

export interface Module {
  id: string;
  title: string;
  description: string;
  icon: string;
  topics: Topic[];
  problems: Problem[];
}
