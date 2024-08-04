import axios from "axios";
import { OrdinalUTXOResponse, UTXO } from "../types";
import { FunctionComponent, useCallback, useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import OrdinalList from "../components/OrdinalList";
import AddressInput from "../components/AddressInput";

const Home: FunctionComponent = () => {
    const [ordinals, setOrdinals] = useState<UTXO[]>([]);
    const [wallet, setWallet] = useState<string>("");
    const [limit] = useState<number>(30); // You can adjust the limit as needed
    const [offset, setOffset] = useState<number>(0);
    const [total, setTotal] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();
    const loader = useRef<HTMLDivElement | null>(null);

    const handleSearch = (address: string) => {
      setWallet(address);
      setOffset(0);
      setOrdinals([]);
      fetchOrdinals(address, 0);
    };

    const fetchOrdinals = useCallback(
      (address: string, offset: number) => {
        setLoading(true);
        axios
          .get<OrdinalUTXOResponse>(
            `https://api-3.xverse.app/v1/address/${address}/ordinal-utxo?limit=${limit}&offset=${offset}`
          )
          .then((response) => {
            setOrdinals((prev) => [...prev, ...response.data.results]);
            setTotal(response.data.total);
            setLoading(false);
          })
          .catch((error) => {
            console.error("Error fetching ordinals:", error);
            setLoading(false);
          });
      },
      [limit]
    );


  const handleSelect = (id: string) => {
    navigate(`/ordinal/${wallet}/${id}`);
  };
    
    useEffect(() => {
      if (!wallet) return;

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && ordinals.length < total) {
            setOffset((prevOffset) => {
              const newOffset = prevOffset + limit;
              fetchOrdinals(wallet, newOffset);
              return newOffset;
            });
          }
        },
        { threshold: 1.0 }
      );

      if (loader.current) {
        observer.observe(loader.current);
      }

      return () => {
        if (loader.current) {
          observer.unobserve(loader.current);
        }
      };
    }, [wallet, ordinals.length, total, fetchOrdinals, limit]);


  return (
    <div className="main-page">
      <Header />
      <AddressInput onSearch={handleSearch} />
      <OrdinalList ordinals={ordinals} onSelect={handleSelect} />
      {loading && <div>Loading...</div>}
      <div ref={loader}></div>
    </div>
  );
};

export default Home;
