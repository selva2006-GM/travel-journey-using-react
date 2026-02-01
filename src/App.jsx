import Header from "../components/Header";
import Card  from "../components/card";
import data from "./data"

export default function App(){

    const EntryElements = data.map((entry) =>{

        return <Card 
            {...entry}
        />
    })

    return (
        <>
            <Header />
            <main className="container">
                {EntryElements}
            </main>
        </>
    )
}