import "../styling/certifications.css";
import { getFileRefs, getFile } from "../../Utils/utils";
import React from "react";
import { CertificationsProps } from "../../types/CustomTypes";

function Certifications({ setCurrentPage }: CertificationsProps) {
  const [certs, setCerts] = React.useState<string[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [currCert, setCurrCert] = React.useState<string>("");
  const [overlayHidden, setOverlayHidden] = React.useState<boolean>(true);

  React.useEffect(() => {
    setCurrentPage("Certifications");
  });

  React.useEffect(() => {
    setLoading(true);
    getFileRefs("certs/").then((fileNames) => {
      fileNames &&
        fileNames.forEach((imgUrl) => {
          getFile(imgUrl).then((URL) => {
            URL &&
              setCerts((curr) => {
                if (!curr.includes(URL)) {
                  return [...curr, URL];
                } else return curr;
              });
            setLoading(false);
          });
        });
    });
  }, []);

  if (loading) {
    return <h3 className="loading">Loading...</h3>;
  }

  const screenWidth = window.innerWidth;

  console.log(screenWidth);

  return (
    <>
      {!overlayHidden && screenWidth > 1200 && (
        <section
          style={{
            position: "fixed",
            width: "100vw",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div id="overlayBackground"></div>
          <img id="certificateExpanded" src={currCert} alt={currCert} />
          <div
            onClick={() => {
              setOverlayHidden(true);
              setCurrCert("");
            }}
            style={{
              position: "absolute",
              top: 15,
              right: 35,
              color: "white",
              fontSize: 40,
              fontWeight: "bold",
              cursor: "pointer",
              zIndex: "99",
            }}
          >
            &times;
          </div>
        </section>
      )}
      <ul id="certlist">
        {certs.map((cert, i) => {
          return (
            <button
              key={cert + i}
              onClick={() => {
                setCurrCert(cert);
                setOverlayHidden(false);
              }}
              id="certlistitem"
            >
              <li>
                <img src={cert} alt={cert} className="certificate" />
              </li>
            </button>
          );
        })}
      </ul>
    </>
  );
}

export default Certifications;
