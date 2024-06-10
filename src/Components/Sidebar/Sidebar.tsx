import React from "react";
import styles from "./Sidebar.module.scss";
import { IGroup } from "../types";

interface SidebarProps {
  groups: IGroup[];
  currentGroupId: string | null;
  onSelectGroup: (groupId: string) => void;
  openCreateGroupModal: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  groups,
  currentGroupId,
  onSelectGroup,
  openCreateGroupModal,
}) => {
  return (
    <div className={styles.sidebar}>
      <h3 className={styles.title}>Pocket Notes</h3>
      <button className={styles.createButton} onClick={openCreateGroupModal}>
        <span className={styles.plusIcon}>+</span> Create Notes Group
      </button>
      <ul className={styles.groupList}>
        {groups.map((group) => (
          <li
            key={group.id}
            className={`${styles.groupItem} ${
              currentGroupId === group.id ? styles.selected : ""
            }`}
            onClick={() => onSelectGroup(group.id)}
          >
            <div
              className={styles.groupCircle}
              style={{ backgroundColor: group.color }}
            >
              {group.title.slice(0, 2).toUpperCase()}
            </div>
            <span className={styles.groupTitle}>{group.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
