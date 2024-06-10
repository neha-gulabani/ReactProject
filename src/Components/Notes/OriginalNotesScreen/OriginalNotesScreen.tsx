// OriginalNotesScreen.tsx
import React from "react";
import styles from "./OriginalNotesScreen.module.scss";
import noGroups from "../../../assets/notes.png";

const OriginalNotesScreen: React.FC = () => {
  return (
    <div className={styles.noGroupsContainer}>
      <img
        src={noGroups}
        alt="No groups illustration"
        className={styles.illustration}
      />
      <h2>Pocket Notes</h2>
      <p>
        Send and receive messages without keeping your phone online. Use Pocket
        Notes on up to 4 linked devices and 1 mobile phone.
      </p>
      <p className={styles.encryptionNotice}>🔒 end-to-end encrypted</p>
    </div>
  );
};

export default OriginalNotesScreen;
