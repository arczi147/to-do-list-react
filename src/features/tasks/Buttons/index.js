import { useSelector, useDispatch } from "react-redux";
import { StyledButtons, Button } from "./styled";
import { toggleHideDone, setAllDone, selectAreTaskEmpty, selectHideDone, selectIsEveryTaskDone, fetchExampleTasks } from "../tasksSlice";

const Buttons = () => {
    const areTaskEmpty = useSelector(selectAreTaskEmpty);
    const hideDone = useSelector(selectHideDone);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);

    const dispatch = useDispatch();

    return (
        <StyledButtons>
            <Button onClick={() => dispatch(fetchExampleTasks())}>
                Pobierz przykładowe zadania
            </Button>
            {!areTaskEmpty && (
                <>
                    <Button
                        onClick={() => dispatch(toggleHideDone())}
                    >
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </Button>
                    <Button
                        onClick={() => dispatch(setAllDone())}
                        disabled={isEveryTaskDone}
                    >
                        Ukończ wszystkie
                    </Button>
                </>
            )}
        </StyledButtons>
    )
};

export default Buttons;