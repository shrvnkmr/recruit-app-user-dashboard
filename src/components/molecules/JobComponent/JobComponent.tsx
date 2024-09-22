import Icon from "../../atoms/Icon/Icon";
import Chip from "../../atoms/Chip/Chip";
import CustomButton from "../../atoms/CustomButton/CustomButton";
import CustomSwitch from "../../atoms/Switch/Switch";
import "../../organisms/UserCard/UserCard.css";
import "../ItemCard/ItemCard.css";
import "./JobComponent.css";

export default function JobComponent() {
  return (
    <div className="jobComponent">
      <div className="itemHeaderWrapper">
        <div className="flexRow gap-2">
          <Icon
            size="24px"
            name="bxs-user"
            color="var(--color-green-300)"
            bgColor="var(--color-green-100)"
          />
          <div className="flexCol">
            <span className="flexRow gap-4">
              <p className="textMd">Senior Product Manager</p>
            </span>
            <span className="flexRow gap-4">
              <p className="textSm">Recruit CRM</p>
            </span>
          </div>
        </div>
      </div>
      <div className="jobDetailsWrapper">
        <span className="nameWrapper">
          <Icon color="var(--color-text-100)" name="bx-user-circle" />
          <p className="itemDetails">John Doe</p>
        </span>
        <span className="timeWrapper">
          <Icon color="var(--color-text-100)" name="bx-time" />
          <p className="itemDetails">Jul 12, 2023, 11:54 am</p>
        </span>
      </div>
      <Chip label="Assigned" />
      <CustomButton label="View Files" />
      <CustomSwitch />
    </div>
  );
}
