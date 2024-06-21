const m_karyawan = require('../model/m_karyawan')

module.exports = 
{
    index: async(req,res)=>{
        let dataview ={
            req: req,
            semua_karyawan: await m_karyawan.get_semua_karyawan(),
        }
        res.render('karyawan/all', dataview)
    },
    
    detail: async(req,res)=>{ 
        const id = req.params.id_karyawan
        let dataview ={
            detail_karyawan: await m_karyawan.get_satu_karyawan(id),
        }
        res.render('karyawan/detail', dataview)
    },

    tambah: async(req,res)=>{
        res.render('karyawan/form-tambah', {info_error: null})
    },

    proses_simpan: async(req,res)=>{
        try {
            let insert = await m_karyawan.tambah_karyawan (req)
            if (insert.affectedRows>0){
                res.redirect('/karyawan?note=insert-sukses')
        }
        } catch (error) {
            res.render('/karyawan/form-tambah', {info_error: error})
        }
    },

}