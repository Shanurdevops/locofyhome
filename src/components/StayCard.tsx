import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./StayCard.module.css";

export type StayCardType = {
  brightwoodsEstate?: string;
  bridlepathOntarioCanada?: string;

  /** Style props */
  propBackgroundImage?: CSSProperties["backgroundImage"];
  propLineHeight?: CSSProperties["lineHeight"];
};

const StayCard: FunctionComponent<StayCardType> = ({
  brightwoodsEstate,
  bridlepathOntarioCanada,
  propBackgroundImage,
  propLineHeight,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const bridlepathOntarioCanadaStyle: CSSProperties = useMemo(() => {
    return {
      lineHeight: propLineHeight,
    };
  }, [propLineHeight]);

  return (
    <div className={styles.staycard}>
      <div className={styles.frameParent} style={frameDivStyle}>
        <div className={styles.vectorParent}>
          <img className={styles.vectorIcon} alt="" src="/superhost-icon.svg" />
          <div className={styles.superhost}>Superhost</div>
        </div>
        <div className={styles.wrapperHeartIcon}>
          <img className={styles.heartIcon} alt="" src="/hearticon-1.svg" />
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.brightwoodsEstateParent}>
            <div className={styles.brightwoodsEstate}>{brightwoodsEstate}</div>
            <div
              className={styles.bridlepathOntarioCanada}
              style={bridlepathOntarioCanadaStyle}
            >
              {bridlepathOntarioCanada}
            </div>
          </div>
          <div className={styles.parent}>
            <div className={styles.div}>4.8</div>
            <img className={styles.vectorIcon1} alt="" src="/star-icon.svg" />
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.group}>
            <div className={styles.div1}>$502</div>
            <div className={styles.night}>/night</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StayCard;
