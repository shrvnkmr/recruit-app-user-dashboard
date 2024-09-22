import Chip from "../../atoms/Chip/Chip";
import Icon from "../../atoms/Icon/Icon";
import "./ItemCard.css";

export default function ItemCard() {
  return (
    <div className="itemCard">
      <div className="itemHeaderWrapper">
        <Icon
          size="10px"
          color="var(--color-blue-300)"
          bgColor="var(--color-accent-100)"
          name="bxs-file-blank"
        />
        <p className="itemText">Note</p>
        <Chip label="To Do" />
      </div>
      <p className="itemDetails">
        Lorem dolore sit et aute cupidatat eu Lorem tempor proident consequat.
        In dolore mollit laborum ex cillum laboris occaecat ipsum Lorem
        cupidatat.
      </p>
      <p className="association">1 Association(s)</p>
      <div className="userDetailsWrapper">
        <span className="nameWrapper">
          <Icon color="var(--color-text-100)" name="bx-user-circle" />
          <p className="itemDetails">John Doe</p>
        </span>
        <span className="timeWrapper">
          <Icon color="var(--color-text-100)" name="bx-time" />
          <p className="itemDetails">Jul 12, 2023, 11:54 am</p>
        </span>
      </div>
    </div>
  );
}
