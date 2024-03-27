import { actions } from "./actions";

function reducer(state, action) {
    switch(action.type) {
        case actions.getAllNotes: 
            return {
                ...state,
                notes: [...action.payload]
            };
        case actions.getNote:
            return null;
        case actions.getNotesByDate:
            return null;
        case actions.getNotesByProjects:
            return null;
        case actions.addNewNote:
            return {
                ...state,
                notes:  [...state.notes, action.payload]
            }
        case actions.softDeleteNote:
            return null;
        case actions.permanentDeleteNote:
            return null;
        case actions.updateNote:
            return null;
        default:
            throw new Error(`No case for type ${action.type} found.`)
    }
}

export default reducer;