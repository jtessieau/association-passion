import ActionCard from "./ActionCard";
import { dataActions } from "../../data/dataActions";

export default function ActionsList() {

  const listActions = dataActions.map(action =>
    <ActionCard key={action.id} action={action}></ActionCard>
  )

  return (
    <section id="actions">
      <h2>Nos actions</h2>
      <div className="actions-list">
        {listActions}
      </div>
    </section>
  )
}