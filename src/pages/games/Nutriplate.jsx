import { nutriplateItems } from "../../data/nutriplate";
import GamePlate from "./GamePlate";

export default function Nutriplate() {
  return <GamePlate items={nutriplateItems} />;
}
