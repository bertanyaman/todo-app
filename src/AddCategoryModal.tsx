import { Input, Modal } from 'antd';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { IAddCategoryModal } from './entities/IAddCategoryModal';
import { addCategory } from './features/categories/categoriesSlice';

const AddCategoryModal = ({ open, setOpen }: IAddCategoryModal) => {
    const [label, setLabel] = useState<string>("");
    const dispatch = useDispatch();

    const handleOk = () => {
        setOpen(false);
        dispatch(addCategory({ key: new Date().getTime().toString(), label, closable: true, tasks: [] }));
    };

    const handleCancel = () => {
        setOpen(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLabel(e.target.value);
    };

    return (
        <>
            <Modal
                title="New Category"
                open={open}
                onOk={handleOk}
                onCancel={handleCancel}
                destroyOnClose
            >
                <Input
                    placeholder="Enter a name"
                    onChange={handleChange}
                />
            </Modal>
        </>
    );
};

export default AddCategoryModal;