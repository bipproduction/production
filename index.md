<style>
    html, body {
        width: 1280px
    }
</style>



# Divisi Producksi

_Rancangan Rencana Kerja Dan Time Line_

> Tanggalan

|  Mon  |  Tue  |  Wed  |  Thu  |  Fri  |  Sat  |  Sun  |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|  28   |  29   |  30   |   1   |   2   |   3   |   4   |
|   5   |   6   |   7   |   8   |   9   |  10   |  11   |
|  12   |  13   |  14   |  15   |  16   |  17   |  18   |
|  19   |  20   |  21   |  22   |  23   |  24   |  25   |
|  26   |  27   |  28   |  29   |  30   |  31   |   1   |

## Project Eagle Eye

```mermaid
gantt
    title       Eagle Eye
    dateFormat  YYYY-MM-DD
    excludes    saturday, sunday
    section     Malik
```

## Project GRP

```mermaid
gantt
    title GRP
    excludes saturday, sunday
    dateFormat  YYYY-MM-DD
    section bagas
        membuat wireframe sesuai dengan data yang diberikan client              :active, a1, 2022-12-21, 2d
        review                                                                  :   a2, after a1, 1d
        implementasi hasil review                                               : a2, after a1, 2d
        peranacangan flow chart                                                 : a3, after a2, 2d
        perancangan / perapian wireframe menyesuaikan flow chart                : a4, after a3, 2d
        perancangan database / ERD                                              : a5, after a4, 4d
        analisa resource                                                        : a6, after a5, 1d
        memulai project awal membuat landing page                               : a7, after a6, 1d
        
```

## Projects MUKU
> HOLD !

_peralihan ke project BIP Reborn_

```mermaid
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
        perbantuan membuat flow chart               :done, a1, 2022-12-18,2d
```

## Project Web BIP Reborn
```mermaid
gantt
    title       BIP Reborn
    excludes    saturday, sunday
    dateFormat  YYYY-MM-DD
    section lukaman
        membuat mockup untuk website reborn BIP     :active, a1, 2022-12-21, 2d
        review                                      :   a2, after a1, 1d
        execution , mulai mengerjakan               :   a3, after a1, 2d
        review                                      :   a4, after a3, 1d
        implementasi hasil review                   :   a5, after a3, 1d
        implementasi dan instalasi untuk tayang di hosting  : a6, after a4, 2d
```
