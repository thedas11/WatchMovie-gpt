import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { signOut } from "firebase/auth";

import { togglegptSearchView } from "../utils/gptSlice";

import { lang_Config_Dropdown } from "../utils/constants";
import { changeLanguages } from "../utils/langSlice";

const Header = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user; // set the store after checking for the signed in user
        dispatch(addUser({ uid: uid, displayName: displayName, email: email }));
        navigate("/browse");
      } else {
        navigate("/");
      }
    });
  }, []);

  const handleSignout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleGptSearchClick = () => {
    dispatch(togglegptSearchView());
  };

  const handleLangChange = (e) => {
    dispatch(changeLanguages(e.target.value));
  };

  const user = useSelector((store) => store.user);
  const showDropdown = useSelector((store) => store.gpt.gptSearchView);

  return (
    <div className=" absolute w-screen z-10 bg-gradient-to-b from-black flex flex-col md:flex-row justify-center md:justify-between  ">
      <div>
        <img
          className="w-[100px] mx-1 opacity-0.5 bg-gradient-to-r from-black h-20 md:mx-0 mx-auto"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeNVpgg8oZbD3Zx1kRxz4pMFZtcSaDwPI-Mw&s"
        />
      </div>
      <div>
        {user && (
          // show for Logedin User

          <div className="flex py-5 mx-20">
            { showDropdown && <select onChange={handleLangChange} className="bg-blue-100 hover: bg-gradient-to-r from-slate-500 rounded-lg w-[90px]">
              {lang_Config_Dropdown.map((language) => {
                return (
                  <option key={language.identifier} value={language.identifier}>
                    {language.value}
                  </option>
                );
              })}
            </select>}
            <button onClick={handleSignout} className="text-white mx-2">
              (SignOut)
            </button>
            <p className="text-white py-3 mx-2">{user.displayName}</p>
            <button
              onClick={handleGptSearchClick}
              className=" hover:bg-slate-300 py-2 px-2 mx-2 w-44 h-12 bg-blend-hard-light text-sky-200 text-center border-2  border-pink-200 rounded-full shadow-[0_0_1_1px_#fff,inset_0_0_0_1px_#fff, 0_0_10px_#08f,0_0_10px_#08f,0_0_15px_#08f ]"
            >
              { showDropdown ? "HomePage" : "Gpt Search"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Header;
