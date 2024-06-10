import { useEffect, useState } from "react";
import { GroupColors, IGroup, INote } from "../types";

const useGroupNotes = () => {
  const [groups, setGroups] = useState<IGroup[]>([]);
  const [currentGroupId, setCurrentGroupId] = useState<string | null>(null);

  useEffect(() => {
    const storedGroups = localStorage.getItem("groups");
    if (storedGroups) {
      setGroups(JSON.parse(storedGroups));
    }
  }, []);

  useEffect(() => {
    if (groups.length === 0) {
      return;
    }
    localStorage.setItem("groups", JSON.stringify(groups));
  }, [groups]);

  const createGroup = (title: string, color: GroupColors) => {
    const newGroup: IGroup = {
      id: new Date().toISOString(),
      title,
      color,
      notes: [],
    };
    setGroups([...groups, newGroup]);
  };

  const selectGroup = (groupId: string) => {
    setCurrentGroupId(groupId);
  };

  const addNote = (groupId: string, content: string) => {
    const updatedGroups = groups.map((group) => {
      if (group.id === groupId) {
        const newNote: INote = {
          id: new Date().toISOString(),
          content,
          createdAt: new Date(),
          updatedAt: new Date(),
          groupId,
        };
        group.notes.push(newNote);
      }
      return group;
    });
    setGroups(updatedGroups);
  };

  const updateNote = (groupId: string, noteId: string, newContent: string) => {
    const updatedGroups = groups.map((group) => {
      if (group.id === groupId) {
        group.notes = group.notes.map((note) => {
          if (note.id === noteId) {
            return {
              ...note,
              content: newContent,
              updatedAt: new Date(),
            };
          }
          return note;
        });
      }
      return group;
    });
    setGroups(updatedGroups);
  };

  return {
    groups,
    createGroup,
    currentGroupId,
    selectGroup,
    addNote,
    updateNote,
  };
};

export default useGroupNotes;
