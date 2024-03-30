import Button from '@/components/Button/Button';
import { FC, ReactNode, useEffect, useRef } from 'react';
import useTranslate from '@/hooks/translate-hook';
import classes from './Modal.module.css';

const Modal: FC<{
    children: ReactNode;
    showModal: boolean;
    onClose: () => void;
}> = ({ children, showModal, onClose }) => {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const translate = useTranslate();

    useEffect(() => {
        if (showModal) {
            dialogRef.current?.showModal();
        } else {
            dialogRef.current?.close();
        }
    }, [showModal]);

    return (
        <dialog ref={dialogRef} onClose={onClose}>
            {children}
            <Button className={classes['back-button']} onClick={onClose}>
                {translate('back')}
            </Button>
        </dialog>
    );
};

export default Modal;
