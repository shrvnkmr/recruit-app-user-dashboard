import { useCallback, useEffect } from "react";
import Header from "../components/molecules/Header/Header";
import Sidebar from "../components/organisms/Sidebar/Sidebar";

import UserCard from "../components/organisms/UserCard/UserCard";
import UserInfo from "../components/organisms/UserInfo/UserInfo";
import "./CandidateDetails.css";
import { BASE_URL } from "@/config";
import { useDispatch } from "react-redux";
import axios, { AxiosResponse } from "axios";
import { CandidateInfo, setCandidateDetails } from "@/redux/candidateSlice";

function CandidateDetails() {
  const dispatch = useDispatch();
  //mock id for test scenario
  const candidateId = 1;

  const fetchCandidateDetails = useCallback(
    async (id: number): Promise<void> => {
      try {
        const response: AxiosResponse<CandidateInfo> = await axios.get(
          `${BASE_URL}/details/${id}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        dispatch(setCandidateDetails(response.data));
      } catch (err) {
        console.log("Error: Failed to fetch candidate details");
        // throw new Error("Failed to fetch candidate details");
      }
    },
    [dispatch]
  );

  useEffect(() => {
    fetchCandidateDetails(candidateId);
  }, [fetchCandidateDetails]);

  return (
    <div className="candidateDetails">
      <div className="candidateDashboard">
        <Header />
        <UserCard />
        <UserInfo />
      </div>
      <Sidebar />
    </div>
  );
}

export default CandidateDetails;
