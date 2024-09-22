import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { formatDate } from "../../../utils";
import "./CandidateDetailsList.css";

export default function CandidateDetailsList() {
  const candidateDetails = useSelector(
    (store: RootState) => store?.candidateDetails
  );
  return (
    <div className="itemContainer">
      <div className="item">
        <p className="itemTitle">Current Organization</p>
        <p className="itemValue">{candidateDetails?.organization}</p>
      </div>
      <div className="item">
        <p className="itemTitle">Summary</p>
        <p className="itemValue">{candidateDetails?.summary}</p>
      </div>
      <div className="item">
        <p className="itemTitle">Skills</p>
        <p className="itemValue">{candidateDetails?.skills}</p>
      </div>
      <div className="item">
        <p className="itemTitle">Current Employment Status</p>
        <p className="itemValue">{candidateDetails?.employmentStatus}</p>
      </div>
      <div className="item">
        <p className="itemTitle">Available From</p>
        <p className="itemValue">
          {formatDate(candidateDetails?.availableFrom || "")}
        </p>
      </div>
      <div className="item">
        <p className="itemTitle">Date of Birth</p>
        <p className="itemValue">{formatDate(candidateDetails?.dob || "")}</p>
      </div>
      <div className="item">
        <p className="itemTitle">Current Salary</p>
        <p className="itemValue">${candidateDetails?.salaryCurrent}</p>
      </div>
      <div className="item">
        <p className="itemTitle">Relevent Experience</p>
        <p className="itemValue">
          {candidateDetails?.relevantExperience} years
        </p>
      </div>
      <div className="item">
        <p className="itemTitle">Notice Period</p>
        <p className="itemValue">{candidateDetails?.notice}</p>
      </div>
      <div className="item">
        <p className="itemTitle">Salary Expectation</p>
        <p className="itemValue">${candidateDetails?.salaryExpected}</p>
      </div>
      <div className="item">
        <p className="itemTitle">Full Address</p>
        <p className="itemValue">{candidateDetails?.address}</p>
      </div>
      <div className="item">
        <p className="itemTitle">Status</p>
        <p className="itemValue">{candidateDetails?.status}</p>
      </div>
      <div className="item">
        <p className="itemTitle">Resume</p>
        <p className="itemValue">{candidateDetails?.resume}</p>
      </div>
      <div className="item">
        <p className="itemTitle">Salary Type</p>
        <p className="itemValue">{candidateDetails?.salaryType}</p>
      </div>
      <div className="item">
        <p className="itemTitle">Total Experience</p>
        <p className="itemValue">{candidateDetails?.totalExperience} years</p>
      </div>
      <div className="item">
        <p className="itemTitle">Language Skills</p>
        <p className="itemValue">{candidateDetails?.language}</p>
      </div>
    </div>
  );
}
