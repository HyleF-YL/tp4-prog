"use client"
import { z } from "zod"
import { TextInput, PasswordInput } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import Link from 'next/link';
import { Button, NoticeMessage, NoticeMessageData } from 'tp-kit/components';
import Layout from '../layout';
import { useState } from "react";

const schema = z.object({
    name: z.string().min(1, {message: "Name can't be empty"}),
    email: z.string().email({message: "Invalid email"}),
    password: z.string().min(6, {message: "password must be at least 6 characters"})
})



export default function Page() {

    const handleErrors = (errors: typeof form.errors) => {
       /* setSubmissionError(true)
        setSubmissionSuccess(false)*/
        setMessageToDisplay(<NoticeMessage type={"error"} onDismiss={() => setMessageToDisplay(null)} message="Une erreur s'est produite !"/>)
    }

    const handleSuccess = (values: typeof form.values) => {
        console.log(values);
        /*setSubmissionError(false)
        setSubmissionSuccess(true)*/
        setMessageToDisplay(<NoticeMessage type={"success"} onDismiss={() => setMessageToDisplay(null)} message="Votre inscription a bien été prise en compte. Validez votre adresse email pour vous connecter"/>)
    }

    const [submitionSuccess, setSubmissionSuccess] = useState(false)
    const [submitionError, setSubmissionError] = useState(false)
    const [messageToDisplay,setMessageToDisplay] = useState(null) as any
    const form = useForm({
        initialValues: {
            name: "",
            email: "",
            password: ""
        },
        validate: zodResolver(schema),
    })
    return <Layout>
        {messageToDisplay}
        <h1>Inscription</h1>
        <form onSubmit={form.onSubmit(handleSuccess,handleErrors)}>
            <TextInput label="Nom" withAsterisk description="Le nom qui sera utilisé pour vos commandes" placeholder='Entrez votre nom' required {...form.getInputProps("name")} />
            <TextInput label="Adresse email" withAsterisk placeholder='lin.guini@barilla.it' required {...form.getInputProps("email")}/>
            <PasswordInput label="Mot de passe" withAsterisk placeholder='Entrez votre mot de passe' {...form.getInputProps("password")}/>
            <Button fullWidth type={"submit"}>S'inscrire</Button>
            <Link href={"/connexion"}>Déjà un compte, Se connecter</Link>
        </form> 
    </Layout>
    
}