import { useDispatch } from "react-redux";
import { Btn, Item, Text } from "./TasksItemStyled";
import { toggleCompleted } from "../../redux/operations";

export const TasksItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();
  return (
    <Item id={id}>
      <input
        type="checkbox"
        onChange={() => {
          dispatch(toggleCompleted(id));
        }}
        checked={completed}
      />
      <Text>{text}</Text>
      <Btn type="button" data-action="delete">
        Delete
      </Btn>
    </Item>
  );
};
