import Button from '@/components/Button/Button';
import useTranslate from '@/hooks/translate-hook';
import useFormatDate from '@/hooks/format-date';
import classes from './ReposList.module.css';
import { FC } from 'react';
import { GitHubRepository } from '@/definitions/interfaces';

const ReposList: FC<{ repos: GitHubRepository[] | [] }> = ({ repos = [] }) => {
    const translate = useTranslate();
    const formatDate = useFormatDate();

    return (
        <main className={classes.container}>
            <ul className={classes.list}>
                {repos.map((repo) => (
                    <li key={repo.id} className={classes['list-item']}>
                        <p className={classes['list-item__title']}>
                            <span className="text-bold">{repo.name}</span>
                        </p>
                        {repo.description && (
                            <>
                                <div
                                    className={classes['list-item__separator']}
                                />
                                <p>
                                    <span className="text-bold repo-description">
                                        {translate('description')}:
                                    </span>{' '}
                                    {repo.description}
                                </p>
                            </>
                        )}
                        <div className={classes['list-item__separator']} />
                        <div className={classes['list-item__footer']}>
                            {repo.created_at && (
                                <p>{formatDate(repo.created_at)}</p>
                            )}
                            <Button className="open" link={repo.html_url}>
                                {translate('openRepo')}
                            </Button>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default ReposList;
