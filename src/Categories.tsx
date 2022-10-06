import { Tabs } from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddCategoryModal from './AddCategoryModal';
import { RootState } from './app/store';
import { remove, setActiveKey } from './features/categories/categoriesSlice';

const Categories = () => {
    const categoryItems = useSelector((state: RootState) => state.categories.items);
    const activeKey = useSelector((state: RootState) => state.categories.activeKey);
    const [openNewCategoryModal, setOpenNewCategoryModal] = useState(false);
    const dispatch = useDispatch();

    const onChange = (newActiveKey: string) => {
        console.log(newActiveKey);
        dispatch(setActiveKey(newActiveKey));
    };

    const handleAdd = () => {
        setOpenNewCategoryModal(true);
        dispatch(setActiveKey(categoryItems[categoryItems.length - 1].key));
    };

    const handleRemove = (targetKey: string) => {
        let newActiveKey = activeKey;
        dispatch(remove(targetKey))
        dispatch(setActiveKey(newActiveKey));
    };

    const onEdit = (targetKey: React.MouseEvent | React.KeyboardEvent | string, action: 'add' | 'remove') => {
        if (action === 'add') {
            handleAdd();
        } else {
            handleRemove(targetKey as string);
        }
    };

    return (
        <>
            <h5>Categories</h5>
            <Tabs
                type="editable-card"
                onChange={onChange}
                activeKey={activeKey}
                onEdit={onEdit}
                items={categoryItems}
            />
            <AddCategoryModal
                open={openNewCategoryModal}
                setOpen={setOpenNewCategoryModal}
            />
        </>
    );
};

export default Categories;