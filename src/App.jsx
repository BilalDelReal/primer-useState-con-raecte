import {useState} from 'react'
import './assets/tailwind.css'
import {YoutubeSubCard} from "./YoutubeSubCard.jsx";

export function App() {

    return (
        <>
            <main className=" max-w-[400px] mx-auto flex items-center flex-col gap-y-8">
                <YoutubeSubCard userName="midulive" />
                <YoutubeSubCard userName="ElrubiusOMG" />
            </main>
        </>
    )
}

