import { PlusOutlined } from '@ant-design/icons';
import { Button, Segmented } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddCategoryModal from './AddCategoryModal';
import { RootState } from './app/store';
import { removeCategory, setActiveKey } from './features/categories/categoriesSlice';
import Tasks from './Tasks';

const Categories = () => {
    const categoryItems = useSelector((state: RootState) => state.categories.items);
    const activeKey = useSelector((state: RootState) => state.categories.activeKey);
    const [openNewCategoryModal, setOpenNewCategoryModal] = useState(false);
    const dispatch = useDispatch();

    const onChange = (newActiveKey: string | number) => {
        dispatch(setActiveKey(newActiveKey as string));
    };

    const handleAdd = () => {
        setOpenNewCategoryModal(true);
    };

    const handleRemove = (targetKey: string) => {
        let newActiveKey = activeKey;
        dispatch(removeCategory(targetKey))
        dispatch(setActiveKey(newActiveKey));
    };

    return (
        <>
            <h5>Categories</h5>
            <Segmented
                options={Object.keys(categoryItems).map(key => {
                    return {
                        label: categoryItems[key].label,
                        value: key
                    }
                })}
                value={activeKey}
                onChange={onChange}
            />
            <Button onClick={handleAdd}>
                <PlusOutlined />
            </Button>
            <Tasks categoryKey={activeKey} />
            <AddCategoryModal
                open={openNewCategoryModal}
                setOpen={setOpenNewCategoryModal}
            />
        </>
    );
};

export default Categories;