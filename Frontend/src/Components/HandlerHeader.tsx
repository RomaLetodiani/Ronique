import { Button } from "@/Components/UI";

type Props = {
  handleAdd: () => void;
  handleDelete: () => void;
  title: string;
};

const HandlerHeader = ({ handleAdd, handleDelete, title }: Props) => {
  return (
    <div className="border-b-2 rounded-xl px-5 flex justify-between items-center py-2 mb-5">
      <h2>{title}</h2>
      <div className="flex gap-3">
        <Button btnType="danger" onClick={handleDelete}>
          Delete
        </Button>
        <Button onClick={handleAdd}>Add</Button>
      </div>
    </div>
  );
};

export default HandlerHeader;
