import { useState } from "react";

function FeedbackForm() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [mensagem, setMensagem] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!nome || !email || !mensagem) {
            alert("Por favor, preencha todos os campos!");
            return;
        }

        alert(`Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`);

        setNome("");
        setEmail("");
        setMensagem("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nome:</label><br />
                <input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
            </div>

            <div>
                <label>Email:</label><br />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div>
                <label>Mensagem:</label><br />
                <textarea
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                />
            </div>

            <button type="submit">Enviar</button>
        </form>
    );  




};

export default FeedbackForm

