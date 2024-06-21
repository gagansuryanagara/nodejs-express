const mysql     = require('mysql2')
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'xdb_belajar_database',
})
db.connect()


module.exports={
    get_semua_karyawan: function () {
        let sql =mysql.format(
                `SELECT k.*,
                d.kode as departemen_kode, d.nama as departemen_nama,
                j.nama as jabatan_nama, j.role as jabatan_role, j.deskripsi as jabatan_deskripsi
            
            from karyawan as k
            
            left join master_departemen as d on d.id=k.departemen_id
            left join master_jabatan as j on j.id=k.jabatan_id;`
        )

    
        return new Promise ((resolve,reject)=>{
            db.query(sql,function(errorSql,hasil){
                if (errorSql){
                    reject(errorSql)
                } else {
                    resolve(hasil)
                }
            })
        })
        
    },

    get_satu_karyawan: function (id) {
        let sql =mysql.format(
                `SELECT k.*,
                d.kode as departemen_kode, d.nama as departemen_nama,
                j.nama as jabatan_nama, j.role as jabatan_role, j.deskripsi as jabatan_deskripsi
            
            from karyawan as k
            
            left join master_departemen as d on d.id=k.departemen_id
            left join master_jabatan as j on j.id=k.jabatan_id

            where k.id=?;`,
            [id]
        )

    
        return new Promise ((resolve,reject)=>{
            db.query(sql,function(errorSql,hasil){
                if (errorSql){
                    reject(errorSql)
                } else {
                    resolve(hasil)
                }
            })
        })
        
    },

    tambah_karyawan:function(req){
        let data={
            // nama kolom di sql: req.body.name
            nama            : req.body.nama_lengkap,
            alamat          : req.body.alamat,
            no_telepon      : req.body.no_tlp,
            gol_darah       : req.body.gol_darah,
            jenis_kelamin   : req.body.jns_kelamin,
        }
        let sql =mysql.format(
            `insert into karyawan set ?`,
            [data]
    )


    return new Promise ((resolve,reject)=>{
        db.query(sql,function(errorSql,hasil){
            if (errorSql){
                reject(errorSql)
            } else {
                resolve(hasil)
            }
        })
    })

    },

}
