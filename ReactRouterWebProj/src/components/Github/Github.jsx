
import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()

    /*
    // OLD METHOD: useState + useEffect

    const [data, setData] = useState({})

    useEffect(() => {

        fetch('https://api.github.com/users/AkashGitX')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setData(data)
            })

    }, [])
    */

    return (
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">

            <img
                src={data.avatar_url}
                alt="GitHub Profile"
                className="w-32 h-32 rounded-full mx-auto mb-4"
            />

            <h2>GitHub Followers: {data.followers}</h2>

            <h2>GitHub Following: {data.following}</h2>

            <h2>GitHub Public Repositories: {data.public_repos}</h2>

        </div>
    )
}

export default Github


// NEW METHOD: Loader Function

export const githubInfoLoader = async () => {

    const response = await fetch(
        'https://api.github.com/users/AkashGitX'
    )

    if (!response.ok) {
        throw new Error('Failed to fetch GitHub user data')
    }

    return response.json()
}