import Head from "next/head"
import Link from "next/link"
import Layout from '../components/layout'

export default function CreateTodo() {
    return (
        <Layout>
            <Head>
                <title>Create Todo</title>
            </Head>
            <h1>Create Todo</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </Layout>
    )
}