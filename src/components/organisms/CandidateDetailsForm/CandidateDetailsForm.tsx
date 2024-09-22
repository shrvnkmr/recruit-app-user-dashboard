import React, { useState } from "react";
import { Grid, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { setCandidateDetails } from "../../../redux/candidateSlice";
import { closeModal } from "../../../redux/modalSlice";
import CustomButton from "../../atoms/CustomButton/CustomButton";

export default function CandidateDetailsForm() {
  const dispatch = useDispatch();
  const candidateDetails = useSelector(
    (store: RootState) => store?.candidateDetails
  );

  const [formState, setFormState] = useState({
    ...candidateDetails,
    availableFrom: candidateDetails.availableFrom
      ? new Date(candidateDetails.availableFrom)
      : null,
    dob: candidateDetails.dob ? new Date(candidateDetails.dob) : null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>
  ) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name as string]: value,
    });
  };

  const handleDateChange = (name: string, value: Date | null) => {
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    // Convert Date objects to ISO strings before dispatching
    const updatedFormState = {
      ...formState,
      availableFrom: formState.availableFrom
        ? formState.availableFrom.toISOString().split("T")[0]
        : null,
      dob: formState.dob ? formState.dob.toISOString().split("T")[0] : null,
    };
    dispatch(setCandidateDetails(updatedFormState));
    dispatch(closeModal());
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            id="organization"
            label="Current Organization"
            name="organization"
            fullWidth
            variant="outlined"
            value={formState.organization}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="summary"
            label="Summary"
            name="summary"
            fullWidth
            variant="outlined"
            value={formState.summary}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="skills"
            label="Skills"
            name="skills"
            fullWidth
            variant="outlined"
            value={formState.skills}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="employmentStatus"
            label="Current Employment Status"
            name="employmentStatus"
            fullWidth
            variant="outlined"
            value={formState.employmentStatus}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <DatePicker
            data-testid="availableFrom"
            sx={{ width: "100%" }}
            label="Available From"
            value={formState.availableFrom}
            onChange={(date: Date | null) =>
              handleDateChange("availableFrom", date)
            }
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <DatePicker
            data-testid="dob"
            sx={{ width: "100%" }}
            label="Date of Birth"
            value={formState.dob}
            onChange={(date: Date | null) => handleDateChange("dob", date)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="salaryCurrent"
            label="Current Salary"
            name="salaryCurrent"
            type="number"
            fullWidth
            variant="outlined"
            value={formState.salaryCurrent}
            onChange={handleChange}
            InputProps={{
              inputProps: { min: 0, step: "0.01" },
              inputMode: "decimal",
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="relevantExperience"
            label="Relevant Experience"
            name="relevantExperience"
            type="number"
            fullWidth
            variant="outlined"
            value={formState.relevantExperience}
            onChange={handleChange}
            InputProps={{ inputProps: { min: 0 }, inputMode: "decimal" }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="notice"
            label="Notice Period"
            name="notice"
            fullWidth
            variant="outlined"
            value={formState.notice}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="salaryExpected"
            label="Salary Expectation"
            name="salaryExpected"
            type="number"
            fullWidth
            variant="outlined"
            value={formState.salaryExpected}
            onChange={handleChange}
            InputProps={{
              inputProps: { min: 0, step: "0.01" },
              inputMode: "decimal",
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="address"
            label="Full Address"
            name="address"
            fullWidth
            variant="outlined"
            value={formState.address}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="status"
            label="Status"
            name="status"
            fullWidth
            variant="outlined"
            value={formState.status}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="resume"
            label="Resume"
            name="resume"
            fullWidth
            variant="outlined"
            value={formState.resume}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="salaryType"
            label="Salary Type"
            name="salaryType"
            fullWidth
            variant="outlined"
            value={formState.salaryType}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="totalExperience"
            label="Total Experience"
            name="totalExperience"
            type="number"
            fullWidth
            variant="outlined"
            value={formState.totalExperience}
            onChange={handleChange}
            InputProps={{ inputProps: { min: 0 }, inputMode: "decimal" }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="language"
            label="Language Skills"
            name="language"
            fullWidth
            variant="outlined"
            value={formState.language}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <CustomButton
            data-testid="submitBtn"
            onClick={() => handleSubmit()}
            bgColor="var(--color-blue-300)"
            textColor="var(--color-white)"
            label="Save"
            hoverColor="var(--color-blue-700)"
          />
        </Grid>
      </Grid>
    </LocalizationProvider>
  );
}
