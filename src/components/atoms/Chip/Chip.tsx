import "./Chip.css";

interface ChipProps {
  label: string;
}

export default function Chip({ label }: ChipProps) {
  return (
    <div className="chipWrapper">
      <span className="toDo">{label}</span>
    </div>
  );
}
