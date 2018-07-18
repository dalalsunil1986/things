import Auth from './auth/reducer';
import App from './app/reducer';
import Notes from './notes/reducer';
import { users, messages } from './chat/reducer';
import formObj from "./form/reducer";
import People from "./form/reducerPeople";

export default {
  Auth,
  App,
  Notes,
  users, messages,
  formObj,
  People
};
