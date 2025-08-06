import emailjs from '@emailjs/browser';

export const sendForm = (formRef) => {

    emailjs.sendForm('service_b09toqm' ,'template_ptymzvi', formRef.current, {
        publicKey: 'nT-tBO3_tJnU9Kywj',
    })

    .then(
        () => {
            console.log('SUCCESS')
        },
        (error) => {
            console.log('FAILED...', error.text)
        },
    )
  }