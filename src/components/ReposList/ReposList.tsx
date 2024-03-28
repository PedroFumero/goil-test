import Button from '@/components/Button/Button';
import useTranslate from '@/hooks/translate-hook';
import useFormatDate from '@/hooks/format-date';
import classes from './ReposList.module.css';

const ReposList = ({ repos = [] }) => {
    const translate = useTranslate();
    const formatDate = useFormatDate();

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
                        {repo.description && (
                            <>
                                <div
                                    className={classes['list-item__separator']}
                                />
                                <p>
                                    <span className="text-bold">
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
                            <Button link={repo.html_url}>
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
