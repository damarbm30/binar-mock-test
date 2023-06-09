# binar-mock-test

## Kegunaan JSON pada REST API

JSON merupakan salah satu bentuk format data yang digunakan untuk pertukaran data antara client dan server melalui REST API (Representational State Transfer Application Programming Interface). JSON cukup fleksibel, dapat dibaca dan dibuat oleh berbagai bahasa pemrograman seperti Javascript dan Python.

## Cara Kerja REST API

Klien melakukan komunikasi ke server menggunakan API ketika klien tersebut memerlukan sumber daya atau resource dengan menggunakan format dan protokol komunikasi tertentu, misalnya HTTP. Server akan melakukan autentikasi apabila diperlukan, kemudian memproses permintaan klien (apabila klien lolos autentikasi). Server memberikan balasan berupa status permintaannya (berhasil atau tidak) dan informasi yang diminta oleh klien apabila berhasil.

## Fitur Website

Website dilengkapi dengan state management React Redux, terhubung dengan API https://jsonplaceholder.typicode.com/, dan informasi login yang persistent menggunakan localStorage. Pengunjung dapat login menggunakan 4 digit angka dari 0000 hingga 0010 yang nantinya akan digunakan untuk mendapatkan data todo. Pengunjung dapat melakukan checklist berdasarkan data yang diperoleh, namun data tersebut tidak tersimpan karena data pada server tidak dapat diubah.

## Link Website

https://binar-mock-test.vercel.app/
