import { Checkbox } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import { useDispatch } from 'react-redux';
import { ITask } from './entities/ITask';
import { updateTask } from './features/categories/categoriesSlice';

function Task(task: ITask) {
    const dispatch = useDispatch();

    const onStatusChange = (args: CheckboxChangeEvent) => {
        dispatch(updateTask({ ...task, isComplete: args.target.checked }));
    }

    return (
        <>
            {task.description}
            <Checkbox onChange={onStatusChange} checked={task.isComplete} />
        </>
    );
}

export default Task;