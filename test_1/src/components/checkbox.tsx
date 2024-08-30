import React from "react";

interface CheckboxProps {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  id: string;
  value?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  label,
  id,
  value,
}) => {
  const handleDivClick = () => {
    const event = {
      target: { checked: !checked, value: value ?? "" },
    } as unknown as React.ChangeEvent<HTMLInputElement>;
    onChange(event);
  };

  return (
    <div
      className="inline-flex items-center w-[370px] justify-between h-[42px] cursor-pointer group"
      onClick={handleDivClick}
    >
      {label && (
        <label
          htmlFor={id}
          className="text-gray-700 cursor-pointer font-montserrat"
          onClick={(e) => e.stopPropagation()}
        >
          {label}
        </label>
      )}
      <input
        type="checkbox"
        id={id}
        value={value}
        checked={checked}
        onChange={onChange}
        className="appearance-none absolute h-0 w-0"
      />
      <span
        className={`inline-block w-[25px] h-[25px] focus:drop-shadow focus:border-gray-600 border-[1px] rounded-[6px] relative after:content-[''] after:absolute after:left-1/2 after:top-1/2 after:w-[16px] after:h-[7px] after:border-b-[2px] after:border-l-[2px] after:border-gray-700  after:-translate-x-1/2 after:-translate-y-1/2  after:rotate-[-45deg] after:pointer-events-none  ${
          checked
            ? "after:opacity-100 after:border-white bg-blue-600"
            : "after:opacity-0"
        } group-hover:after:opacity-50 transition-opacity`}
      ></span>
    </div>
  );
};

export default Checkbox;
