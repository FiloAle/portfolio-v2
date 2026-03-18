import { compile } from '@mdx-js/mdx';

async function run() {
  const mdxSource = '<RoundedImage src="/Elmo/led.avif" alt="Elmo" className="w-full" />';
  const compiled = await compile(mdxSource, {
    outputFormat: 'function-body'
  });
  console.log(compiled.toString());
}
run();
