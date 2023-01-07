import { Button, Flex, FormControl, FormHelperText, HStack, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const Subscribe = () => {
  const [email, setEmail] = useState('');

  const changeHandler = (e) => {
    setEmail(e.target.value)
  }
  return (
    <Flex direction={{ base: 'column', md: 'row'}} justify={'center'}>
        <FormControl maxWidth={{base: '100%', md: '50%'}} mr={'1rem'} mb={'1rem'}>
            <Input placeholder='Enter your email address' type={'email'} _placeholder={{ color: 'black' }} bgColor={'white'}  color={'black'}  value={email} onChange={changeHandler}/>
            {/* <FormHelperText>Please enter a valid email address</FormHelperText> */}
        </FormControl>
        <Button colorScheme={'blue'} width={{md: '13rem'}} type={'submit'}>Sign Up</Button>
    </Flex>
  )
}

export default Subscribe