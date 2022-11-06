import { Input, List } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './app/store';
import { ITask } from './entities/ITask';
import { addTask } from './features/categories/categoriesSlice';
import Task from './Task';

function Tasks({ categoryKey }: { categoryKey: string }) {
    const tasks = useSelector((state: RootState) => state.categories.items[categoryKey].tasks);
    const dispatch = useDispatch();
    const [value, setValue] = useState("");

    const onPressEnter = (args: React.KeyboardEvent<HTMLInputElement>) => {
        dispatch(
            addTask({
                description: args.currentTarget.value,
                isComplete: false,
                flag: false,
                key: new Date().getTime().toString()
            })
        );
        setValue("");
    }

    const onNameChange = (args: React.ChangeEvent<HTMLInputElement>) => {
        setValue(args.target.value);
    }

    return (
        <div className="Tasks">
            <List
                header={
                    <Input
                        placeholder="Add a task"
                        onPressEnter={onPressEnter}
                        value={value}
                        onChange={onNameChange}
                    />
                }
                footer={<div>{tasks?.length ?? 0} task(s) left</div>}
                bordered
                dataSource={tasks}
                renderItem={(task: ITask) => (
                    <List.Item>
                        <Task {...task} />
                    </List.Item>
                )}
            />
        </div>
    );
}

export default Tasks;