'use client';

import classes from './UserCard.module.css';
import Link from 'next/link';
import useTranslate from '@/hooks/translate-hook';
import { FC } from 'react';
import { GitHubUser } from '@/definitions/interfaces';

const UserCard: FC<{ user: GitHubUser; username: string }> = ({
    user,
    username,
}) => {
    const translate = useTranslate();

    return (
        <div className="flex-center">
            <Link href={`/user/${username}/repos`} className={classes.card}>
                <div className={classes.avatar}>
                    <img
                        src={user?.avatar_url}
                        alt={user?.name}
                        height={120}
                        width={120}
                    />
                </div>
                <div className={classes.details}>
                    <p>
                        <span className="text-bold">{translate('name')}:</span>{' '}
                        {user?.name}
                    </p>
                    <p>
                        <span className="text-bold">
                            {translate('username')}:
                        </span>{' '}
                        {user?.login}
                    </p>
                    <p>
                        <span className="text-bold">{translate('bio')}:</span>{' '}
                        {user?.bio}
                    </p>
                </div>
            </Link>
        </div>
    );
};

export default UserCard;
