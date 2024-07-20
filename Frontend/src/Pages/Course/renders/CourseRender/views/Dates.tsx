import moment from "moment";

type DatesProps = {
  created_at: string;
  updated_at: string;
};

const Dates = ({ created_at, updated_at }: DatesProps) => {
  return (
    <div>
      <p>
        Course Created at:
        <strong> {moment(created_at).format("MMMM Do YYYY")}</strong>
      </p>
      <p>
        Last Updated at:
        <strong> {moment(updated_at).format("MMMM Do YYYY")}</strong>
      </p>
    </div>
  );
};

export default Dates;
