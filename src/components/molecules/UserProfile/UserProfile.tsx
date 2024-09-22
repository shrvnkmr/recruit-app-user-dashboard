import Icon from "../../atoms/Icon/Icon";
import "./UserProfile.css";

function UserProfile() {
  return (
    <div className="userProfile">
      <Icon
        name="bxs-user"
        color="var(--color-green-300)"
        bgColor="var(--color-green-100)"
      />
      <div>
        <p className="userName">Phyllis Yang</p>
        <p className="userCompany">Silicon Links Inc</p>
      </div>
    </div>
  );
}

export default UserProfile;
