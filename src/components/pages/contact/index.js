import React from 'react';
import emailjs from 'emailjs-com';

import './styles.css';

const Contato = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'gmail',
        'contact_form',
        e.target,
        'user_0bo90AY1B1ROPz4jUP28x',
        'contact-form'
      )
      .then((result) => {
        document.location.reload(true);
        alert('Email de contato enviado com sucesso');
      }, (error) => {
        console.log(error.text);
      });

  }

  return (

    <div className="Container">
      <h1>Contato</h1>
      <form className="contact-form" onSubmit={sendEmail}>
        <label>Nome</label>
        <input type="text" id="name" name="name" placeholder="Seu Nome" required />
        <label>Email</label>
        <input type="email" id="email" name="email" placeholder="Seu Email" required />
        <label>Mensagem</label>
        <textarea name="message" id="message" placeholder="Sua Mensagem " required />
        <input id="button" type="submit" value="Enviar" />
      </form>
    </div>

  )
}
export default Contato;