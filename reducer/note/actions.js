
export const actions = {
    getAllNotes: "GET_ALL_NOTES",
    getNote: "GET_NOTE",
    getNotesByDate: "GET_NOTES_BY_DATE",
    getNotesByProjects: "GET_NOTES_BY_PROJECT",
    addNewNote: "ADD_NEW_NOTE",
    softDeleteNote: "SOFT_DELETE_NOTE",
    permanentDeleteNote: "PERMANENT_DELETE_NOTE",
    updateNote: "UPDATE_NOTE"
}


export const defaultState = {
    notes: [],
    trash: []
}