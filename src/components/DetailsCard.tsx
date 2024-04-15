import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./DetailsCard.module.css";

export type DetailsCardType = {
  valueComparator?: string;
  dedicatedWorkspace?: string;
  aPrivateRoomEquippedWithW?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const DetailsCard: FunctionComponent<DetailsCardType> = ({
  valueComparator,
  dedicatedWorkspace,
  aPrivateRoomEquippedWithW,
  propMinWidth,
  propMinWidth1,
}) => {
  const dedicatedWorkspaceStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const aPrivateRoomStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className={styles.detailscard}>
      <img
        className={styles.valueComparatorIcon}
        loading="lazy"
        alt=""
        src={valueComparator}
      />
      <div className={styles.variableHolder}>
        <div
          className={styles.dedicatedWorkspace}
          style={dedicatedWorkspaceStyle}
        >
          {dedicatedWorkspace}
        </div>
        <div className={styles.aPrivateRoom} style={aPrivateRoomStyle}>
          {aPrivateRoomEquippedWithW}
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
