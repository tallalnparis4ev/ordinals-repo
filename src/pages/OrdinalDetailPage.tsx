// import React from "react";
// import { useParams } from "react-router-dom";
// import OrdinalDetail from "../components/OrdinalDetail";

// const OrdinalDetailPage: React.FC = () => {
//   const { wallet, inscriptionId } = useParams<{
//     wallet: string;
//     inscriptionId: string;
//   }>();

//   return (
//     <div>
//       <h1>Ordinal Detail Page</h1>
    //   {inscriptionId && wallet && (
    //     <OrdinalDetail inscriptionId={inscriptionId} wallet={wallet} />
    //   )}
//     </div>
//   );
// };

// export default OrdinalDetailPage;



import { FunctionComponent } from "react";
import "./OrdinalDetailPage.css";
import { useNavigate, useParams } from "react-router-dom";
import OrdinalDetail from "../components/OrdinalDetail";


type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {
const navigate = useNavigate();

const handleBackClick = () => {
    navigate("/");
};
  return (
    <header className={`header ${className}`}>
      <div className="header-child" />
      <img
        className="frame-icon"
        loading="lazy"
        alt="Frame"
        src="/frame.svg"
        onClick={handleBackClick}
        style={{ cursor: "pointer" }}
      />
      <div className="create-new-nft-wrapper">
        <a className="create-new-nft">Details</a>
      </div>
      <div className="status-bar">
        <img className="connections-icon" alt="" src="/connections@2x.png" />
        <div className="time">
          <div className="time1">9:27</div>
        </div>
      </div>
    </header>
  );
};


const OrdinalDetailPage: FunctionComponent = () => {
    const { wallet, inscriptionId } = useParams<{
      wallet: string;
      inscriptionId: string;
    }>();
    
  return (
    <div className="nfts-detail">
      <main className="header-parent">
        <Header />
        {inscriptionId && wallet && (
          <OrdinalDetail inscriptionId={inscriptionId} wallet={wallet} />
        )}
      </main>
    </div>
  );
};

export default OrdinalDetailPage;
