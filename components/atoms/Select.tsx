interface SelectOption {
  key: number;
  value: string;
  name: string;
}
interface SelectProps {
  selectOptions: SelectOption[];
  defaultValue?: string;
}

export const Select = ({ selectOptions, defaultValue }: SelectProps) => {
  return (
    <select defaultValue={defaultValue}>
      {selectOptions.map((option) => {
        <option key={option.key} value={option.value}>
          {option.name}
        </option>;
      })}
    </select>
  );
};
