import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./GuestsField.module.css";

export type GuestsFieldType = {
  label?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
};

const GuestsField: FunctionComponent<GuestsFieldType> = ({
  label,
  propMinWidth,
}) => {
  const labelStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={styles.guestsField}>
      <div className={styles.label} style={labelStyle}>
        {label}
      </div>
      <div className={styles.icon}>
        <img
          className={styles.calendartodayfilledIcon}
          alt=""
          src="/calendartodayfilled.svg"
        />
      </div>
    </div>
  );
};

export default GuestsField;
