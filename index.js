
// Add the tracklist for array of objects.

const audio = [
    {
        id: 1,
        aud: "Chilla-Chilla.mp3",
        img: "chilla.jpg",
        name: "chilla.mp3 from Thunivu"
    },
    {
        id: 2,
        aud: "Thee-Thalapathy.mp3",
        img: "thee-thalapathy.jpg",
        name: "Thee_Thalapathy.mp3 from Varisu"
    },
    {
        id: 3,
        aud: "Vaa-Vaathi.mp3",
        img: "vaathi.jpg",
        name: "Vaa_Vaathi.mp3 from Vaathi"
    },
    {
        id: 4,
        aud: "Ennodu.mp3",
        img: "ennodu.jpg",
        name: "ennodu.mp3 from I"
    },
    {
        id: 5,
        aud: "Laali Laali.mp3",
        img: "laali.jpeg",
        name: "Laali_Laali.mp3 from Theeran athigaram ondru"
    },
    {
        id: 6,
        aud: "Manmadhane.mp3",
        img: "manmadhan.jpg",
        name: "manmadhane.mp3 from Manmadhan"
    },
    {
        id: 7,
        aud: "Thangatha.mp3",
        img: "thiru.jpg",
        name: "thangatha_baram.mp3 from Thiruchitrambalam"
    },
    {
        id: 8,
        aud: "Anbe.mp3",
        img: "anbae.jpg",
        name: "anbe.mp3 from Darling"
    },
    {
        id: 9,
        aud: "Azhagiya-Asura.mp3",
        img: "asura.jpg",
        name: "Azhagiya_Asura.mp3 from Whistle"
    },
    {
        id: 10,
        aud: "Maaris Aanandhi.mp3",
        img: "mari.jpg",
        name: "Maaris_Aanandhi.mp3 from Maari2"
    },
    {
        id: 11,
        aud: "Thaarame-Thaarame.mp3",
        img: "tharamae.jpeg",
        name: "Thaarame_Thaarame.mp3 from Kadaram Kondan"
    },
    {
        id: 12,
        aud: "Unakkul-Naane.mp3",
        img: "unakul.jpg",
        name: "Unakkul_Naane.mp3 from Pachaikili Muthucharam"
    },
    {
        id: 13,
        aud: "Kadhal-Aasai.mp3",
        img: "anjan.jpg",
        name: "kadhal-Aasai.mp3 from Anjaan"
    },
    {
        id: 14,
        aud: "Unnaivida.mp3",
        img: "unna.jpeg",
        name: "unnaivida.mp3 from Virumandi"
    },
    {
        id: 15,
        aud: "Va-Va-Va-Vannila.mp3",
        img: "vaa.jpeg",
        name: "Va-Va-Va-Vannila.mp3 from Aambala"
    },

]

// targeting required elements

const aud = document.querySelector("audio")
const play = document.querySelector(".fa-play")
const progress = document.querySelector("#progress")
const forward = document.querySelector(".fa-forward-step")
const reverse = document.querySelector(".fa-backward-step")
const shuffle = document.querySelector(".fa-shuffle")
const dura1 = document.querySelector("span")
const img = document.querySelector(".images")
const vol = document.querySelector(".fa-volume-up")
const volume = document.querySelector("#volume")
const dura = document.querySelector(".dura")
const p = document.querySelector(".display")
const ul = document.querySelector("ul")
const btn = document.querySelector(".lists")
const listst = document.querySelector(".listst")
const recents = document.querySelector(".recent>ul")
const dark = document.querySelector(".fa-sun")
const header = document.querySelector(".head")
const body = document.querySelector("body")
const recentPlay = document.querySelector(".rec")
const listOfSong = document.querySelector(".listst>.songs")
const recentDis = document.querySelector(".recent")
const search = document.querySelector("#search")
// onloadedmetadata is set a song duration of range buttton

aud.onloadedmetadata = function () {
    progress.max = aud.duration
}
// play button to add the addEventListener
play.addEventListener("click", plays)
// let arr = []
function plays(e) {
    aud.currentTime = progress.value
    console.log(e);
    timeouts()
    if (play.className === "fa-solid fa-play") {
        play.className = "fa-solid fa-pause"
        aud.play()
        arr.push(p.innerText)
    }
    else {
        play.className = "fa-solid fa-play"
        aud.pause()
    }
}

//space button function its use to song play and pause

window.addEventListener("keyup", (e) => {
    if (e.code === 'Space') {
        aud.currentTime = progress.value
        if (play.className === "fa-solid fa-play") {
            play.className = "fa-solid fa-pause"
            aud.play()
        }
        else {
            play.className = "fa-solid fa-play"
            aud.pause()
        }
        timeouts()
    }
})

// DOMContentLoaded its a emits the first song of when browser is refreshing

window.addEventListener("DOMContentLoaded", () => {
    aud.src = "Thangatha.mp3"
    img.src = "thiru.jpg"
    p.innerText = "thangatha_baram.mp3 from Thiruchitrambalam"

})

// range button for use the  song cuurentTime to range value

progress.addEventListener("input", () => {
    aud.currentTime = progress.value
    play.className = "fa-solid fa-pause"
    aud.play()
    timeouts()
})
// forward button function its use te forward the song

let forwards = 0
forward.addEventListener("click", forw)
function forw() {

    // console.log(arr);
    forwards++
    if (forwards == audio.length) {
        forwards = 0
    }
    if (shuffle.classList.contains("fa-arrows-rotate")) {
        aud.src = audio[forwards].aud
        img.src = audio[forwards].img
        play.className = "fa-solid fa-pause"
        aud.play()
        p.innerText = audio[forwards].name

        let playLis = document.createElement("li")
        playLis.innerText = audio[forwards].name
        playLis.setAttribute("id", audio[forwards].id)
        playLis.setAttribute("class", "rece")
        recents.prepend(playLis)
        playLis.addEventListener("click", (e) => {
            console.log(e.target.id);
            for (let q = 0; q < audio.length; q++) {
                if (audio[q].id == e.target.id) {
                    aud.src = audio[q].aud
                    img.src = audio[q].img
                    p.innerText = audio[q].name
                    play.className = "fa-solid fa-pause"
                    aud.play()
                    timeouts()
                }
            }
        })

    }
    else {
        let random = Math.floor(Math.random() * audio.length)
        aud.src = audio[random].aud
        img.src = audio[random].img
        play.className = "fa-solid fa-pause"
        aud.play()
        p.innerText = audio[random].name


        let playLis = document.createElement("li")
        playLis.innerText = audio[random].name
        playLis.setAttribute("id", audio[random].id)
        playLis.setAttribute("class", "rece")
        recents.prepend(playLis)
        playLis.addEventListener("click", (e) => {
            console.log(e.target.id);
            for (let q = 0; q < audio.length; q++) {
                if (audio[q].id == e.target.id) {
                    aud.src = audio[q].aud
                    img.src = audio[q].img
                    p.innerText = audio[q].name
                    play.className = "fa-solid fa-pause"
                    aud.play()
                    timeouts()
                }
            }
        })
    }
    timeouts()


}

// Reverse buttonn function its use to reverse the song

reverse.addEventListener("click", () => {
    forwards--
    if (forwards == -1) {
        forwards = audio.length - 1
    }

    if (shuffle.classList.contains("fa-arrows-rotate")) {
        aud.src = audio[forwards].aud
        img.src = audio[forwards].img
        play.className = "fa-solid fa-pause"
        aud.play()
        p.innerText = audio[forwards].name



        let playLis = document.createElement("li")
        playLis.innerText = audio[forwards].name
        playLis.setAttribute("id", audio[forwards].id)
        playLis.setAttribute("class", "rece")
        recents.prepend(playLis)
        playLis.addEventListener("click", (e) => {
            console.log(e.target.id);
            for (let q = 0; q < audio.length; q++) {
                if (audio[q].id == e.target.id) {
                    aud.src = audio[q].aud
                    img.src = audio[q].img
                    p.innerText = audio[q].name
                    play.className = "fa-solid fa-pause"
                    aud.play()
                    timeouts()
                }
            }
        })
    }

    else {
        let random = Math.floor(Math.random() * audio.length)
        aud.src = audio[random].aud
        img.src = audio[random].img
        play.className = "fa-solid fa-pause"
        aud.play()
        p.innerText = audio[random].name



        let playLis = document.createElement("li")
        playLis.innerText = audio[random].name
        playLis.setAttribute("id", audio[random].id)
        playLis.setAttribute("class", "rece")
        recents.prepend(playLis)
        playLis.addEventListener("click", (e) => {
            console.log(e.target.id);
            for (let q = 0; q < audio.length; q++) {
                if (audio[q].id == e.target.id) {
                    aud.src = audio[q].aud
                    img.src = audio[q].img
                    p.innerText = audio[q].name
                    play.className = "fa-solid fa-pause"
                    aud.play()
                    timeouts()
                }
            }
        })
    }
    timeouts()
})

// Its is use to shuffle button className change

shuffle.addEventListener("click", () => {
    if (shuffle.classList.contains("fa-arrows-rotate")) {
        shuffle.className = "fa-solid fa-shuffle"
    } else {
        shuffle.className = "fa-solid fa-arrows-rotate"
    }
})

// Volume button function its use to increase and decearse the volume using volume button

vol.addEventListener("click", () => {
    if (vol.classList.contains("fa-volume-up")) {
        vol.className = "fa-solid fa-volume-xmark"
        aud.volume = 0.0
        volume.value = 0
    }
    else {
        aud.volume = 1.0
        volume.value = 100
        vol.className = "fa-solid fa-volume-up"
    }
})

// Volume range button function its use to increase and decearse the volume using volume range button

volume.addEventListener("input", () => {
    if (volume.value > 50 && volume.value <= 75) {
        aud.volume = 0.7
        vol.className = "fa-solid fa-volume-up"
    }
    if (volume.value > 25 && volume.value <= 50) {
        aud.volume = 0.5
        vol.className = "fa-solid fa-volume-up"
    }
    if (volume.value > 15 && volume.value <= 25) {
        aud.volume = 0.3
        vol.className = "fa-solid fa-volume-up"
    }
    if (volume.value >= 5 && volume.value <= 15) {
        aud.volume = 0.1
        vol.className = "fa-solid fa-volume-up"
    }
    if (volume.value > 75 && volume.value <= 90) {
        aud.volume = 0.8
        vol.className = "fa-solid fa-volume-up"
    }
    if (volume.value > 90) {
        aud.volume = 1.0
        vol.className = "fa-solid fa-volume-up"
    }
    if (volume.value == 0) {
        aud.volume = 0.0
        vol.className = "fa-solid fa-volume-xmark"
    }
})

// its use to increase the progress range button when audio currentTime increase and increase the progress value
// using set interval function

setInterval(() => {
    progress.value = aud.currentTime
    // console.log(aud.currentTime);
}, 100)

// its is a song currentTime,currentSec,durationTime,durationSec update function for seprate songs

let intervalId = null
function timeouts() {
    if (!intervalId) intervalId = setInterval(update, 1000)
}
function update() {
    // let values = 0;
    if (!isNaN(aud.duration)) {
        // values = aud.currentTime * (100 / aud.duration)
        let curMin = Math.floor(aud.currentTime / 60)
        // console.log(curMin);
        let curSec = Math.floor(aud.currentTime - curMin * 60)
        // console.log(curSec);
        let durMin = Math.floor(aud.duration / 60)
        let durSec = Math.floor(aud.duration - durMin * 60)

        if (curMin < 10) {
            curMin = "0" + curMin;
            // console.log(curMin);
        }
        if (curSec < 10) {
            curSec = "0" + curSec
            // console.log(curSec);
        }
        if (durMin < 10) {
            durMin = "0" + durMin
            // console.log(durMin);
        }
        if (durSec < 10) {
            durSec = "0" + durSec
            // console.log(durSec);
        }
        if (progress.max == aud.currentTime) {
            forw()
        }
        dura1.innerText = curMin + ":" + curSec
        dura.innerText = durMin + ":" + durSec

    }
}


let count = 1
for (let i = 0; i < audio.length; i++) {
    let list = document.createElement("li")
    list.setAttribute("class", "playlist")
    list.setAttribute("id", count++)
    list.innerText = audio[i].name
    ul.append(list)
    btn.addEventListener("click", () => {
        if (listst.classList.contains("listst")) {
            list.classList.toggle("show")
        }
    })

    list.addEventListener("click", (e) => {
        let recent = []
        recent.push(e.target.innerText);
        if (audio[i].id == e.target.id) {
            aud.src = audio[i].aud
            img.src = audio[i].img
            p.innerText = audio[i].name
            play.className = "fa-solid fa-pause"
            aud.play()
            timeouts()

            for (let k = 0; k < recent.length; k++) {
                let rec = document.createElement("li")
                rec.setAttribute("class", "rece")
                rec.setAttribute("id", audio[i].id)
                rec.innerText = recent[k]
                recents.prepend(rec)

                rec.addEventListener("click", (e) => {
                    if (audio[i].id == e.target.id) {
                        // console.log(audio[i].id);
                        // console.log(e.target.id);
                        aud.src = audio[i].aud
                        img.src = audio[i].img
                        p.innerText = audio[i].name
                        play.className = "fa-solid fa-pause"
                        aud.play()
                        timeouts()
                    }
                })

            }
        }
    })

}
recentPlay.addEventListener("click", () => {
    recentDis.classList.toggle("open")
})
// Dark mode option
let need = document.querySelectorAll(".playlist")

dark.addEventListener("click", () => {
    if (dark.classList.contains("fa-sun")) {
        dark.className = "fa-solid fa-moon"
        body.style.backgroundColor = "white"
        header.style.backgroundColor = "grey"
        header.style.color = "black"
        for (let r = 0; r < need.length; r++) {
            need[r].style.color = "black"
        }
        btn.style.color = "black"
        recentPlay.style.color = "black"
        listOfSong.style.color = "black"
    }
    else {
        dark.className = "fa-solid fa-sun"
        body.style.backgroundColor = "black"
        header.style.backgroundColor = "black"
        header.style.color = "white"
        for (let r = 0; r < need.length; r++) {
            need[r].style.color = "white"
        }
        btn.style.color = "white"
        recentPlay.style.color = "white"
        listOfSong.style.color = "white"
    }
})

search.addEventListener("keyup", (e) => {
    let see = e.target.value.toLowerCase()
    const lis = document.querySelectorAll(".playlist")
    for (let m = 0; m < lis.length; m++) {
        const task = lis[m].innerText
        if (task.toLowerCase().includes(see) === true) {
            lis[m].style.display = "block"
        }
        else {
            lis[m].style.display = "none"
        }
    }
})