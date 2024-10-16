import Markdown from "markdown-to-jsx";
import SyntaxHighlighter from "react-syntax-highlighter";

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
              component: SyntaxHighlighter,
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
