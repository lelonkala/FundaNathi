const jwt = require("jsonwebtoken");
const db = require("../config/db");

exports.register = async (req, res) => {
    const { username, password, name, surname, id_no } = req.body;
    const sql = "SELECT * FROM accounts WHERE username = $1";
    db.query(sql, [username], (err, results) => {
        if (results.rowCount == 0) {
            db.query(
                "INSERT INTO accounts (name,surname,username,password,id_no) VALUES ($1,$2,$3,$4,$5) RETURNING *",
                [name, surname, username, password, id_no],
                (db_err, results) => {
                    if (db_err) {
                        res.status(400).json({ message: db_err.message });
                    } else {
                        const token = jwt.sign(
                            {
                                username: results.rows[0].username,
                                name: results.rows[0].name,
                                surname: results.rows[0].surname
                            },
                            'jhsdu&hi$ljf@lkfjo',
                            {
                                algorithm: "HS256",
                                expiresIn: '24h',
                            })
                        res.status(201).json({
                            message: "Welcome! " + results.rows[0].name, token: token
                        });
                    }
                }
            );
        } else {
            res.status(400).json({ message: "Username already exists." });
        }
    });
};

exports.login = async (req, res) => {
    const { username, password } = req.body;
    const sql = "SELECT * FROM accounts WHERE username = $1 OR gametag = $1";
    db.query(sql, [username], (err, results) => {
        if (err) {
            res.status(400).json({ message: err.message });
        } else {
            if (results.rowCount == 0) {
                res
                    .status(400)
                    .json({ message: "User does not exist, Please register" });
            } else {
                if (password != results.rows[0].password) {
                    res
                        .status(400)
                        .json({ message: "Invalid Credentials, Please try again" });
                } else {
                    const token = jwt.sign(
                        {
                            username: results.rows[0].username,
                            name: results.rows[0].name,
                            surname: results.rows[0].surname,
                        },
                        'jhsdu&hi$ljf@lkfjo',
                        {
                            algorithm: "HS256",
                            expiresIn: '24h',
                        }
                    );
                    res.status(200).json({
                        message: "Welcome! " + results.rows[0].name,
                        token: token,
                    });
                }
            }
        }
    });
};


