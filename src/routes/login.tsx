import {createFileRoute} from '@tanstack/react-router'
import { LoginForm } from '../features/Auth/components/LoginForm'


const Login = () => {
    return (
        <>
            <LoginForm/>
        </>
    )
}

export const Route = createFileRoute('/login')({
    component: Login,
})