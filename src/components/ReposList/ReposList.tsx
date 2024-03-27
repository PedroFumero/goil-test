import classes from './ReposList.module.css';
import Button from '@/components/Button/Button';
import Link from 'next/link';

const ReposList = ({ repos = [] }) => {
    function formatDate(date) {
        return new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    }

    return (
        <main className={classes.container}>
            <ul className={classes.list}>
                {repos.map((repo) => (
                    <li key={repo.id} className={classes['list-item']}>
                        <p className={classes['list-item__title']}>
                            <span className={classes['list-item__text-bold']}>
                                {repo.name}
                            </span>
                        </p>
                        <div className={classes['list-item__separator']} />
                        {repo.description && (
                            <p>
                                <span
                                    className={classes['list-item__text-bold']}
                                >
                                    Description:
                                </span>{' '}
                                {repo.description}
                            </p>
                        )}
                        <div className={classes['list-item__separator']} />
                        <div className={classes['list-item__footer']}>
                            {repo.created_at && (
                                <p>{formatDate(repo.created_at)}</p>
                            )}
                            <Button link={repo.html_url}>Visit repo</Button>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default ReposList;
