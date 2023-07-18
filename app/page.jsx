export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between md:p-24 p-8 pt-16 w-full">
            <section className="flex flex-col items-center gap-8 w-full">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl flex flex-col items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="#000000"
                        viewBox="0 0 256 256"
                    >
                        <path d="M151.11,166.13a38,38,0,1,0-46.22,0A65.75,65.75,0,0,0,75.2,188.4a6,6,0,0,0,9.6,7.2,54,54,0,0,1,86.4,0,6,6,0,0,0,9.6-7.2A65.75,65.75,0,0,0,151.11,166.13ZM128,110a26,26,0,1,1-26,26A26,26,0,0,1,128,110Zm72-84H56A14,14,0,0,0,42,40V216a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V40A14,14,0,0,0,200,26Zm2,190a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V40a2,2,0,0,1,2-2H200a2,2,0,0,1,2,2ZM90,64a6,6,0,0,1,6-6h64a6,6,0,0,1,0,12H96A6,6,0,0,1,90,64Z"></path>
                    </svg>
                    Labels
                </h1>
                <p className="text-xl text-neutral-500 text-center">
                    A fresh take on SVG badges.
                    <br />
                    Inspired from the{" "}
                    <a href="https://badgers.space/" className="underline">
                        badgers
                    </a>{" "}
                    project.
                </p>
                <pre className="bg-gray-200 p-4 rounded w-full text-center">
                    <code className="flex items-center flex-wrap mx-auto w-fit">
                        {"http://localhost:3000/label/:name/:prompt/:color"
                            .split("")
                            .map((text) => (
                                <p className="inline">{text}</p>
                            ))}
                    </code>
                </pre>
            </section>

            <footer></footer>
        </main>
    );
}
