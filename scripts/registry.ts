import fs from "fs";
import path from "path";

// ─── Config ───────────────────────────────────────────────
const SCOPE = "@shad-punk";
const REGISTRY_URL = "https://shad-punk-ui.vercel.app/r";
const BASE_DEPS = ["clsx", "tailwind-merge", "lucide-react"];
const SKIP_IMPORTS = new Set([
  "react",
  "react-dom",
  "lucide-react",
  "clsx",
  "tailwind-merge",
]);

const ROOT = process.cwd();
const COMPONENTS_DIR = path.join(ROOT, "components", "ui");
const HOOKS_DIR = path.join(ROOT, "hooks");
const LIB_DIR = path.join(ROOT, "lib");
const REGISTRY_OUT = path.join(ROOT, "registry", "shad-punk");
const PUBLIC_OUT = path.join(ROOT, "public", "r");
const INDEX_OUT = path.join(ROOT, "registry", "index.json");

// ─── Types ────────────────────────────────────────────────
interface RegistryFile {
  path: string;
  content: string;
  type: string;
  target: string;
}

interface RegistryItem {
  $schema?: string;
  name: string;
  type: string;
  dependencies: string[];
  devDependencies: string[];
  registryDependencies: string[];
  files: RegistryFile[];
  tailwind?: {config: {theme: {extend: Record<string, unknown>}}};
  meta?: Record<string, string>;
  docs?: string;
}

// ─── Import Parser ────────────────────────────────────────
function parseImports(filePath: string) {
  const content = fs.readFileSync(filePath, "utf8");
  const npmDeps: string[] = [];
  const registryDeps: string[] = [];
  const extraFiles: RegistryFile[] = [];

  const importRegex = /^import\s+.*?\s+from\s+["'](.+?)["']/gm;
  let match: RegExpExecArray | null;

  while ((match = importRegex.exec(content)) !== null) {
    const source = match[1];

    // Skip framework / base deps
    if (
      source === "react" ||
      source === "react-dom" ||
      source.startsWith("next/") ||
      source.startsWith("next-themes/") ||
      SKIP_IMPORTS.has(source)
    )
      continue;

    // Internal component → registry dependency
    if (source.startsWith("@/components/ui/")) {
      const compName = source.replace("@/components/ui/", "");
      registryDeps.push(`${SCOPE}/${compName}`);
      continue;
    }

    // Internal hook → include file
    if (source.startsWith("@/hooks/")) {
      const hookName = source.replace("@/hooks/", "");
      const hookPath = path.join(HOOKS_DIR, `${hookName}.ts`);
      if (fs.existsSync(hookPath)) {
        extraFiles.push({
          path: `hooks/${hookName}.ts`,
          content: fs.readFileSync(hookPath, "utf8"),
          type: "registry:hook",
          target: `hooks/${hookName}.ts`,
        });
      }
      continue;
    }

    // Internal lib → skip (utils.ts always included)
    if (source.startsWith("@/lib/")) continue;

    // External npm package
    const pkgName = source.startsWith("@")
      ? source.split("/").slice(0, 2).join("/")
      : source.split("/")[0];
    npmDeps.push(pkgName);
  }

  return {
    npmDeps: [...new Set(npmDeps)],
    registryDeps: [...new Set(registryDeps)],
    extraFiles,
  };
}

// ─── Layout Template ──────────────────────────────────────
// Clean template for distribution (no demo-site specific metadata)
const LAYOUT_TEMPLATE = `import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
  title: "My App",
  description: "Powered by shad-punk-ui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="/augmented-ui.min.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bitcount+Grid+Single:wght@100..900&family=Share+Tech+Mono&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Rajdhani:wght@300;400;500;600;700&family=Orbitron:wght@400..900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="edgerunners"
          themes={["edgerunners", "armored-core"]}
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
`;

// ─── Generators ───────────────────────────────────────────
function generateComponentJson(
  componentName: string,
  filePath: string,
): RegistryItem {
  const content = fs.readFileSync(filePath, "utf8");
  const {npmDeps, registryDeps, extraFiles} = parseImports(filePath);
  const utilsContent = fs.readFileSync(path.join(LIB_DIR, "utils.ts"), "utf8");
  const fileName = path.basename(filePath);

  return {
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    name: componentName,
    type: "registry:ui",
    dependencies: [...BASE_DEPS, ...npmDeps],
    devDependencies: [],
    registryDependencies: [`${SCOPE}/globals`, ...registryDeps],
    files: [
      {
        path: `components/ui/${fileName}`,
        content,
        type: "registry:ui",
        target: `components/ui/${fileName}`,
      },
      {
        path: "lib/utils.ts",
        content: utilsContent,
        type: "registry:lib",
        target: "lib/utils.ts",
      },
      ...extraFiles,
    ],
    tailwind: {config: {theme: {extend: {}}}},
  };
}

function generateGlobalsJson(): RegistryItem {
  const cssContent = fs.readFileSync(
    path.join(ROOT, "app", "globals.css"),
    "utf8",
  );

  return {
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    name: "globals",
    type: "registry:style",
    dependencies: ["tw-animate-css", "augmented-ui"],
    devDependencies: [],
    registryDependencies: [],
    files: [
      {
        path: "app/globals.css",
        content: cssContent,
        type: "registry:style",
        target: "app/globals.css",
      },
    ],
    meta: {
      postinstall:
        "cp node_modules/augmented-ui/augmented-ui.min.css public/augmented-ui.min.css",
    },
    docs: 'After installing, add a postinstall script to your package.json:\n"postinstall": "cp node_modules/augmented-ui/augmented-ui.min.css public/augmented-ui.min.css"\nThen run: pnpm install',
  };
}

function generateLayoutJson(): RegistryItem {
  return {
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    name: "layout",
    type: "registry:file",
    dependencies: ["next", "next-themes"],
    devDependencies: [],
    registryDependencies: [`${SCOPE}/globals`],
    files: [
      {
        path: "app/layout.tsx",
        content: LAYOUT_TEMPLATE,
        type: "registry:file",
        target: "app/layout.tsx",
      },
    ],
  };
}

function generateAllJson(componentNames: string[]): RegistryItem {
  return {
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    name: "all",
    type: "registry:ui",
    dependencies: [],
    devDependencies: [],
    registryDependencies: [
      `${SCOPE}/globals`,
      ...componentNames.map((n) => `${SCOPE}/${n}`),
    ],
    files: [],
  };
}

interface IndexEntry {
  name: string;
  type: string;
  files: string[];
}

function generateIndex(allItems: RegistryItem[]) {
  const components: IndexEntry[] = allItems.map((item) => ({
    name: item.name,
    type: item.type,
    files: [`shad-punk/${item.name}.json`],
  }));

  return {
    name: "shad-punk",
    type: "registry:style",
    registryUrl: REGISTRY_URL,
    description: "Mech combat & cyberpunk UI component library",
    author: "enfp-dev-studio",
    scope: SCOPE,
    styles: [{name: "shad-punk", label: "Shad-Punk"}],
    components,
  };
}

// ─── Write Helper ─────────────────────────────────────────
function writeJson(dir: string, name: string, data: unknown) {
  fs.mkdirSync(dir, {recursive: true});
  const filePath = path.join(dir, `${name}.json`);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// ─── Main ─────────────────────────────────────────────────
function main() {
  console.log("Generating registry...\n");

  fs.mkdirSync(REGISTRY_OUT, {recursive: true});
  fs.mkdirSync(PUBLIC_OUT, {recursive: true});

  const allItems: RegistryItem[] = [];
  const componentNames: string[] = [];

  // 1. Component JSONs
  const files = fs
    .readdirSync(COMPONENTS_DIR)
    .filter((f: string) => f.endsWith(".tsx"));

  for (const file of files) {
    const name = file.replace(".tsx", "");
    const filePath = path.join(COMPONENTS_DIR, file);
    const item = generateComponentJson(name, filePath);

    writeJson(REGISTRY_OUT, name, item);
    writeJson(PUBLIC_OUT, name, item);
    allItems.push(item);
    componentNames.push(name);
    console.log(
      `  [ui] ${name} (npm: ${item.dependencies.length}, registry: ${item.registryDependencies.length})`,
    );
  }

  // 2. globals.json
  const globals = generateGlobalsJson();
  writeJson(REGISTRY_OUT, "globals", globals);
  writeJson(PUBLIC_OUT, "globals", globals);
  allItems.push(globals);
  console.log(`  [style] globals`);

  // 3. layout.json (clean template)
  const layout = generateLayoutJson();
  writeJson(REGISTRY_OUT, "layout", layout);
  writeJson(PUBLIC_OUT, "layout", layout);
  allItems.push(layout);
  console.log(`  [file] layout`);

  // 4. all.json
  const all = generateAllJson(componentNames);
  writeJson(REGISTRY_OUT, "all", all);
  writeJson(PUBLIC_OUT, "all", all);
  allItems.push(all);
  console.log(`  [meta] all (${componentNames.length} components)`);

  // 5. index.json
  const index = generateIndex(allItems);
  fs.writeFileSync(INDEX_OUT, JSON.stringify(index, null, 2));
  writeJson(PUBLIC_OUT, "index", index);
  console.log(`  [index] index.json`);

  console.log(`\nDone! Generated ${allItems.length} registry items.`);
}

main();
