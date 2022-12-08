<style>
.mermaid{ width:100%; }
body { width:100%; }
</style>

|  Mon  |  Tue  |  Wed  |  Thu  |  Fri  |  Sat  |  Sun  |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|  28   |  29   |  30   |   1   |   2   |   3   |   4   |
|   5   |   6   |   7   |   8   |   9   |  10   |  11   |
|  12   |  13   |  14   |  15   |  16   |  17   |  18   |
|  19   |  20   |  21   |  22   |  23   |  24   |  25   |
|  26   |  27   |  28   |  29   |  30   |  31   |   1   |

> # Eagle Eye View

### Team
| No  | Name  |
| --- | ----- |
| 1   | Malik |
| 2   | Bagas |

```mermaid
gantt
    title 2022-12-05

    section bagas
    menambahkan pilihan keyword pada web dashboard      : active, b1, 2022-12-05,2022-12-06
    merubah value setelah pilihan dibuat                :         b2, 2022-12-06,2022-12-07
    review                                              :         b3, after b2, 1h
    mengerjakan revisi                                  :         b4, after b3, 1d 

    section malik
    membuat face detektor untuk noc                     : active, m1, 2022-12-05,2022-12-07
```

```mermaid
gantt
    title 2022-12-08

    section bagas
    menyelesaikan merubah data di project eagle eye : active , a1, 2022-12-08, 1d

    section malik
    menyelesaikan untuk tampilan noc                : active , a1, 2022-12-08, 1d
```

> # Muku

### Team

| No  | Name |
| --- | ---- |
| 1   | Alif |


```mermaid
gantt
    title 2022-12-05
    dateFormat YYYY-MM-DD
    excludes weekends

    section alif
    membuat wireframe   : done , a1, 2022-12-05, 2d
    review              :          a2, after a1, 1h
    mengerjakan revisi  :          a3, after a2, 1d
```

```mermaid
gantt
    title 2022-12-08
    
    section lukman / alif
    spawn project membuat landing page      : active    , a1, 2022-12-08, 1d
    membuat halaman pendafataran dan login  :             a2, after a1, 1d

```