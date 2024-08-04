import React from "react";

interface LabelProps {
  text: string;
}
export const Label: React.FC<LabelProps> = ({ text }) => {
  return (
    <div className="label">
      <div className="text-wrapper">${text}</div>
    </div>
  );
};
