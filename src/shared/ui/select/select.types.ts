export type Option = { label: string; value: string };

export type SelectProps = {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  options: Option[];
  disabled?: boolean;
};
