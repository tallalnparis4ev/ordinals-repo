// import React from "react";
// import { UTXO } from "../types";

// interface OrdinalListProps {
//   ordinals: UTXO[];
//   onSelect: (id: string) => void;
// }

// const OrdinalList: React.FC<OrdinalListProps> = ({ ordinals, onSelect }) => {
//     const inscriptionIds = ordinals.flatMap(ordinal => ordinal.inscriptions).map(inscription => inscription.id);
//   return (
//     <ul>
//       {inscriptionIds.map((id) => (
//         <li key={id} onClick={() => onSelect(id)}>
//           {id}
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default OrdinalList;

import { FunctionComponent } from "react";
import "./OrdinalList.css";
import { UTXO } from "../types";

interface OrdinalListProps {
  ordinals: UTXO[];
  onSelect: (id: string) => void;
}

const OrdinalList: FunctionComponent<OrdinalListProps> = ({
  ordinals,
  onSelect,
}) => {
  const inscriptionIds = ordinals
    .flatMap((ordinal) => ordinal.inscriptions)
    .map((inscription) => inscription.id);

  return (
    <section className={`inscription-list-wrapper`}>
      <div className="inscription-list">
        {inscriptionIds.map((id) => {
          return (
            <div
              className="inscription-item"
              key={id}
              onClick={() => onSelect(id)}
            >
              <div className="inscription-2f83b9b0">Inscription {id}</div>
              <div className="vector-wrapper">
                <img
                  className="vector-icon"
                  loading="lazy"
                  alt=""
                  src="/vector.svg"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OrdinalList;
