import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

import classes from './SearchForm.module.css';

import useTranslate from '@/hooks/translate-hook';

const SearchForm = () => {
    const router = useRouter();
    const [isInvalid, setIsInvalid] = useState(false);
    const [username, setUsername] = useState('');
    const translate = useTranslate();

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!username.trim().length) {
            setIsInvalid(true);
            return;
        }

        router.push(`/user/${username}`);
    }

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setIsInvalid(!e.target.value.toString().trim().length);
        setUsername(e.target.value);
    }

    return (
        <main className={classes.container}>
            <form onSubmit={handleSubmit}>
                <div className="flex-center">
                    <Input
                        id="username"
                        type="search"
                        placeholder={translate('inputPlaceHolder')}
                        className="fs-18 p-5rem"
                        onChange={handleChange}
                        value={username}
                    />
                    <Button className="ml-5 p-5rem fs-18" type="submit">
                        {translate('search')}
                    </Button>
                </div>
            </form>

            <p className="mt-2rem">
                <span className={isInvalid ? 'error' : 'hidden'}>
                    {translate('inValidInput')}
                </span>
            </p>
        </main>
    );
};

export default SearchForm;
