import { useParams } from "react-router-dom"

function Contact() {
    const { id } = useParams()

    return (
        <>
            <div id="contact">
                { id === '1' && <img src="https://images.freeimages.com/images/large-previews/24c/happy-white-dog-resting-0410-5697279.jpg?fmt=webp&w=500"></img> }
                { id === '2' && <img src=""></img> }
            </div>

            <div>
                <h1>
                    { id === '1' && <h2>Dog - Contato</h2> }
                    { id === '2' && <h2>Dog - Contato</h2> }
                </h1>
            </div>
        </>
    )
}

export default Contact