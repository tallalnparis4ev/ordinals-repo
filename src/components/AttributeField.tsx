import { FunctionComponent } from "react";
import "./AttributeField.css";

export type AttributeFieldType = {
  title?: string;
  placeholder?: string;
};

const AttributeField: FunctionComponent<AttributeFieldType> = ({
  title,
  placeholder,
}) => {
  return (
    <div className={`inputs-input-filed`}>
      <div className="title">{title}</div>
      <footer className="bg" />
      <input
        className="inputs-input-filed-child"
        placeholder={placeholder}
        type="text"
      />
    </div>
  );
};

export default AttributeField;
