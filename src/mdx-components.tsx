import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="text-4xl font-bold text-foreground mt-8 mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold text-foreground mt-6 mb-3">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold text-foreground mt-5 mb-2">{children}</h3>,
    p: ({ children }) => <p className="text-lg text-muted-foreground mb-4">{children}</p>,
    a: ({ children, href }) => <a href={href} className="text-primary hover:underline">{children}</a>,
    ul: ({ children }) => <ul className="list-disc list-inside text-muted-foreground mb-4 pl-5 space-y-2">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal list-inside text-muted-foreground mb-4 pl-5 space-y-2">{children}</ol>,
    li: ({ children }) => <li className="text-base">{children}</li>,
    blockquote: ({ children }) => <blockquote className="border-l-4 border-primary pl-4 py-2 italic text-muted-foreground my-4">{children}</blockquote>,
    code: ({ children, className, ...props }) => {
      const isInlineCode = !className;
      return isInlineCode ? (
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-foreground" {...props}>
          {children}
        </code>
      ) : (
        <pre className="relative rounded-lg bg-muted p-4 my-4 overflow-x-auto">
          <code className="text-sm text-foreground" {...props}>
            {children}
          </code>
        </pre>
      );
    },
    // Add other custom components as needed
    ...components,
  };
}

export const mdxComponents: MDXComponents = {
  h1: ({ children }) => <h1 className="text-4xl font-bold text-foreground mt-8 mb-4">{children}</h1>,
  h2: ({ children }) => <h2 className="text-3xl font-bold text-foreground mt-6 mb-3">{children}</h2>,
  h3: ({ children }) => <h3 className="text-2xl font-bold text-foreground mt-5 mb-2">{children}</h3>,
  p: ({ children }) => <p className="text-lg text-muted-foreground mb-4">{children}</p>,
  a: ({ children, href }) => <a href={href} className="text-primary hover:underline">{children}</a>,
  ul: ({ children }) => <ul className="list-disc list-inside text-muted-foreground mb-4 pl-5 space-y-2">{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal list-inside text-muted-foreground mb-4 pl-5 space-y-2">{children}</ol>,
  li: ({ children }) => <li className="text-base">{children}</li>,
  blockquote: ({ children }) => <blockquote className="border-l-4 border-primary pl-4 py-2 italic text-muted-foreground my-4">{children}</blockquote>,
  code: ({ children, className, ...props }) => {
    const isInlineCode = !className;
    return isInlineCode ? (
      <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-foreground" {...props}>
        {children}
      </code>
    ) : (
      <pre className="relative rounded-lg bg-muted p-4 my-4 overflow-x-auto">
        <code className="text-sm text-foreground" {...props}>
          {children}
        </code>
      </pre>
    );
  },
};
