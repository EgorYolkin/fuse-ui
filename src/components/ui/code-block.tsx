import type { HTMLAttributes } from "react"
import {
  Highlight as PrismHighlight,
  type Language,
  type PrismTheme,
} from "prism-react-renderer"

import { cn } from "@/lib/utils"

const fuseCodeTheme: PrismTheme = {
  plain: {
    color: "var(--syntax-foreground)",
    backgroundColor: "transparent",
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata"],
      style: { color: "var(--syntax-comment)", fontStyle: "italic" },
    },
    {
      types: ["punctuation"],
      style: { color: "var(--syntax-punctuation)" },
    },
    {
      types: ["property", "tag", "constant", "symbol", "deleted"],
      style: { color: "var(--syntax-tag)" },
    },
    {
      types: ["boolean", "number"],
      style: { color: "var(--syntax-number)" },
    },
    {
      types: ["selector", "attr-name", "string", "char", "builtin", "inserted"],
      style: { color: "var(--syntax-string)" },
    },
    {
      types: ["operator", "entity", "url", "string-variable"],
      style: { color: "var(--syntax-operator)" },
    },
    {
      types: ["atrule", "attr-value", "keyword"],
      style: { color: "var(--syntax-keyword)" },
    },
    {
      types: ["function", "class-name"],
      style: { color: "var(--syntax-function)" },
    },
    {
      types: ["regex", "important", "variable"],
      style: { color: "var(--syntax-variable)" },
    },
  ],
}

type CodeProps = HTMLAttributes<HTMLElement>

function Code({ className, ...props }: CodeProps) {
  return <code data-slot="code" className={cn("inline-code", className)} {...props} />
}

interface CodeBlockProps extends Omit<HTMLAttributes<HTMLElement>, "children"> {
  code: string
  language?: Language
  label?: string
  showLineNumbers?: boolean
}

function CodeBlock({
  code,
  language = "tsx",
  label,
  showLineNumbers = false,
  className,
  ...props
}: CodeBlockProps) {
  const accessibleLabel = label ?? `${language.toUpperCase()} code example`

  return (
    <figure
      data-slot="code-block"
      data-language={language}
      data-line-numbers={showLineNumbers}
      className={cn("code-block", className)}
      {...props}
    >
      <figcaption className="code-block-header">{label ?? language}</figcaption>
      <PrismHighlight code={code} language={language} theme={fuseCodeTheme}>
        {({ className: prismClassName, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={cn("code-block-pre", prismClassName)}
            tabIndex={0}
            aria-label={accessibleLabel}
          >
            <code className="code-block-code">
              {tokens.map((line, lineIndex) => {
                const { className: lineClassName, ...lineProps } = getLineProps({ line })

                return (
                  <span
                    key={lineIndex}
                    className={cn("code-block-line", lineClassName)}
                    {...lineProps}
                  >
                    {showLineNumbers && (
                      <span className="code-block-line-number" aria-hidden="true">
                        {lineIndex + 1}
                      </span>
                    )}
                    <span className="code-block-line-content">
                      {line.map((token, tokenIndex) => {
                        const tokenProps = getTokenProps({ token })
                        return <span key={tokenIndex} {...tokenProps} />
                      })}
                    </span>
                  </span>
                )
              })}
            </code>
          </pre>
        )}
      </PrismHighlight>
    </figure>
  )
}

export { Code, CodeBlock, fuseCodeTheme }
export type { CodeBlockProps, CodeProps, Language as CodeLanguage }
