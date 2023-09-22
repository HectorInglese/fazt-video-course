'use client'
import { Progress, Spinner } from '@nextui-org/react'
import React from 'react'

const LoadingPage = () => {
    return (
        <div
            className='h-full flex flex-col justify-center items-center'
        >
            <Spinner label='Cargando ...' color='primary' labelColor='primary' size='lg' />
        </div>

    );
};

export default LoadingPage;