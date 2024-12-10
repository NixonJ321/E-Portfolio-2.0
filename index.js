 function contact (event) {
    event.preventDefault()
    emailjs
    .sendForm(
        'service_0do2zgl',
        'template_wudoaqf',
        event.target,
        'W897lhHxKtzvoQJf1'
    ).then(() => {
        console.log('This works!!!')
    })
}