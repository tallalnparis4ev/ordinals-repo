
// const AddressInput: React.FC<{ onSearch: (address: string) => void }> = ({
//   onSearch,
// }) => {
//   const [address, setAddress] = useState("");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (address) {
//       onSearch(address);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={address}
//         onChange={(e) => setAddress(e.target.value)}
//         placeholder="Enter Bitcoin wallet address"
//       />
//       <button type="submit">Search</button>
//     </form>
//   );
// };

// export default AddressInput;


import React, { useState } from "react";
import { FunctionComponent } from "react";
import "./AddressInput.css";


export type AddressInputProps = {
  className?: string;
  onSearch: (address: string) => void;
};

const AddressInput: FunctionComponent<AddressInputProps> = ({
  className = "",
  onSearch,
}) => {
  const [address, setAddress] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (address) {
      onSearch(address);
    }
  };
  return (
    <section className={`content ${className}`}>
      <div className="bitcoin-address">
        <div className="owner-bitcoin-address">Owner Bitcoin Address:</div>
        <form className="address-details" onSubmit={handleSubmit}>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="address-input"
            placeholder="Enter Bitcoin address"
          />
          <button className="lookup-button" type="submit">
            <div className="lookup-button-child" />
            <div className="look-up">Look up</div>
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddressInput;
