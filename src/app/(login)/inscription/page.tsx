"use client"
import { TextInput, PasswordInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import Link from 'next/link';
import { Button } from 'tp-kit/components';
import Layout from '../layout';

export default function Page() {
    const form = useForm({
        initialValues: {
            name: "",
            email: "",
            password: ""
        },
        validate: {
            password: (value) => (value.length < 6 ? 'password must be at least 6 characters' : null)
        }
    })
    return <Layout>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <TextInput label="Nom" withAsterisk placeholder='Entrez votre nom' {...form.getInputProps("name")}/>
            <TextInput label="Adresse email" withAsterisk placeholder='lin.guini@barilla.it' {...form.getInputProps("email")}/>
            <PasswordInput label="Mot de passe" withAsterisk placeholder='Entrez votre mot de passe' {...form.getInputProps("password")}/>
            <Button fullWidth type={"submit"}>S'inscrire</Button>
            <Link href={"/connexion"}>Déjà un compte, Se connecter</Link>
        </form> 
    </Layout>
    
}