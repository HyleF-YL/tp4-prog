"use client"
import { TextInput, PasswordInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import Link from 'next/link';
import { Button } from 'tp-kit/components';
import Layout from '../layout';
import { useCallback } from 'react';
import { ProductFiltersResult } from '../../../types';

export default function Page() {

    const form = useForm({
        initialValues: {
            email: "",
            password: ""
        }
    })

    return <Layout>
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput label="Adresse email" withAsterisk placeholder='lin.guini@barilla.it' required {...form.getInputProps("email")}/>
        <PasswordInput label="Mot de passe" withAsterisk placeholder='Entrez votre mot de passe' required {...form.getInputProps("password")}/>
        <Button type={"submit"}>S'inscrire</Button>
        <Link href={"/inscription"}>Créer un compte</Link>
    </form> 
</Layout>
}