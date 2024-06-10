import React from "react";
import styles from "./NotesList.module.scss";
import { INote } from "../../types";

interface NotesListProps {
  notes: INote[];
  onEditNote: (noteId: string, content: string) => void;
  noteIdToEdit: string | null;
  onCancelEdit: () => void;
}

const NotesList: React.FC<NotesListProps> = ({
  notes,
  onEditNote,
  noteIdToEdit,
  onCancelEdit,
}) => {
  return (
    <div className={styles.notesArea}>
      <ul>
        {notes.map((note) => (
          <li key={note.id} className={styles.noteItem}>
            <div className={styles.noteMeta}>
              <p>
                {new Date(note.updatedAt).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
              <p>
                {new Date(note.updatedAt).toLocaleDateString([], {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
            <div className={styles.noteContent}>
              <p>{note.content}</p>
              <div className={styles.noteActions}>
                {noteIdToEdit !== note.id && (
                  <button onClick={() => onEditNote(note.id, note.content)}>
                    Edit
                  </button>
                )}
                {noteIdToEdit === note.id && (
                  <button onClick={onCancelEdit}>Cancel</button>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotesList;
