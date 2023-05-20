import './App.css';
import emailjs from '@emailjs/browser';


//hooks
import { useState } from 'react'
function App({ user }) {

  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : '');
  const [message, setMessage] = useState(user ? user.message : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || message === '') {
      alert('É necessário preencher todos os campos');
      return
    }
    const templateParams = {
      from_name: name,
      email: email,
      message: message
    }

    emailjs.send('service_9nzsvxl', 'template_ulzmis5', templateParams, 'wjKXGEpr2U2NDBP1D')
      .then((response) => {
        alert('Email Enviado',)
        console.log(response.status, response.text, response)
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((err) => {
        alert('Houve um erro no envio, tente novamente mais tarde', err)
      })
  }

  return (

    <div className="App">
      {/* Container que tem o formulário */}
      <div className="container">
        <h1>Contato</h1>
        <form >
          {/* Div que contem o input do nome */}
          <div className="nome">
            <label>
              <span>Nome</span>
              <input type="text"
                name='nome'
                placeholder='Digite seu nome'
                onChange={(e) => {
                  setName(e.target.value)
                }}
                value={name}
              />
            </label>
          </div>

          {/* Div que contem o input do email */}

          <div className="email">
            <label>
              <span>Email</span>
              <input type="text"
                name='email'
                placeholder='Digite seu email'
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                value={email}
              />
            </label>
          </div>
          {/* Div que contem o input da mensagem */}
          <div className="mensagem">
            <label>
              <span>Mensagem</span>
              <textarea
                name="message"
                placeholder='Digite sua mensagem'
                onChange={(e) => {
                  setMessage(e.target.value)
                }}
                value={message}
              ></textarea>
            </label>
          </div>
        </form>
        {/* Botão de submissão do formulario */}
        <input className='submitBtn' type="submit" onClick={handleSubmit} />

      </div>
    </div>
  );
}

export default App;
