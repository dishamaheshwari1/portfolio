import { ElementType } from "react";

interface Props {
  text: string;
  as?: ElementType;
  className?: string;
}

/**
 * Renders text in ALL CAPS where the first letter of every word is 1.5x
 * the size of the rest. Pure CSS sizing via .heading-caps utility.
 */
export function FirstLetterLarge({ text, as: Tag = "h1", className = "" }: Props) {
  const words = text.trim().split(/\s+/);
  return (
    <Tag className={`heading-caps ${className}`}>
      {words.map((word, i) => {
        const first = word.charAt(0);
        const rest = word.slice(1);
        return (
          <span key={i} className="word">
            <span className="first-letter">{first.toUpperCase()}</span>
            {rest.toUpperCase()}
          </span>
        );
      })}
    </Tag>
  );
}
