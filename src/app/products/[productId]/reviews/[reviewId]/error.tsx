"use client";
export default function ErrorBoundary({error}: {error: Error}) {
    return(
        <h1>{error.message}</h1>
    )
}

// we can also get error as a prop for more information