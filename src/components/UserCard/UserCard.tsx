'use client';

import classes from './UserCard.module.css';
import useTranslate from '@/hooks/translate-hook';
import { FC, useState, MouseEvent } from 'react';
import { GitHubUser } from '@/definitions/interfaces';
import { useRouter } from 'next/navigation';
import Modal from '@/components/Modal/Modal';

const UserCard: FC<{ user: GitHubUser; username: string }> = ({
    user,
    username,
}) => {
    const translate = useTranslate();
    const router = useRouter();
    const [showModal, setShowModal] = useState(false);

    function handleAvatarClick(e: MouseEvent) {
        e.stopPropagation();
        setShowModal(true);
    }
    function handleCardClick(e: MouseEvent) {
        router.push(`/user/${username}/repos`);
    }

    function handleCloseModal() {
        setShowModal(false);
    }

    return (
        <>
            <Modal showModal={showModal} onClose={handleCloseModal}>
                <div className={`${classes.avatar} ${classes['modal-avatar']}`}>
                    <img
                        src={user?.avatar_url}
                        alt={user?.name}
                        onClick={handleAvatarClick}
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
