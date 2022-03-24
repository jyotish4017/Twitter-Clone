import { atom } from "recoil";

// const [modalState, setModalState] = useState(false) 
// Same as below but below recoil way provide modalState globally.
// <RecoilRoot> should provide in app.js to avail it globally.
export const modalState = atom({
  key: "modalState",
  default: false,
});

export const postIdState = atom({
  key: "postIdState",
  default: "",
});