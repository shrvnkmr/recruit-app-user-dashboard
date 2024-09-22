import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { RootState } from "../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../redux/modalSlice";
import CandidateDetailsForm from "../../organisms/CandidateDetailsForm/CandidateDetailsForm";

export default function FormDialog() {
  const dispatch = useDispatch();
  const modalState = useSelector((store: RootState) => store?.modalState);

  return (
    <>
      <Dialog
        open={modalState?.open}
        onClose={() => dispatch(closeModal())}
        PaperProps={{
          component: "form",
        }}
      >
        <DialogTitle
          sx={{ fontWeight: 600, fontSize: 18, color: "var(--color-text-300)" }}
        >
          Edit Candidate Details
        </DialogTitle>
        <DialogContent sx={{ paddingTop: "0.5rem !important" }}>
          <CandidateDetailsForm />
        </DialogContent>
      </Dialog>
    </>
  );
}
