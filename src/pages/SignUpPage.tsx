import { FunctionComponent, useCallback } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import styles from "./SignUpPage.module.css";

const SignUpPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onIAlreadyHaveClick = useCallback(() => {
    navigate("/sign-in-page");
  }, [navigate]);

  return (
    <div className={styles.signUpPage}>
      <Header showLoginSection={false} />
      <main className={styles.loginSections}>
        <div className={styles.formWrapper}>
          <div className={styles.form}>
            <div className={styles.createAccountParent}>
              <h2 className={styles.createAccount}>Create Account</h2>
              <div className={styles.imageInstance}>
                <form className={styles.form1}>
                  <div className={styles.formFields}>
                    <div className={styles.email}>
                      <input
                        className={styles.emailAddress}
                        placeholder="Email address"
                        type="email"
                      />
                      <img
                        className={styles.iconaccount}
                        alt=""
                        src="/iconaccount.svg"
                      />
                    </div>
                    <div className={styles.password}>
                      <input
                        className={styles.password1}
                        placeholder="Password"
                        type="password"
                      />
                      <img
                        className={styles.iconpassword}
                        alt=""
                        src="/iconpassword.svg"
                      />
                    </div>
                    <div className={styles.confirmPassword}>
                      <input
                        className={styles.confirmPassword1}
                        placeholder="Confirm password"
                        type="password"
                      />
                      <img
                        className={styles.iconpassword1}
                        alt=""
                        src="/iconpassword.svg"
                      />
                    </div>
                  </div>
                  <button className={styles.searchFlightsButton}>
                    <div className={styles.button}>Sign up</div>
                  </button>
                </form>
              </div>
              <div className={styles.lineWrapper}>
                <div className={styles.frameChild} />
              </div>
              <div className={styles.socialMediaLogin}>
                <div className={styles.orSignUp}>Or sign up with</div>
                <div className={styles.socialLoginContainer}>
                  <div className={styles.socialLogin}>
                    <img
                      className={styles.imageIcon}
                      loading="lazy"
                      alt=""
                      src="/image1@2x.png"
                    />
                    <div className={styles.text}>Google</div>
                  </div>
                  <div className={styles.socialLogin1}>
                    <img
                      className={styles.imageIcon1}
                      alt=""
                      src="/image-15@2x.png"
                    />
                    <div className={styles.text1}>Facebook</div>
                  </div>
                  <div className={styles.socialLogin2}>
                    <img
                      className={styles.imageIcon2}
                      alt=""
                      src="/image-21@2x.png"
                    />
                    <div className={styles.text2}>Apple</div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={styles.iAlreadyHaveContainer}
              onClick={onIAlreadyHaveClick}
            >
              <span>{`I already have an account. `}</span>
              <span className={styles.login}>Login</span>
            </div>
          </div>
        </div>
      </main>
      <footer className={styles.band}>
        <div className={styles.bandInner}>
          <div className={styles.localhostIncAllRightsResParent}>
            <div className={styles.localhostIncAll}>
              © 2023 Localhost, Inc. All Rights Reserved
            </div>
            <div className={styles.privacyPolicyParent}>
              <div className={styles.privacyPolicy}>Privacy Policy</div>
              <div
                className={styles.termsConditions}
              >{`Terms & Conditions`}</div>
              <div className={styles.contactUs}>Contact us</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SignUpPage;
