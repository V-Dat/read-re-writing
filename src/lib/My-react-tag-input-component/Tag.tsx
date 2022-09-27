export default function Tag({ text, onClickRemove, disabled }: TagProps) {
  return (
    <span className={"tag-root"}>
      <span>{text}</span>
      {!disabled && (
        <button
          type="button"
          onClick={() => onClickRemove(text)}
          aria-label={`remove ${text}`}
        >
          &#10005;
        </button>
      )}
    </span>
  );
}

interface TagProps {
  text: string;
  onClickRemove: (item: string) => void;
  disabled?: boolean;
}
