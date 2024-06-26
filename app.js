const express   = require('express')
const app       = express()
const port      = 3000


app.use(express.urlencoded({extended:false}))
app.set('view engine', 'ejs') // setting penggunaan template engine untuk express
app.set('views', './view-ejs') // setting penggunaan folder untuk mengyompan file .ejs


app.get('/',(req,res)=>{
    res.render('index.ejs')
}) 

app.get('/profil',(req,res)=>{
    res.render('profil.ejs')
})

app.get('/alamat',(req,res)=>{
    res.render('alamat.ejs')
}) 

app.get('/pengalaman',(req,res)=>{
    res.render('daftar-pengalaman.ejs', {
        nama: 'Aji Kowiyu',
        jenis_kelamin: 'L',
        posisi: 'Senior Programmer',
        perusahaan: 'Agung Podomoro Group',
        gaji: 9557000,
        pajak: (this.gaji > 10000000) ? 'gaji anda kena pajak' : 'aman, ga perlu bayar pajak',
    })
}) 

const c_karyawan = require('./controller/c_karyawan')

app.get('/karyawan', c_karyawan.index)

app.get('/karyawan/detail/:id_karyawan', c_karyawan.detail)

app.get('/karyawan/tambah', c_karyawan.tambah)

app.post('/karyawan/proses-simpan', c_karyawan.proses_simpan)


app.listen(port, ()=>{
    console.log(`App sudah siap, silahkan buka http://localhost:${port}`)
})

