"use client";
export default function ErrorBoundary({error, reset}: {error: Error, reset: () => void}) {
    return(
        <>
        <h1>{error.message}</h1>
        <button onClick={reset}>Try Again</button>
        </>
    )
}

// we can also get error as a prop for more information