import { FunctionComponent } from "react";
import "./Header.css";

export type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {
  return (
    <header className={`header ${className}`}>
      <div className="header-background" />
      <div className="dashboard">Ordinal Inscription Lookup</div>
      <div className="status-bar">
        <img className="connections-icon" alt="" src="/connections@2x.png" />
        <div className="time">
          <div className="time1">9:27</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
