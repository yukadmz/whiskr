/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export { default as UserHome } from './user-home';
export { Login, Signup } from './auth-form';
export { default as AllPets } from './AllPets';
export { default as Matches } from './Matches';
export { default as MatchSingle} from './MatchSingle';
export { CreateProfile, UpdateProfile } from './forms/ProfileForm';
export { default as SinglePet } from './SinglePet';
export { default as PetTypes } from './PetTypes';
export { default as EmailPreview } from './EmailPreview';
export { default as CurrentLocation } from './CurrentLocation';
