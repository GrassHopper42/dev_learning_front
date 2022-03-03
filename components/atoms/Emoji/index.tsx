import { css } from "@emotion/react";

interface EmojiProps {
  symbol: any;
  label: string;
  emojiSize: string;
  padding?: string;
}

export const Emoji = ({
  symbol,
  label,
  emojiSize,
  padding = "0",
}: EmojiProps) => {
  return (
    <span
      css={emojiStyle(emojiSize, padding)}
      role="img"
      aria-label={label ? label : ""}
    >
      {symbol}
    </span>
  );
};

const emojiStyle = (emojiSize: string, padding: string) => css`
  margin: auto;
  padding: ${padding};
  font-size: ${emojiSize};
`;
