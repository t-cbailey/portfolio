import "../styling/certifications.css";

function Certifications() {
  return (
    <>
      <h2 id="certtitle">Certifications</h2>

      <ul id="certlist">
        <li id="certlistitem">
          <img
            src="https://storage.cloud.google.com/personal-portfolio-9fb89.appspot.com/Northcoders%20cert.png?authuser=1"
            alt="Northcoders Software Dev Bootcamp"
            className="certificate"
          />
        </li>
        <li id="certlistitem">
          <img
            src="https://storage.cloud.google.com/personal-portfolio-9fb89.appspot.com/FCC%20JS.png?authuser=1"
            alt="FCC Javascript"
            className="certificate"
          />
        </li>
        <li id="certlistitem">
          <img
            src="https://storage.cloud.google.com/personal-portfolio-9fb89.appspot.com/FCC%20responsive%20design.png?authuser=1"
            alt="FCC Responsive Design"
            className="certificate"
          />
        </li>
      </ul>
    </>
  );
}

export default Certifications;
