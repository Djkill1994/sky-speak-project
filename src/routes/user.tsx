import {createFileRoute} from '@tanstack/react-router'
import {UserPage} from '../features/UserPage/components/UserPage'


const User = () => {
    return (
        <>
            <UserPage/>
        </>
    )
}

export const Route = createFileRoute('/user')({
    component: User,
})