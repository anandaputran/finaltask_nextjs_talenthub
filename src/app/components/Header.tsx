"use client"
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

function Header() {
    const [searchText, setSearchText] = useState<string>("");
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (searchText) {
            router.push(`/movies/search?query=${searchText}`);
            setSearchText(''); // Reset search text
        }
    };

    return (
        <div>
            <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/" passHref>
                            Welcome To Movies DB by <Link href="https://anandaputran.github.io/" >APN</Link>
                    </Link>
                    <form className="d-flex" onSubmit={handleSubmit} role="search">
                        <input
                            value={searchText} // Bind value to searchText state
                            onChange={e => setSearchText(e.target.value)}
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-primary" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    );
}

export default Header;
