const router = require("express").Router();
const authorize = require("../middleware/authorize");
const db = require("../db");

//get all chemicals
router.get("/chemicals", authorize, async (req, res) =>{
    try{
        const chemicals = await db.query("SELECT * FROM chemicals WHERE user_id = $1", [req.user.id])
        res.status(200).json({
            status: "complete",
            results: chemicals.rows.length,
            data: {
                chemicals: chemicals.rows
            }
        })
    } catch (err) {
        console.log(err)
    }
})

//get details of one chemical
router.get("/chemicals/:id", authorize, async (req,res) => {
    try{
        const chemical = await db.query("SELECT * FROM chemicals WHERE chem_id = $1 AND user_id = $2;",
        [req.params.id, req.user.id])
        res.status(200).json({
          status: "success",
          data: {
            chemicals: chemical.rows[0],
          },
        });
    } catch (err) {
        console.log(err)
    }
})

//create a chemical
router.post("/chemicals", authorize, async (req, res) => {
    try {
        const { chem_name, molar_mass, current_amt, units, chem_loc, vendor_name, cat_num, cas_num } = req.body;
        const newChemical = await db.query(
            "INSERT INTO chemicals (user_id, chem_name, molar_mass, current_amt, units, chem_loc, vendor_name, cat_num, cas_num) values ($1, $2, $3, $4, $5, $6, $7, $8, $9);",
            [req.user.id, chem_name, molar_mass, current_amt, units, chem_loc, vendor_name, cat_num, cas_num]
        );
        res.json(newChemical)
    } catch (err) {
        console.log(err);
    }
});

//edit a chemical
router.put("/chemicals/:id", authorize, async (req, res) => {
    try {
        const { chem_name, molar_mass, current_amt, units, chem_loc, vendor_name, cat_num, cas_num } = req.body;
        const editChemical = await db.query(
            "UPDATE chemicals SET chem_name = $1, molar_mass = $2, current_amt = $3, units = $4, chem_loc = $5, vendor_name = $6, cat_num = $7, cas_num = $8  WHERE chem_id = $9 AND user_id = $10;",
            [chem_name, molar_mass, current_amt, units, chem_loc, vendor_name, cat_num, cas_num, req.params.id, req.user.id]
        );
        res.json(editChemical)
    } catch (err) {
        console.log(err);
    }
});

//delete a chemical
router.delete("/chemicals/:id", authorize, async (req, res) => {
    try {
        const deleteChemical = db.query("DELETE FROM chemicals WHERE chem_id = $1 AND user_id = $2;",
            [req.params.id, req.user.id]);
        res.json(deleteChemical)
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;