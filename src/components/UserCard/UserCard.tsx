'use client';

import classes from './UserCard.module.css';
import useTranslate from '@/hooks/translate-hook';
import {
    FC,
    useState,
    MouseEvent,
    useRef,
    useContext,
    ChangeEvent,
} from 'react';
import { GitHubUser } from '@/definitions/interfaces';
import { useRouter } from 'next/navigation';
import Modal from '@/components/Modal/Modal';
import { StateContext } from '@/context/StateContext';
import { ActionType } from '@/context/reducer';

const UserCard: FC<{ user: GitHubUser; username: string }> = ({
    user,
    username,
}) => {
    const translate = useTranslate();
    const router = useRouter();
    const [showModal, setShowModal] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const appCtx = useContext(StateContext);

    function handleAvatarClick(e: MouseEvent) {
        e.stopPropagation();
        setShowModal(true);
    }
    function handleCardClick() {
        router.push(`/user/${username}/repos`);
    }

    function handleCloseModal() {
        setShowModal(false);
    }

    function handleChangeAvatar() {
        inputRef.current?.click();
    }

    function handlePickedAvatar(e: ChangeEvent<HTMLInputElement>) {
        if (!e.target.files?.length) return;
        const pickedFile: File = e.target.files[0];
        if (!pickedFile.type.includes('image')) return;

        const fileReader = new FileReader();
        fileReader.onload = () => {
            appCtx.dispatch({
                type: ActionType.UPDATE_USER,
                payload: {
                    ...appCtx.user,
                    avatar_url: fileReader.result,
                },
            });
        };

        fileReader.readAsDataURL(pickedFile);
    }

    return (
        <>
            <Modal showModal={showModal} onClose={handleCloseModal}>
                <div className={`${classes.avatar} ${classes['modal-avatar']}`}>
                    <img
                        src={user?.avatar_url}
                        alt={user?.name}
                        onClick={handleChangeAvatar}
                        className={classes['change-avatar']}
                    />

                    <input
                        ref={inputRef}
                        type="file"
                        multiple={false}
                        style={{ visibility: 'hidden' }}
                        accept=".jpg,.png,.jpeg"
                        onChange={handlePickedAvatar}
                    />
                </div>
            </Modal>

            <div className="flex-center">
                <div
                    id="user-card"
                    className={classes.card}
                    onClick={handleCardClick}
                >
                    <div className={classes.avatar}>
                        <img
                            src={user?.avatar_url}
                            alt={user?.name}
                            onClick={handleAvatarClick}
                        />
                    </div>
                    <div className={classes.details}>
                        <p>
                            <span className="text-bold">
                                {translate('name')}:
                            </span>{' '}
                            {user?.name || 'N/A'}
                        </p>
                        <p>
                            <span className="text-bold">
                                {translate('username')}:
                            </span>{' '}
                            {user?.login}
                        </p>
                        <p>
                            <span className="text-bold">
                                {translate('bio')}:
                            </span>{' '}
                            {user?.bio || 'N/A'}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserCard;
