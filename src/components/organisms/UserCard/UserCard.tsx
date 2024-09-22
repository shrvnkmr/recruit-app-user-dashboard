import { useDispatch, useSelector } from "react-redux";
import FacebookIcon from "../../../Icons/FacebookIcon";
import GithubIcon from "../../../Icons/GithubIcon";
import LinkedInIcon from "../../../Icons/LinkedInIcon";
import TwitterIcon from "../../../Icons/TwitterIcon";
import XingIcon from "../../../Icons/XingIcon";
import CustomButton from "../../atoms/CustomButton/CustomButton";
import Icon from "../../atoms/Icon/Icon";
import "./UserCard.css";
import { RootState } from "../../../redux/store";
import { openModal } from "../../../redux/modalSlice";
import FormDialog from "../../molecules/FormDialog/FormDialog";

export default function UserCard() {
  const dispatch = useDispatch();
  const candidateDetails = useSelector(
    (store: RootState) => store?.candidateDetails
  );
  return (
    <div className="userCard">
      <div className="flexRow gap-2">
        <Icon
          size="32px"
          name="bxs-user"
          color="var(--color-green-300)"
          bgColor="var(--color-green-100)"
        />
        <div className="flexCol">
          <span className="flexRow gap-4">
            <h1 className="textLg">{candidateDetails?.name}</h1>
            <span className="flexRow gap-2">
              <FacebookIcon />
              <TwitterIcon />
              <LinkedInIcon />
              <GithubIcon />
              <XingIcon />
            </span>
          </span>
          <span className="flexRow gap-4">
            <p className="textSm">{candidateDetails?.designation}</p>
            <p className="textSm">{candidateDetails?.address}</p>
            <p className="textSm">{candidateDetails?.status}</p>
          </span>
        </div>
      </div>
      <div className="flexRow userCardBtnWrapper gap-2">
        <CustomButton
          bgColor="var(--color-red-100)"
          textColor="var(--color-red-300)"
          label="Contact Linked"
          hoverColor="var(--color-red-200)"
        />
        <CustomButton aria-label="star" isIconBtn>
          <Icon color="var(--color-text-300)" name="bxs-star" />
        </CustomButton>
        <CustomButton aria-label="trending" isIconBtn>
          <Icon color="var(--color-text-300)" name="bxs-hot" />
        </CustomButton>
        <CustomButton
          onClick={() => dispatch(openModal())}
          aria-label="edit"
          data-testid="editBtn"
          isIconBtn
        >
          <Icon color="var(--color-text-300)" name="bxs-pencil" />
        </CustomButton>
        <CustomButton aria-label="menu" isIconBtn>
          <Icon
            size="24px"
            color="var(--color-text-300)"
            name="bx-dots-vertical-rounded"
          />
        </CustomButton>
      </div>
      <FormDialog />
    </div>
  );
}
