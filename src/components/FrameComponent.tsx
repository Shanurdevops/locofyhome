import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <section className={styles.primaryLayoutParent}>
      <div className={styles.primaryLayout}>
        <img
          className={styles.leftSidebarIcon}
          loading="lazy"
          alt=""
          src="/frame-9@2x.png"
        />
        <div className={styles.contentDetails}>
          <img
            className={styles.contentGridIcon}
            loading="lazy"
            alt=""
            src="/frame-46@2x.png"
          />
          <img
            className={styles.contentGridIcon1}
            loading="lazy"
            alt=""
            src="/frame-47@2x.png"
          />
          <img
            className={styles.contentGridIcon2}
            loading="lazy"
            alt=""
            src="/frame-48@2x.png"
          />
          <img
            className={styles.contentGridIcon3}
            loading="lazy"
            alt=""
            src="/frame-49@2x.png"
          />
          <div className={styles.contentGrid}>
            <img
              className={styles.gridElementIcon}
              alt=""
              src="/grid-element@2x.png"
            />
            <img
              className={styles.vectorIcon}
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.brightwoodsCabinParent}>
                <h2 className={styles.brightwoodsCabin}>Brightwoods Cabin</h2>
                <div className={styles.bridlepathOntarioCanada}>
                  Bridlepath, Ontario, Canada
                </div>
              </div>
              <img
                className={styles.heartIcon}
                loading="lazy"
                alt=""
                src="/hearticon.svg"
              />
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.parent}>
                <div className={styles.div}>5.0</div>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector-1.svg"
                />
              </div>
              <div className={styles.reviewsWrapper}>
                <div className={styles.reviews}>200 Reviews</div>
              </div>
            </div>
          </div>
          <div
            className={styles.welcomeToOur}
          >{`Welcome to our cozy cabin retreat nestled in the heart of Bridlepath, Ontario! Surrounded by lush landscapes and tranquil trails, this charming getaway offers the perfect blend of rustic elegance and modern comfort. `}</div>
        </div>
        <div className={styles.leaflet}>
          <div className={styles.frameParent2}>
            <div className={styles.shParent}>
              <b className={styles.sh}>$658</b>
              <div className={styles.branchingPoint}>
                <div className={styles.night}>/night</div>
              </div>
            </div>
            <div className={styles.treeBud}>
              <div className={styles.branchSplitting}>
                <div className={styles.icontrend}>
                  <div className={styles.iconParent}>
                    <img className={styles.icon} alt="" src="/icon.svg" />
                    <div className={styles.leafClusters} />
                  </div>
                </div>
                <div className={styles.treeBranches}>
                  <div className={styles.bestTimeTo}>Best time to Book</div>
                </div>
              </div>
            </div>
          </div>
          <button className={styles.searchFlightsButton}>
            <div className={styles.button}>Book this home</div>
          </button>
        </div>
        <div className={styles.hostedByParent}>
          <div className={styles.hostedBy}>Hosted by:</div>
          <div className={styles.ellipseParent}>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/ellipse-2@2x.png"
            />
            <div className={styles.conditionSplitter}>
              <div className={styles.michelleWard}>Michelle Ward</div>
              <div className={styles.joinedInMay}>Joined in May 2021</div>
            </div>
            <button className={styles.vectorParent}>
              <img className={styles.vectorIcon2} alt="" src="/vector-2.svg" />
              <div className={styles.superhost}>Superhost</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
