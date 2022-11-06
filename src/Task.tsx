import { FlagTwoTone } from '@ant-design/icons';
import { Checkbox } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import { useDispatch } from 'react-redux';
import { ITask } from './entities/ITask';
import { updateComplete, updateFlag } from './features/categories/categoriesSlice';

function Task(task: ITask) {
    const dispatch = useDispatch();

    const onStatusChange = (args: CheckboxChangeEvent) => {
        dispatch(updateComplete({ ...task, isComplete: args.target.checked }));
    }

    const onFlagChange = () => {
        dispatch(updateFlag({ ...task, flag: !task.flag }));
    }

    return (
        <div className={`Task ${task.isComplete ? 'Complete' : ''}`}>
            {task.description}
            <div className='TaskActions'>
                <FlagTwoTone onClick={onFlagChange} twoToneColor={task.flag ? "#52c41a" : "#ccc"} />
                <Checkbox onChange={onStatusChange} checked={task.isComplete} />
            </div>
        </div>
    );
}

export default Task;