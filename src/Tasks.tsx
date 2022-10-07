import { List } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from './app/store';
import { ITask } from './entities/ITask';

function Tasks({ categoryKey }: { categoryKey: string }) {
    const tasks = useSelector((state: RootState) => state.tasks.items[categoryKey]);
    // const dispatch = useDispatch();

    return (
        <div className="Tasks">
            <List
                header={<div>Header</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={tasks}
                renderItem={(item: ITask) => (
                    <List.Item>
                        {item.description}
                    </List.Item>
                )}
            />
        </div>
    );
}

export default Tasks;