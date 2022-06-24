import "./App.css";
import * as React from 'react';
import { Box, HStack, useColorMode } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
//import {useState} from "react";




const App = () => {
  const {colorMode, toggleColorMode} = useColorMode();
  //const [input, setInput] = useState("");
 
  return (
     <Container as="section" display="flex" flexDirection="column" alignItems="center" justifyContent="center" w="100%" mt="2em" p="3em" bg="transparent">
      <Box as="div" w="95%" display="flex" flexDirection="row" justifyContent="space-between" mb="1em">
      <Heading as="h1" fontSize="35px" mb="0.5em">ToDo List</Heading>
      <Button onClick={() => toggleColorMode()}>{colorMode === "dark" ? <SunIcon color="orange.500"/> : <MoonIcon color="blue.700"/>}</Button>
      </Box>
      <HStack w="100%" outline="1px solid grey" borderRadius="1em" p="1em">
     <Input placeholder='Enter your task' w="100%" size="md"/>
     <Button w="20%" bg="lightblue" size="sm" p="1.3em">Submit</Button>
     </HStack>
     <Box as="div" p="1em" outline="1px solid grey" borderRadius="1em" w="100%" mt="1em" display="flex" flexDirection="row" justifyContent="space-between">
      <Button size="md" p="1em 2.5em" bg="violet">All</Button>
      <Button size="md" p="1em 2.5em" bg="lightgreen">Done</Button>
      <Button size="md" p="1em 2.5em" bg="lightcoral">Pending</Button>
     </Box>
     </Container>
  )
}


export default App;
