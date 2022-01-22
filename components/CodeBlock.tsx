import styled from '@emotion/styled';
import CopyButton from 'components/CopyButton';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';

// Load languages dynamically so the least prism packages are imported at first.
const langLoader = (language: string) => {
  dynamic(() =>
    import(`react-syntax-highlighter/dist/cjs/languages/prism/${language}`).then((mod) => {
      SyntaxHighlighter.registerLanguage('jsx', mod);
      return mod;
    })
  );
};

const CodeBlock: React.FC<Props> = ({ className, children }) => {
  const language = className.replace('language-', '');

  useEffect(() => {
    // Load each language from the code tag in MDX format. If repeated it will just be invoked without extra load.
    langLoader(language);
  }, [language]);

  const code = children.trim();

  return (
    <CodeWrapper>
      <SyntaxHighlighter language={language} style={tomorrow}>
        {code}
      </SyntaxHighlighter>

      <CopyButton text={code} />
    </CodeWrapper>
  );
};

export type Props = {
  className: string;
  children: string; // In this case children is a string because it comes from MDX serializing.
};

const CodeWrapper = styled.div`
  position: relative;

  pre {
    display: flex;

    &:after {
      content: ' ';
      display: block;
      min-width: 5vw;
    }
  }
`;

export default CodeBlock;
