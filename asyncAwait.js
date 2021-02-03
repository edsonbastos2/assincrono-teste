function findLyrics(artist, song){
    return fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`)
}

const form = document.querySelector('.lyrics-form');

form.addEventListener('submit', el => {
    el.preventDefault()
    doSubmit();
})

async function doSubmit(){
    const artist = document.querySelector('#artist')
    const song = document.querySelector('#song')
    const lyricsSong = document.querySelector('#lyrics-song');

    lyricsSong.innerHTML = '<div class="spinner-grow" role="status"><span class="sr-only"></span></div>';


    // findLyrics(artist.value, song.value)
    //     .then( res => res.json())
    //     .then(data => {
    //         if(data.lyrics){
    //             lyricsSong.innerHTML = data.lyrics
    //         }else{
    //             lyricsSong.innerHTML = data.error
    //         }
    //     })
    //     .catch( err => {
    //         lyricsSong.innerHTML = `Oooops! ${err}`
    //     })
    try{
        const lyricsResponse = await findLyrics(artist.value, song.value);
        const data = await lyricsResponse.json();
        if(data.lyrics){
            lyricsSong.innerHTML = data.lyrics
        }else{
            lyricsSong.innerHTML = data.error
        }
    }catch(err){
        console.log(err)
    }

}
