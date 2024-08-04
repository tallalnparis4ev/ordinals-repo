import React, { useEffect, useState } from "react";
import axios from "axios";
import { InscriptionDetail } from "../types";
import ImageBackground from "./ImageBackground";
import AttributeField from "./AttributeField";

interface OrdinalDetailProps {
  inscriptionId: string;
  wallet: string;
}

const OrdinalDetail: React.FC<OrdinalDetailProps> = ({
  inscriptionId,
  wallet,
}) => {
  const [detail, setDetail] = useState<InscriptionDetail | null>(null);
  const [content, setContent] = useState<string | null>(null);
  useEffect(() => {
    // Fetch inscription details
    axios
      .get<InscriptionDetail>(
        `https://api-3.xverse.app/v1/address/${wallet}/ordinals/inscriptions/${inscriptionId}`
      )
      .then((response) => {
        setDetail(response.data);
      })
      .catch((error) => console.error("Error fetching ordinal detail:", error));

    // Fetch inscription content
    axios
      .get(`https://ord.xverse.app/content/${inscriptionId}`, {
        responseType: "blob",
      })
      .then((response) => {
        const reader = new FileReader();
        reader.readAsDataURL(response.data);
        reader.onloadend = () => {
          setContent(reader.result as string);
        };
      })
      .catch((error) =>
        console.error("Error fetching ordinal content:", error)
      );
  }, [inscriptionId, wallet]);

  if (!detail) return <div>Loading...</div>;

  const isImage = (contentType: string): boolean => {
    return contentType.startsWith("image/");
  };

  return (
    <>
      <section className="frame-wrapper">
        {content && isImage(detail.content_type) ? (
          <ImageBackground imageData={content} />
        ) : (
          <pre>{JSON.stringify(detail, null, 2)}</pre>
        )}
        <div className="frame-group">
          <div className="inscription-10001-parent">
            <div className="inscription-10001">Inscription {detail.number}</div>
            <div className="frame-inner" />
          </div>
          <div className="owner-details">
            <div className="owner-labels">
              <div className="inscription-id">Inscription ID</div>
              <div className="f88c517a52f83b9b0d733b4eb81979">{detail.id}</div>
            </div>
          </div>
          <div className="owner-details1">
            <div className="owner-address-parent">
              <div className="owner-address">Owner Address</div>
              <div className="bc1prh0cd85fvtdqpte4anvu78ma49">
                {detail.address}
              </div>
            </div>
          </div>
          <div className="attributes-wrapper">
            <div className="attributes">Attributes</div>
          </div>
          <AttributeField
            title="Output Value"
            placeholder={`${detail.value}`}
          />
          <AttributeField
            title="Content Type"
            placeholder={detail.content_type}
          />
          <AttributeField
            title="Content Length"
            placeholder={`${detail.content_length}`}
          />
          <AttributeField title="Location" placeholder={detail.location} />
          <AttributeField
            title="Genesis Transaction"
            placeholder={detail.genesis_tx_id}
          />
        </div>
      </section>
      ;
    </>
  );
};

export default OrdinalDetail;
