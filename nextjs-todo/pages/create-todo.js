import Link from "next/link"

export default function CreateTodo() {
    return (
        <>
            <h1>Create Todo</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </>
    )
}