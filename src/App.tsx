import React, { useState } from "react";
import styles from "./App.module.scss";
import useGroupNotes from "./Components/hooks/useGroupNotes";
import { INote } from "./Components/types";
import Sidebar from "./Components/Sidebar/Sidebar";
import CreateGroupModal from "./Components/Sidebar/CreateGroupModal";
import NotesScreen from "./Components/Notes/NotesScreen";

const App: React.FC = () => {
  const {
    groups,
    currentGroupId,
    createGroup,
    selectGroup,
    addNote,
    updateNote,
  } = useGroupNotes();
  const [showCreateGroupModal, setShowCreateGroupModal] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openCreateGroupModal = () => {
    setShowCreateGroupModal(true);
  };

  const closeCreateGroupModal = () => {
    setShowCreateGroupModal(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const getCurrentGroupNotes = (): INote[] => {
    const currentGroup = groups.find((group) => group.id === currentGroupId);
    return currentGroup ? currentGroup.notes : [];
  };

  const getCurrentGroupName = (): string => {
    const currentGroup = groups.find((group) => group.id === currentGroupId);
    return currentGroup ? currentGroup.title : "";
  };

  const getCurrentGroupColor = (): string => {
    const currentGroup = groups.find((group) => group.id === currentGroupId);
    return currentGroup ? currentGroup.color : "";
  };

  const handleAddNote = (content: string) => {
    if (currentGroupId) {
      addNote(currentGroupId, content);
    }
  };

  const handleUpdateNote = (noteId: string, content: string) => {
    if (currentGroupId) {
      updateNote(currentGroupId, noteId, content);
    }
  };

  return (
    <div className={styles.wrapper}>
      <button className={styles.hamburgerButton} onClick={toggleSidebar}>
        ☰
      </button>
      <div className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ""}`}>
        <Sidebar
          groups={groups}
          currentGroupId={currentGroupId}
          onSelectGroup={selectGroup}
          openCreateGroupModal={openCreateGroupModal}
        />
      </div>
      {showCreateGroupModal && (
        <CreateGroupModal
          onCreateGroup={createGroup}
          onClose={closeCreateGroupModal}
        />
      )}
      <div className={styles.notesScreen}>
        <NotesScreen
          notes={getCurrentGroupNotes()}
          groupName={getCurrentGroupName()}
          groupColor={getCurrentGroupColor()}
          onAddNote={handleAddNote}
          onUpdateNote={handleUpdateNote}
        />
      </div>
    </div>
  );
};

export default App;
