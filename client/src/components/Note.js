import Markdown from "markdown-to-jsx";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  darcula,
  solarizedlight,
  dark,
  funky,
  okaidia,
} from "react-syntax-highlighter/dist/esm/styles/prism"; // or choose another theme

function Note({ content }) {
  return (
    <div>
      <Markdown
        options={{
          overrides: {
            h1: {
              props: {
                className: "text-2xl font-semibold mb-2",
              },
            },
            h2: {
              props: {
                className: "text-xl font-semibold mb-2",
              },
            },
            h3: {
              props: {
                className: "text-lg font-semibold mb-2",
              },
            },
            p: {
              props: {
                className: "mb-2",
              },
            },
            code: {
              component: ({ className, children }) => {
                const language = className?.replace("lang-", "") || "text"; // Extract language from className
                return (
                  <SyntaxHighlighter
                    language={language}
                    style={okaidia}
                    PreTag="div"
                  >
                    {children}
                  </SyntaxHighlighter>
                );
              },
            },
          },
        }}
      >
        {content}
      </Markdown>
    </div>
  );
}
export default Note;
