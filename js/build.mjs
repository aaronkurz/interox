import * as esbuild from "esbuild";

const isWatch = process.argv.includes("--watch");

const config = {
    entryPoints: {
        "rule_detail": "src/rule_detail/index.tsx",
        "ruleset_table": "src/ruleset_table/index.tsx",
        "explanation_status": "src/explanation_status/index.tsx",
        "rule_builder": "src/rule_builder/index.tsx",
    },
    bundle: true,
    format: "esm",
    outdir: "../interox/static",
    loader: { ".css": "text" },
    jsx: "automatic",
    // One-shot builds are what ships in the wheel: minified, with React's
    // production build. Watch mode keeps readable output and React's dev warnings.
    minify: !isWatch,
    define: { "process.env.NODE_ENV": isWatch ? '"development"' : '"production"' },
};

if (isWatch) {
    const ctx = await esbuild.context(config);
    await ctx.watch();
    console.log("esbuild watching...");
} else {
    await esbuild.build(config);
    console.log("Build complete:", Object.keys(config.entryPoints).map(k => `${k}.js`).join(", "));
}
