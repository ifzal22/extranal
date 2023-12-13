import Link from "next/link";
import "./contact.css";
const Page = () => {
  return (
    <>
      <div id="BODY">
        <Link href="https://ifzal-hussain1122.netlify.app/">
          {" "}
          <div class="card">
            <div class="img-bx">
              <img
                src="https://i.ibb.co/H7TP4zm/IMG-20231111-151324.png"
                alt="img"
              />
            </div>
            <div class="content">
              <div class="detail">
                <h2>
                  Ifzal hussain
                  <br />
                  <span>Senior Full Stack Developer</span>
                </h2>
                <ul class="sci">
                  <li>
                    <Link href="https://www.facebook.com/ifzal.hussain.10">
                      <i class="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i class="fab fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.linkedin.com/in/ifzal-hussain-576376230/">
                      <i class="fab fa-linkedin-in"></i>
                    </Link>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Page;
