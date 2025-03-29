
export const initialStore = () => ({
  todos: [
      { id: 1, title: "Create React App", background: "#f8f9fa" },
      { id: 2, title: "Build Components", background: "#f8f9fa" },
      { id: 3, title: "Deploy to Production", background: "#f8f9fa" }
  ],
  contacts: [] 
});

export default function storeReducer(state, action) {
  switch (action.type) {
      case "add_task":
          return {
              ...state,
              todos: state.todos.map(todo => 
                  todo.id === action.payload.id 
                      ? { ...todo, background: action.payload.color } 
                      : todo
              )
          };
      case "add_contact":
          return {
              ...state,
              contacts: [...state.contacts, action.payload]
          };
      case "update_contact":
          return {
              ...state,
              contacts: state.contacts.map(contact =>
                  contact.id === action.payload.id ? action.payload : contact
              )
          };
      case "delete_contact":
          return {
              ...state,
              contacts: state.contacts.filter(
                  contact => contact.id !== action.payload
              )
          };
      default:
          return state;
  }
}