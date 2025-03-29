
import { ContactList } from '/src/contact/ContactList.jsx';
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Home = () => {
  const {store, dispatch} = useGlobalReducer();

  return (
    <div className="text-center mt-5">
      <h1>Contact app</h1>
      <ContactList />
    </div>
  );
};