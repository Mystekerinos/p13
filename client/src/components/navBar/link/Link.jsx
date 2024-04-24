import { logout } from "../../../store/slices/authSlices";
import { useSelector, useDispatch } from "react-redux";
import { CircleUserRound, LogOut } from "lucide";
import { Link } from "react-router-dom";

const Links = () => {
  const { token } = useSelector((state) => state.login);
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  return (
    <>
      {!token ? (
        <li>
          <Link to="/login">
            <CircleUserRound /> <span>Sign in</span>
          </Link>
        </li>
      ) : (
        <>
          <li>
            <Link to="/profile">
              <CircleUserRound /> <span>{user.firstName}</span>
            </Link>
          </li>
          <li>
            <Link to="/login" onClick={() => dispatch(logout())}>
              <LogOut /> <span>Sign Out</span>
            </Link>
          </li>
        </>
      )}
    </>
  );
};

export default Links;
