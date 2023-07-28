import "../styling/certifications.css";
import { getFileRefs, getFile } from "../../utils";
import React from "react";

function Certifications() {
  const [certs, setCerts] = React.useState<string[]>([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    getFileRefs("certs/").then((fileNames) => {
      fileNames &&
        fileNames.forEach((imgUrl) => {
          getFile(imgUrl).then((URL) => {
            URL && setCerts((curr) => [...curr, URL]);
            setLoading(false);
          });
        });
    });
  }, []);

  if (loading) {
    return <h3 className="loading">Loading...</h3>;
  }
  return (
    <>
      <h2 id="certtitle">Certifications</h2>

      <ul id="certlist">
        {certs.map((cert, i) => {
          return (
            <li key={cert + i} id="certlistitem">
              <img src={cert} alt={cert} className="certificate" />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Certifications;
