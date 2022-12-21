document.onreadystatechange = () => {

    if (!localStorage.getItem("user")) {
        window.location.href = "https://bipproduction.github.io/production";
    }

    console.log(localStorage.getItem("user"));

    const eagleEye = `
    gantt
        title       Eagle Eye
        dateFormat  YYYY-MM-DD
        excludes    saturday, sunday
        section     Malik
            analisa                 : active, a1, 2022-12-21,1d
        `
    const grp = `
    gantt
        title GRP
        excludes saturday, sunday
        dateFormat  YYYY-MM-DD
        section bagas
            membuat wireframe sesuai dengan data yang diberikan client              :active, a1, 2022-12-21, 2d
            review                                                                  : a2, after a1, 1d
            implementasi hasil review                                               : a2, after a1, 2d
            peranacangan flow chart                                                 : a3, after a2, 2d
            perancangan / perapian wireframe menyesuaikan flow chart                : a4, after a3, 2d
            perancangan database / ERD                                              : a5, after a4, 4d
            analisa resource                                                        : a6, after a5, 1d
            memulai project awal membuat landing page                               : a7, after a6, 1d
        `
    const muku = `
    gantt
        title       MUKU
        excludes    saturday, sunday
        dateFormat  YYYY-MM-DD
        section     lukman 
            membuat flowchart berdasarkan mobirise                                  :done, a1, 2022-12-18,2d
            pembuatan wireframe                                                     : a2, after a1, 2d
            analisa dan pembuatan ERD database                                      : a3, after a2, 2d
            analisa source dan pembuatan login menggunakan google dan facebook      : a4, after a3, 4d
            pembuatan kerangka dasar dashboard                                      : a5, after a4, 2d
            pembuatan drawer / sidebar                                              : a6, after a5, 1d
            pembuatan profile user                                                  : a7, after a6, 1d
            implementasi drag and drop                                              : a8, after a7, 4d
        section     bagas
            perbantuan membuat flow chart                                           :done, a1, 2022-12-18,2d
        `

    const bipReborn = `
    gantt
        title Bip Reborn
        excludes saturday, sunday
        dateFormat  YYYY-MM-DD
        section bagas
            membuat wireframe sesuai dengan data yang diberikan client              :active, a1, 2022-12-21, 2d
            review                                                                  : a2, after a1, 1d
            implementasi hasil review                                               : a2, after a1, 2d
            peranacangan flow chart                                                 : a3, after a2, 2d
            perancangan / perapian wireframe menyesuaikan flow chart                : a4, after a3, 2d
            perancangan database / ERD                                              : a5, after a4, 4d
            analisa resource                                                        : a6, after a5, 1d
            memulai project awal membuat landing page                               : a7, after a6, 1d
        `

    document.getElementById('eagle-eye').innerHTML = eagleEye
    document.getElementById('grp').innerHTML = grp
    document.getElementById('muku').innerHTML = muku
    document.getElementById('bip-reborn').innerHTML = bipReborn

    mermaid.initialize({
        startOnLoad: true
    });

    document.getElementById("keluar").onclick = () => {
        localStorage.setItem("user", null);
        window.location.href = "/";
    }
}