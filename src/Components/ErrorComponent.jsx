import React from 'react'
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
const Error = () => {
  return (
    <Alert
      status='error'
      w={"50%"}
      borderRadius={"10"}
      pos={"fixed"}
      top={"50%"}
      left={"50%"}
      transform={"translate(-50%, -50%)"}
    >
      <AlertIcon />
      <AlertTitle>404</AlertTitle>
      <AlertDescription>Error White Fetching...</AlertDescription>
    </Alert>
  )
}

export default Error