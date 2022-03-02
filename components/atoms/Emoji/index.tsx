import { css } from "@emotion/react";

interface EmojiProps {
  symbol: any;
  label: string;
  padding: string;
  emojiSize: string;
}

export const Emoji = ({ symbol, label, padding, emojiSize }: EmojiProps) => {
  return (
    <span
      css={emojiStyle(padding, emojiSize)}
      role="img"
      aria-label={label ? label : ""}
    >
      {symbol}
    </span>
  );
};

const emojiStyle = (padding: string, emojiSize: string) => css`
  padding: ${padding};
  font-size: ${emojiSize};
`;
