"use client"
import { z } from "zod"
import { TextInput, PasswordInput } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import Link from 'next/link';
import { Button } from 'tp-kit/components';
import Layout from '../layout';

export default function Page() {

    const schema = z.object({
        email: z.string().email({message: "mail invalide"}),
        password: z.string().min(6, {message: "Le mot de passe doit contenir au moins 6 caractères"})
    })

    const form = useForm({
        initialValues: {
            email: "",
            password: ""
        },
        validate: zodResolver(schema)
    })

    return <Layout>
        <h1>Connection</h1>
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput label="Adresse email" withAsterisk placeholder='lin.guini@barilla.it' required {...form.getInputProps("email")}/>
        <PasswordInput label="Mot de passe" withAsterisk placeholder='Entrez votre mot de passe' required {...form.getInputProps("password")}/>
        <Button fullWidth type={"submit"}>S'inscrire</Button>
        <Link href={"/inscription"}>Créer un compte</Link>
    </form> 
</Layout>
}