import React, { useState } from "react";
import styles from "./NotesScreen.module.scss";
import { INote } from "../types";
import OriginalNotesScreen from "./OriginalNotesScreen/OriginalNotesScreen";
import NotesHeader from "./NotesHeader/NotesHeader";
import NotesList from "./NotesList/NotesList";
import TextareaInput from "./TextareaInput/TextareaInput";

interface NotesScreenProps {
  notes: INote[];
  groupName: string;
  onAddNote: (content: string) => void;
  onUpdateNote: (noteId: string, content: string) => void;
  groupColor: string;
}

const NotesScreen: React.FC<NotesScreenProps> = ({
  notes,
  groupName,
  onAddNote,
  onUpdateNote,
  groupColor,
}) => {
  const [newNoteContent, setNewNoteContent] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [noteIdToEdit, setNoteIdToEdit] = useState<string | null>(null);

  const handleAddNote = () => {
    if (newNoteContent.trim()) {
      if (editMode && noteIdToEdit) {
        onUpdateNote(noteIdToEdit, newNoteContent);
        setEditMode(false);
        setNoteIdToEdit(null);
      } else {
        onAddNote(newNoteContent);
      }
      setNewNoteContent("");
    }
  };

  const handleEditNote = (noteId: string, content: string) => {
    setEditMode(true);
    setNoteIdToEdit(noteId);
    setNewNoteContent(content);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setNoteIdToEdit(null);
    setNewNoteContent("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevents newline in the textarea
      handleAddNote();
    }
  };

  const handleClear = () => {
    setNewNoteContent("");
  };

  if (!groupName) {
    return <OriginalNotesScreen />;
  }

  return (
    <div className={styles.notesScreen}>
      <NotesHeader groupName={groupName} groupColor={groupColor} />
      <NotesList
        notes={notes}
        onEditNote={handleEditNote}
        onCancelEdit={handleCancelEdit}
        noteIdToEdit={noteIdToEdit}
      />
      <TextareaInput
        value={newNoteContent}
        onChange={(e) => setNewNoteContent(e.target.value)}
        onKeyDown={handleKeyDown}
        onSubmit={handleAddNote}
        onClear={handleClear}
      />
    </div>
  );
};

export default NotesScreen;
