import { Button } from "@mui/material";

interface IVoteButtonProps {
  country: string;
  vote?: "1" | "2-5" | "5-10" | "10-15" | "15-20" | "20-25";
}

const VoteButton: React.FC<IVoteButtonProps> = ({ country, vote }) => {
  return (
    <Button variant="outlined" color={vote ? "success" : "error"}>
      {vote ?? "Vote"}
    </Button>
  );
};

export default VoteButton;
