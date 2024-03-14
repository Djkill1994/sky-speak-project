import {createFileRoute} from '@tanstack/react-router'
import { RegistrationForm } from '../features/Auth/components/RegistrationForm'

const Login = () => {
  return (
      <>
        <RegistrationForm/>
      </>
  )
}

export const Route = createFileRoute('/registration')({
  component: Login,
})