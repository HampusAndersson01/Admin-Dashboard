import { useUser } from "../context/UserContext";
import { StyledGreeting } from "../Styles";

type profileProps = {};

const Profile: React.FC<profileProps> = () => {
  const { currentUser } = useUser();

  return (
    <div id="Profile">
      {currentUser !== null && (
        <>
          <StyledGreeting>
            Hello,<br/> {currentUser.name.split(" ")[0]}!
          </StyledGreeting>
          <img
            src={process.env.PUBLIC_URL + "/images/" + currentUser.imageUrl}
            alt="Profile"
          />
        </>
      )}
    </div>
  );
};

export default Profile;
