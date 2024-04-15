import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Form.module.css";

const Form: FunctionComponent = () => {
  const navigate = useNavigate();

  const onDontHaveAnClick = useCallback(() => {
    navigate("/sign-up-page");
  }, [navigate]);

  return (
    <div className={styles.form}>
      <div className={styles.emailField}>
        <h2 className={styles.signIn}>Sign in</h2>
        <div className={styles.form1}>
          <form className={styles.form2}>
            <div className={styles.formFields}>
              <div className={styles.email}>
                <input
                  className={styles.emailAddress}
                  placeholder="Email address"
                  type="text"
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
                  type="text"
                />
                <img
                  className={styles.iconpassword}
                  alt=""
                  src="/iconpassword.svg"
                />
              </div>
            </div>
            <button className={styles.searchFlightsButton}>
              <div className={styles.button}>Sign in</div>
            </button>
          </form>
        </div>
      </div>
      <div className={styles.formChild} />
      <div className={styles.socialMediaLogin}>
        <div className={styles.orSignIn}>Or sign in with</div>
        <div className={styles.socialLoginContainer}>
          <div className={styles.socialLogin}>
            <img
              className={styles.imageIcon}
              loading="lazy"
              alt=""
              src="/image11@2x.png"
            />
            <div className={styles.text}>Google</div>
          </div>
          <div className={styles.socialLogin1}>
            <img className={styles.imageIcon1} alt="" src="/image-16@2x.png" />
            <div className={styles.text1}>Facebook</div>
          </div>
          <div className={styles.socialLogin2}>
            <img className={styles.imageIcon2} alt="" src="/image-22@2x.png" />
            <div className={styles.text2}>Apple</div>
          </div>
        </div>
      </div>
      <div className={styles.dontHaveAnContainer} onClick={onDontHaveAnClick}>
        <span>{`Don’t have an account yet? `}</span>
        <span className={styles.signUp}>Sign up</span>
      </div>
    </div>
  );
};

export default Form;
