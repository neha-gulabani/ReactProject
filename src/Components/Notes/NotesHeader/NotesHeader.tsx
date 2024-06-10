// NotesHeader.tsx
import React from "react";
import styles from "./NotesHeader.module.scss";

interface NotesHeaderProps {
  groupName: string;
  groupColor: string;
}

const NotesHeader: React.FC<NotesHeaderProps> = ({ groupName, groupColor }) => {
  return (
    <div className={styles.header}>
      <div
        className={styles.groupCircle}
        style={{ backgroundColor: groupColor }}
      >
        {groupName.slice(0, 2).toUpperCase()}
      </div>
      <h2 className={styles.groupTitle}>{groupName}</h2>
    </div>
  );
};

export default NotesHeader;
