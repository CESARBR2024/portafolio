import profileImage from "../assets/profile.png";
import "../styles/index.css";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

const Welcome = () => {
  return (
    <div>
      <section style={{ width: "100%", height: "10%", background: "blue" }}>
        navbar
      </section>
      <section style={{ width: "100%", height: "90%", marginTop: "1rem" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            background: "transparent",
            gap: "1rem",
            marginRight: "9%",
            marginLeft: "9%",
          }}
        >
          <div style={{ display: "flex", gap: "1rem" }}>
            <div
              style={{
                width: "50%",
                background: "black",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                className="title-presentation"
                style={{ color: "white", fontWeight: "600", gap: "0.5rem" }}
              >
                Hey, I am César
              </div>
              <div className="roles-vertical">
                <div>Web Developer +</div>
                <div>Backend Developer </div>
              </div>

              <div className="description">
                Desarrollador Jr de proyectos relacionados al desarrollo web en
                React y Backend con Django
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "0.5rem",
                  marginTop: "1rem",
                  width: "100%",
                  background: "transparent",
                }}
              >
                <button
                  className="btn-download-cv"
                  style={{ width: "40%", height: "22px" }}
                >
                  <div>Download CV</div>
                  <div>I</div>
                </button>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                    gap: "1rem",
                    alignItems: "center",
                    width: "60%",
                    background: "transparent",
                  }}
                >
                  <button
                    className="button-social"
                    style={{ width: "13%", height: "22px" }}
                  >
                    <FaFacebookF />
                  </button>
                  <button
                    className="button-social"
                    style={{ width: "13%", height: "22px" }}
                  >
                    <FaLinkedinIn />
                  </button>
                  <button
                    className="button-social"
                    style={{ width: "13%", height: "22px" }}
                  >
                    <FaInstagram />
                  </button>
                  <button
                    className="button-social"
                    style={{ width: "13%", height: "22px" }}
                  >
                    <FaGithub />
                  </button>
                </div>
              </div>
            </div>
            <div
              style={{
                width: "50%",
                background: "transparent",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "40px 0",
              }}
            >
              <div className="tilted-box">
                <img
                  src={profileImage}
                  className="profile-image"
                  alt="perfil"
                />
              </div>
            </div>
          </div>
          <div>Numeros</div>
        </div>
      </section>
    </div>
  );
};

export default Welcome;
