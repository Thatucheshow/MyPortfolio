
const aboutMe = () =>{
    const $div = $('<div>').addClass('about-text')
    const $h1 = $('<h1>').text('Hi, my name is').css('text-align', 'center')
    const $h2 = $('<h2>').text('Uchechukwu Okeke.').css('text-align', 'center')
    const $h3 = $('<h3>').text('I create things that lives on the web! Pretty cool right? 😎 ').css('text-align', 'center')
    const $p = $('<p>').text('I am a student at General Assembly studying to become one of the coolest software engineer, I believe that there is always room to improve hence I am always willing to learn and serve where I can.').addClass('about-p').css('line-height', '2').css('text-align', 'center')

    $div.append($h1)
    $div.append($h2)
    $div.append($h3)
    $div.append($p)
    $('#about-page').append($div)
}
const disableAbt = () =>  {
    $('#about-button').prop("disabled", true)
}




$( () => {
    const $abtButton = $('<button>').text('Get to know me').attr('id', 'about-button')
    $abtButton.css('margin-top', '200px')
    $('#about-page').append($abtButton)
    $('#about-button').on('click', aboutMe)
    $('#about-button').on('click', disableAbt)

    

    let currentProjectIndex = 0;
    const numOfProject = $('.img-link').children().length - 1
    $('.next').on('click', () => {
        $('.img-link').children().eq(currentProjectIndex).css('display', 'none')
        if (currentProjectIndex < numOfProject){
            currentProjectIndex++
        } else {
            currentProjectIndex = 0
        }
        $('.img-link').children().eq(currentProjectIndex).css('display', 'block')
    })

    $('.previous').on('click', () => { 
        $('.img-link').children().eq(currentProjectIndex).css('display', 'none')
        if (currentProjectIndex < numOfProject){
            currentProjectIndex--
        } else {
            currentProjectIndex = 0
        }
        $('.img-link').children().eq(currentProjectIndex).css('display', 'block')
    })

    $('.project-page').css('background-color', '#0b2066')

    const $openBtn = $('.page-button')
    const $modal = $('#modal')
    const $closeBtn = $('.close')

    const openModal = () =>{
        $modal.css('display', 'block')
    }

    const closeModal = () =>{
        $modal.css('display', 'none')
    }

    $openBtn.on('click', openModal)
    $closeBtn.on('click', closeModal)
})