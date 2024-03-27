'use client';

import classes from './UserCard.module.css';
import Link from 'next/link';

const UserCard = ({ user, username }) => {
    return (
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
                <p>Name: {user?.name}</p>
                <p>Username: {user?.login}</p>
                <p>Bio: {user?.bio}</p>
            </div>
        </Link>
    );
};

export default UserCard;
