import React, { useState } from "react";
import styles from "./CreateGroupModal.module.scss";
import { GroupColors } from "../types";

interface CreateGroupModalProps {
  onCreateGroup: (title: string, color: GroupColors) => void;
  onClose: () => void;
}

const CreateGroupModal: React.FC<CreateGroupModalProps> = ({
  onCreateGroup,
  onClose,
}) => {
  const [newGroupName, setNewGroupName] = useState("");
  const [newGroupColor, setNewGroupColor] = useState<GroupColors>(
    GroupColors.purple
  );

  const handleCreateGroup = () => {
    if (newGroupName.trim()) {
      onCreateGroup(newGroupName, newGroupColor);
      setNewGroupName("");
      onClose();
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h3>Create New Notes Group</h3>
        <div className={styles.inputGroup}>
          <label>Group Name</label>
          <input
            type="text"
            value={newGroupName}
            onChange={(e) => setNewGroupName(e.target.value)}
            placeholder="Enter your group name..."
          />
        </div>
        <div className={styles.inputGroup}>
          <label>Choose Colour</label>
          <div className={styles.colorOptions}>
            {Object.values(GroupColors).map((color) => (
              <div
                key={color}
                className={`${styles.colorOption} ${
                  newGroupColor === color ? styles.selected : ""
                }`}
                style={{ backgroundColor: color }}
                onClick={() => setNewGroupColor(color)}
              />
            ))}
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.createButton} onClick={handleCreateGroup}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateGroupModal;
