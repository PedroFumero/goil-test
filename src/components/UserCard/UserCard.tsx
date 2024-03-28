'use client';

import classes from './UserCard.module.css';
import Link from 'next/link';
import useTranslate from '@/hooks/translate-hook';

const UserCard = ({ user, username }) => {
    const translate = useTranslate();

    return (
        <div className="flex-center">
            <Link className={classes.card} href={`/user/${username}/repos`}>
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
