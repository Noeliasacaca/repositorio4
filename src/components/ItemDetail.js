
import { useState } from "react";
import ItemCount from "./ItemCount";
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { Shop } from '../components/Navbar/CartContext'
import React from 'react'
import { VStack, Text, Heading, Image, Box, ScaleFade, Stack } from "@chakra-ui/react"

const ItemDetail = ({ item }) => {

    const [qty, setQty] = useState(0);
    const navigate = useNavigate();

    const { addItem } = useContext(Shop);

    const addCart = (quantity) => {
        setQty(quantity);
    }

    const handleFinish = () => {
        const productToSave = { ...item, quantity: qty }
        addItem(productToSave)
        navigate("/cart")
    }
    
    const isOpen = true

    return (
        <ScaleFade initialScale={0.8} in={isOpen}>
            <Box
                as="article"
                w='100%'
                h='50%'
                borderWidth='1px'
                borderRadius='lg'
                backdropFilter='blur(10px)'
                bgColor='primary'
                color='black'
                p={5}
                display='flex'
                alignContent='center'
                alignItems='center'
            >
                <Stack direction={['column', 'column', 'row', 'row']} alignItems='center'>
                    <Image src={item.img} alt={item.title} w={['100%', '100%', '50%', '50%']} borderRadius='lg' />
                    <VStack p={4} w={['100%', '100%', '50%', '50%']}>
                        <Heading as='h2' size='md'>{item.title}</Heading>
                        <Text>${item.price}</Text>
                        <Text align='center'>Descripción: {item.description}</Text>
                        <div>
                            <div>
                                <div>
                                    {qty ? <button variant="outline-dark" onClick={handleFinish}>Finalizar Compra</button>
                                        : <ItemCount stock={item.stock} initial={1} onAdd={addCart} />}
                                </div>
                            </div>
                        </div>
                    </VStack>
                </Stack>
            </Box>
        </ScaleFade>

    )
}
export default ItemDetail;